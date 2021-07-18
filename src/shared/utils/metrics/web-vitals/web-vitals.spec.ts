import initWebVitals from '@app/shared/utils/metrics/web-vitals'

describe('Web Vitals', function () {
  it('should load without errors', function () {
    initWebVitals(console.log)
  })
})
