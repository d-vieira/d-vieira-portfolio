"use client";
import clsx from "clsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRef, useState } from "react";
import Message from "./Message";

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
    .nonempty("Este campo precisa ser preenchido!")
    .email("E-mail inválido!")
    .toLowerCase(),
  subject: z
    .string()
    .nonempty("Este campo precisa ser preenchido!")
    .max(200, "Limite máximo de 200 caracteres atingido!"),
  message: z
    .string()
    .nonempty("Este campo precisa ser preenchido!")
    .max(700, "Limite máximo de 700 caracteres atingido!"),
});

type EmailFormData = z.infer<typeof emailFormSchema>;

export default function EmailForm() {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailFormSchema),
  });

  const [showMessage, setShowMessage] = useState(false);

  const sendEmail = (data: EmailFormData) => {
    console.log(data);
    setValue("email", "");
    setValue("name", "");
    setValue("subject", "");
    setValue("message", "");
    setShowMessage(true);
  };

  return (
    <form
      className="bg-myLightGrey rounded-lg shadow-xl flex flex-col gap-3 p-5 w-5/12 max-md:w-4/5"
      method="submit"
      onSubmit={handleSubmit(sendEmail)}
    >
      <div className="flex flex-col">
        <label htmlFor="email">Email:</label>
        <input
          className={clsx(
            "p-2 rounded border outline-none",
            errors.email ? "border-red-700" : "border-myGreen"
          )}
          type="text"
          id="email"
          placeholder="Insira seu endereço de e-mail"
          {...register("email", {
            onBlur() {
              trigger("email");
            },
          })}
        />
        {errors.email && (
          <span className="text-red-700 text-sm">
            ⛔ {errors.email.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="name">Nome:</label>
        <input
          className={clsx(
            "p-2 rounded border outline-none",
            errors.name ? "border-red-700" : "border-myGreen"
          )}
          type="text"
          id="name"
          placeholder="Insira seu nome completo"
          {...register("name", {
            onBlur() {
              trigger("name");
            },
          })}
        />
        {errors.name && (
          <span className="text-red-700 text-sm">⛔ {errors.name.message}</span>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="subject">Assunto:</label>
        <input
          className={clsx(
            "p-2 rounded border outline-none",
            errors.subject ? "border-red-700" : "border-myGreen"
          )}
          type="text"
          id="subject"
          placeholder="Insira o motivo do contato"
          {...register("subject", {
            onBlur() {
              trigger("subject");
            },
          })}
        />
        {errors.subject && (
          <span className="text-red-700 text-sm">
            ⛔ {errors.subject.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="message">Mensagem:</label>
        <textarea
          className={clsx(
            "p-2 rounded border outline-none",
            errors.message ? "border-red-700" : "border-myGreen"
          )}
          id="message"
          rows={6}
          placeholder="Escreva sua mensagem aqui..."
          {...register("message", {
            onBlur() {
              trigger("message");
            },
          })}
        />
        {errors.message && (
          <span className="text-red-700 text-sm">
            ⛔ {errors.message.message}
          </span>
        )}
      </div>

      <button
        className="bg-myGreen shadow-xl duration-200 hover:bg-lime-950 hover:fill-myLightGrey hover:text-myLightGrey h-full rounded-full p-1 text-lg"
        type="submit"
        disabled={isSubmitting}
      >
        Enviar Mensagem
      </button>

      <Message
        message="Mensagem enviada com sucesso!"
        show={showMessage}
        onClose={() => setShowMessage(false)}
      />
    </form>
  );
}
