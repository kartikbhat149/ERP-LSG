import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function ModalDialog() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  const header = document.createElement("div")
  header.innerHTML = `
    <h1 class="text-2xl font-semibold text-text-primary mb-2">
      Modal Dialog
    </h1>
    <p class="text-sm text-text-muted">
      Overlay dialog used for confirmation and critical actions.
      Designed to match ERP density and structural rhythm.
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
<button class="erp-btn erp-btn-primary" data-open-modal>
  Open Modal
</button>

<div class="erp-modal-overlay" data-modal hidden>
  <div class="erp-modal">

    <div class="erp-modal-header">
      <span class="erp-modal-title">
        Activate Configuration
      </span>
    </div>

    <div class="erp-modal-body">
      Changes will propagate to all subsidiaries and active sessions immediately.
      This action cannot be undone.
    </div>

    <div class="erp-modal-footer">
      <button class="erp-btn erp-btn-ghost" data-cancel>
        Cancel
      </button>
      <button class="erp-btn erp-btn-primary" data-confirm>
        Confirm
      </button>
    </div>

  </div>
</div>
  `.trim()

  const mount = el.querySelector("#modal-preview")
  const preview = previewTabs(markup)
  mount.appendChild(preview)

  attachModalLogic(preview)

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
        <code>.erp-modal</code>
      </div>

      <button data-copy="erp-modal"
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

    <div id="modal-preview"></div>
  `

  return section
}

/* ============================= */
/* Modal Behavior */
/* ============================= */

function attachModalLogic(root) {

  const openBtn = root.querySelector("[data-open-modal]")
  const modal = root.querySelector("[data-modal]")
  const cancelBtn = root.querySelector("[data-cancel]")
  const confirmBtn = root.querySelector("[data-confirm]")

  function openModal() {
    modal.hidden = false
    document.addEventListener("keydown", escHandler)
  }

  function closeModal() {
    modal.hidden = true
    document.removeEventListener("keydown", escHandler)
  }

  function escHandler(e) {
    if (e.key === "Escape") closeModal()
  }

  openBtn?.addEventListener("click", openModal)
  cancelBtn?.addEventListener("click", closeModal)
  confirmBtn?.addEventListener("click", closeModal)

}

/* ============================= */

function guidelinesSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Usage Guidelines
    </h2>

    <div class="text-xs text-text-muted space-y-2 border border-border rounded-sm p-6 bg-bg-panel">
      <div>• Use for confirmation and critical actions</div>
      <div>• Keep content concise and action-oriented</div>
      <div>• Always provide Cancel option</div>
      <div>• Reuse existing button atoms</div>
      <div>• Avoid excessive content inside modal</div>
    </div>
  `
  return section
}