import React from "react";
import Image from "next/image";
import Link from "next/link";

export default {
  logo: (
    <>
      <Image
        src="/logo.svg" // Replace with the path to your logo
        alt="Logo"
        width={50} // Adjust width as needed
        height={50} // Adjust height as needed
      />
    </>
  ),
  project: {
    link: "https://github.com/dedkola",
  },

  docsRepositoryBase:
    "https://github.com/dedkola/nextjs-example-docs/tree/main/",

  // lang: "en",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="My docs memo" />
      <meta property="og:description" content=" " />
      <meta property="og:image" content="./public/logo.svg " />
    </>
  ),

  //add `Docs` to title
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Docs",
    };
  },
  footer: {
    content: (
      <span>
        {new Date().getFullYear()}
        <a href="https://docs1.tkweb.site" target="_blank"></a>.
      </span>
    ),
  },
};
