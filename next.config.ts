import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{ hostname: 'images.unsplash.com', protocol: 'https' },
			{ hostname: 'lh3.googleusercontent.com', protocol: 'https' },
		],
	},
};

export default nextConfig;
