import { Post } from "../common/post";
import { generateImage } from "../common/utils";
import { FC } from "react";
import "../../styles/postItem.css";

type PostItemProps = {
  post: Post;
};

export const PostItem: FC<PostItemProps> = ({ post }) => (
  <section className="Post" data-state={post.state}>
    <div className="header-section">
      <img src={generateImage()} alt={post.title} />
      <div className="title-group">
        <b>{post.title}</b>
        <span>{post.date.toUTCString()}</span>
      </div>
    </div>
    <p>{post.body}</p>
  </section>
);
