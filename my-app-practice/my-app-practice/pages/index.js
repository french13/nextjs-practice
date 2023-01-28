import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Axios from "axios";
import ItemList from "../src/component/ItemList";
import { Header } from "semantic-ui-react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

export default function Home({ list }) {
  // const [list, setList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // function getData() {
  //   Axios.get(API_URL).then((res) => {
  //     console.log(res.data);
  //     setList(res.data);
  //     setIsLoading(false);
  //   });
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Head>
        <title>home</title>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>
        베스트 상품
      </Header>
      <ItemList list={list.slice(0, 9)} />
      <Head>
        <title>home</title>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>
        신 상품
      </Header>
      <ItemList list={list.slice(9)} />)
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    }, // will be passed to the page component as props
  };
}
