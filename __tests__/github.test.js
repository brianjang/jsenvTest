const GitHub = require('../lib/github')

describe('Integration with GitHub API', () => {  
  let github

  // ACCESS_TOKEN=4dd789a899240fb46dceac3788719b252fd253f9

  beforeAll(() => {
    github = new GitHub({
      // accessToken: process.env.ACCESS_TOKEN,
      accessToken: '87e3d2ead9a424f71fec6e56860bf311d32de266',
      baseURL: 'https://api.github.com',
    })
  })

  test('Get a user', async () => {
    const res = await github.getUser('brianjang')
    expect(res).toEqual(
      expect.objectContaining({
        login: 'brianjang',
      })
    )
  })
})