import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { sendMessageService } from "../services/sendMessage.services";
import type { ISendServicesBody } from "../interfaces/sendServices.interfaces";

export const MESSAGE_MIN_LENGTH = 10;
export const MESSAGE_MAX_LENGTH = 500;

const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(50),
  email: z.string().email("Ingresa un correo electrónico válido"),
  company: z.string().max(100),
  role: z.string().max(100),
  topic: z.string(),
  message: z
    .string()
    .min(
      MESSAGE_MIN_LENGTH,
      `El mensaje debe tener al menos ${MESSAGE_MIN_LENGTH} caracteres`
    )
    .max(
      MESSAGE_MAX_LENGTH,
      `El mensaje no puede exceder ${MESSAGE_MAX_LENGTH} caracteres`
    ),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const useContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      role: "",
      topic: "",
      message: "",
    },
    mode: "onChange",
  });

  const mutation = useMutation({
    mutationFn: sendMessageService,
    onSuccess: () => {
      form.reset();
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    const body: ISendServicesBody = {
      name: values.name,
      email: values.email,
      message: values.message,
      ...(values.company?.trim() && { company: values.company.trim() }),
      ...(values.role?.trim() && { role: values.role.trim() }),
      ...(values.topic?.trim() && { topic: values.topic.trim() }),
    };
    mutation.mutate(body);
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    reset: mutation.reset,
  };
};
