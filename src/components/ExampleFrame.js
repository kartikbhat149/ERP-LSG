export default function ExampleFrame(content, path) {

  const wrapper = document.createElement("div")

  wrapper.className = "border border-border rounded-sm overflow-hidden"

  wrapper.innerHTML = `
    <div class="flex items-center justify-between bg-bg-section px-4 py-2 border-b border-border">

        <span class="text-xs text-text-muted">
            Preview
        </span>

        <button class="erp-btn erp-btn-outline text-xs">
            Open Full Preview
        </button>

    </div>

    <div class="h-[780px] overflow-hidden bg-bg-base"></div>
  `

  wrapper.querySelector("div:last-child").appendChild(content)

  wrapper.querySelector("button").onclick = () => {
      window.open(path, "_blank")
  }

  return wrapper
}