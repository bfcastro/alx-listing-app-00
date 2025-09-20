import Head from "next/head";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { APP_TITLE } from "../constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
        <meta name="description" content="Airbnb-style listing page scaffold with Next.js, TS, and Tailwind" />
      </Head>

      <main className="p-6 max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Welcome to the {APP_TITLE}</h1>
          <p className="text-gray-600 mt-2">A clean foundation for an Airbnb-style listing experience.</p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Modern Apartment"
            description="A cozy apartment located in the heart of the city."
            imageUrl="/assets/placeholder.png"
          />
          <Card
            title="Beach House"
            description="Enjoy ocean views from this relaxing property."
            imageUrl="/assets/placeholder.png"
          />
          <Card
            title="Mountain Cabin"
            description="A peaceful retreat surrounded by nature."
            imageUrl="/assets/placeholder.png"
          />
        </section>

        <div className="mt-8">
          <Button label="Explore More" onClick={() => alert("Loading more listings...")} />
        </div>
      </main>
    </>
  );
}
