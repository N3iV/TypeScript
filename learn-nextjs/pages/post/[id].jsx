import { useRouter } from "next/router";
import React from "react";
import { Spinner } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPostById, getPostIds } from "../../lib/post";

const PostDetail = ({ post }) => {
  const router = useRouter();
  //Neu trang chua tao ra , isFallBack cua router luon luon la true
  //Va trang tam thoi sau day se duoc render
  if (router.isFallback) {
    return (
      <Spinner animation="border" role="status" variant="dark">
        <span className="sr-only"> </span>
      </Spinner>
    );
  }
  //Khi getStaticProps chay lan dau tien
  // Cac lan sau thi trang so 6 (vd) se duoc dc vao danh sach pre-render

  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getPostIds(5);
  return {
    paths,
    // fallback: false, // Bat ki path nao k return boi getStaticPaths se toi trang 404
    fallback: true, //Path nao k return ngay lap tuc => show trang tam thoi,
    // doi getStaticProps chay xong => return trang hoan chinh
  };
};
export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id);
  return {
    props: {
      post,
    },
    revalidate: 1, // Dung de kiem tra xem o db co thay doi ko de cap nhap cho pre-render
  };
};
export default PostDetail;
