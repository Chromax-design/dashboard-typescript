"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UploadProjectImagescomponent from "@/components/UploadProjectImagescomponent";
import { useParams } from "next/navigation";

const UploadProjectImagespage = () => {
  const { projectId } = useParams();
  return (
    <section className="space-y-5">
      <Breadcrumb className="pt-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/projects">My projects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{projectId}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="shadow-xl shadow-neutral-100 outline-none border-none">
        <CardHeader>
          <CardTitle className="capitalize text-2xl">
            upload project images
          </CardTitle>
        </CardHeader>
        <CardContent>
          <UploadProjectImagescomponent />
        </CardContent>
      </Card>
    </section>
  );
};

export default UploadProjectImagespage;
