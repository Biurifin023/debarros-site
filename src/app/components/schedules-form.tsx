"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteFormData } from "../schemas/quote-form";
import Input from "../utils/input";
import FileInput from "../utils/file-input";
import Select from "../utils/select";
import Textarea from "../utils/textarea";

type SchedulesFormProps = {
  onSuccess?: () => void;
};

export default function SchedulesForm({ onSuccess }: SchedulesFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  async function onSubmit(data: QuoteFormData) {
    console.log(data);
    onSuccess?.();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-4"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nome">Nome</label>
          <Input 
          placeholder="Digite seu nome"
          id="nome" 
          type="text" {...register("nome")} />
          {errors.nome && (
            <p className="mt-1 font-sans text-sm text-accent">{errors.nome.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <Input 
          placeholder="Digite seu e-mail"
          id="email" type="email" {...register("email")} />
          {errors.email && (
            <p className="mt-1 font-sans text-sm text-accent">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="telefone">Telefone/WhatsApp</label>
          <Input 
          placeholder="(99) 99999-9999"
          id="telefone" type="tel" {...register("telefone")} />
          {errors.telefone && (
            <p className="mt-1 font-sans text-sm text-accent">
              {errors.telefone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="estilo">Opções de cores</label>
          <Select id="estilo" {...register("estilo")} defaultValue="">
            <option value="" disabled>
              Selecione
            </option>
            <option value="colorida">Colorida</option>
            <option value="preto-e-cinza">Preto e cinza</option>
          </Select>
          {errors.estilo && (
            <p className="mt-1 font-sans text-sm text-accent">
              {errors.estilo.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="bodyLocal">Local do corpo</label>
        <Input 
        placeholder="Ex: Peito, Ombro, etc."
        id="bodyLocal" type="text" {...register("bodyLocal")} />
        {errors.bodyLocal && (
          <p className="mt-1 font-sans text-sm text-accent">
            {errors.bodyLocal.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="references">Faça upload de referências</label>
        <FileInput
          id="references"
          accept="image/*"
          multiple
          {...register("references")}
        />
        {errors.references && (
          <p className="mt-1 font-sans text-sm text-accent">
            {errors.references.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="description">Descreva sua ideia</label>
        <Textarea placeholder="Ex: Quero um dragão old school com fogo vermelho e detalhes em preto..." id="description" rows={5} {...register("description")} />
        {errors.description && (
          <p className="mt-1 font-sans text-sm text-accent">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="mt-4 flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-fit cursor-pointer rounded-md bg-accent px-6 py-2.5 uppercase text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Enviando..." : "Enviar orçamento"}
        </button>
      </div>
    </form>
  );
}
