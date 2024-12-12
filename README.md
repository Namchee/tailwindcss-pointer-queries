# tailwindcss-pointer-queries

A TailwindCSS plugin that provides utilities for [pointer media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer).

## Installation

Install the plugin via your favorite package manager

```bash
# Using npm
npm install -D @namchee/tailwindcss-pointer-queries

# Using yarn
yarn add -D @namchee/tailwindcss-pointer-queries

# Using pnpm
pnpm add -D @namchee/tailwindcss-pointer-queries
```

Then include this plugin in the [plugin](https://tailwindcss.com/docs/plugins#overview) section of `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...your other configurations
  plugins: [
    require('@namchee/tailwind-pointer-queries'),
    // ...other plugins
  ],
  // ...
}
```

## Usage

Let's say that you want to hide certain elements in touchscreen devices. You can use `pointer-coarse` variant to detect whether the device is a touch-based device or not.

```html
<button class="pointer-coarse:hidden">
  Look ma! I can't be touched!
</button>
```

However, you realized that this isn't what you want. What you really want is detecting
whether the device has *at least one* touch inputs. In this case, you can use the `pointer-any-coarse` instead

```html
<button class="pointer-coarse:hidden">
  Look ma! I can't be touched by those touch devices!
</button>
```

## Classes

Below are the list of variant that this plugin generates:

| Class Variant | Usage | Media Query |
| ------------- | ----- | ----------- |
| `pointer-none` | Fulfilled when the device doesn't have any pointer device, such as keyboard-only interfaces | `@media (pointer: none)` |
| `pointer-coarse` | Fulfilled when the device primary input mechanism is a pointer with limited accuracy, such as touchscreens for mobile devices | `@media (pointer: coarse)` |
| `pointer-fine` | Fulfilled when the device primary input mechanism is a pointer with high accuracy, such as mouse and pen | `@media (pointer: coarse)` |
| `pointer-any-coarse` | Fulfilled when the device have at least one pointer input mechanism with limited accuracy, such as touchscreens for mobile devices | `@media (any-pointer: coarse)` |
| `pointer-any-fine` | Fulfilled when the device have at least one pointer input mechanism with high accuracy, such as mouse and pen | `@media (any-pointer: coarse)` |

## License

This project is licensed under the [MIT license](./LICENSE)
