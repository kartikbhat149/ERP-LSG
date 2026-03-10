export default function FormEditorView() {

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
              CRM
            </div>

            <div class="erp-nav-item">
                <span class="erp-nav-label">Customers</span>
            </div>

            <div class="erp-nav-item erp-nav-item-active">
                <span class="erp-nav-label">Create Customer</span>
            </div>

        </div>

    </aside>


    <!-- MAIN AREA -->
    <div class="erp-main-area">

      <!-- ACTION BAR -->
      <div class="erp-action-bar">

        <span class="erp-action-bar-title">
          Create Customer
        </span>

        <span class="erp-action-bar-subtitle">
          Add a new customer record
        </span>

        <button class="erp-btn erp-btn-ghost">
          Cancel
        </button>

        <button class="erp-btn erp-btn-primary">
          Save
        </button>

      </div>


      <!-- WORKSPACE -->
      <div class="p-6 space-y-6 overflow-y-auto erp-scrollbar">

        <!-- FORM SECTION -->
        <section class="erp-audit">

          <div class="erp-section-header px-4 py-3">
            <div class="erp-section-title">
              Basic Information
            </div>
          </div>

          <div class="p-4 space-y-4">

            <input
              class="erp-input w-full"
              placeholder="Customer Name"
            >

            <input
              class="erp-input w-full"
              placeholder="Email"
            >

            <select class="erp-select w-full">
              <option>Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

          </div>

        </section>


        <!-- ADDRESS SECTION -->
        <section class="erp-audit">

          <div class="erp-section-header px-4 py-3">
            <div class="erp-section-title">
              Address
            </div>
          </div>

          <div class="p-4 space-y-4">

            <input
              class="erp-input w-full"
              placeholder="Street Address"
            >

            <div class="grid grid-cols-2 gap-4">

              <input
                class="erp-input"
                placeholder="City"
              >

              <input
                class="erp-input"
                placeholder="Postal Code"
              >

            </div>

          </div>

        </section>

      </div>

    </div>

  </div>
  `

  return page
}