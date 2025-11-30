import axios from "axios";

const strapiAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
});

export { strapiAxios };
