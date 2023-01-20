'use strict';

const visit = require('unist-util-visit');

module.exports = placePlugin;

const importStatement =
  "import PlaceInfo from '@site/src/components/PlaceInfo';";

function placePlugin() {
  return (root) => {
    visit(root, null, (node) => {
      if (!node.value?.includes('@@')) {
        return;
      }

      node.type = 'jsx';
      node.value = node.value.replace(/@@([\w-]+)/g, '<PlaceInfo id="$1" />');

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
