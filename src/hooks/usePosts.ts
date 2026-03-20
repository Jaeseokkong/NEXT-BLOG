import { PostMeta } from "@/types/post";
import { useQuery } from "@tanstack/react-query";


export function usePosts(): PostMeta[] {
    const { data } = useQuery({
        queryKey: ["posts"],
        queryFn: () => {},
    })

    return data;
}

