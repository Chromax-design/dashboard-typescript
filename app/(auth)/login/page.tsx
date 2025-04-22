"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { AuthError } from "next-auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 6 characters.",
  }),
});

const Loginpage = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      const res = await signIn("credentials", { ...values, redirect: false });
      setIsLoading(false);
      if (res?.error) {
        toast.error("Invalid login credentials");
      } else {
        router.replace("/");
        toast.success("Login successful");
      }
    } catch (error) {
      if (error instanceof AuthError) {
        toast.error("Invalid login credentials");
        throw error;
      } else {
        toast.error("Something went wrong");
      }
    }
  };
  return (
    <div className="space-y-10 w-full">
      <h1 className="capitalize text-3xl text-center font-semibold">Login</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize text-sm">Email</FormLabel>
                <FormControl>
                  <Input {...field} className="p-3 rounded-none block h-auto" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize text-sm">Password</FormLabel>
                <FormControl>
                  <Input {...field} className="p-3 rounded-none block h-auto" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className=" rounded-none"
            disabled={isLoading ? true : false}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
      {/* <p className="text-sm">
        Don't have an account?{" "}
        <Link href={"/register"} className="text-destructive">
          Register
        </Link>
      </p> */}
    </div>
  );
};

export default Loginpage;
