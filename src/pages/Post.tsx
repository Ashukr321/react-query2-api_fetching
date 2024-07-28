import { useQuery } from "@tanstack/react-query";
import PostCard from "../components/PostCard";
import Loder from "../components/Loder";
interface Post {
  id: number;
  title: string;
  body: string;
  albumId: number;
}

const fetchData = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

const Post = () => {
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery({ queryKey: ["posts"], queryFn: fetchData });

  if (isLoading) {
    return <div><Loder/></div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="p-4 bg-black">
      <h1 className="text-center font-bold text-blue-500 mb-3">POSTS</h1>
      <div className="p-4 flex flex-wrap justify-center mx-auto gap-4">
        {posts?.map(post => {
          return <PostCard key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Post;
