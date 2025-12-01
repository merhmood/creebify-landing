import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-josefin-sans)]">
      <div>
        <div className="relative h-screen w-screen">
          <Image src={"/bg.jpg"} alt="image" fill className="object-cover" />
        </div>
        <div className="absolute backdrop-blur-sm bg-white/25 h-screen w-screen top-0"></div>
        <div className="grid place-items-center absolute top-0 text-black h-screen w-screen">
          <div className="w-fit">
            <div className="text-center text-sm lg:text-base px-4">
              <h2 className="font-light mb-3 text-3xl lg:text-4xl font-[family-name:var(--font-jost-sans)]">
                Creebify
              </h2>
              <h1 className="text-6xl">COMING SOON</h1>
              <p className="font-light mt-4 text-xl lg:text-2xl font-[family-name:var(--font-jost-sans)]">
                🌱Live, connect, grow in affordable coliving spaces across Abuja
                & Lagos
              </p>
            </div>
            <Link href="#">
              <button className="block bg-white w-32 h-11 rounded-full text-black font-semibold mt-4 mx-auto">
                Join Waitlist
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
