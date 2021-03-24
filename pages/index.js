import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { withRouter } from "next/router";
import Top from "../components/Top.js";
import Main from "../components/Main.js";
import Brand from "../components/Brand.js";
import Review from "../components/Review.js";
import Review2 from "../components/Review2.js";
import Feature from "../components/Feature.js";
import Ichiran from "../components/Ichiran.js";
import Otoiawase from "../components/Otoiawase.js";
import Footer from "../components/Footer.js";
import Banner from "../components/Banner.js";
import Brand2 from "../components/Brand2.js";
import Video from "../components/Video.js";
import Tile from "../components/Tile.js";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React, { Component } from "react";
import ReactDOM from "react-dom";

import "tailwindcss/tailwind.css";
import "tailwindcss/colors";
import Layout from "../components/Layout";

function Home({ router }) {
  return (
    <Layout>
      <Top />
      <Main />
      
      <Brand />
      <Brand2 />
      <Tile />
      <Video />

      <Feature />
      {/* <Review /> */}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={7000}
      >
        <div>
          <Review />
        </div>
        <div>
          <Review2 />
        </div>
        <div>
          <Review />
        </div>
      </Carousel>
      <Ichiran />
      <Banner />

      <Otoiawase />
      <Footer />
    </Layout>
  );
}

export default withRouter(Home);
