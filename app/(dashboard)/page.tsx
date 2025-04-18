import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import HomepageProjectTable from "@/components/HomepageProjectTable"
import Link from "next/link"
import Image from "next/image"



const Home = () => {
  return (
    <section className="space-y-4">
      <Card className="shadow-xl shadow-neutral-100 outline-none border-none">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="capitalize text-2xl">latest projects</CardTitle>
          <Link href={'/projects'}>
            <Button type="button" variant={'outline'} className="cursor-pointer">
              <span className="text-sm">View all</span>
            </Button>
          </Link>
        </CardHeader>
        <hr />
        <CardContent>
          <HomepageProjectTable />
        </CardContent>
      </Card>
      <Card className="shadow-xl shadow-neutral-100 outline-none border-none">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="capitalize text-2xl">latest stories</CardTitle>
          <Link href={'/projects'}>
            <Button type="button" variant={'outline'} className="cursor-pointer">
              <span className="text-sm">View all</span>
            </Button>
          </Link>
        </CardHeader>
        <hr />
        <CardContent className="relative w-full h-screen">
          <Image src={'/banners/coming-soon.jpg'} alt="coming soon" fill className="rounded-sm object-cover"/>
        </CardContent>
      </Card>
    </section>
  )
}

export default Home