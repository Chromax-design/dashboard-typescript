import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DataTable } from "./projects/data-table"
import { columns } from "./projects/columns"
import { projectDetails } from "@/lib/data"


const Home = () => {
  const filteredDetails = projectDetails.slice(0, 3);
  return (
    <section className='grid grid-cols-12'>
      <div className=" col-span-12">
        <Card className="shadow-xl shadow-neutral-100 outline-none border-none">
          <CardHeader>
            <CardTitle className="capitalize text-2xl">recent projects</CardTitle>
          </CardHeader>
          <hr />
          <CardContent>
           <DataTable columns={columns} data={filteredDetails} />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Home