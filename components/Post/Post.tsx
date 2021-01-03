import Link from "next/link";
import { FunctionComponent } from "react";
import { Post as PostType } from "../../shared/types";
import { Card, Lead, Figure, Title } from "./style";

interface PostProps {
  post: PostType;
}

const Post: FunctionComponent<PostProps> = ({ post }) => {
  return (
    <Link href="/post/[id]" as={`/post/${post.id}`} passHref>
      <Card>
        <Figure>
          <img alt={post.title} src={post.image} />
        </Figure>
        <Title>{post.title}</Title>
        <Lead>{post.lead}</Lead>
      </Card>
    </Link>
  );
};

export default Post;
