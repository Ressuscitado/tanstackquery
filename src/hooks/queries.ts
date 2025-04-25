
import { getPost, getPosts, getUsers } from "@/utils/api"
import { queryClient } from "@/utils/queryCliente";
import { useQuery } from "@tanstack/react-query"

export const usePosts = () => {
    const query = useQuery({
        queryKey: ["posts"],
        queryFn: getPosts
    });
    return query;
}
export const usePost = (id: number) => {
    const query = useQuery({
        queryKey: ["post", id],
        queryFn: () => getPost(id)
    });
    return query;
}

export const useUsers = () => {
    const query = useQuery({
        queryKey: ["users"],
        queryFn: getUsers
    });
    return query;
}

export const prefetchUsers = () => {
    queryClient.prefetchQuery({
        queryKey: ["users"],
        queryFn: getUsers
    });
}