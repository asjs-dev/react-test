import { SortFunction, sortByDateAsc } from "../common/sort";
import { Post } from "../common/post";
import { request } from "../common/request";
import { useEffect, useState } from "react";
import { PostList } from "./PostList";
import "../../styles/app.css";

const sortPostList = (sortFunction: SortFunction, postList: Post[]) =>
  postList.sort(sortFunction);

export default function App() {
  const [result, setResult] = useState<Post[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    request(5)
      .then((postList: Post[]) =>
        postList.map((post) => {
          post.state = "unread";
          return post;
        })
      )
      .then(sortPostList.bind({}, sortByDateAsc))
      .then((postList) => {
        setResult(postList);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      {isLoaded ? (
        <PostList posts={result} />
      ) : (
        <div className="LoadingRender">Loading</div>
      )}
    </div>
  );
}
