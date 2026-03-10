import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function LoadingState() {

  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Loading State
      </h1>

      <p class="text-sm text-text-muted">
        Indicates background processing or pending actions. 
        The <code>.erp-loading</code> modifier disables interaction and visually signals busy state.
      </p>
    </div>

    ${buttonExample()}
    ${inputExample()}
    ${sectionExample()}
    ${guidelinesSection()}
  `

  attachCopy(el)

  mountPreviews(el)

  return el
}


/* ============================= */
/* Mount previewTabs */
/* ============================= */

function mountPreviews(root){

  const blocks = root.querySelectorAll("[data-preview]")

  blocks.forEach(block=>{
    const markup = block.dataset.preview
    block.appendChild(previewTabs(markup))
  })

}


/* ============================= */
/* Button Loading */
/* ============================= */

function buttonExample() {

const markup = `
<button class="erp-btn erp-btn-primary erp-loading">
  Saving...
</button>
`.trim()

return `
<section>

  <h2 class="text-lg font-medium text-text-primary mb-4">
    Button Loading
  </h2>

  <div data-preview='${markup.replace(/'/g,"&apos;")}'></div>

</section>
`
}


/* ============================= */
/* Input Loading */
/* ============================= */

function inputExample() {

const markup = `
<div class="erp-field erp-loading">

  <label class="erp-label">
    API Endpoint
  </label>

  <input
    type="text"
    class="erp-input"
    placeholder="Checking connection..."
  />

</div>
`.trim()

return `
<section>

  <h2 class="text-lg font-medium text-text-primary mb-4">
    Input Loading
  </h2>

  <div data-preview='${markup.replace(/'/g,"&apos;")}'></div>

</section>
`
}


/* ============================= */
/* Section Loading */
/* ============================= */

function sectionExample() {

const markup = `
<div class="erp-info-panel erp-loading">

  <div class="erp-info-panel-header">
    <span class="erp-info-panel-title">
      System Configuration
    </span>
  </div>

  <div class="erp-info-panel-body">
    Loading configuration data...
  </div>

</div>
`.trim()

return `
<section>

  <h2 class="text-lg font-medium text-text-primary mb-4">
    Section Loading
  </h2>

  <div data-preview='${markup.replace(/'/g,"&apos;")}'></div>

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

    <div>• Apply <code>.erp-loading</code> to the component container</div>

    <div>• Prevents user interaction while async operation is running</div>

    <div>• Replace action text with progressive wording (Saving..., Updating...)</div>

    <div>• Use on buttons, form fields, or configuration sections</div>

    <div>• Remove loading state immediately after operation completes</div>

  </div>

</section>
`
}