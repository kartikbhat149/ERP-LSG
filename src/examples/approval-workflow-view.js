export default function ApprovalWorkflowView() {

  const page = document.createElement("div")

  page.className = "erp-chrome"

  page.innerHTML = `

  <!-- GLOBAL HEADER -->
  <header class="erp-global-header">

      <div class="erp-logo">
        Nexus<span class="erp-logo-highlight">ERP</span>
      </div>

      <div class="erp-header-spacer"></div>

      <div class="erp-header-user">
        <div class="erp-avatar">AR</div>
        <span>A. Ramirez</span>
      </div>

  </header>


  <div class="erp-body-row">

    <!-- SIDEBAR -->
    <aside class="erp-sidebar">

        <div class="erp-nav-section">

            <div class="erp-nav-section-header">
              Finance
            </div>

            <div class="erp-nav-item erp-nav-item-active">
                <span class="erp-nav-label">
                  Expense Approval
                </span>
            </div>

        </div>

    </aside>


    <!-- MAIN AREA -->
    <div class="erp-main-area">

      <!-- ACTION BAR -->
      <div class="erp-action-bar">

        <span class="erp-action-bar-title">
          Expense Request
        </span>

        <span class="erp-action-bar-subtitle">
          Approval decision required
        </span>

        <button class="erp-btn erp-btn-secondary">
          Reject
        </button>

        <button class="erp-btn erp-btn-primary">
          Approve
        </button>

      </div>


      <!-- WORKSPACE -->
      <div class="p-6 space-y-6 overflow-y-auto erp-scrollbar">


        <!-- REQUEST SUMMARY -->
        <section class="erp-info-panel">

          <div class="erp-section-title">
            Request Summary
          </div>

          <div class="text-sm text-text-muted mt-2">
            Expense submitted by <strong>John Smith</strong>
          </div>

          <div class="mt-2">
            Amount: <strong>$1,250</strong>
          </div>

        </section>


        <!-- APPROVAL HISTORY -->
        <section class="erp-audit">

          <div class="erp-audit-header">
            Approval History
          </div>

          <div class="erp-audit-entry">

            <div class="erp-audit-time">
              10:02
            </div>

            <div class="erp-audit-msg">
              Request submitted
            </div>

            <div class="erp-audit-user">
              J. Smith
            </div>

          </div>


          <div class="erp-audit-entry">

            <div class="erp-audit-time">
              10:15
            </div>

            <div class="erp-audit-msg">
              Awaiting manager approval
            </div>

            <div class="erp-audit-user">
              System
            </div>

          </div>

        </section>

      </div>

    </div>

  </div>
  `

  return page
}