import React from "react";
import { useParams } from "react-router-dom";
import { IParams } from "./types/index.d";

const generatePage = (name: string) => {
  const customName = name.split("")[0].toUpperCase() + name.slice(1);
  console.log(customName);
  const page = () => require(`./Pages/${customName}`).default;

  try {
    return React.createElement(page());
  } catch (err) {
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
