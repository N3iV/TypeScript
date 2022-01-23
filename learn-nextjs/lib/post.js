import axios from "axios";

export const getPost = async (limit) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostIds = async (limit) => {
  const posts = await getPost(limit);
  //   //return
  //   ({
  //     params: {
  //       id: `1`,
  //     },
  //   },
  //   {
  //     params: {
  //       id: `2`,
  //     },
  //   })
  // ];
  return posts.map((post) => ({
    params: {
      id: `${post.id}`,
    },
  }));
};

export const getPostById = async (id) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
