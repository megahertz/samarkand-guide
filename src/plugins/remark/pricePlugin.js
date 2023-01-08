'use strict';

const visit = require('unist-util-visit');

module.exports = pricePlugin;

const importStatement = "import Price from '@site/src/components/Price';";

function pricePlugin() {
  return (root) => {
    visit(root, 'text', (node) => {
      if (!node.value?.includes('UZS')) {
        return;
      }

      node.type = 'jsx';
      node.value = node.value.replace(/([\d,.]+)UZS/g, '<Price>$1</Price>');

      if (root.children[0]?.value !== importStatement) {
        root.children.unshift({
          type: 'import',
          value: importStatement,
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 48, offset: 47 },
            indent: [],
          },
        });
      }
    });
  };
}
