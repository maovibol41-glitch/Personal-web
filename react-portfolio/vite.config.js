import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

/**
 * Dev-only workaround for a Vite 8 + React 19 interop bug.
 *
 * React 19 ships CommonJS only, and its entry files use the indirect form
 * `module.exports = require('./cjs/...')`. Vite 8's rolldown-based dep optimizer
 * cannot statically detect named exports in that pattern, so it emits optimized
 * deps with ONLY a `default` export:
 *
 *     export default require_client();
 *
 * Vite's dev import-analysis then rewrites `import { useState } from 'react'`
 * into `ns["useState"]`, which is undefined — every hook is undefined, React
 * never mounts, and the page renders blank.
 *
 * Aliasing React to the local ESM shims in `src/shims/` gives the optimizer real
 * named exports to detect, so the rewrite resolves correctly in dev.
 *
 * This is `apply: 'serve'` on purpose: the production build bundles React
 * normally and is unaffected by the optimizer, and bundling both the shim and
 * the real package double-instantiates React's internals and crashes at runtime.
 *
 * The shims themselves must resolve the REAL packages, so the alias is skipped
 * for anything already inside `src/shims/` (otherwise a shim would import itself
 * and fail with "Cannot access ... before initialization").
 */
const SHIMS_DIR = fileURLToPath(new URL('./src/shims/', import.meta.url)).replace(/\\/g, '/')
const shim = (name) => fileURLToPath(new URL(`./src/shims/${name}`, import.meta.url))

const SHIM_TARGETS = {
  react: shim('react.js'),
  'react-dom/client': shim('react-dom-client.js'),
  'react/jsx-runtime': shim('react-jsx-runtime.js'),
  'react/jsx-dev-runtime': shim('react-jsx-dev-runtime.js'),
}

function reactCjsShim() {
  return {
    name: 'react-cjs-shim',
    apply: 'serve',
    enforce: 'pre',
    resolveId(source, importer) {
      const target = SHIM_TARGETS[source]
      if (!target) return null
      // Let the shim files import the real packages.
      if (importer && importer.replace(/\\/g, '/').startsWith(SHIMS_DIR)) return null
      return target
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), reactCjsShim()],
})
