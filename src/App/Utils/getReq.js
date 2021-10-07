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


export const getRevenue = async () => {
  try {
    const res = await api.get("/revenue");
    return {data:res.data,success:true};
  } catch (error) {
    return { success: false, error: "Unable to fetch Revenue" };
  }
};

export const putProfile = async (arr,email) => {
  try {
    console.log(arr,email);
    const res = await api.put("/"+email+"/profile", arr);
    //const res = await axios.put('https://httpbin.org/put',arr)
    console.log(res.data);  } 
    catch (error) {
    return { success: false, error: "Unable to fetch Revenue" };
  }
};