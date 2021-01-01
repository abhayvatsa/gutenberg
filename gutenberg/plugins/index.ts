import remark from 'remark'
import visit from 'unist-util-visit'

// TODO: cleanup
// This function parses "h1" from markdown AST
export function getHeading(source: string) {
  let needle = null
  remark()
    .use(() => (tree, file) => {
      visit(tree, 'heading', (node) => {
        if (node.depth === 1) {
          needle = node
        }
      })
    })
    .process(source)
  // @ts-ignore
  return needle?.children[0].value
}
