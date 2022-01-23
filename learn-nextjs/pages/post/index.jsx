import { Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPost } from "../../lib/post";

const Post = ({ posts }) => {
  return (
    <Layout>
      {posts.map((post) => (
        <Card key={post.id}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Layout>
  );
};
//Get static data from backend/db/api
export const getStaticProps = async () => {
  const posts = await getPost();
  return {
    props: {
      posts,
    },
  };
};
export default Post;
