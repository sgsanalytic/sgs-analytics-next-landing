import { strapiAxios } from "@/lib/axios";
import {
  IContactTopic,
  IContactTopicsResponse,
} from "../interfaces/contactTopics.interfaces";

export const getContactTopics = async (): Promise<IContactTopic[]> => {
  const { data } = await strapiAxios.get<IContactTopicsResponse>(
    "/api/contact-topics",
    {
      params: {
        "filters[active][$eq]": true,
      },
    }
  );
  return data.data;
};
