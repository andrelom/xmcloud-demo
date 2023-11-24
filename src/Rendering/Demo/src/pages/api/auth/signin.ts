import nookies from 'nookies'
import { createUtcDate } from '@/core/dates'
import { createHandler } from '@/core/api'

function getSessionTimeout() {
  const timeout = createUtcDate()
  const seconds = parseInt(process.env.NEXT_REVALIDATE || '60')

  // Set the session timeout (in seconds).
  timeout.setSeconds(timeout.getSeconds() + seconds)

  return timeout
}

export default createHandler({
  async post(req, res) {
    const data = {
      username: req.body?.username,
    }

    const name = 'next.session.user'
    const value = data.username.trim()
    const expires = getSessionTimeout()

    nookies.set({ res }, name, value, {
      path: '/',
      expires: expires,
    })

    res.status(200).json({ ok: true })
  },
})
