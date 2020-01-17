/* eslint-disable no-undef */

// A simple test to verify a visible window is opened with a title
const Application = require('spectron').Application
const assert      = require('assert')


describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1)
    })
  })
})


describe('Application launch', function () {
  this.timeout(10000)

  this.beforeAll(() => {
    this.app = new Application({
      path: `${__dirname}/../dist/mac/electron-webpack-react-typescript-quick-start.app/Contents/MacOS/electron-webpack-react-typescript-quick-start`
    })
    return this.app.start()
  })

  this.afterAll(() => {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
    return false
  })

  it('shows an initial window', () => {
    return this.app.client.getWindowCount().then(count => {
      assert.equal(count, 1)
      // Please note that getWindowCount() will return 2 if `dev tools` are opened.
      // assert.equal(count, 2)
    })
  })

  it('an initial window is visible', () => {
    return this.app.browserWindow.isVisible().then(visible => {
      assert.equal(visible, true)
    })
  })

  it('has a correct title', () => {
    return this.app.client.getTitle().then(title => {
      assert.equal(title, 'MapANI v2')
    })
  })
})
