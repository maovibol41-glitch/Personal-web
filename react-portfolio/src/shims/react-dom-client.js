// ESM shim for `react-dom/client` — see vite.config.js for the rationale.
import ReactDOMClient from 'react-dom/client'

export default ReactDOMClient

export const { createRoot, hydrateRoot, version } = ReactDOMClient
