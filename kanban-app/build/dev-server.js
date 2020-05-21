const bodyParser = require('body-parser')

module.exports = app => {
  app.use(bodyParser.json())

  const users = {
    'foo@example.com': {
      password: 'password',
      userId: 1,
      token: 'rtoqarfogq32RQE'
    }
  }

  app.post('/auth/login', (req, res) => {
    const { email, password } = req.body
    const user = users[email]
    if (user) {
      if (user.password !== password) {
        res.status(401).json({ messsage: 'login failed' })
      } else {
        res.json({ userId: user.userId, token: user.token })
      }
    } else {
      res.status(404).json({ message: 'not found' })
    }
  })
}
