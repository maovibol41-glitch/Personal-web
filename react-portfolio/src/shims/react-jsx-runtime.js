// ESM shim for `react/jsx-runtime` — see vite.config.js for the rationale.
import jsxRuntime from 'react/jsx-runtime'

export default jsxRuntime

export const { Fragment, jsx, jsxs } = jsxRuntime
