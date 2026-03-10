import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function ConfigSection() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  /* Header */
  const header = document.createElement("div")
  header.innerHTML = `
    <h1 class="text-2xl font-semibold text-text-primary mb-2">
      Config Section
    </h1>
    <p class="text-sm text-text-muted">
      Structured configuration block containing header and form rows.
      Used inside main workspace area.
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
<div>

  <div class="erp-section-header px-5 pt-5">
    <div>
      <div class="erp-section-title">
        Company Profile
      </div>
      <div class="erp-section-subtitle">
        Primary identification and display settings
      </div>
    </div>
  </div>

  <div class="erp-form-row">
    <div class="erp-form-label-col">
      <div class="erp-form-label">Company Name</div>
      <div class="erp-form-label-sub">
        Display name used across platform
      </div>
    </div>

    <div class="erp-form-control-col">
      <input class="erp-input" value="Acme Corporation" />
    </div>
  </div>

  <div class="erp-form-row erp-form-row-alt">
    <div class="erp-form-label-col">
      <div class="erp-form-label">Fiscal Year Start</div>
    </div>

    <div class="erp-form-control-col">
      <select class="erp-select">
        <option>January</option>
        <option>April</option>
        <option>July</option>
      </select>
    </div>
  </div>

  <div class="erp-form-row">
    <div class="erp-form-label-col">
      <div class="erp-form-label">Timezone</div>
    </div>

    <div class="erp-form-control-col">
      <select class="erp-select">
        <option>UTC</option>
        <option>Asia/Kolkata</option>
        <option>America/New_York</option>
      </select>
    </div>
  </div>

</div>
  `.trim()

  const mount = el.querySelector("#config-section-preview")
  mount.appendChild(previewTabs(markup))

  return el
}

/* ============================= */
/* Component Class */
/* ============================= */

function componentClassSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Component Class
    </h2>

    <div class="border border-border rounded-sm p-4 bg-bg-panel flex items-center gap-6">
      <div class="font-mono text-lg font-semibold text-text-primary">
        <code>.erp-section-header</code>
      </div>

      <button data-copy="erp-section-header"
        class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
        Copy
      </button>
    </div>
  `
  return section
}

/* ============================= */
/* Structure */
/* ============================= */

function structureSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Structure
    </h2>

    <div id="config-section-preview"></div>
  `

  return section
}

/* ============================= */
/* Guidelines */
/* ============================= */

function guidelinesSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Usage Guidelines
    </h2>

    <div class="text-xs text-text-muted space-y-2 border border-border rounded-sm p-6 bg-bg-panel">
      <div>• Use section header once per configuration block</div>
      <div>• Maintain consistent 2-column grid via .erp-form-row</div>
      <div>• Alternate rows with .erp-form-row-alt</div>
      <div>• Avoid wrapping section in additional card styles</div>
      <div>• Section should remain visually flat as per master</div>
    </div>
  `
  return section
}