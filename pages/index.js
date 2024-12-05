import Head from "next/head";

export default function Home(props) {
  return (
    <div className="main-page bg-blue-300">
      <Head>
        <title>Welcome to this Locksmith | Home</title>
        <meta name="description" content="A brief description of the page content." />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <meta property="og:title" content="The Locksmith | Home" />
        <meta property="og:description" content="Description Here" />
        <meta property="og:image" content="/assets/photos/lock-picking.jpg" />
      </Head>
    </div>
  );
}
