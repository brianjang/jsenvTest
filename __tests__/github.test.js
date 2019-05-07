const GitHub = require('../lib/github')

describe('Integration with GitHub API', () => {  
  let github

  // ACCESS_TOKEN=4dd789a899240fb46dceac3788719b252fd253f9

  beforeAll(() => {
    github = new GitHub({
      // accessToken: process.env.ACCESS_TOKEN,
      accessToken: 'b4d9ab2b4ca76b188ed7ca8449d462f44dac9c66',
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