"use client";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface FormValues extends Record<string, string> {
  user_name: string;
  user_email: string;
  user_message: string;
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    user_name: z.string().min(5).max(50),
    user_email: z.string().email(),
    user_message: z.string().min(5).max(500),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: "",
      user_email: "",
      user_message: "",
    },
  });

  const sendEmail = (values: FormValues) => {
    setLoading(true);
    emailjs
      .send("service_2n1b8f9", "template_dxv4he7", values, {
        publicKey: "N21MnRLlPBPVc0mQf",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.reset();
          //   toast({
          //     title: "Message sent",
          //     description:
          //       "Thank you! I will reach out to you within the next 24 hours.",
          //   });
          toast.success("Message sent", {
            description:
              "Thank you! I will reach out to you within the next 24 hours.",
          });
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          //   toast({
          //     title: "Message sending failed",
          //     description:
          //       "Sorry, an error occurred while sending your message. Please try again later.",
          //   });
          toast.error("Message sending failed", {
            description:
              "Sorry, an error occurred while sending your message. Please try again later.",
          });
          setLoading(false);
        },
      );
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(sendEmail)} className="grid gap-4">
          {/* formfield name*/}
          <FormField
            control={form.control}
            name="user_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* formfield email*/}
          <FormField
            control={form.control}
            name="user_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>

                <FormControl>
                  <Input type="email" placeholder="john@doe.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="user_message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>

                <FormControl>
                  <Textarea
                    placeholder="What can I do for you?"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* submit button */}
          {loading ? (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full">
              <p>Send Message</p>
            </Button>
          )}
        </form>
      </Form>
    </>
  );
}
