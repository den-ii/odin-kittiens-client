import Link from "next/link";
import React from "react";
import { inter, poppins, robotoMono, rubik } from "../fonts";

function Navbar() {
  return (
    <nav className="flex py-4 justify-between items-center">
      <h1 className={`text-2xl ${poppins.className} font-bold`}>Kittens</h1>
      <div className="flex gap-5">
        <Link href="/" className={`${robotoMono.className}`}>
          All
        </Link>
        <Link href="/add" className={`${robotoMono.className}`}>
          Add
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
