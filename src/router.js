import { initLayout, renderPage } from "./layouts/LsgLayout"
import { sidebarConfig } from "./config/sidebar"

/* -----------------------------------------------------
AUTO LOAD ALL PAGES
----------------------------------------------------- */

const pages = import.meta.glob([
  "./pages/**/*.js",
  "./examples/**/*.js"
], { eager: true })

/* -----------------------------------------------------
HELPER: convert file path → route
----------------------------------------------------- */

function filePathToRoute(file) {

  return file
    .replace("./pages", "")
    .replace("./examples", "/examples")
    .replace(".js", "")
    .replace("/index", "")
}

/* -----------------------------------------------------
BUILD ROUTES FROM FILE SYSTEM
----------------------------------------------------- */

const routes = {}

Object.keys(pages).forEach(file => {

  const route = filePathToRoute(file)

  routes[route] = pages[file].default

})

/* -----------------------------------------------------
FALLBACK ROUTES FROM SIDEBAR CONFIG
----------------------------------------------------- */

sidebarConfig.forEach(section => {

  section.items.forEach(item => {

    const path = item.path || `${section.base}/${item.slug}`

    if (!routes[path]) {
      routes[path] = () => NotImplemented(item.label)
    }

  })

})

/* -----------------------------------------------------
HOME ROUTE
----------------------------------------------------- */

import Home from "./pages/home"

routes["/"] = Home

/* -----------------------------------------------------
FALLBACK PAGE
----------------------------------------------------- */

function NotImplemented(label) {

  const el = document.createElement("div")

  el.innerHTML = `
    <h1 class="text-2xl font-semibold text-text-primary mb-4">${label}</h1>
    <p class="text-sm text-text-muted">
      Component page not implemented yet.
    </p>
  `

  return el
}

/* -----------------------------------------------------
ROUTER INITIALIZATION
----------------------------------------------------- */

export function initRouter() {

  initLayout()

  window.addEventListener("hashchange", render)

  render()

}

/* -----------------------------------------------------
RENDER FUNCTION
----------------------------------------------------- */

function render() {

  const sidebar = document.querySelector("aside")
  const sidebarScroll = sidebar ? sidebar.scrollTop : 0

  const path = location.hash.replace("#", "") || "/"

  const pageFactory = routes[path] || (() => NotImplemented(path))

  /* -------------------------------------------------
  FULL PAGE EXAMPLES (no LSG layout)
  ------------------------------------------------- */

  if (path.includes("-page")) {

    const root = document.getElementById("app")

    root.innerHTML = ""

    root.appendChild(pageFactory())

    return

  }

  /* -------------------------------------------------
  NORMAL COMPONENT PAGE
  ------------------------------------------------- */

  renderPage(pageFactory())

  requestAnimationFrame(() => {

    const newSidebar = document.querySelector("aside")
    if (newSidebar) newSidebar.scrollTop = sidebarScroll

    const main = document.querySelector("main")
    if (main) main.scrollTop = 0

  })

}