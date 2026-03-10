export default function SettingsView() {

    const page = document.createElement("div")

    page.className = "erp-chrome"

    page.innerHTML = `
  
  <!-- GLOBAL HEADER -->
  <header class="erp-global-header">
      <div class="erp-logo">
        Nexus<span class="erp-logo-highlight">ERP</span>
      </div>

      <div class="erp-header-divider"></div>

      <div class="erp-breadcrumb">
        <span class="erp-breadcrumb-item">Administration</span>
        <span class="erp-breadcrumb-sep">/</span>
        <span class="erp-breadcrumb-item">System Configuration</span>
        <span class="erp-breadcrumb-sep">/</span>
        <span class="erp-breadcrumb-current">General Settings</span>
      </div>

      <div class="erp-header-spacer"></div>

      <div class="erp-header-meta">
        <span>TENANT: <strong>ACME-CORP-001</strong></span>
        <span class="erp-env-badge">PRODUCTION</span>
      </div>

      <div class="erp-header-user">
        <div class="erp-avatar">AR</div>
        <span>A. Ramirez</span>
        <span class="erp-user-sep">|</span>
        <span>Sys Admin</span>
      </div>
  </header>


  <div class="erp-body-row">

    <!-- SIDEBAR -->
    <aside class="erp-sidebar erp-scrollbar">

        <div class="erp-nav-section">
            <div class="erp-nav-section-header">System</div>

            <div class="erp-nav-item erp-nav-item-active">
                <span class="erp-nav-icon">▣</span>
                <span class="erp-nav-label">General Settings</span>
            </div>

            <div class="erp-nav-item">
                <span class="erp-nav-icon">◎</span>
                <span class="erp-nav-label">Localization</span>
            </div>

            <div class="erp-nav-item">
                <span class="erp-nav-icon">◎</span>
                <span class="erp-nav-label">Fiscal Calendar</span>
            </div>

        </div>

        <div class="erp-nav-section">
            <div class="erp-nav-section-header">Modules</div>

            <div class="erp-nav-item">
                <span class="erp-nav-label">Sales</span>
            </div>

            <div class="erp-nav-item">
                <span class="erp-nav-label">Inventory</span>
                <span class="erp-nav-badge">!</span>
            </div>

            <div class="erp-nav-item">
                <span class="erp-nav-label">HR</span>
            </div>

        </div>

    </aside>


    <!-- MAIN AREA -->
    <div class="erp-main-area">

        <!-- ACTION BAR -->
        <div class="erp-action-bar py-2">

            <span class="erp-action-bar-title">General Settings</span>

            <span class="erp-action-bar-subtitle">
              Tenant configuration — applies to all subsidiaries
            </span>

            <div class="erp-unsaved">
                <span class="erp-unsaved-dot"></span>
                Unsaved Changes
            </div>

            <button class="erp-btn erp-btn-ghost">
              Discard
            </button>

            <div class="erp-action-bar-divider"></div>

            <button class="erp-btn erp-btn-secondary">
              Save Draft
            </button>

            <button class="erp-btn erp-btn-primary">
              Save & Apply
            </button>

        </div>


        <!-- NOTIFICATION -->
        <div class="erp-notify erp-notify-info">

          Configuration scope is <strong>TENANT-WIDE</strong>.
          Changes propagate after activation.

          <span class="erp-notify-close">✕</span>

        </div>


        <!-- WORKSPACE -->
        <div class="p-6 overflow-y-auto erp-scrollbar">

          <!-- CONFIG SECTION -->
          <section class="erp-audit">

            <div class="erp-section-header px-5 pt-4">
              <div>
                <div class="erp-section-title">
                  Organization Identity
                </div>
                <div class="erp-section-subtitle">
                  Legal entity and branding configuration
                </div>
              </div>
            </div>

            <!-- FORM ROW -->
            <div class="erp-form-row">

                <div class="erp-form-label-col">
                    <div class="erp-form-label">
                      Legal Company Name
                    </div>
                    <div class="erp-form-label-sub">
                      Used on official documents
                    </div>
                </div>

                <div class="erp-form-control-col">
                    <input
                      class="erp-input"
                      value="ACME Corporation Ltd."
                    />

                    <div class="erp-help">
                      Must match certificate of incorporation
                    </div>
                </div>

            </div>

            <div class="erp-form-row erp-form-row-alt">

                <div class="erp-form-label-col">
                    <div class="erp-form-label">
                      Tax Registration Number
                    </div>
                    <div class="erp-form-label-sub">
                      EIN / VAT / GST
                    </div>
                </div>

                <div class="erp-form-control-col">

                  <div class="erp-form-inline">

                    <select class="erp-select w-40">
                        <option>EIN</option>
                        <option>VAT</option>
                        <option>GST</option>
                    </select>

                    <input
                      class="erp-input w-60 font-mono"
                      value="47-1234567"
                    />

                  </div>

                </div>

            </div>

          </section>


          <!-- MODULE GRID -->
          <section class="mt-6">

            <div class="erp-section-header mb-4">
              <div class="erp-section-title">
                Module Activation
              </div>
            </div>

            <div class="erp-module-grid">

                <div class="erp-module-cell">
                  <div class="erp-module-cell-icon">📈</div>
                  <div class="erp-module-cell-name">
                    Sales
                  </div>

                  <div class="mt-2">
                    <span class="erp-status-dot erp-status-dot-success"></span>
                    Active
                  </div>
                </div>


                <div class="erp-module-cell">
                  <div class="erp-module-cell-icon">📦</div>
                  <div class="erp-module-cell-name">
                    Inventory
                  </div>

                  <div class="mt-2">
                    <span class="erp-status-dot erp-status-dot-warning"></span>
                    Config Required
                  </div>
                </div>


                <div class="erp-module-cell">
                  <div class="erp-module-cell-icon">👥</div>
                  <div class="erp-module-cell-name">
                    HR
                  </div>

                  <div class="mt-2">
                    <span class="erp-status-dot erp-status-dot-success"></span>
                    Active
                  </div>
                </div>

            </div>

          </section>


          <!-- AUDIT TRAIL -->
          <section class="mt-6 erp-audit">

              <div class="erp-audit-header">
                Audit Trail
              </div>

              <div class="erp-audit-entry">

                <div class="erp-audit-time">
                  2026-02-23 14:37
                </div>

                <div class="erp-audit-msg">
                  Sales approval threshold updated
                </div>

                <div class="erp-audit-user">
                  A. Ramirez · CHG-2026-0088
                </div>

              </div>

              <div class="erp-audit-entry">

                <div class="erp-audit-time">
                  2026-02-20 09:12
                </div>

                <div class="erp-audit-msg">
                  Payroll frequency changed
                </div>

                <div class="erp-audit-user">
                  B. Chen · CHG-2026-0081
                </div>

              </div>

          </section>

        </div>

    </div>

  </div>
  `

    return page
}