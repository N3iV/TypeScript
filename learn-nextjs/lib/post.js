import axios from "axios";

export const getPost = async () => {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=7"
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
