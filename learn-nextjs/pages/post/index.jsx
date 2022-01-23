import Link from "next/link";
import { Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPost } from "../../lib/post";

const Post = ({ posts }) => {
  return (
    <Layout>
      {posts.map((post) => (
        <Card key={post.id}>
          <Card.Body>
            <Card.Title>
              {post.id}){post.title}
            </Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Link href={`post/${post.id}`} passHref>
              <Card.Link>See more</Card.Link>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Layout>
  );
};
//Get static data from backend/db/api
export const getStaticProps = async () => {
  const posts = await getPost(10);
  return {
    props: {
      posts,
    },
  };
};
export default Post;
