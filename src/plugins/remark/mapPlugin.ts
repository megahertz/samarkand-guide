import { findAndReplace, injectImport, type Root } from './utils';

export default function mapPlugin() {
  return (root: Root) => {
    findAndReplace(root, [
      [
        /@@@([\w-]+)/g,
        (_match, m1) => {
          injectImport(root, '@site/src/components/map', {
            InlineMap: true,
          });
          return {
            type: 'mdxJsxTextElement',
            name: 'InlineMap',
            attributes: [
              { type: 'mdxJsxAttribute', name: 'itemId', value: m1 },
            ],
            children: [],
            data: { _mdxExplicitJsx: true },
          };
        },
      ],
      [
        /@@([\w-]+)(\?[\w&=]+)?/g,
        (_match, mId, mOptions) => {
          injectImport(root, '@site/src/components/PlaceInfo', {
            default: 'PlaceInfo',
          });
          return {
            type: 'mdxJsxTextElement',
            name: 'PlaceInfo',
            attributes: [
              { type: 'mdxJsxAttribute', name: 'id', value: mId },
              { type: 'mdxJsxAttribute', name: 'options', value: mOptions },
            ],
            children: [],
            data: { _mdxExplicitJsx: true },
          };
        },
      ],
    ]);
  };
}
