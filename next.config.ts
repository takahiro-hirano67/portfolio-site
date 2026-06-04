import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    images: {
        qualities: [75, 90],
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/portfolio", // リダイレクト先のパス
                permanent: true, // 永続的なリダイレクト（308）の場合: true
            },
        ];
    },
};

export default nextConfig;
