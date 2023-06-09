import Head from "next/head";
import Image from "next/image";
import VideoChat from "../component/VideoChat";
import RandVideoChat from "../component/RandVideoChat";
import HomePage from "../component/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {<HomePage />}
    </div>
  );
}
