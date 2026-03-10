import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function Toast() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  /* ============================= */
  /* Header */
  /* ============================= */

  const header = document.createElement("div")
  header.innerHTML = `
    <h1 class="text-2xl font-semibold text-text-primary mb-2">
      Toast
    </h1>
    <p class="text-sm text-text-muted">
      Transient system-level notification used for save, draft, activate, and discard feedback.
      Appears bottom-right and auto-dismisses.
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
<div class="space-y-6">

  <div class="flex gap-4">
    <button class="erp-btn erp-btn-success" data-toast="success">
      Success
    </button>

    <button class="erp-btn erp-btn-secondary" data-toast="warn">
      Warn
    </button>

    <button class="erp-btn erp-btn-ghost" data-toast="info">
      Info
    </button>
  </div>

  <div class="border border-border rounded-sm bg-bg-section relative h-[120px]" data-toast-area></div>

</div>
  `.trim()

  const mount = el.querySelector("#toast-preview")
  const preview = previewTabs(markup)
  mount.appendChild(preview)

  attachToastLogic(preview)

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
        <code>.erp-toast</code>
      </div>

      <button
        data-copy="erp-toast"
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

    <div id="toast-preview"></div>
  `

  return section
}

/* ============================= */
/* Toast Behavior */
/* ============================= */

function attachToastLogic(root) {

  const toastArea = root.querySelector("[data-toast-area]")

  function createToast(message, variant) {

    const toast = document.createElement("div")
    toast.className = `erp-toast erp-toast-${variant} erp-toast-animate`

    const text = document.createElement("span")
    text.textContent = message

    const close = document.createElement("span")
    close.className = "erp-toast-close"
    close.textContent = "✕"

    close.onclick = () => toast.remove()

    toast.appendChild(text)
    toast.appendChild(close)

    toastArea.appendChild(toast)

    setTimeout(() => {
      toast.style.opacity = "0"
      toast.style.transition = "opacity 0.3s"
      setTimeout(() => toast.remove(), 300)
    }, 3000)

  }

  root.querySelector('[data-toast="success"]')
    ?.addEventListener("click", () =>
      createToast("Configuration saved successfully.", "success")
    )

  root.querySelector('[data-toast="warn"]')
    ?.addEventListener("click", () =>
      createToast("Draft saved. Not yet active.", "warn")
    )

  root.querySelector('[data-toast="info"]')
    ?.addEventListener("click", () =>
      createToast("Configuration activated.", "info")
    )

}

/* ============================= */

function guidelinesSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Usage Guidelines
    </h2>

    <div class="text-xs text-text-muted space-y-2 border border-border rounded-sm p-6 bg-bg-panel">
      <div>• Use for global system feedback only</div>
      <div>• Auto-dismiss after 3000ms</div>
      <div>• Appears bottom-right only</div>
      <div>• Do not use for inline form validation</div>
      <div>• Supports success, warn, and info variants only</div>
    </div>
  `

  return section
}