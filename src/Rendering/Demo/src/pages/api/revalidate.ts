import { createHandler } from '@/core/api'

export default createHandler({
  async post(req, res) {
    const header = 'X-Revalidate-Secret'.toLowerCase()
    const secret = req.headers[header]

    if (secret !== process.env.NEXT_REVALIDATE_SECRET) {
      return res.status(401).json({ ok: false, error: 'Unauthorized' })
    }

    const data = {
      route: req.body?.route,
    }

    if (data.route) {
      await res.revalidate(data.route)
    }

    res.status(200).json({ ok: true })
  },
})
