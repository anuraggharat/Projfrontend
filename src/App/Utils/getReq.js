import api from "./api";

export const getNews = async () => {
  try {
    const res = await api.get("/news");
    return { data: res.data, success: true };
  } catch (error) {
    return { success: false, error: "Unable to fetch  News" };
  }
};

export const getFaqs = async () => {
  try {
    const res = await api.get("/faq");
    return {data:res.data,success:true};
  } catch (error) {
    return { success: false, error: "Unable to fetch Faq's" };
  }
};
