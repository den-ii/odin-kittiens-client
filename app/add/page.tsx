"use client";
import { poppins, poppins_m, robotoMono, rubik } from "../fonts";
import { useState } from "react";

export default function addPage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [cuteness, setCuteness] = useState("");
  const [softness, setSoftness] = useState("");

  function submitRequest(e: any) {
    e.preventDefault();
    fetch("http://localhost:4000/kittens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        kitten: {
          name: name,
          age: age,
          cuteness: cuteness,
          softness: softness,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }

  return (
    <main className="mt-5 border-gray-1000/[0.15] border rounded-xl max-w-[500px] mx-auto p-5">
      <form className="flex flex-col gap-2" onSubmit={submitRequest}>
        <div>
          <label className={`${robotoMono.className} text-lg block mb-1`}>
            Name:
            <input
              type="text"
              name="name"
              className={`${robotoMono.className} rounded-xl text-black block w-full px-3 py-1`}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label className={`${robotoMono.className} text-lg block mb-1`}>
            Age:
            <input
              type="number"
              name="age"
              className={`${robotoMono.className} rounded-xl text-black block  w-full px-3 py-1`}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label className={`${robotoMono.className} text-lg block mb-1`}>
            Cuteness:
            <input
              type="number"
              name="cuteness"
              className={`${robotoMono.className} rounded-xl text-black block  w-full px-3 py-1`}
              onChange={(e) => setCuteness(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label className={`${robotoMono.className} text-lg block mb-1`}>
            Softness:
            <input
              type="number"
              name="softness"
              className={`${robotoMono.className} rounded-xl text-black block  w-full px-3 py-1`}
              onChange={(e) => setSoftness(e.target.value)}
            />
          </label>
        </div>

        <div>
          <button
            type="submit"
            className={`${rubik.className} block mx-auto text-center mt-2 text-lg bg-[#fff] 
            text-[#000] px-3 py-2 rounded-xl w-[250px]`}
          >
            ADD KITTEN
          </button>
        </div>
      </form>
    </main>
  );
}
