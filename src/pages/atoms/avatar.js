import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function Avatar() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Avatar
      </h1>
      <p class="text-sm text-text-muted">
        ERP user avatar representation (image or initials).
      </p>
    </div>

    ${componentClassSection()}
    ${structuralSection()}
    ${statesSection()}
    ${guidelinesSection()}
  `

  attachCopy(el)

  /* previewTabs mount */
  const markup = `
<div class="flex items-center gap-4">
  <div class="erp-avatar">AB</div>

  <div class="erp-avatar erp-avatar-sm">SM</div>

  <div class="erp-avatar erp-avatar-lg">LG</div>

  <div class="erp-avatar"><img src="https://i.pravatar.cc/40" class="erp-avatar-img" /></div>
</div>
  `

  const mount = el.querySelector("#avatar-preview")
  mount.appendChild(previewTabs(markup))

  return el
}

/* ========================================= */
/* Component Classes */
/* ========================================= */

function componentClassSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Component Classes
      </h2>

      ${classRow(
        ".erp-avatar",
        `<div class="erp-avatar">AB</div>`
      )}

      ${classRow(
        ".erp-avatar-img",
        `<div class="erp-avatar">
           <img src="https://i.pravatar.cc/40" class="erp-avatar-img" />
         </div>`
      )}

      ${classRow(
        ".erp-avatar-sm",
        `<div class="erp-avatar erp-avatar-sm">AB</div>`
      )}

      ${classRow(
        ".erp-avatar-lg",
        `<div class="erp-avatar erp-avatar-lg">AB</div>`
      )}

    </section>
  `
}

function classRow(className, demoMarkup) {
  return `
    <div class="border border-border rounded-sm p-4 bg-bg-panel space-y-4 mb-4">

      <div class="flex items-center gap-6">
        <div class="font-mono text-lg font-semibold text-text-primary">
          <code>${className}</code>
        </div>

        <button data-copy="${className.replace('.', '')}"
          class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
          Copy
        </button>
      </div>

      <div class="flex items-center gap-4">
        ${demoMarkup}
      </div>

    </div>
  `
}

/* ========================================= */
/* Structural Variant */
/* ========================================= */

function structuralSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Avatar Variants
      </h2>

      <div id="avatar-preview"></div>

    </section>
  `
}

/* ========================================= */
/* States */
/* ========================================= */

function statesSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        States
      </h2>

      <div class="border border-border rounded-sm p-6 bg-bg-panel">
        <span class="text-text-muted text-xs">
          Avatar has no interactive states in ERP.
        </span>
      </div>
    </section>
  `
}

/* ========================================= */
/* Guidelines */
/* ========================================= */

function guidelinesSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Usage Guidelines
      </h2>

      <div class="text-xs text-text-muted space-y-2 border border-border rounded-sm p-6 bg-bg-panel">
        <div>• Use initials fallback if image not available</div>
        <div>• Maintain circular shape (rounded-full)</div>
        <div>• Default size is 32px</div>
        <div>• Avoid semantic color variants unless defined in Foundations</div>
      </div>
    </section>
  `
}

function escapeHtml(str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;")
}