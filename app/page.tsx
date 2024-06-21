import Image from "next/image";
import allKittens from "./lib/requests/allKittens";
import { robotoMono, rubik } from "./fonts";

export default async function Home() {
  const data = await allKittens();
  const noKittens = data.kittens.length === 0;
  return (
    <main className="mt-5">
      {noKittens && (
        <h1 className={`text-center ${robotoMono.className} text-xl`}>
          NO KITTEN AVAILABLE!
        </h1>
      )}
      {data.kittens.map((kitten: any) => (
        <div className="mt-2">
          <div className="flex gap-5 items-center">
            <h3 className={`${robotoMono.className} text-xl`}>{kitten.name}</h3>
            <button
              type="submit"
              className={`${rubik.className} text-center mt-2 text-lg bg-[#fff] 
            text-[#000] px-2 py-1 rounded-lg`}
            >
              Delete
            </button>
          </div>
          <p className={`${robotoMono.className}`}>Age: {kitten.age}</p>
          <p className={`${robotoMono.className}`}>
            Cuteness: {kitten.cuteness}%
          </p>
          <p className={`${robotoMono.className}`}>
            Softness: {kitten.softness}%
          </p>
        </div>
      ))}
    </main>
  );
}
