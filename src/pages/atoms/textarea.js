import attachCopy  from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function Textarea() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Textarea
      </h1>
      <p class="text-sm text-text-muted">
        Multi-line ERP input (same visual system as Input).
      </p>
    </div>

    ${componentClassSection()}
    ${usageSection()}
    ${statesSection()}
    ${guidelinesSection()}
  `

  attachCopy(el)

  /* previewTabs mount */
  const markup = `
<label class="text-xs text-text-label">
  Description
</label>

<textarea class="erp-textarea" rows="4" placeholder="Enter description"></textarea>
  `

  const mount = el.querySelector("#textarea-preview")
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

      <div class="border border-border rounded-sm p-4 bg-bg-panel flex items-start gap-6">

        <div class="font-mono text-lg font-semibold text-text-primary">
          <code>.erp-textarea</code>
        </div>

        <textarea class="erp-textarea max-w-md" rows="3" placeholder="Demo textarea"></textarea>

        <button data-copy="erp-textarea"
          class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
          Copy
        </button>

      </div>
    </section>
  `
}

/* ============================= */
/* HTML Usage */
/* ============================= */

function usageSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        HTML Usage
      </h2>

      <div id="textarea-preview"></div>

    </section>
  `
}

/* ============================= */
/* States */
/* ============================= */

function statesSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        States
      </h2>

      <div class="border border-border rounded-sm p-6 bg-bg-panel space-y-6 max-w-md">

        <div>
          <div class="text-xs text-text-muted mb-1">Default</div>
          <textarea class="erp-textarea" rows="3"></textarea>
        </div>

        <div>
          <div class="text-xs text-text-muted mb-1">Focus (click inside)</div>
          <textarea class="erp-textarea" rows="3"></textarea>
        </div>

        <div>
          <div class="text-xs text-text-muted mb-1">Disabled</div>
          <textarea class="erp-textarea" rows="3" disabled></textarea>
        </div>

      </div>
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
        <div>• Use for multi-line content</div>
        <div>• Keep vertical resize only</div>
        <div>• Do not add shadow</div>
        <div>• Do not increase radius</div>
      </div>
    </section>
  `
}