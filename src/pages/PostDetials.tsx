import { useQuery } from "@tanstack/react-query";
import { useParams } from 'react-router-dom';
import PostCard from "../components/PostCard";
import Loder from "../components/Loder";
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number; // Note: it's userId, not albumId
}


const PostDetails = () => {
  const { postId } = useParams();
  const fetchData = async (): Promise<Post> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = await response.json();
    return data;
  };
  
  const { isLoading, error, data } = useQuery({
    queryKey: ["post", postId],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <div><Loder/></div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
    <div  className="flex h-screen bg-black justify-center items-center ">
    <PostCard post={data} />

    </div>
    </>
  );
};

export default PostDetails;