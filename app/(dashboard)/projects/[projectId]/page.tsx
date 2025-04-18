import React from "react"
import Link from "next/link"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function BreadcrumbWithCustomSeparator() {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/components">Components</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import UploadProjectImagescomponent from "@/components/UploadProjectImagescomponent"


const UploadProjectImagespage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params
    console.log(id);
    return (
        <section className="space-y-5">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link href="/projects">My projects</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <Card className='shadow-xl shadow-neutral-100 outline-none border-none'>
                <CardHeader>
                    <CardTitle className="capitalize text-2xl">upload project images</CardTitle>
                </CardHeader>
                <CardContent>
                    <UploadProjectImagescomponent />
                </CardContent>
            </Card>
        </section>
    )
}

export default UploadProjectImagespage