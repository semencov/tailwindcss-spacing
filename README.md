# TailwindCSS Spacing Plugin

This plugin generates a set of css classes for creating a predictable and harmonious spacing.

* **Inset spacing**: For all user interface containers.
* **Inset squish spacing**: Same as previous, but a squished inset reduces space top and bottom, for example by 50%. _Used for buttons, inputs, data table cells, list items, etc._
* **Stack spacing**: For all stacked content. _So for example panels, form fields and anything else that is stacked vertically._
* **Inline spacing**: Things that are displayed inline. _For pills, tags, breadcrumbs, side-by-side form fields etc._

> Read about Space in Design Systems for more details of the concept: https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62


## Install

Using yarn

```bash
yarn add @suburbicode/tailwindcss-spacing
```
Or using npm

```bash
npm i @suburbicode/tailwindcss-spacing
```

## Usage

In tailwind config include the plugin:

```javascript
// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwindcss-spaced-items')
  ],
}
```

This will produce css like this for each value in configs [`spacing`](https://tailwindcss.com/docs/theme/#spacing) object:

```css
.inset-space-1 { padding: 0.25rem; }
.inset-squish-space-1 { padding: calc(0.25rem / 1.7 - 1px) 0.25rem calc(0.25rem / 1.7); }
.stack-space-1 { margin-bottom: 0.25rem; }
.stack-space-1:last-child { margin-bottom: 0; }
.inline-space-1 { margin-right: 0.25rem; }
.inline-space-1:last-child { margin-right: 0; }

/* ... */
```

[To override values](https://tailwindcss.com/docs/customizing-spacing/):

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    spacing: {
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
    }
  },
  plugins: [
    require('tailwindcss-spaced-items')
  ],
}
```

This will produce:

```css
.inset-space-sm { padding: 8px; }
.inset-squish-space-sm { padding: calc(8px / 1.7 - 1px) 8px calc(8px / 1.7); }

/* ... */
```

### Variants

By default [`responsive`](https://tailwindcss.com/docs/responsive-design/) variant is enabled.

```javascript
// tailwind.config.js
module.exports = {
  variants: {
    spacing: ['responsive'],
  },
}
```

# License

Licensed under the [MIT license](https://github.com/suburbicode/tailwindcss-spacing/blob/master/LICENSE).
