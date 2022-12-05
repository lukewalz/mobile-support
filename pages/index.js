import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Driver Support</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="The Driver Omaha Support" />
        <form
          name="support"
          method="POST"
          data-netlify="true"
          style={{ width: "100%" }}
          action="/success"
        >
          <input type="hidden" name="form-name" value="support" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              minLength="10"
              maxLength="20"
            />
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="question">Question:</label>
            <textarea type="text" id="question" name="question" required />
            <button type="submit">Submit</button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}
