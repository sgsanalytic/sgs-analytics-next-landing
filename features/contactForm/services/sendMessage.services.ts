import {
  ISendServicesBody,
  ISendServicesResponse,
} from "../interfaces/sendServices.interfaces";
import { strapiAxios } from "@/lib/axios";

export const sendMessageService = async (body: ISendServicesBody) => {
  const { data } = await strapiAxios.post<ISendServicesResponse>(
    "/api/contact-messages/send",
    body
  );
  return data;
};
