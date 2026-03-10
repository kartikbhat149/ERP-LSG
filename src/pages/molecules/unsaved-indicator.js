import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function UnsavedIndicator() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Unsaved Indicator
      </h1>
      <p class="text-sm text-text-muted">
        Inline dirty-state indicator used inside Action Bar.
      </p>
    </div>

    ${componentClassSection()}
    ${structureSection()}
    ${guidelinesSection()}
  `

  attachCopy(el)

  /* previewTabs mount */
  const markup = `
<span class="erp-unsaved">
  <span class="erp-unsaved-dot"></span>
  <span>Unsaved Changes</span>
</span>
  `

  const mount = el.querySelector("#unsaved-preview")
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

      <div class="border border-border rounded-sm p-4 bg-bg-panel space-y-4">

        <div class="flex items-center gap-6">
          <div class="font-mono text-lg font-semibold text-text-primary">
            <code>.erp-unsaved</code>
          </div>

          <button data-copy="erp-unsaved"
            class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
            Copy
          </button>
        </div>

        <!-- Live Demo -->
        <div class="flex items-center gap-4">
          <div class="erp-unsaved">
            <span class="erp-unsaved-dot"></span>
            <span>Unsaved Changes</span>
          </div>
        </div>

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

      <div id="unsaved-preview"></div>

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
        <div>• Use inside Action Bar only</div>
        <div>• Indicates unsaved form changes</div>
        <div>• Should disappear after save/activate</div>
        <div>• Do not use as validation error indicator</div>
        <div>• Do not add background or border</div>
      </div>
    </section>
  `
}