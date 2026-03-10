import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function ChromeLayout() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Chrome Layout
      </h1>
      <p class="text-sm text-text-muted">
        Top-level ERP application shell defining header and sidebar layout structure.
      </p>
    </div>

    ${componentClassSection()}
    ${structureSection()}
    ${guidelinesSection()}
  `

  attachCopy(el)

  /* previewTabs mount */
  const markup = `
<div class="erp-chrome">

  <header class="erp-global-header">
    <!-- Global Header -->
  </header>

  <div class="erp-body-row">

    <aside class="erp-sidebar">
      <!-- Sidebar Navigation -->
    </aside>

    <div class="erp-main-area">
      <!-- Action Bar -->
      <!-- Workspace Content -->
    </div>

  </div>

</div>
  `

  const mount = el.querySelector("#chrome-preview")
  mount.appendChild(previewTabs(markup))

  return el
}

/* ============================= */
/* Component Class */
/* ============================= */

function componentClassSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Component Classes
      </h2>

      <div class="border border-border rounded-sm p-4 bg-bg-panel flex items-center gap-6">
        <div class="font-mono text-lg font-semibold text-text-primary space-x-6">
          <code>.erp-chrome</code>
          <code>.erp-body-row</code>
          <code>.erp-main-area</code>
        </div>

        <button data-copy="erp-chrome erp-body-row erp-main-area"
          class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
          Copy
        </button>
      </div>
    </section>
  `
}

/* ============================= */
/* Structure */
/* ============================= */

function structureSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Structure
      </h2>

      <div id="chrome-preview"></div>

    </section>
  `
}

/* ============================= */
/* Guidelines */
/* ============================= */

function guidelinesSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Usage Guidelines
      </h2>

      <div class="text-xs text-text-muted space-y-2 border border-border rounded-sm p-6 bg-bg-panel">
        <div>• Use once at application root level</div>
        <div>• Never nest inside another layout container</div>
        <div>• Do not apply padding directly on chrome container</div>
        <div>• Sidebar width is controlled by Sidebar organism</div>
        <div>• Main area handles Action Bar and Workspace stacking</div>
      </div>
    </section>
  `
}