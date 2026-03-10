import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function ConfirmationPattern() {

  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Confirmation Pattern
      </h1>

      <p class="text-sm text-text-muted">
        Confirmation dialogs prevent accidental execution of critical
        or destructive actions.
      </p>
    </div>

    ${destructiveConfirmation()}
    ${configurationConfirmation()}
    ${criticalActionConfirmation()}
    ${guidelinesSection()}
  `

  attachCopy(el)

  mountPreviews(el)
  initConfirmationInteraction(el)

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
/* Sections */
/* ========================================= */

function destructiveConfirmation() {

const markup = `
<button class="erp-btn erp-btn-danger" data-open="delete-modal">
Delete Integration
</button>

<div class="erp-modal-overlay hidden" id="delete-modal">

  <div class="erp-modal">

    <div class="erp-modal-header">
      <span class="erp-modal-title">
        Confirm Deletion
      </span>
    </div>

    <div class="erp-modal-body">
      This will permanently remove the integration configuration.
      This action cannot be undone.
    </div>

    <div class="erp-modal-footer">
      <button class="erp-btn erp-btn-ghost" data-close>Cancel</button>
      <button class="erp-btn erp-btn-danger">Delete</button>
    </div>

  </div>

</div>
`.trim()

return renderSection("Destructive Confirmation", markup)
}


function configurationConfirmation() {

const markup = `
<button class="erp-btn erp-btn-primary" data-open="apply-modal">
Apply Changes
</button>

<div class="erp-modal-overlay hidden" id="apply-modal">

  <div class="erp-modal">

    <div class="erp-modal-header">
      <span class="erp-modal-title">
        Apply Configuration
      </span>
    </div>

    <div class="erp-modal-body">
      Applying these settings will restart background services
      and temporarily interrupt integrations.
    </div>

    <div class="erp-modal-footer">
      <button class="erp-btn erp-btn-ghost" data-close>Cancel</button>
      <button class="erp-btn erp-btn-primary">Apply</button>
    </div>

  </div>

</div>
`.trim()

return renderSection("Configuration Confirmation", markup)
}


function criticalActionConfirmation() {

const markup = `
<button class="erp-btn erp-btn-warning" data-open="disable-modal">
Deactivate Module
</button>

<div class="erp-modal-overlay hidden" id="disable-modal">

  <div class="erp-modal">

    <div class="erp-modal-header">
      <span class="erp-modal-title">
        Deactivate Module
      </span>
    </div>

    <div class="erp-modal-body">
      Deactivating this module will disable all related workflows
      and scheduled automation tasks.
    </div>

    <div class="erp-modal-footer">
      <button class="erp-btn erp-btn-ghost" data-close>Cancel</button>
      <button class="erp-btn erp-btn-warning">Deactivate</button>
    </div>

  </div>

</div>
`.trim()

return renderSection("Critical Action Confirmation", markup)
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

function initConfirmationInteraction(root){

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

<div>• Use confirmation dialogs for destructive or irreversible actions</div>

<div>• Clearly explain the consequence of the action</div>

<div>• Use danger or warning button variants for destructive actions</div>

<div>• Always provide a cancel option</div>

<div>• Avoid confirmations for low-risk actions</div>

</div>

</section>
`
}