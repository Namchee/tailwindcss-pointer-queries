import postcss from 'postcss';
import tailwindcss from 'tailwindcss';

import { expect, test } from 'vitest';

import plugin from './index';

async function generate(content: string): Promise<string> {
  const { css } = await postcss(tailwindcss({
    content: [{ raw: content }],
    plugins: [
      plugin,
    ]
  })).process(
    ['@tailwind base;', '@tailwind components;', '@tailwind utilities'].join('\n'),
    {
      from: undefined,
    }
  );

  return css;
}

test('should generate pointer media queries', async () => {
  const content = `<div class="pointer-coarse:hidden">Hidden on touch screens!</div>`;
  const css = await generate(content);

  expect(css).toContain(`@media (pointer: coarse) {

  .pointer-coarse\\:hidden {
    display: none;
  }
}`);
});

test('should not any generate pointer media queries', async () => {
  const content = `<div class="lg:hidden">Hidden on desktops!</div>`;
  const css = await generate(content);

  expect(css).not.toContain(`@media (pointer: coarse) {

  .pointer-coarse\\:hidden {
    display: none;
  }
}`);
});


test('should generate combination of media queries', async () => {
  const content = `<div class="pointer-coarse:lg:hidden">Hidden on desktops!</div>`;
  const css = await generate(content);

  expect(css).toContain(`@media (pointer: coarse) {

  @media (min-width: 1024px) {

    .pointer-coarse\\:lg\\:hidden {
      display: none;
    }
  }
}`);
});

test('should generate any-pointer queries', async () => {
  const content = `<div class="pointer-any-fine:hidden">Hidden on mouse!</div>`;
  const css = await generate(content);

  expect(css).not.toContain(`@media (any-pointer: fine) {

    .pointer-any-fine\\:hidden {
      display: none;
    }
  }`);
});
