import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center gap-4">
      <Image
        src={"/profile.png"}
        alt="profile"
        width={128}
        height={128}
        className="rounded-full object-cover"
      />

      <h1 className="text-3xl font-bold">Abdul Haseeb</h1>
      <p className="text-gray-600">Next.js Developer</p>
    </section>
  );
}