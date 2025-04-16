import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTable } from "./data-table"
import { columns } from "./columns"
import { projectDetails } from "@/lib/data"


const ProjectPage = () => {
  return (
    <section>
      <Card className="shadow-xl shadow-neutral-100 outline-none border-none">
        <CardHeader>
          <CardTitle className="capitalize text-2xl">all projects</CardTitle>
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