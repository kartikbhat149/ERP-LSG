import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function GlobalHeader() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Global Header
      </h1>
      <p class="text-sm text-text-muted">
        Top navigation bar containing branding, breadcrumb,
        tenant metadata, environment badge and user block.
      </p>
    </div>

    ${componentClassSection()}
    ${structureSection()}
    ${guidelinesSection()}
  `

  attachCopy(el)

  /* previewTabs mount */
  const markup = `
<header class="erp-global-header">

  <div class="erp-logo">
    NEXUS<span class="erp-logo-highlight">ERP</span>
    <span class="erp-logo-sub">ENTERPRISE</span>
  </div>

  <div class="erp-header-divider"></div>

  <div class="erp-breadcrumb">
    <span>Administration</span>
    <span class="erp-breadcrumb-sep">/</span>
    <span>System Configuration</span>
    <span class="erp-breadcrumb-sep">/</span>
    <span class="erp-breadcrumb-current">
      General Settings
    </span>
  </div>

  <div class="erp-header-spacer"></div>

  <div class="erp-header-meta">
    <span>
      TENANT:
      <strong>ACME-CORP-001</strong>
    </span>

    <span class="erp-env-badge">
      PRODUCTION
    </span>
  </div>

  <div class="erp-header-user">
    <div class="erp-avatar">
      AR
    </div>
    <span>A. Ramirez</span>
    <span class="erp-user-sep">|</span>
    <span>Sys Admin</span>
  </div>

</header>
  `

  const mount = el.querySelector("#globalheader-preview")
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
        Component Class
      </h2>

      <div class="border border-border rounded-sm p-4 bg-bg-panel flex items-center gap-6">
        <div class="font-mono text-lg font-semibold text-text-primary">
          <code>.erp-global-header</code>
        </div>

        <button data-copy="erp-global-header"
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

      <div id="globalheader-preview"></div>

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
        <div>• Always placed at the top of .erp-chrome</div>
        <div>• Height controlled via --header-h layout token</div>
        <div>• Breadcrumb reflects navigation hierarchy</div>
        <div>• Environment badge indicates deployment state</div>
        <div>• Spacer pushes meta and user block to right</div>
      </div>
    </section>
  `
}