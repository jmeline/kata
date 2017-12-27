// pipeline oriented programming
// https://adambard.com/blog/javascript-design-pattern-binding-functions/
//

const bindMaybe = (mx, f) =>
  (mx !== null && mx !== undefined)
    ? f(mx)
    : null

const bindError = (mx, f) => {
  if (mx instanceof Error) {
    return mx
  }

  try {
    return f(mx)
  } catch (e) {
    return (e instanceof Error) ? e : Error(e)
  }
}

// asynchonity

const bindPromise = (mx, f) => mx.then(f)

const returnPromise = x => Promise.resolve(x)

const bindWith = (bindFn, fns) => val => fns.reduce(bindFn, val)

export { bindWith, bindMaybe, bindError, bindPromise, returnPromise }

