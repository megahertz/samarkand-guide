'use strict';

const visit = require('unist-util-visit');

module.exports = telephonePlugin;

function telephonePlugin() {
  return (root) => {
    visit(root, null, (node) => {
      if (!node.value?.includes('+998 ')) {
        return;
      }

      node.type = 'jsx';
      node.value = node.value.replaceAll(
        /\+998 \(\d\d\) \d\d\d-\d\d-\d\d/g,
        (match) => {
          const link = match.replaceAll(/[^\d+]+/g, '');
          return `<a href="tel:${link}">${match}</a>`;
        },
      );
    });
  };
}
