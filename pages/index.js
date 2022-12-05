import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="The Driver Omaha Support" />
        <form
          name="support"
          method="POST"
          data-netlify="true"
          style={{ width: "100%" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <label for="email">Email Address:</label>
            <input
              type="text"
              id="email"
              name="email"
              required
              minlength="10"
              maxlength="20"
            />
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label for="question">Question:</label>
            <textarea type="text" id="question" name="question" required />
            <input type="hidden" name="support" value="contact" />
            <button type="submit">Submit</button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}
