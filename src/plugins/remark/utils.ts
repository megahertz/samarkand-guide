import { ImportDeclaration } from 'estree';
import { type Root } from 'mdast';
import { MdxjsEsm } from 'mdast-util-mdxjs-esm';
import 'mdast-util-mdx';

export type { Root } from 'mdast';
export { findAndReplace } from 'mdast-util-find-and-replace';

export function injectImport(
  root: Root,
  source: string,
  names: Record<string, string | boolean>,
) {
  const importDeclarations = ensureImportDeclarations(root);
  let statement = importDeclarations.find((d) => d.source.value === source);
  if (!statement) {
    statement = {
      type: 'ImportDeclaration',
      specifiers: [],
      source: { type: 'Literal', value: source, raw: `'${source}'` },
    };
    importDeclarations.push(statement);
  }

  Object.entries(names).forEach(([name, local]) => {
    const localName = typeof local === 'string' ? local : name;

    if (name === 'default') {
      const specifier = statement!.specifiers.find(
        (s) => s.type === 'ImportDefaultSpecifier',
      );

      if (!specifier) {
        statement!.specifiers.push({
          type: 'ImportDefaultSpecifier',
          local: { type: 'Identifier', name: localName },
        });
      }

      return;
    }

    const specifier = statement!.specifiers.find(
      (s) => s.local.name === localName,
    );

    if (!specifier) {
      statement!.specifiers.push({
        type: 'ImportSpecifier',
        imported: { type: 'Identifier', name },
        local: { type: 'Identifier', name: localName },
      });
    }
  });
}

function ensureImportDeclarations(root: Root): ImportDeclaration[] {
  const alreadyInjectedNode: MdxjsEsm = root.children.find(
    (node) => node.type === 'mdxjsEsm' && node.value === 'localPluginImports',
  ) as MdxjsEsm;

  if (alreadyInjectedNode) {
    return alreadyInjectedNode.data?.estree?.body as ImportDeclaration[];
  }

  const newEsmNode: MdxjsEsm = {
    type: 'mdxjsEsm',
    value: 'localPluginImports',
    data: {
      estree: {
        type: 'Program',
        body: [],
        sourceType: 'module',
      },
    },
  };

  root.children.unshift(newEsmNode);

  return newEsmNode.data?.estree?.body as ImportDeclaration[];
}
