import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LoginForm from "../components/Shared/LoginForm";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-800 min-h-screen grid justify-center content-center ">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-teal-600 font-bold text-3xl">
        track and store your digital goods
      </h1>
      <LoginForm />
    </div>
  );
};

export default Home;
