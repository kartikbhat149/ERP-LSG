import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function SectionHeader() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  el.innerHTML = `
    <div>
      <h1 class="text-2xl font-semibold text-text-primary mb-2">
        Section Header
      </h1>
      <p class="text-sm text-text-muted">
        Layout header for grouped sections.
      </p>
    </div>

    ${componentClassSection()}
    ${structureSection()}
    ${variantsSection()}
    ${guidelinesSection()}
  `

  attachCopy(el)

  /* previewTabs mount */
  const markup = `
<div class="erp-section-header">
  <h2 class="erp-section-title">Company Information</h2>
</div>
  `

  const mount = el.querySelector("#sectionheader-preview")
  mount.appendChild(previewTabs(markup))

  return el
}

/* ============================= */

function componentClassSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Component Class
      </h2>

      <div class="border border-border rounded-sm p-4 bg-bg-panel flex items-start gap-6">
        <div class="font-mono text-lg font-semibold text-text-primary w-96">
          <code>.erp-section-header</code>
        </div>

        <div class="erp-section-header w-full">
          <h2 class="erp-section-title">Company Information</h2>
        </div>

        <button data-copy="erp-section-header"
          class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
          Copy
        </button>
      </div>
    </section>
  `
}

/* ============================= */

function structureSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Structure
      </h2>

      <div id="sectionheader-preview"></div>

    </section>
  `
}

/* ============================= */

function variantsSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Variants
      </h2>

      <div class="border border-border rounded-sm p-6 bg-bg-panel space-y-8">

        <!-- Basic -->
        <div class="erp-section-header">
          <h2 class="erp-section-title">Basic Section</h2>
        </div>

        <!-- With Subtitle -->
        <div class="erp-section-header">
          <div>
            <h2 class="erp-section-title">Billing Details</h2>
            <p class="erp-section-subtitle">Customer invoice information</p>
          </div>
        </div>

        <!-- With Action -->
        <div class="erp-section-header">
          <h2 class="erp-section-title">Shipping Address</h2>
          <button class="erp-btn erp-btn-secondary text-sm">Edit</button>
        </div>

      </div>
    </section>
  `
}

/* ============================= */

function guidelinesSection() {
  return `
    <section>
      <h2 class="text-lg font-medium text-text-primary mb-4">
        Usage Guidelines
      </h2>

      <div class="text-xs text-text-muted space-y-2 border border-border rounded-sm p-6 bg-bg-panel">
        <div>• Use to separate logical form sections</div>
        <div>• Keep title concise</div>
        <div>• Optional subtitle for clarification</div>
        <div>• Optional right-aligned action</div>
      </div>
    </section>
  `
}