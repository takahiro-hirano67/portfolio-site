import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/metadata";

/**
 * robots.txt
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*", // すべての検索エンジン（クローラー）を対象
            allow: "/", // すべてのページの巡回を許可
        },
        sitemap: `${SITE_URL}/sitemap.xml`, // サイトマップの場所を知らせる
    };
}
