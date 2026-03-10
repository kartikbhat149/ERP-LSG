import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function ModuleActivation() {

  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Module Activation
      </h1>

      <p class="text-sm text-text-muted">
        Module activation enables optional ERP capabilities.
        Modules can be activated or disabled depending on system configuration.
      </p>
    </div>

    ${activationPanel()}
    ${activationWithConfirmation()}
    ${guidelinesSection()}
  `

  attachCopy(el)

  mountPreviews(el)
  initActivationInteraction(el)

  return el
}


/* ============================= */
/* Mount preview tabs */
/* ============================= */

function mountPreviews(root){

  const blocks = root.querySelectorAll("[data-preview]")

  blocks.forEach(block=>{
    const markup = block.dataset.preview
    block.appendChild(previewTabs(markup))
  })

}


/* ========================================= */
/* Activation Panel */
/* ========================================= */

function activationPanel() {

const markup = `
<div class="erp-info-panel max-w-lg">

  <div class="erp-info-panel-header">
    <span class="erp-info-panel-title">
      Inventory Module
    </span>
  </div>

  <div class="erp-info-panel-body space-y-4">

    <div class="text-text-muted">
      This module enables inventory tracking across warehouses.
    </div>

    <div class="erp-toggle-row">
      <div class="erp-toggle"></div>
      <span class="erp-toggle-label">Enable Inventory Module</span>
    </div>

  </div>

</div>
`.trim()

return renderSection("Module Activation Panel", markup)
}


/* ========================================= */
/* Activation With Confirmation */
/* ========================================= */

function activationWithConfirmation() {

const markup = `
<div class="erp-info-panel max-w-lg">

  <div class="erp-info-panel-header">
    <span class="erp-info-panel-title">
      Billing Module
    </span>
  </div>

  <div class="erp-info-panel-body space-y-4">

    <div class="text-text-muted">
      Activating billing will enable invoicing and subscription management.
    </div>

    <button class="erp-btn erp-btn-success" data-open="activate-module">
      Activate Module
    </button>

  </div>

</div>


<div class="erp-modal-overlay hidden" id="activate-module">

  <div class="erp-modal">

    <div class="erp-modal-header">
      <span class="erp-modal-title">
        Activate Billing Module
      </span>
    </div>

    <div class="erp-modal-body">
      This will enable billing features across all subsidiaries.
    </div>

    <div class="erp-modal-footer">
      <button class="erp-btn erp-btn-ghost" data-close>Cancel</button>
      <button class="erp-btn erp-btn-success">Activate</button>
    </div>

  </div>

</div>
`.trim()

return renderSection("Activation With Confirmation", markup)
}


/* ========================================= */
/* Render Section */
/* ========================================= */

function renderSection(title, markup){

return `
<section>

<h2 class="text-lg font-medium text-text-primary mb-4">
${title}
</h2>

<div data-preview='${markup.replace(/'/g,"&apos;")}'></div>

</section>
`
}


/* ========================================= */
/* Modal Interaction */
/* ========================================= */

function initActivationInteraction(root){

  root.querySelectorAll("[data-open]").forEach(btn => {

    btn.addEventListener("click", () => {

      const modal = root.querySelector("#"+btn.dataset.open)

      if(modal) modal.classList.remove("hidden")

    })

  })

  root.querySelectorAll("[data-close]").forEach(btn => {

    btn.addEventListener("click", () => {

      const overlay = btn.closest(".erp-modal-overlay")

      if(overlay) overlay.classList.add("hidden")

    })

  })

}


/* ========================================= */
/* Guidelines */
/* ========================================= */

function guidelinesSection(){

return `
<section>

<h2 class="text-lg font-medium text-text-primary mb-4">
Usage Guidelines
</h2>

<div class="text-xs text-text-muted space-y-2 border border-border rounded-sm p-6 bg-bg-panel">

<div>• Modules should clearly describe the functionality they enable</div>

<div>• Use toggles for simple activation</div>

<div>• Use confirmation dialogs for system-wide activation</div>

<div>• Activation should not occur silently for critical modules</div>

<div>• Provide clear messaging about system impact</div>

</div>

</section>
`
}