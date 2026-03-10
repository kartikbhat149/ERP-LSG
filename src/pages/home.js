export default function Home() {

  const page = document.createElement("div")

  page.className = "space-y-14"

  page.innerHTML = `

  <!-- HEADER -->
  <div>
    <h1 class="text-3xl font-semibold text-text-primary mb-3">
      ERP UI Design System
    </h1>

    <p class="text-sm text-text-muted max-w-3xl leading-relaxed">
      The ERP Living Style Guide (LSG) documents the complete UI design system
      used across the platform. It defines design tokens, component abstractions,
      and interaction patterns built on top of Tailwind CSS.
    </p>

    <p class="text-sm text-text-muted max-w-3xl mt-3 leading-relaxed">
      Developers can use this guide to build ERP modules with consistent UI,
      predictable behavior, and shared styling rules.
    </p>
  </div>

  <section class="space-y-3">

  <h2 class="text-xl font-semibold text-text-primary">
    Technical Base
  </h2>

  <div class="bg-bg-panel border border-border rounded-sm p-5 text-sm text-text-secondary space-y-2">

    <p>
      The ERP design system is built using <strong>Tailwind CSS v4</strong>
      and compiled into a standalone stylesheet.
    </p>

    <div class="text-xs text-text-muted mt-4 border-t border-border pt-3">
  
      Design System Version: 1.0.0  -
      Built With: Tailwind CSS v4  -
      Distribution: Compiled CSS
  
    </div>
  </div>


</section>

<section class="space-y-4">

  <h2 class="text-xl font-semibold text-text-primary">
    Quick Start
  </h2>

  <div class="bg-bg-panel border border-border rounded-sm p-6 text-sm text-text-secondary">

    <ol class="list-decimal ml-5 space-y-2">
      <li>Download <span class="font-mono text-xs">erp-stylesheet.css</span></li>
      <li>Include the stylesheet</li>
      <li>Use ERP component classes</li>
    </ol>

  </div>

</section>


  <!-- WHAT THIS SYSTEM PROVIDES -->
  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-text-primary">
      What This Design System Provides
    </h2>

    <div class="bg-bg-panel border border-border rounded-sm p-6 text-sm text-text-secondary">
      <ul class="space-y-2 list-disc ml-5">
        <li>Design tokens for color, typography, and spacing</li>
        <li>Tailwind component abstractions using <span class="font-mono text-xs">@layer components</span></li>
        <li>Reusable UI components (Atoms, Molecules, Organisms)</li>
        <li>ERP interaction patterns and layout structures</li>
        <li>Reference implementations for configuration screens</li>
      </ul>
    </div>
  </section>

<section class="space-y-6">

  <h2 class="text-xl font-semibold text-text-primary">
    Stylesheet Distribution
  </h2>

  <p class="text-sm text-text-secondary max-w-3xl">
    The ERP design system can be integrated using either the compiled stylesheet
    for direct usage or the Tailwind source version for customization.
  </p>

  <div class="grid grid-cols-2 gap-6">

    <!-- COMPILED CSS -->
    <div class="border border-border rounded-sm bg-bg-panel p-6 space-y-4">

      <div>
        <h3 class="font-semibold text-text-primary">
          Compiled CSS
        </h3>
        <p class="text-xs text-text-muted">
          Ready-to-use stylesheet for immediate integration.
        </p>
      </div>

      <div class="text-sm text-text-secondary space-y-2">
        <p><strong>File</strong></p>
        <p class="font-mono text-xs">erp-stylesheet.css</p>

        <p><strong>Tailwind Required</strong></p>
        <p>No</p>

        <p><strong>Use Case</strong></p>
        <p>
          Projects that want to integrate ERP UI components without
          installing Tailwind or running build tools.
        </p>
      </div>

      <div class="pt-2">
        <a
          href="/erp-stylesheet.css"
          download
          class="inline-flex items-center px-4 py-2 text-xs font-medium
                 bg-accent text-white rounded-sm hover:bg-accent-light"
        >
          Download
        </a>
        <div class="text-xs text-text-muted mt-4 border-t border-border pt-3">
          Usage along with Tailwind is flexible and quick fixes can be made by adding Tailwind utilities.
        </div>
      </div>

    </div>


    <!-- SOURCE CSS -->
    <div class="border border-border rounded-sm bg-bg-panel p-6 space-y-4">

      <div>
        <h3 class="font-semibold text-text-primary">
          Source CSS (Tailwind)
        </h3>
        <p class="text-xs text-text-muted">
          Tailwind source version for customization and extension.
        </p>
      </div>

      <div class="text-sm text-text-secondary space-y-2">
        <p><strong>File</strong></p>
        <p class="font-mono text-xs">erp-stylesheet.source.css</p>

        <p><strong>Tailwind Required</strong></p>
        <p>Yes (Tailwind CSS v4)</p>

        <p><strong>Use Case</strong></p>
        <p>
          Teams that want to modify design tokens, extend components,
          or rebuild the design system using Tailwind.
        </p>
      </div>

      <div class="pt-2">
        <a
          href="/erp-stylesheet.source.css"
          download
          class="inline-flex items-center px-4 py-2 text-xs font-medium
                 bg-accent text-white rounded-sm hover:bg-accent-light"
        >
          Download
        </a>
      </div>

    </div>

  </div>

</section>


<section class="space-y-4">

  <h2 class="text-xl font-semibold text-text-primary">
    Include Stylesheet
  </h2>

  <p class="text-sm text-text-secondary">
    After downloading <span class="font-mono text-xs">erp-stylesheet.css</span>,
    include it in your application HTML.
  </p>

  <div class="bg-bg-panel border border-border rounded-sm p-4">
    <pre class="text-xs font-mono text-text-secondary overflow-x-auto">
&lt;link rel="stylesheet" href="/erp-stylesheet.css"&gt;
    </pre>
  </div>

</section>


  <!-- QWIK SETUP -->
  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-text-primary">
      QwikJS Setup
    </h2>

    <p class="text-sm text-text-secondary">
      The ERP design system works directly with Qwik because it relies on
      standard HTML and Tailwind component classes.
    </p>

<pre class="bg-bg-panel border border-border p-4 rounded-sm text-xs font-mono overflow-x-auto">
src/
 ├ routes/
 ├ components/
 ├ styles/
 │   |
 |   └ <b>erp-stylesheet.css (downloaded file)</b>
 |
 └ root.tsx
</pre>

    <p class="text-sm text-text-secondary">
      Import the stylesheet in <span class="font-mono text-xs">root.tsx</span>.
    </p>

<pre class="bg-bg-panel border border-border p-4 rounded-sm text-xs font-mono overflow-x-auto">
import "./styles/erp-stylesheet.css"
</pre>

  </section>


  <!-- USING COMPONENTS -->
  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-text-primary">
      Using Components
    </h2>

    <p class="text-sm text-text-secondary">
      UI components are exposed as ERP-prefixed classes. Developers should use
      these abstractions instead of raw Tailwind utilities.
    </p>

<pre class="bg-bg-panel border border-border p-4 rounded-sm text-xs font-mono overflow-x-auto">
&lt;button class="erp-btn erp-btn-primary"&gt;
  Save
&lt;/button&gt;
</pre>

<pre class="bg-bg-panel border border-border p-4 rounded-sm text-xs font-mono overflow-x-auto">
&lt;input class="erp-input" type="text" /&gt;
</pre>

<pre class="bg-bg-panel border border-border p-4 rounded-sm text-xs font-mono overflow-x-auto">
&lt;div class="erp-section"&gt;
  ...
&lt;/div&gt;
</pre>

  </section>


  <!-- QWIK COMPONENT EXAMPLE -->
  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-text-primary">
      Example Usage in Qwik Component
    </h2>

<pre class="bg-bg-panel border border-border p-4 rounded-sm text-xs font-mono overflow-x-auto">
export const SaveButton = component$(() => {
  return (
    &lt;button class="erp-btn erp-btn-primary"&gt;
      Save
    &lt;/button&gt;
  );
});
</pre>

  </section>


  <!-- BEST PRACTICES -->
  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-text-primary">
      Best Practices
    </h2>

    <div class="bg-bg-panel border border-border rounded-sm p-6 text-sm text-text-secondary">
      <ul class="space-y-2 list-disc ml-5">
        <li>Use ERP component classes instead of raw Tailwind utilities.</li>
        <li>Avoid inline styles.</li>
        <li>Use design tokens instead of hardcoded colors.</li>
        <li>Follow documented component variants.</li>
        <li>Compose pages using molecules and organisms.</li>
      </ul>
    </div>
  </section>

  <section class="space-y-6">

  <h2 class="text-xl font-semibold text-text-primary">
    Contents of Design System
  </h2>

  <div class="grid grid-cols-3 gap-6">

    <!-- Foundations -->
    <div class="block border border-border rounded-sm p-5 hover:bg-bg-section transition-colors">
      <h3 class="font-semibold text-text-primary mb-1">Foundations</h3>
      <p class="text-xs text-text-muted">
        Design tokens including colors, typography, spacing, elevation,
        and responsive rules used across the ERP interface.
      </p>
    </div>

    <!-- Atoms -->
    <div  class="block border border-border rounded-sm p-5 hover:bg-bg-section transition-colors">
      <h3 class="font-semibold text-text-primary mb-1">Atoms</h3>
      <p class="text-xs text-text-muted">
        Basic UI primitives such as buttons, inputs, toggles,
        tags, badges, and links.
      </p>
    </div>

    <!-- Molecules -->
    <div class="block border border-border rounded-sm p-5 hover:bg-bg-section transition-colors">
      <h3 class="font-semibold text-text-primary mb-1">Molecules</h3>
      <p class="text-xs text-text-muted">
        Composed components like form rows, input groups,
        tabs, section headers, and notification bars.
      </p>
    </div>

    <!-- Organisms -->
    <div class="block border border-border rounded-sm p-5 hover:bg-bg-section transition-colors">
      <h3 class="font-semibold text-text-primary mb-1">Organisms</h3>
      <p class="text-xs text-text-muted">
        Large interface structures including sidebars,
        action bars, module grids, tables, and info panels.
      </p>
    </div>

    <!-- Patterns -->
    <div class="block border border-border rounded-sm p-5 hover:bg-bg-section transition-colors">
      <h3 class="font-semibold text-text-primary mb-1">Patterns</h3>
      <p class="text-xs text-text-muted">
        ERP interaction flows such as save workflows,
        module activation, validation states, and empty states.
      </p>
    </div>

    <!-- Examples -->
    <div class="block border border-border rounded-sm p-5 hover:bg-bg-section transition-colors">
      <h3 class="font-semibold text-text-primary mb-1">Examples</h3>
      <p class="text-xs text-text-muted">
        Complete page implementations demonstrating how
        atoms, molecules, and organisms compose real ERP screens.
      </p>
    </div>

  </div>

</section>

  `

  return page
}