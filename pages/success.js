import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
export default function Success() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="The Driver Omaha Support" />
        <p className="description">Successfully sent message</p>
      </main>

      <Footer />
    </div>
  );
}
