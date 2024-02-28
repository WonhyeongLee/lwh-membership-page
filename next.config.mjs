import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/upload/:slug',
  //       destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:slug`, // Matched parameters can be used in the destination
  //     },
  //   ]
  // },
};

export default withVanillaExtract(nextConfig);
