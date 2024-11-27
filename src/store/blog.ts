import { create } from "zustand";
import axios from "axios";

interface BlogStore {
  blogs: string[];
}

const initialValues: BlogStore = {
  blogs: [],
};

const useBlogStore = create<BlogStoreState>((set) => ({
  ...initialValues,
  initilizeBlogStore: async () => {
    try {
      const response = await axios.get("/api/blogs");
      set({ blogs: response.data.blogs });
    } catch (error: any) {
      console.log(error.message);
    }
  },
  addBlog: async (payload) => {
    try {
      const response = await axios.post("/api/addBlogs", payload);
      set({ blogs: response.data.blogs });
    } catch (error: any) {
      console.log(error.message);
    }
  },
  reset: () => set({ blogs: [] }),
}));

export default useBlogStore;
