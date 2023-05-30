"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const emailFormSchema = z.object({
  name: z
    .string()
    .nonempty("Este campo precisa ser preenchido!")
    .max(50, "Limite máximo de 50 caracteres atingido!")
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  email: z
    .string()
    .nonempty("Este campo precisa ser preenchido")
    .email("E-mail inválido")
    .toLowerCase(),
  subject: z
    .string()
    .nonempty("Este campo precisa ser preenchido")
    .max(200, "Limite máximo de 200 caracteres atingido!"),
  message: z
    .string()
    .nonempty("Este campo precisa ser preenchido")
    .max(700, "Limite máximo de 700 caracteres atingido!"),
});

type EmailFormData = z.infer<typeof emailFormSchema>;

export default function EmailForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormData>({ resolver: zodResolver(emailFormSchema) });

  const sendEmail = (data: EmailFormData) => {
    console.log(data);
    setValue("email", "");
    setValue("name", "");
    setValue("subject", "");
    setValue("message", "");
  };

  return (
    <form
      className="bg-myLightGrey rounded-lg flex flex-col gap-3 p-5 w-5/12 max-md:w-4/5"
      method="submit"
      onSubmit={handleSubmit(sendEmail)}
    >
      <div className="flex flex-col">
        <label htmlFor="email">Email:</label>
        <input
          className="p-2 rounded"
          type="text"
          id="email"
          placeholder="Insira seu endereço de e-mail"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-700">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="name">Nome:</label>
        <input
          className="p-2 rounded"
          type="text"
          id="name"
          placeholder="Insira seu nome completo"
          {...register("name")}
        />
        {errors.name && (
          <span className="text-red-700">{errors.name.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="subject">Assunto:</label>
        <input
          className="p-2 rounded"
          type="text"
          id="subject"
          placeholder="Insira o motivo do contato"
          {...register("subject")}
        />
        {errors.subject && (
          <span className="text-red-700">{errors.subject.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="message">Mensagem:</label>
        <textarea
          className="p-2 rounded"
          id="message"
          placeholder="Escreva sua mensagem aqui..."
          {...register("message")}
        />
        {errors.message && (
          <span className="text-red-700">{errors.message.message}</span>
        )}
      </div>

      <button
        className="bg-myGreen duration-200 hover:bg-lime-950 hover:fill-myLightGrey hover:text-myLightGrey hover:shadow-md h-full rounded-full p-1 text-lg "
        type="submit"
        disabled={isSubmitting}
      >
        Enviar Mensagem
      </button>
    </form>
  );
}
