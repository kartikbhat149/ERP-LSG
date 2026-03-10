import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function Tooltip() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  const header = document.createElement("div")
  header.innerHTML = `
    <h1 class="text-2xl font-semibold text-text-primary mb-2">
      Tooltip
    </h1>
    <p class="text-sm text-text-muted">
      Compact contextual hint displayed on hover.
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
<div class="erp-tooltip">
  <span class="erp-link">
    Hover me
  </span>

  <div class="erp-tooltip-content">
    This action requires administrator privileges.
  </div>
</div>
  `.trim()

  const mount = el.querySelector("#tooltip-preview")
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
        <code>.erp-tooltip</code>
      </div>

      <button data-copy="erp-tooltip"
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

    <div id="tooltip-preview" class="flex justify-center p-10"></div>
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
      <div>• Use for short contextual hints</div>
      <div>• Keep message under one sentence</div>
      <div>• Avoid long instructional content</div>
      <div>• Do not place interactive elements inside tooltip</div>
      <div>• Use near icons or small actions</div>
    </div>
  `
  return section
}