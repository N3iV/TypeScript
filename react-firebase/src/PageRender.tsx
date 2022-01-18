import React from "react";
import { useParams } from "react-router-dom";
import { IParams } from "types/index.d";

const generatePage = (name: string) => {
  const page = () => require(`./Pages/${name}`).default;
  console.log(name);
  try {
    return React.createElement(page());
  } catch (err) {
    console.log(err);
    return <h2>Not Found</h2>;
  }
};

const PageRender = () => {
  const { page, id }: IParams = useParams();

  let name = "";
  if (page) {
    name = id ? `${page}/[id]` : `${page}`;
  }

  return generatePage(name);
};

export default PageRender;
