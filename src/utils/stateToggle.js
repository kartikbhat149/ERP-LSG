export function toggleClass(root, trigger, target, className) {

  const btn = root.querySelector(trigger)
  const el = root.querySelector(target)

  if (!btn || !el) return

  btn.addEventListener("click", () => {
    el.classList.toggle(className)
  })
}
export function toggleDisabled(trigger, target) {

  const btn = document.querySelector(trigger)
  const el = document.querySelector(target)

  if (!btn || !el) return

  btn.addEventListener("click", () => {
    el.disabled = !el.disabled
  })
}