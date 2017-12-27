import { assert } from "chai"
import {
  bindWith,
  bindMaybe,
  bindError,
  bindPromise,
  returnPromise
} from "../functional/pipeline"

describe("functional tests", () => {
  describe("bindMaybe", () => {
    it('binds with bindMaybe', () => {
      const result = bindWith(bindMaybe, [
        x => x + 1,
        x => x + 2,
        x => x + 3
      ])("hello")
      assert.isTrue(result === "hello123")
    })

    it('binds with bindMaybe testing null', () => {
      const result = bindWith(bindMaybe, [
        x => x + 1,
        x => null,
        x => x + 3
      ])("hello")
      assert.isNull(result)
    })
  })

  describe("bindError", () => {
    it('binds with bindError', () => {
      const actual = bindWith(bindError, [
        x => x + 5,
        x => { throw("Failed") },
        x => x + 10
      ])("hi")
      assert.instanceOf(actual, Error)
    })
  })

  describe("asynchronous bind", () => {
    const actual = bindWith(bindPromise, [
      x => returnPromise(x + "1"),
      x => returnPromise(x + "2"),
      x => returnPromise(x + "3"),
      x => returnPromise(x + "4")
    ])(returnPromise("0"))
  })
})
