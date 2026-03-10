export function createDocPage({ title, description }) {
  const el = document.createElement("div")

  el.innerHTML = `
    <div class="mb-10">
      <h1 class="text-2xl font-semibold text-gray-800 mb-3">
        ${title}
      </h1>
      <p class="text-gray-600">
        ${description}
      </p>
    </div>

    <div id="doc-content" class="space-y-12"></div>
  `

  return el
}

export function createSection(title) {
  const section = document.createElement("section")

  section.className = "space-y-4"

  section.innerHTML = `
    <h2 class="text-lg font-semibold text-gray-800">
      ${title}
    </h2>
  `

  return section
}

export function createPreviewBox(innerHTML) {
  const box = document.createElement("div")

  box.className =
    "border bg-white rounded-md p-6"

  box.innerHTML = innerHTML

  return box
}

export function createCodeBlock(code) {
  const pre = document.createElement("pre")

  pre.className =
    "bg-gray-900 text-gray-100 text-sm p-4 rounded-md overflow-x-auto"

  pre.textContent = code

  return pre
}