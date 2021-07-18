import { Translations } from './translations'
import { i18n } from './i18n'

describe('i18n', () => {
  it('should initiate i18n', async () => {
    const t = await i18n
    expect(t).toBeDefined()
  })

  it('should initiate i18n with translations', async () => {
    const t = await i18n

    expect(t(Translations.profile.jobTitle).length).toBeGreaterThan(0)
  })
})
