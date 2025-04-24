"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "../data-table";
import { columns } from "../columns";
import { FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import withAuth from "@/lib/withAuth";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  useCreateProjectMutation,
  useGetProjectsQuery,
} from "@/services/projects";
import { useEffect } from "react";
import { normalizeError } from "@/helpers/helper";
import { toast } from "sonner";
import Preloader from "@/components/Preloader";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title cannot be less than 2 characters",
  }),
});

const ProjectPage = () => {
  const [createProject, { isLoading, error, isSuccess }] =
    useCreateProjectMutation();

  const { data: projects, isLoading: projectLoading } = useGetProjectsQuery();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await createProject(values);
    form.reset();
  };

  useEffect(() => {
    if (error) {
      const errMsg = normalizeError(error);
      toast.error(errMsg || "An unknown error occurred");
    }
    if (isSuccess) {
      toast.success("Project created successfully");
    }
  }, [error, isSuccess]);

  return (
    <>
      {projectLoading && <Preloader />}
      <section>
        <Card className="shadow-xl dark:shadow-sm shadow-accent outline-none border-none">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="capitalize text-2xl">my projects</CardTitle>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  variant={"outline"}
                  className="cursor-pointer"
                  disabled={isLoading ? true : false}
                >
                  <span className="text-lg">
                    <FaPlus className={isLoading ? "hidden" : "inline-block"} />
                  </span>
                  <span className="text-sm">
                    {isLoading ? "Creating..." : "New"}
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Create project</DialogTitle>
                  <DialogDescription className="sr-only">
                    create project
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form
                    className="space-y-4"
                    onSubmit={form.handleSubmit(onSubmit)}
                  >
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
                      <DialogTrigger asChild>
                        <Button type="submit" className="p-3 capitalize">
                          create
                        </Button>
                      </DialogTrigger>
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">
                          Cancel
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <hr />
          <CardContent>
            <DataTable columns={columns} data={projects ?? []} />
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default withAuth(ProjectPage);
