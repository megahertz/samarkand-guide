'use strict';

const visit = require('unist-util-visit');

module.exports = iconPlugin;

const importStatement = "import Icon from '@site/src/components/Icon';";

function iconPlugin() {
  return (root) => {
    visit(root, null, (node) => {
      if (!node.value?.includes('icon-')) {
        return;
      }

      node.type = 'jsx';
      node.value = node.value.replace(/icon-([\w-]+)/g, '<Icon name="$1" />');

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
