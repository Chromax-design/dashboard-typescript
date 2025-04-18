import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { DataTable } from "../data-table"
  import { columns } from "../columns"
  import { projectDetails } from "@/lib/data"
  import { FaPlus } from "react-icons/fa"
  import { Button } from "@/components/ui/button"
  import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  
  

const ProjectPage = () => {
  return (
    <section>
    <Card className="shadow-xl shadow-neutral-100 outline-none border-none">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="capitalize text-2xl">my projects</CardTitle>
        <Dialog>
          <DialogTrigger asChild>
            <Button type="button" variant={'outline'} className="cursor-pointer">
              <span className="text-lg"><FaPlus /></span>
              <span className="text-sm">New</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Create project</DialogTitle>
            </DialogHeader>
            <Input
              type="text"
            />
            <DialogFooter className="sm:justify-start">
              <Button type="submit" className="p-3 capitalize">
                create
              </Button>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <hr />
      <CardContent>
        <DataTable columns={columns} data={projectDetails} />
      </CardContent>
    </Card>
  </section>
  )
}

export default ProjectPage