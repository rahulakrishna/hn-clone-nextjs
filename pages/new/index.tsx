import { NextPage } from "next";
import { Key } from "react";
import axios from "axios";
import { formatDistance } from "date-fns";
import { PostsList, Post } from "../../styles/post";

export async function getStaticProps() {
  const response = await axios({
    method: "get",
    url: "http://hn.algolia.com/api/v1/search",
    params: {
      tags: "front_page",
      page: 1,
    },
  });
  console.log({ hits: response.data.hits });
  return {
    props: {
      posts: response.data.hits,
    },
  };
}

type NewPageProps = {
  posts: Array<{
    objectID: Key;
    title: string;
    url: string;
    author: string;
    points: number;
    num_comments: number;
    created_at: string;
  }>;
};

const New: NextPage = (props: NewPageProps) => {
  const { posts } = props;
  console.log({ posts });
  return (
    <PostsList>
      {posts.map((p) => (
        <Post key={p.objectID}>
          <span className="points">{p.points}</span>
          <a href={p.url}>{p.title}</a>
          <span className="url">({new URL(p.url).origin})</span>
          <span className="author">by {p.author}</span>{" "}
          <span className="time">
            {formatDistance(new Date(p.created_at), new Date(), {
              addSuffix: true,
            })}
          </span>
        </Post>
      ))}
    </PostsList>
  );
};

export default New;
