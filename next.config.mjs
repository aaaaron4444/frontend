/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
            },
        ],
    },
    env: {
        CONTENTFUL_SPACE_ID: "l9cs47795qd7",
        CONTENTFUL_ACCESS_TOKEN: "VW4O3lvBX9_LFSbVE_SIWqRz0W7r0tAX3wQzkw1FTXw"
    }
};

export default nextConfig;
