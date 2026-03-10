import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function EmptyState() {

  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Empty State
      </h1>

      <p class="text-sm text-text-muted">
        Empty states communicate that no data or configuration exists yet
        and guide users toward the next meaningful action.
      </p>
    </div>

    ${tableEmpty()}
    ${configurationEmpty()}
    ${moduleEmpty()}
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
/* Empty Table / List */
/* ============================= */

function tableEmpty() {

const markup = `
<table class="erp-mini-table max-w-xl">

  <thead>
    <tr>
      <th>Integration</th>
      <th>Type</th>
      <th>Status</th>
      <th>Last Sync</th>
      <th>Auth Method</th>
      <th></th>
    </tr>
  </thead>

  <tbody>

    <tr>

      <td colspan="6" class="py-12">

        <div class="flex flex-col items-center text-center gap-3">

          <div class="text-text-muted">
            No integrations configured yet
          </div>

          <button class="erp-btn erp-btn-primary">
            Connect Integration
          </button>

        </div>

      </td>

    </tr>

  </tbody>

</table>
`.trim()

return `
<section>

<h2 class="text-lg font-medium text-text-primary mb-4">
Empty Table / List
</h2>

<div data-preview='${markup.replace(/'/g,"&apos;")}'></div>

</section>
`
}


/* ============================= */
/* Unconfigured Feature */
/* ============================= */

function configurationEmpty() {

const markup = `
<div class="erp-info-panel max-w-lg">

  <div class="erp-info-panel-header">
    <span class="erp-info-panel-title">
      SMTP Configuration
    </span>
  </div>

  <div class="erp-info-panel-body">

    <div class="text-text-muted mb-4">
      Email delivery has not been configured.
    </div>

    <button class="erp-btn erp-btn-primary">
      Configure SMTP
    </button>

  </div>

</div>
`.trim()

return `
<section>

<h2 class="text-lg font-medium text-text-primary mb-4">
Unconfigured Feature
</h2>

<div data-preview='${markup.replace(/'/g,"&apos;")}'></div>

</section>
`
}


/* ============================= */
/* Disabled Module */
/* ============================= */

function moduleEmpty() {

const markup = `
<div class="erp-info-panel max-w-lg">

  <div class="erp-info-panel-header">
    <span class="erp-info-panel-title">
      Billing Module
    </span>
  </div>

  <div class="erp-info-panel-body flex items-center justify-between">

    <div class="text-text-muted">
      Billing module is currently disabled.
    </div>

    <button class="erp-btn erp-btn-success">
      Activate Module
    </button>

  </div>

</div>
`.trim()

return `
<section>

<h2 class="text-lg font-medium text-text-primary mb-4">
Disabled Module
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

<div>• Empty states should explain why content is missing</div>

<div>• Provide a clear primary action whenever possible</div>

<div>• Use table empty rows for list-based modules</div>

<div>• Use info panels for configuration modules</div>

<div>• Keep messaging short and instructional</div>

<div>• Avoid decorative illustrations in admin systems</div>

</div>

</section>
`
}