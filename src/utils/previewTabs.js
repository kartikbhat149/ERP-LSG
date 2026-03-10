export function previewTabs(previewHTML) {

  const wrapper = document.createElement("div")

  wrapper.className =
    "w-full border border-border rounded-sm bg-bg-panel"


  wrapper.innerHTML = `

  <!-- Tabs -->

  <div class="flex border-b border-border text-xs">

    <button
      class="tab-btn px-3 py-2 font-medium text-blue-900 border-b-2 border-blue-600 bg-blue-100">

      Preview

    </button>

    <button
      class="tab-btn px-3 py-2 font-medium text-text-muted hover:text-text-primary">

      HTML

    </button>

  </div>


  <div class="p-6">

    <!-- Preview -->

    <div class="tab-panel preview-panel">
      ${previewHTML}
    </div>


    <!-- HTML Code -->

    <div class="tab-panel code-panel hidden">

      <div class="lsg-code-block">

        <div class="lsg-code-header flex items-center">

          <span class="lsg-code-title text-xs text-text-muted font-medium">
            HTML
          </span>

          <button
            class="code-copy-btn text-xs px-2 py-1 border border-border rounded-sm hover:bg-bg-section ml-auto">

            Copy

          </button>

        </div>

        <pre class="lsg-code overflow-x-auto">
<code class="language-html"></code>
        </pre>

      </div>

    </div>

  </div>
  `



  const previewPanel = wrapper.querySelector(".preview-panel")
  const codePanel = wrapper.querySelector(".code-panel code")
  const copyBtn = wrapper.querySelector(".code-copy-btn")



  /* ========================================= */
  /* Generate HTML code block */
  /* ========================================= */

  codePanel.textContent =
    formatHtml(
      decodeHtml(previewPanel.innerHTML)
    )



  /* ========================================= */
  /* Prism Highlight */
  /* ========================================= */

  if (window.Prism) {
    Prism.highlightElement(codePanel)
  }



  /* ========================================= */
  /* Copy Button */
  /* ========================================= */

  copyBtn.addEventListener("click", () => {

    navigator.clipboard.writeText(codePanel.textContent)

    const original = copyBtn.textContent

    copyBtn.textContent = "Copied ✓"

    setTimeout(() => {
      copyBtn.textContent = original
    }, 1500)

  })



  /* ========================================= */
  /* Tabs Logic */
  /* ========================================= */

  const buttons = wrapper.querySelectorAll(".tab-btn")
  const panels = wrapper.querySelectorAll(".tab-panel")


  buttons.forEach((btn, index) => {

    btn.addEventListener("click", () => {

      /* reset tabs */

      buttons.forEach(b => {

        b.classList.remove(
         "text-blue-900",
        "bg-blue-100",
        "border-b-2",
        "border-blue-600"
        )

        b.classList.add("text-text-muted")

      })


      /* activate tab */

      btn.classList.remove("text-text-muted")

      btn.classList.add(
        "text-blue-900",
        "bg-blue-100",
        "border-b-2",
        "border-blue-600"
      )


      /* switch panels */

      panels.forEach(p =>
        p.classList.add("hidden")
      )

      panels[index].classList.remove("hidden")

    })

  })


  return wrapper
}



/* ========================================= */
/* HTML Formatter */
/* ========================================= */

function formatHtml(html) {

  html = html
    .replace(/>\s*</g, "><")
    .trim()

  const tokens = html.split(/(<[^>]+>)/g).filter(Boolean)

  let indent = 0
  const indentSize = 2
  const lines = []

  tokens.forEach(token => {

    token = token.trim()
    if (!token) return

    if (/^<\//.test(token)) {
      indent--
    }

    const line =
      " ".repeat(indent * indentSize) + token

    lines.push(line)

    if (/^<[^\/!][^>]*[^\/]>$/.test(token)) {
      indent++
    }

  })

  return lines.join("\n")
}



/* ========================================= */
/* Decode HTML */
/* ========================================= */

function decodeHtml(html) {

  const txt = document.createElement("textarea")

  txt.innerHTML = html

  return txt.value
}