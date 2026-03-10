import attachCopy from "../../utils/copy"
import { escapeHtml } from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function NotifyBar() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Notify Bar
      </h1>
      <p class="text-sm text-text-muted">
        Inline contextual system notification used inside workspace.
      </p>
    </div>

    ${componentClassSection()}
    ${variantSection("Info", ".erp-notify + .erp-notify-info")}
    ${variantSection("Success", ".erp-notify + .erp-notify-success")}
    ${variantSection("Warning", ".erp-notify + .erp-notify-warn")}
    ${variantSection("Danger", ".erp-notify + .erp-notify-danger")}
    ${structureSection()}
    ${guidelinesSection()}
  `

  attachCopy(el)

  /* previewTabs mount */
  const markup = `
<div class="erp-notify erp-notify-info">
  <span>Message text</span>
  <span class="erp-notify-close">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

  </span>
</div>
  `

  const mount = el.querySelector("#notify-preview")
  const preview = previewTabs(markup)

  mount.appendChild(preview)

  attachCloseBehavior(preview)
  attachCloseBehavior(el)

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

      <div class="border border-border rounded-sm p-4 bg-bg-panel space-y-4">

        <div class="flex items-center gap-6">
          <div class="font-mono text-lg font-semibold text-text-primary">
            <code>.erp-notify</code>
          </div>

          <button data-copy="erp-notify"
            class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
            Copy
          </button>
        </div>

      </div>
    </section>
  `
}

/* ============================= */
/* Variant Section */
/* ============================= */

function variantSection(title, classLine) {

  const variantClass = classLine.split("+")[1].trim()

  const markup = `
<div class="erp-notify ${variantClass.replace(".", "")}">
  <span>System notification message</span>
  <span class="erp-notify-close">✕</span>
</div>
  `

  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        ${title}
      </h2>

      <div class="border border-border rounded-sm p-4 bg-bg-panel flex items-center gap-6 mb-4">
        <div class="font-mono text-lg font-semibold text-text-primary">
          <code>${classLine}</code>
        </div>

        <button data-copy="${classLine.replace(/\s+/g, "")}"
          class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
          Copy
        </button>
      </div>

      <div class="border border-border rounded-sm p-6 bg-bg-panel mb-4">
        ${markup}
      </div>

      <div class="border border-border rounded-sm p-6 bg-bg-panel font-mono text-xs text-text-muted whitespace-pre overflow-x-auto">
${escapeHtml(markup.trim())}
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

      <div id="notify-preview"></div>

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
        <div>• Use inside workspace only</div>
        <div>• Not a floating alert (use Toast for that)</div>
        <div>• Keep message concise</div>
        <div>• Only one notify bar per logical context</div>
        <div>• Variants: info, warn, danger</div>
      </div>
    </section>
  `
}

/* ============================= */
/* Close Behaviour */
/* ============================= */

function attachCloseBehavior(root) {
  root.querySelectorAll(".erp-notify-close")
    .forEach(btn => {
      btn.addEventListener("click", () => {
        btn.closest(".erp-notify").remove()
      })
    })
}