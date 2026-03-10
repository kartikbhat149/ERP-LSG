import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function ValidationState() {

  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Validation State
      </h1>

      <p class="text-sm text-text-muted">
        Displays validation feedback for form controls using the ERP validation pattern.
        The <code>.erp-field-error</code> modifier applies error styling to the field container.
      </p>
    </div>

    ${fieldValidation()}
    ${inlineValidation()}
    ${selectValidation()}
    ${guidelinesSection()}
  `

  attachCopy(el)

  mountPreviews(el)

  return el
}


/* ============================= */
/* Mount previews */
/* ============================= */

function mountPreviews(root){

  const blocks = root.querySelectorAll("[data-preview]")

  blocks.forEach(block=>{
    const markup = block.dataset.preview
    block.appendChild(previewTabs(markup))
  })

}


/* ============================= */
/* Standard Field Validation */
/* ============================= */

function fieldValidation() {

const markup = `
<div class="erp-field erp-field-error">

  <label class="erp-label">
    API Endpoint
  </label>

  <div class="erp-help">
    Endpoint used for webhook delivery
  </div>

  <input
    type="text"
    class="erp-input"
    placeholder="https://api.example.com"
    value="invalid-url"
  />

  <div class="erp-help erp-help-danger">
    Invalid endpoint URL format
  </div>

</div>
`.trim()

return `
<section>

  <h2 class="text-lg font-medium text-text-primary mb-4">
    Field Validation
  </h2>

  <div data-preview='${markup.replace(/'/g,"&apos;")}'></div>

</section>
`
}


/* ============================= */
/* Inline Field Group Validation */
/* ============================= */

function inlineValidation() {

const markup = `
<div class="erp-field">

  <label class="erp-label">
    Server Address
  </label>

  <div class="erp-help">
    Enter IP address and port for the server
  </div>

  <div class="erp-form-inline erp-field-error">

    <input class="erp-input w-32" value="192.168.0.1">

    <span class="text-text-muted">:</span>

    <input class="erp-input w-24" value="99999">

  </div>

  <div class="erp-help erp-help-danger">
    Port must be between 1 and 65535
  </div>

</div>
`.trim()

return `
<section>

  <h2 class="text-lg font-medium text-text-primary mb-4">
    Inline Group Validation
  </h2>

  <div data-preview='${markup.replace(/'/g,"&apos;")}'></div>

</section>
`
}


/* ============================= */
/* Select Validation */
/* ============================= */

function selectValidation() {

const markup = `
<div class="erp-field erp-field-error">

  <label class="erp-label">
    Authentication Method
  </label>

  <div class="erp-help">
    Select authentication type used for API requests
  </div>

  <select class="erp-select">
    <option>Select authentication method</option>
  </select>

  <div class="erp-help erp-help-danger">
    Authentication method is required
  </div>

</div>
`.trim()

return `
<section>

  <h2 class="text-lg font-medium text-text-primary mb-4">
    Select Validation
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

    <div>• Apply <code>.erp-field-error</code> on the field container</div>

    <div>• Do not apply error styling directly on the input element</div>

    <div>• Error message should use <code>.erp-help-danger</code></div>

    <div>• Only one validation message should appear per field</div>

    <div>• Inline groups should apply the error modifier on the group container</div>

    <div>• Remove validation state immediately after correction</div>

  </div>

</section>
`
}