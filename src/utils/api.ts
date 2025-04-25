
import { Posts } from "@/types/Posts";
import { Users } from "@/types/Users";
import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export const getPosts = async (): Promise<Posts[]> => {
    const response = await api.get("/posts");
    return response.data;
}

export const getPost = async (id: number): Promise<Posts> => {
    const response = await api.get(`/posts/${id}`);
    return response.data;
}

export const getUsers = async (): Promise<Users[]> => {
    const response = await api.get("/users");
    return response.data;
}

export const postPost = (data: Omit<Posts, "id">) => {
    const response = api.post("/posts", data);
    return response;
}