import Head from "next/head";

export default function Home(props) {
  return (
    <div className="main-page bg-blue-300">
      <Head>
        <title>Locksmith Homepage</title>
        <meta name="description" content="A brief description of the page content." />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <meta property="og:title" content="Title Here" />
        <meta property="og:description" content="Description Here" />
        <meta property="og:image" content="image_url_here" />
      </Head>
    </div>
  );
}
