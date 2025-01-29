import fs from 'node:fs/promises'
import { unified } from 'unified'
import { remark } from 'remark'
import remarkParse from 'remark-parse'
import remarkHTML from 'remark-html'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import matter from 'gray-matter'

const f = await fs.readFile('README.md', 'utf-8')
const txt = String(f)
const html = await unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeSanitize)
  .use(rehypeStringify)
  .process(txt)

console.log()
console.log('BEGIN')
console.log()

console.log(html)
console.log()
console.log('>>>>>')
console.log()
console.log(html.toString())

console.log()
console.log('>>>>>')
console.log()

const { data, content } = matter(txt)

const html2 = await remark()
  .use(remarkHTML)
  .process(content)

console.log(html2.toString())
console.log()
console.log('>>>>>')
console.log()

console.log(data)

console.log()
console.log('END')
console.log()
