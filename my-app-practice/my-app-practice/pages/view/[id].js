import { useRouter } from "next/router";
import { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";
import Item from "../../src/component/Item";
import Head from "next/head";

const Post = ({ item, name }) => {
  //   const router = useRouter()
  //   const { id } = router.query

  //   const [item, setItem] = useState({})

  //   const API_URL =
  //   `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  // function getData() {
  //   Axios.get(API_URL).then((res) => {
  //     setItem(res.data)

  //   });
  // }

  // useEffect(()=>{
  //     if (id && id > 0) {
  //         getData();
  //       }
  // },[id])

  return (
    <>
      { item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name : process.env.name
    }, // will be passed to the page component as props
  };
}
