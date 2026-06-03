import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/metadata";

/**
 * sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "monthly", // プロフィール更新の頻度（目安）
            priority: 1, // このページの優先度（1.0が最大）
        },
    ];
}
