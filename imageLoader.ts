export default function cloudflareLoader({
    src,
    width,
    quality,
}: {
    src: string;
    width: number;
    quality?: number;
}) {
    if (process.env.NODE_ENV === "development") {
        return src;
    }

    const normalizedSrc = src.startsWith("/") ? src : `/${src}`;

    const params: string[] = [`width=${width}`];
    if (quality) params.push(`quality=${quality}`);

    return `/cdn-cgi/image/${params.join(",")}${normalizedSrc}`;
}
