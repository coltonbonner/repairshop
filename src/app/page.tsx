import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col items-center justify-center h-dvh max-w-5xl text-center bg-black bg-opacity-50 mx-auto">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">
            Acme Computer <br /> Repair Shop
          </h1>
          <address>
            555 Main St. <br />
            Anytown, USA 12345 <br />
          </address>
          <p>Open Monday - Friday | 9am - 5pm</p>
          <Link href="tel:555-555-5555" className="hover:underline">
            555-555-5555
          </Link>
        </div>
      </main>
    </div>
  );
}
