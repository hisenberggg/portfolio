// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// 2nd config
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url)
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
// });

// export default withMDX({
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
// });


import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})
 
// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig)




