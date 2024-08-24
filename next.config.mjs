import withMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {

    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

    // async redirects() {
    //     return [
    //     {
    //         source: '/PrivateRepo',
    //         destination: '/',
    //         permanent: true,
    //     },
    //     ]
    // }

};
export default withMDX()(nextConfig)