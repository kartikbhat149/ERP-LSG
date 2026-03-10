import attachCopy from "../../utils/copy"
import { escapeHtml } from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function Breadcrumb() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  /* Header */
  const header = document.createElement("div")
  header.innerHTML = `
    <h1 class="text-2xl font-semibold text-text-primary mb-2">
      Breadcrumb
    </h1>
    <p class="text-sm text-text-muted">
      Hierarchical navigation indicator used inside Global Header.
    </p>
  `
  el.appendChild(header)

  el.appendChild(componentClassSection())
  el.appendChild(structureSection())
  el.appendChild(guidelinesSection())

  attachCopy(el)

  /* previewTabs mount */
  const markup = `
<nav class="erp-breadcrumb">
  <span class="erp-breadcrumb-item">Administration</span>
  <span class="erp-breadcrumb-sep">/</span>
  <span class="erp-breadcrumb-item">System Configuration</span>
  <span class="erp-breadcrumb-sep">/</span>
  <span class="erp-breadcrumb-item erp-breadcrumb-current">
    General Settings
  </span>
</nav>
  `.trim()

  const mount = el.querySelector("#breadcrumb-preview")
  mount.appendChild(previewTabs(markup))

  return el
}

/* ============================= */

function componentClassSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Component Class
    </h2>

    <div class="border border-border rounded-sm p-4 bg-bg-panel flex items-center gap-6">
      <div class="font-mono text-lg font-semibold text-text-primary">
        <code>.erp-breadcrumb</code>
      </div>

      <button data-copy="erp-breadcrumb"
        class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
        Copy
      </button>
    </div>
  `

  return section
}

/* ============================= */

function structureSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Structure
    </h2>

    <div id="breadcrumb-preview"></div>
  `

  return section
}

/* ============================= */

function guidelinesSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Usage Guidelines
    </h2>

    <div class="text-xs text-text-muted space-y-2 border border-border rounded-sm p-6 bg-bg-panel">
      <div>• Used inside Global Header only</div>
      <div>• Do not apply hover styles unless master supports it</div>
      <div>• Current item uses .erp-breadcrumb-current</div>
      <div>• Keep hierarchy shallow (max 3–4 levels)</div>
    </div>
  `

  return section
}