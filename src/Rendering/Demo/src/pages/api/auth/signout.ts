import { destroyCookie } from 'nookies'
import { createHandler } from '@/core/api'

export default createHandler({
  async post(_req, res) {
    const name = 'next.session.user'

    destroyCookie({ res }, name)

    res.status(200).json({ ok: true })
  },
})
