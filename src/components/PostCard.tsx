interface PostCardProps {
  post: Post;
}
import { Link } from "react-router-dom";
const PostCard = ({ post }: PostCardProps) => {
  return (
  <>
    <Link to={`/post/${post.id}`}>
    <div className="w-[240px] rounded-xl bg-white shadow-3xl h-[280px] border p-2">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>{post.albumId}</p>
    </div>
    </Link>
  </>
  );
};

export default PostCard;
