import nextMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'

const withMDX = nextMDX({
   extension: /\.mdx?$/,
   options: {
      remarkPlugins: [remarkFrontmatter],
      rehypePlugins: []
   }
})

export default withMDX({
   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
   images: {
      remotePatterns: [
         {
            hostname: "mgg5womv3ce8kqvl.public.blob.vercel-storage.com",
            protocol: "https",
         },
         {
            hostname: "https://dummyimage.com",
            protocol: "https",
         }
      ]
   }
})
