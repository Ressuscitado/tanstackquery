import { postPost } from "@/utils/api"
import { queryClient } from "@/utils/queryCliente";
import { useMutation } from "@tanstack/react-query"

export const usePostMutation = () => {
    const mutation = useMutation({
        mutationFn: postPost,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["posts"]
            })
        }
    });
    return mutation;
}