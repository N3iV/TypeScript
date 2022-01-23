import Link from "next/link";
import React from "react";
import { Button, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getBooks } from "../../lib/books";

const Book = ({ book }) => {
  console.log(book);
  return (
    <Layout>
      {book.map((item, idx) => (
        <div key={idx}>
          <Card>
            <Card.Body>
              <Card.Title>{item.bookName}</Card.Title>
              <Card.Text>{item.bookContent}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const book = await getBooks();
  console.log(book);
  return {
    props: {
      book,
    },
    revalidate: 1,
  };
};
export default Book;
