import { Post } from "../common/post";
import { FC } from "react";
import { PostItem } from "./PostItem";
import "../../styles/postList.css";

type PostListProps = {
  posts: Post[];
};

export const PostList: FC<PostListProps> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post: Post, key: number) => (
      <PostItem key={key} post={post} />
    ))}
  </div>
);
