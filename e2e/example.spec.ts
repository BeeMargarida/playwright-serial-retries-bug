import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'serial' })

test.describe('test suite', () => {
  test('first', ({ page }, testInfo) => {
    if (testInfo.retry === 0) {
      expect(true).toEqual(true)
    }
    else {
      // fails
      expect(true).toEqual(false)
    }
  })
  test('second', ({ page }, testInfo) => {
    if (testInfo.retry === 0) {
      // fails
      expect(true).toEqual(false)
    }
    else {
      expect(true).toEqual(true)
    }
  })
  test('third', () => {
    expect(true).toEqual(true)
  })
  test('fourth', () => {
    expect(true).toEqual(true)
  })
})
