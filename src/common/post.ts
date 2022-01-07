type PostState = "read" | "unread";

export type Post = {
  title: string;
  body: string;
  date: Date;
  state: PostState;
};
