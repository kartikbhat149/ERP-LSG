import attachCopy from "../../utils/copy"
import { previewTabs } from "../../utils/previewTabs"

export default function DataTable() {
  const el = document.createElement("div")
  el.className = "space-y-12"

  const header = document.createElement("div")
  header.innerHTML = `
    <h1 class="text-2xl font-semibold text-text-primary mb-2">
      Data Table (Mini)
    </h1>
    <p class="text-sm text-text-muted">
      Compact integration table used in configuration panels.
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
<table class="erp-mini-table">

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
      <td><strong class="erp-mini-table-strong">Stripe Payments</strong></td>
      <td><span class="erp-tag">Payment</span></td>
      <td>
        <span class="erp-status-dot erp-status-dot-success"></span>
        Connected
      </td>
      <td class="erp-mini-table-mono">4m ago</td>
      <td class="erp-mini-table-mono">OAuth2</td>
      <td><a class="erp-link">Configure</a></td>
    </tr>

    <tr>
      <td><strong class="erp-mini-table-strong">Salesforce CRM</strong></td>
      <td><span class="erp-tag">CRM</span></td>
      <td>
        <span class="erp-status-dot erp-status-dot-success"></span>
        Connected
      </td>
      <td class="erp-mini-table-mono">12m ago</td>
      <td class="erp-mini-table-mono">OAuth2</td>
      <td><a class="erp-link">Configure</a></td>
    </tr>

    <tr>
      <td><strong class="erp-mini-table-strong">FedEx Logistics</strong></td>
      <td><span class="erp-tag">Shipping</span></td>
      <td>
        <span class="erp-status-dot erp-status-dot-warning"></span>
        Auth Expired
      </td>
      <td class="erp-mini-table-mono">6d ago</td>
      <td class="erp-mini-table-mono">API Key</td>
      <td><a class="erp-link text-warning">Reconnect</a></td>
    </tr>

    <tr>
      <td><strong class="erp-mini-table-strong">Avalara Tax</strong></td>
      <td><span class="erp-tag">Tax</span></td>
      <td>
        <span class="erp-status-dot erp-status-dot-success"></span>
        Connected
      </td>
      <td class="erp-mini-table-mono">1h ago</td>
      <td class="erp-mini-table-mono">API Key</td>
      <td><a class="erp-link">Configure</a></td>
    </tr>

    <tr>
      <td><strong class="erp-mini-table-strong">Workday HRIS</strong></td>
      <td><span class="erp-tag">HR</span></td>
      <td>
        <span class="erp-status-dot"></span>
        Not Connected
      </td>
      <td class="erp-mini-table-mono">—</td>
      <td class="erp-mini-table-mono">—</td>
      <td><a class="erp-link">Connect</a></td>
    </tr>

  </tbody>

</table>
  `.trim()

  const mount = el.querySelector("#datatable-preview")
  mount.appendChild(previewTabs(markup))

  return el
}

/* ============================= */

function componentClassSection() {
  const section = document.createElement("section")
  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Component Class
    </h2>

    <div class="border border-border rounded-sm p-4 bg-bg-panel flex items-center gap-6">
      <div class="font-mono text-lg font-semibold text-text-primary">
        <code>.erp-mini-table</code>
      </div>

      <button data-copy="erp-mini-table"
        class="copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section transition ml-auto">
        Copy
      </button>
    </div>
  `
  return section
}

/* ============================= */

function structureSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Structure
    </h2>

    <div id="datatable-preview"></div>
  `

  return section
}

/* ============================= */

function guidelinesSection() {
  const section = document.createElement("section")

  section.innerHTML = `
    <h2 class="text-lg font-medium text-text-primary mb-4">
      Usage Guidelines
    </h2>

    <div class="text-xs text-text-muted space-y-2 border border-border rounded-sm p-6 bg-bg-panel">
      <div>• Use for compact configuration tables</div>
      <div>• Header must remain uppercase and 10px</div>
      <div>• Use mono styling for sync and auth columns</div>
      <div>• Avoid zebra striping</div>
      <div>• Keep action links inline</div>
    </div>
  `
  return section
}