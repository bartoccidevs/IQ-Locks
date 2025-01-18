import Head from "next/head"

export default function MetaHead({ metaData }) {
    if (!metaData.ogTitle) {
        metaData.ogTitle = metaData.title
    } else if (!metaData.ogDescription) {
        metaData.ogDescription = metaData.description
    }
    return (
        <Head>
            <title>{metaData.title}</title>
            <meta name="description" content={metaData.description} />
            <meta name="keywords" content={metaData.keywords} />
            <meta property="og:title" content={metaData.ogTitle} />
            <meta property="og:description" content={metaData.ogDescription} />
            <meta property="og:image" content={metaData.ogImage} />
        </Head>
    )
}