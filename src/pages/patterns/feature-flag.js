import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function FeatureFlag() {

  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Feature Flag
      </h1>

      <p class="text-sm text-text-muted">
        Feature flags enable or disable optional system capabilities
        without deploying new code.
      </p>
    </div>

    ${basicToggle()}
    ${toggleWithConfiguration()}
    ${experimentalFeature()}
    ${guidelinesSection()}
  `

  attachCopy(el)

  mountPreviews(el)
  initToggleInteraction(el)

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


/* ========================================= */
/* Basic Feature Toggle */
/* ========================================= */

function basicToggle() {

const markup = `
<div class="space-y-2 max-w-lg">

  <div class="erp-toggle-row">
    <div class="erp-toggle"></div>
    <span class="erp-toggle-label">Enable Webhooks</span>
  </div>

  <div class="erp-help">
    Sends event notifications to external systems.
  </div>

</div>
`.trim()

return `
<section>

<h2 class="text-lg font-medium text-text-primary mb-4">
Basic Feature Toggle
</h2>

<div data-preview='${markup.replace(/'/g,"&apos;")}'></div>

</section>
`
}


/* ========================================= */
/* Toggle With Configuration */
/* ========================================= */

function toggleWithConfiguration() {

const markup = `
<div class="space-y-4 max-w-lg">

  <div class="erp-toggle-row">
    <div class="erp-toggle erp-toggle-on"></div>
    <span class="erp-toggle-label">Enable Audit Logging</span>
  </div>

  <div class="erp-help">
    Records system actions for compliance and debugging.
  </div>

  <div class="erp-field">

    <label class="erp-label">
      Log Retention (days)
    </label>

    <input type="number" class="erp-input" value="30">

  </div>

</div>
`.trim()

return `
<section>

<h2 class="text-lg font-medium text-text-primary mb-4">
Toggle With Configuration
</h2>

<div data-preview='${markup.replace(/'/g,"&apos;")}'></div>

</section>
`
}


/* ========================================= */
/* Experimental Feature */
/* ========================================= */

function experimentalFeature() {

const markup = `
<div class="erp-info-panel max-w-lg">

  <div class="erp-info-panel-header">
    <span class="erp-info-panel-title">
      AI Forecasting
    </span>
  </div>

  <div class="erp-info-panel-body space-y-4">

    <div class="text-warning text-xs">
      Experimental feature — behavior may change.
    </div>

    <div class="erp-toggle-row">
      <div class="erp-toggle"></div>
      <span class="erp-toggle-label">Enable AI Forecasting</span>
    </div>

  </div>

</div>
`.trim()

return `
<section>

<h2 class="text-lg font-medium text-text-primary mb-4">
Experimental Feature
</h2>

<div data-preview='${markup.replace(/'/g,"&apos;")}'></div>

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

<div>• Feature flags control optional system capabilities</div>

<div>• Toggles should clearly describe the enabled behavior</div>

<div>• Configuration fields appear below the toggle</div>

<div>• Experimental features should include warning text</div>

<div>• Avoid hiding critical functionality behind flags</div>

</div>

</section>
`
}


/* ========================================= */
/* Toggle Interaction */
/* ========================================= */

function initToggleInteraction(root) {

  root.querySelectorAll(".erp-toggle").forEach(toggle => {

    toggle.addEventListener("click", () => {

      if (toggle.classList.contains("erp-toggle-disabled")) return

      toggle.classList.toggle("erp-toggle-on")

    })

  })

}