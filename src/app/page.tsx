"use client";

import { usePostMutation } from "@/hooks/mutation";
import { prefetchUsers, usePosts } from "@/hooks/queries";

export const Page = () => {

  prefetchUsers();
  const posts = usePosts();
  const postar = usePostMutation();

  const handleAddButton = () => {
    const data = {
      title: "Título do post",
      body: "Corpo do post",
      userId: 1
    }
    postar.mutate(data);
  }


  return (
    <div>
      <button onClick={handleAddButton}>Adicionar</button>
      <h1>Posts</h1>
      {posts.data?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      
    </div>
  );
};

export default Page;