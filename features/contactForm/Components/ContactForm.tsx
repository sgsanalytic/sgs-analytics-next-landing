"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useContactForm, MESSAGE_MAX_LENGTH } from "../hooks/useContactForm";

export const ContactForm = () => {
  const { form, onSubmit, isLoading, isSuccess, isError, error, reset } =
    useContactForm();

  return (
    <Card className="p-6 mx-auto container">
      {isSuccess && (
        <Alert className="mb-6 border-success/50 bg-success/10">
          <CheckCircle className="h-4 w-4 text-success" />
          <AlertDescription className="text-success">
            ¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo
            pronto.
          </AlertDescription>
        </Alert>
      )}

      {isError && (
        <Alert className="mb-6 border-destructive/50 bg-destructive/10">
          <AlertCircle className="h-4 w-4 text-destructive" />
          <AlertDescription className="text-destructive">
            {error?.message || "Error al enviar el mensaje. Intenta de nuevo."}
          </AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl>
                  <Input
                    placeholder="john.doe@example.com"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => {
              const charCount = field.value?.length || 0;
              const remaining = MESSAGE_MAX_LENGTH - charCount;
              const isNearLimit = remaining <= 50;
              const isOverLimit = remaining < 0;

              return (
                <FormItem>
                  <FormLabel>Mensaje</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Me gustaría..."
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <div className="flex justify-between items-center">
                    <FormMessage />
                    <span
                      className={`text-xs ${
                        isOverLimit
                          ? "text-destructive"
                          : isNearLimit
                          ? "text-warning text-amber-500"
                          : "text-muted-foreground"
                      }`}
                    >
                      {charCount} / {MESSAGE_MAX_LENGTH}
                    </span>
                  </div>
                </FormItem>
              );
            }}
          />
          <div className="flex gap-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? "Enviando..." : "Enviar"}
            </Button>
            {isSuccess && (
              <Button type="button" variant="outline" onClick={() => reset()}>
                Enviar otro mensaje
              </Button>
            )}
          </div>
        </form>
      </Form>
    </Card>
  );
};
