"use client";

import React, { useEffect } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { projectDetailsTypes } from "@/lib/types";
import { useUpdateProjectMutation } from "@/services/projects";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { normalizeError } from "@/helpers/helper";
import { toast } from "sonner";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title cannot be less than 2 characters",
  }),
});

const EditProject = ({ rowData }: { rowData: projectDetailsTypes }) => {
  const [updateProject, { isLoading, error, isSuccess }] =
    useUpdateProjectMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: rowData?.title,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const productId = rowData.id;
    await updateProject({ id: productId, ...values });
    form.reset();
  };

  useEffect(() => {
    if (error) {
      const errMsg = normalizeError(error);
      toast.error(errMsg || "An unknown error has occurred");
    }
    if (isSuccess) {
      toast.success("Updated successfully");
    }
  }, [error, isSuccess]);

  useEffect(() => {
    if (rowData?.title) {
      form.reset({ title: rowData.title });
    }
  }, [rowData.title]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" disabled={isLoading ? true : false}>
          {isLoading ? "Updating..." : "Edit"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Title</DialogTitle>
          <DialogDescription className="sr-only">
            edit the title
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="p-3 rounded-none block h-auto"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="submit" className="p-3 capitalize">
                  save changes
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProject;
