import Result from '@/core/Result'
import { getHTTPStatusByCode } from '@/core/http-status-codes'

export type HTTPClientOptions = Omit<RequestInit, 'method' | 'body'> & {
  json?: boolean
  authorization?: string
}

export class HTTPClient {
  async get<T = any>(url: URL, options: HTTPClientOptions = {}): Promise<Result<T>> {
    this.setDefaults(options)

    return this.toResult<T>(
      await fetch(url, {
        ...options,
        method: 'GET',
        headers: this.setHeaders(options),
      }),
    )
  }

  async post<T = any>(url: URL, data: any, options: HTTPClientOptions = {}): Promise<Result<T>> {
    this.setDefaults(options)

    return this.toResult<T>(
      await fetch(url, {
        ...options,
        method: 'POST',
        body: options.json ? JSON.stringify(data) : data,
        headers: this.setHeaders(options),
      }),
    )
  }

  async put<T = any>(url: URL, data: any, options: HTTPClientOptions = {}): Promise<Result<T>> {
    this.setDefaults(options)

    return this.toResult<T>(
      await fetch(url, {
        ...options,
        method: 'PUT',
        body: options.json ? JSON.stringify(data) : data,
        headers: this.setHeaders(options),
      }),
    )
  }

  async delete<T = any>(url: URL, options: HTTPClientOptions = {}): Promise<Result<T>> {
    this.setDefaults(options)

    return this.toResult<T>(
      await fetch(url, {
        ...options,
        method: 'DELETE',
        body: options.json ? JSON.stringify({}) : undefined,
        headers: this.setHeaders(options),
      }),
    )
  }

  private setDefaults(options: HTTPClientOptions) {
    if (typeof options.json === 'undefined') {
      options.json = true
    }
  }

  private setHeaders(options: HTTPClientOptions) {
    const headers: Record<string, string> = {}

    if (options.json) {
      headers[`content-type`] = 'application/json'
    }

    if (options.authorization) {
      headers[`authorization`] = options.authorization
    }

    if (options.headers) {
      for (const [key, value] of Object.entries(options.headers)) {
        headers[key.toLowerCase()] = value
      }
    }

    return headers
  }

  private async parse(response: Response) {
    const text = await response.text()
    const type = response.headers.get('content-type')?.toLowerCase()

    if (!text) {
      return { ok: true }
    }

    if (!type?.toLowerCase().includes('application/json')) {
      return { ok: true, value: text }
    }

    try {
      return { ok: true, value: JSON.parse(text) }
    } catch {
      return { ok: false, value: 'Invalid JSON Input' }
    }
  }

  private async toResult<T = any>(response: Response) {
    const parsed = await this.parse(response)

    if (response.ok && parsed.ok && Result.is(parsed.value)) {
      return Result.from<T>(parsed.value, true)
    }

    if (response.ok && parsed.ok) {
      return Result.success<T>(parsed.value)
    }

    let result: Result<T>

    if (Result.is(parsed.value)) {
      result = Result.from<T>(parsed.value)
    } else {
      result = Result.fail(getHTTPStatusByCode(response.status), { message: parsed.value })
    }

    if (result.metadata) {
      result.metadata.status = response.status
    } else {
      result.metadata = { status: response.status }
    }

    return result
  }
}

const http = new HTTPClient()

export default http
