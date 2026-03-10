export default function attachCopy(root) {
  root.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", () => {
      const value = btn.getAttribute("data-copy")

      navigator.clipboard.writeText(value)

      const original = btn.textContent

      btn.textContent = "Copied ✓"
      btn.classList.add("bg-bg-section")

      setTimeout(() => {
        btn.textContent = original
        btn.classList.remove("bg-bg-section")
      }, 1500)
    })
  })
}

export function escapeHtml(str) {
   return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}