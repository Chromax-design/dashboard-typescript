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
import { projectDetailsTypes } from "@/lib/types";
import {
  useDeleteProjectMutation,
  useGetProjectByIdQuery,
} from "@/services/projects";
import { useEffect } from "react";
import { normalizeError } from "@/helpers/helper";
import { toast } from "sonner";
import { useEdgeStore } from "@/lib/edgeStore";

const DeleteProject = ({ rowData }: { rowData: projectDetailsTypes }) => {
  const [deleteProject, { isSuccess, error }] = useDeleteProjectMutation();
  const { id } = rowData;
  const { data: projectData } = useGetProjectByIdQuery({ id });
  const projectImages = projectData?.images || [];
  const { edgestore } = useEdgeStore();

  const handleClick = async () => {
    if (projectImages?.length > 0) {
      for (const image of projectImages) {
        await edgestore.publicImages.delete({
          url: image.url,
        });
      }
    }
    await deleteProject({ id });
  };

  useEffect(() => {
    if (error) {
      const errMsg = normalizeError(error);
      toast.error(errMsg || "An unknown error has occurred");
    }
    if (isSuccess) {
      toast.success("Deleted successfully");
    }
  }, [error, isSuccess]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Are you sure about this?
          </DialogTitle>
          <DialogDescription className="sr-only">
            edit the title
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-center! gap-4">
          <DialogClose asChild>
            <Button
              type="button"
              className="p-3 capitalize"
              variant={"destructive"}
              onClick={() => handleClick()}
            >
              delete project
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteProject;
