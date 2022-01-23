import Link from "next/link";
import React from "react";
import { Button, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getJoke } from "../../lib/joke";

const Random = ({ joke }) => {
  return (
    <Layout>
      <Card>
        <Card.Body>
          <Card.Title>Here is your random joke</Card.Title>
          <Card.Text>{joke.value}</Card.Text>
          <Link href="/" passHref>
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const joke = await getJoke();
  console.log(joke);
  if (!joke) {
    // return {
    //   notFound: true,
    // };
    return {
      redirect: {
        destination: "/post",
        permanent: false,
      },
    };
  }
  return {
    props: {
      joke,
    },
  };
};
export default Random;
