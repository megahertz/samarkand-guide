import { findAndReplace, type Root } from './utils';

export default function telephonePlugin() {
  return (root: Root) => {
    findAndReplace(root, [
      [
        /\+998 \(\d\d\) \d\d\d-\d\d-\d\d/g,
        (match: string) => {
          const link = match.replaceAll(/[^\d+]+/g, '');
          return {
            type: 'mdxJsxTextElement',
            name: 'a',
            attributes: [
              { type: 'mdxJsxAttribute', name: 'href', value: `tel:${link}` },
            ],
            children: [{ type: 'text', value: match }],
            data: { _mdxExplicitJsx: true } as Record<string, boolean>,
          };
        },
      ],
    ]);
  };
}
