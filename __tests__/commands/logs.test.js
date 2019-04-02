const sinon = require('sinon')
const logs = require('./../../src/commands/logs')

describe('logs', () => {
  it('displays help', async () => {
    sinon.stub(process, 'exit')
    await logs(['--help'])
    process.exit.restore()
  })
})
