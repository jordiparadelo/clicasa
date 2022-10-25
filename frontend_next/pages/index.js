import Head from "next/head";
import Image from "next/image";
// Styles
import styles from "styles/Home.module.css";
// Containers
import {Hero,Ventajas,Proceso,Banner,Testimonios, Partners} from 'containers'
// Constants
import { ventajas, proceso, testimonios, partners, banner as bannerProps } from "../constants";

export default function Home({ventajas, proceso, testimonios, partners}) {
  return (
    <>
      <Head>
        <title>CliCasa</title>
        <meta name="description" content="Generated by CliCasa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="home">
        <Hero/>
        <Ventajas ventajas={ventajas}/>
        <Proceso proceso={proceso}/>
        <Banner {...bannerProps}/>
        <Testimonios testimonios={testimonios}/>
        <Partners partners={partners}/>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
      props: {
          ventajas,
          proceso,
          testimonios,
          partners,
      }
  }
}