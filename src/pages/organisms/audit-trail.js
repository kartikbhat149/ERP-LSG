import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function AuditTrail() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  /* Header */

  const header = document.createElement("div")
  header.innerHTML = `
    <h1 class="text-2xl font-semibold text-text-primary mb-2">
      Audit Trail
    </h1>

    <p class="text-sm text-text-muted">
      Displays configuration changes with timestamps and user attribution.
      Commonly used in settings pages and compliance views.
    </p>
  `
  el.appendChild(header)

  el.appendChild(componentClassSection())
  el.appendChild(structureSection())
  el.appendChild(guidelinesSection())

  attachCopy(el)

  /* ============================= */
  /* Preview Mount */
  /* ============================= */

  const markup = `
<div class="erp-audit">

  <div class="erp-audit-header erp-info-panel-header">
    Audit Trail
  </div>

  <div class="erp-audit-entry">
    <div class="erp-audit-time">2026-02-23 14:37</div>
    <div class="erp-audit-msg">
      Sales approval threshold updated: $5,000 → $10,000
    </div>
    <div class="erp-audit-user">
      A. Ramirez · CHG-2026-0088
    </div>
  </div>

  <div class="erp-audit-entry">
    <div class="erp-audit-time">2026-02-20 09:12</div>
    <div class="erp-audit-msg">
      Payroll frequency changed: Monthly → Bi-Weekly
    </div>
    <div class="erp-audit-user">
      B. Chen · CHG-2026-0081
    </div>
  </div>

  <div class="erp-audit-entry">
    <div class="erp-audit-time">2026-02-18 16:44</div>
    <div class="erp-audit-msg">
      Lot tracking enabled; expiry enforcement activated
    </div>
    <div class="erp-audit-user">
      K. Patel · CHG-2026-0077
    </div>
  </div>

  <div class="erp-audit-entry">
    <div class="erp-audit-time">2026-02-15 11:03</div>
    <div class="erp-audit-msg">
      FedEx integration API key rotated
    </div>
    <div class="erp-audit-user">
      A. Ramirez · CHG-2026-0074
    </div>
  </div>

  <div class="erp-audit-footer">
    <a class="erp-link">View full audit log →</a>
  </div>

</div>
  `.trim()

  const mount = el.querySelector("#audit-preview")
  mount.appendChild(previewTabs(markup))

  return el
}

/* ============================= */
/* Component Class */
/* ============================= */

function componentClassSection() {

  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Component Class
    </h2>

    <div class="border border-border rounded-sm p-4 bg-bg-panel flex items-center gap-6">

      <div class="font-mono text-lg font-semibold text-text-primary">
        <code>.erp-audit</code>
      </div>

      <button data-copy="erp-audit"
        class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
        Copy
      </button>

    </div>
  `

  return section
}

/* ============================= */
/* Structure */
/* ============================= */

function structureSection() {

  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Structure
    </h2>

    <div id="audit-preview"></div>
  `

  return section
}

/* ============================= */
/* Guidelines */
/* ============================= */

function guidelinesSection() {

  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Usage Guidelines
    </h2>

    <div class="text-xs text-text-muted space-y-2 border border-border rounded-sm p-6 bg-bg-panel">

      <div>• Use for system configuration history</div>

      <div>• Always include timestamp, action message, and actor</div>

      <div>• Entries should be chronological (newest first)</div>

      <div>• Avoid truncating important audit messages</div>

      <div>• Provide link to full audit history when list is truncated</div>

      <div>• Typically displayed in settings or compliance panels</div>

    </div>
  `

  return section
}