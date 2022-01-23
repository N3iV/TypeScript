import Link from "next/link";
import { Button } from "react-bootstrap";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Hello World</h1>
        <p>Lorem sadasdas dasd</p>
        <p>
          <Button variant="primary">Learn More</Button>
        </p>
      </div>
    </Layout>
  );
}
