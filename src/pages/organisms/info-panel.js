import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function InfoPanel() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  const header = document.createElement("div")
  header.innerHTML = `
    <h1 class="text-2xl font-semibold text-text-primary mb-2">
      Info Panel
    </h1>
    <p class="text-sm text-text-muted">
      Contextual guidance container used inside configuration sections.
    </p>
  `
  el.appendChild(header)

  el.appendChild(componentClassSection())
  el.appendChild(structureSection())
  el.appendChild(guidelinesSection())

  attachCopy(el)

  /* ============================= */
  /* Preview Mount */
  /* ============================= */

  const markup = `
<div class="erp-info-panel">

  <div class="erp-info-panel-header">
    <span class="erp-status-dot erp-status-dot-accent"></span>
    <span class="erp-info-panel-title">
      Integration Requirements
    </span>
  </div>

  <div class="erp-info-panel-body">
    Before enabling external integrations, ensure API credentials
    and webhook endpoints are configured correctly.
  </div>

  <div class="erp-info-panel-actions">
    <a class="erp-link">View Documentation</a>
  </div>

</div>
  `.trim()

  const mount = el.querySelector("#info-panel-preview")
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
        <code>.erp-info-panel</code>
      </div>

      <button data-copy="erp-info-panel"
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

    <div id="info-panel-preview"></div>
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
      <div>• Use for contextual guidance inside configuration pages</div>
      <div>• Do not use as toast or alert</div>
      <div>• Keep content concise</div>
      <div>• Reuse existing atoms (status-dot, link)</div>
      <div>• Avoid strong color backgrounds</div>
    </div>
  `
  return section
}