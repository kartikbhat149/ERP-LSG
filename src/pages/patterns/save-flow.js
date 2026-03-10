import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function SaveFlow() {

  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Save Flow
      </h1>

      <p class="text-sm text-text-muted">
        Standard ERP configuration save workflow with draft, discard, and activate actions.
      </p>
    </div>

    ${structureSection()}
  `

  attachCopy(el)

  /* ============================= */
  /* Preview Mount */
  /* ============================= */

  const markup = `
<div class="erp-action-bar">

  <span class="erp-action-bar-title">
    General Settings
  </span>

  <span class="erp-action-bar-subtitle">
    Tenant configuration
  </span>

  <span class="erp-unsaved">
    <span class="erp-unsaved-dot"></span>
    <span>Unsaved Changes</span>
  </span>

  <button class="erp-btn erp-btn-ghost">
    Discard
  </button>

  <button class="erp-btn erp-btn-secondary">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
      <path d="M10 2H3L1 4v6a1 1 0 001 1h9a1 1 0 001-1V3a1 1 0 00-1-1zM6 9a2 2 0 110-4 2 2 0 010 4z"/>
    </svg>
    Save Draft
  </button>

  <button class="erp-btn erp-btn-primary">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
      <path d="M10 2H3L1 4v6a1 1 0 001 1h9a1 1 0 001-1V3a1 1 0 00-1-1zM6 9a2 2 0 110-4 2 2 0 010 4z"/>
    </svg>
    Save & Apply
  </button>

  <button class="erp-btn erp-btn-success">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
      <path d="M2 6l3 3 5-5"/>
    </svg>
    Activate
  </button>

</div>
  `.trim()

  const mount = el.querySelector("#saveflow-preview")

  mount.appendChild(previewTabs(markup))

  return el
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

    <div id="saveflow-preview" class="p-6"></div>

  </section>
  `
}