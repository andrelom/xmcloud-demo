import type { NextApiRequest, NextApiResponse } from 'next'

import { webcrypto } from 'crypto'

export type Handlers = {
  get?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
  post?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
  put?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
  delete?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
}

export function createHandler(handlers: Handlers) {
  return async (req: NextApiRequest, res: NextApiResponse<any>) => {
    try {
      if (req.method === 'GET' && !!handlers.get) {
        await handlers.get(req, res)
      } else if (req.method === 'POST' && !!handlers.post) {
        await handlers.post(req, res)
      } else if (req.method === 'PUT' && !!handlers.put) {
        await handlers.put(req, res)
      } else if (req.method === 'DELETE' && !!handlers.delete) {
        await handlers.delete(req, res)
      } else {
        res.status(405).json({ ok: false, error: 'MethodNotAllowed' })
      }
    } catch (error) {
      const traceId = webcrypto.randomUUID()

      console.log(error, `Trace ID: ${traceId}`)

      res.status(500).json({ ok: false, error: 'InternalServerError', metadata: { traceId } })
    }
  }
}
