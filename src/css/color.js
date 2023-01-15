#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

class Color {
  r = 0;
  g = 0;
  b = 0;

  constructor(rgbHex) {
    const [_m, r, g, b] = rgbHex.match(/#(\w\w)(\w\w)(\w\w)/);
    this.r = Number.parseInt(r, 16);
    this.g = Number.parseInt(g, 16);
    this.b = Number.parseInt(b, 16);
  }

  get dark() {
    return this.toColor(-5, -13, -9);
  }

  get darkThemeColor() {
    return this.toColor(-9, 61, 75);
  }

  get darker() {
    return this.toColor(-7, -20, -13);
  }

  get darkest() {
    return this.toColor(-14, -40, -26);
  }

  get light() {
    return this.toColor(5, 13, 9);
  }

  get lighter() {
    return this.toColor(7, 20, 13);
  }

  get lightest() {
    return this.toColor(14, 40, 26);
  }

  get primary() {
    return this.toColor();
  }

  get css() {
    return `
  --ifm-color-primary: ${this.primary};
  --ifm-color-primary-dark: ${this.dark};
  --ifm-color-primary-darker: ${this.darker};
  --ifm-color-primary-darkest: ${this.darkest};
  --ifm-color-primary-light: ${this.light};
  --ifm-color-primary-lighter: ${this.lighter};
  --ifm-color-primary-lightest: ${this.lightest};`;
  }

  toColor(r = 0, g = 0, b = 0) {
    return `#${
      normalizeColor(this.r + r)
        .toString(16)
        .padStart(2, '0') +
      normalizeColor(this.g + g)
        .toString(16)
        .padStart(2, '0') +
      normalizeColor(this.b + b)
        .toString(16)
        .padStart(2, '0')
    }`;
  }
}

function normalizeColor(color) {
  return Math.min(255, Math.max(0, color));
}

function main([lightThemeHex = '#2e8555', darkThemeHex]) {
  const lightThemeColor = new Color(lightThemeHex);
  const darkThemeColor = new Color(
    darkThemeHex || lightThemeColor.darkThemeColor,
  );

  const css = `/* colors */
:root {${lightThemeColor.css}
  --ifm-code-font-size: 95%;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);
}

[data-theme='dark'] {${darkThemeColor.css}
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.3);
}
/* colors-end */`;

  patchCssFile(css);
}

function patchCssFile(css) {
  const customCssPath = path.join(__dirname, 'custom.css');
  const content = fs.readFileSync(customCssPath, 'utf8');
  const [beforeBlock, middleBlock] = content.split('/* colors */');
  const [_, afterBlock] = middleBlock.split('/* colors-end */');
  const newContent = beforeBlock + css + afterBlock;
  fs.writeFileSync(customCssPath, newContent, 'utf8');
}

main(process.argv.slice(2));
