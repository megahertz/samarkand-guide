import { findAndReplace, injectImport, type Root } from './utils';

export default function iconPlugin() {
  return (root: Root) => {
    findAndReplace(root, [
      [
        /icon-([\w-]+)/g,
        (_match, m1) => {
          injectImport(root, '@site/src/components/Icon', { default: 'Icon' });
          return {
            type: 'mdxJsxTextElement',
            name: 'Icon',
            attributes: [{ type: 'mdxJsxAttribute', name: 'name', value: m1 }],
            children: [],
            data: { _mdxExplicitJsx: true },
          };
        },
      ],
    ]);
  };
}
