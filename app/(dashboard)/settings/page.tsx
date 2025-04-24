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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import withAuth from "@/lib/withAuth";
import { useUpdatePasswordMutation } from "@/services/authentication";
import { toast } from "sonner";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { normalizeError } from "@/helpers/helper";

const formSchema = z.object({
  password: z.string().min(5, {
    message: "password should not be less than 5 characters",
  }),
  newPassword: z.string().min(5, {
    message: "password should not be less than 5 characters",
  }),
});

const SettingsPage = () => {
  const [updatePassword, { isLoading, isSuccess, error }] =
    useUpdatePasswordMutation();

  const session = useSession();
  const userId = session?.data?.user?.id;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      newPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { newPassword, password } = values;
    const isIdentical = newPassword === password;
    if (!isIdentical) {
      toast.error("Passwords do not match");
      return null;
    }
    const formData = { ...values, id: String(userId) };
    await updatePassword(formData);
  };

  useEffect(() => {
    if (error) {
      const errMsg = normalizeError(error);
      toast.error(errMsg || "An unknown error has occured");
    }
    if (isSuccess) {
      toast.success("Password Updated successfully");
      signOut({ callbackUrl: "/login" });
    }
  }, [error, isSuccess]);

  return (
    <section>
      <Card className="shadow-xl dark:shadow-sm shadow-accent outline-none border-none">
        <CardHeader>
          <CardTitle className="capitalize text-2xl">change password</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full"
            >
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize text-sm">
                      new password
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        className="p-3 rounded-none block h-auto"
                      />
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
                    <FormLabel className="capitalize text-sm">
                      re-enter password
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        className="p-3 rounded-none block h-auto"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className=" rounded-none bg-primary"
                disabled={isLoading ? true : false}
              >
                {isLoading ? "Updating..." : "Update"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default withAuth(SettingsPage);
