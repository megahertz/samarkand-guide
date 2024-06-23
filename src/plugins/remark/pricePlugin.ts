import { findAndReplace, injectImport, Root } from './utils';

export default function pricePlugin() {
  return (root: Root) => {
    findAndReplace(root, [
      [
        /([\d,.]+)UZS/g,
        (_match, m1) => {
          injectImport(root, '@site/src/components/Price', {
            default: 'Price',
          });
          return {
            type: 'mdxJsxTextElement',
            name: 'Price',
            attributes: [],
            children: [{ type: 'text', value: m1 }],
            data: { _mdxExplicitJsx: true } as Record<string, boolean>,
          };
        },
      ],
      [
        /([\d,.]+)БРВ/g,
        (_match, m1) => {
          injectImport(root, '@site/src/components/Price', {
            default: 'Price',
          });
          return {
            type: 'mdxJsxTextElement',
            name: 'Price',
            attributes: [
              { type: 'mdxJsxAttribute', name: 'currency', value: 'brv' },
            ],
            children: [{ type: 'text', value: m1 }],
            data: { _mdxExplicitJsx: true } as Record<string, boolean>,
          };
        },
      ],
    ]);
  };
}
