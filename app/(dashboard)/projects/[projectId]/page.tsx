"use client";

import Preloader from "@/components/Preloader";
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
import withAuth from "@/lib/withAuth";
import { useGetProjectByIdQuery } from "@/services/projects";
import { useParams } from "next/navigation";

const UploadProjectImagespage = () => {
  const { projectId } = useParams();
  const { data: project, isLoading } = useGetProjectByIdQuery({
    id: projectId as string,
  });

  return (
    <>
      {isLoading && <Preloader />}
      <section className="space-y-5">
        <Breadcrumb className="pt-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/projects">My projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="capitalize">
                {project?.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Card className="shadow-xl dark:shadow-sm shadow-accent outline-none border-none">
          <CardHeader>
            <CardTitle className="capitalize text-2xl">
              upload project images
            </CardTitle>
          </CardHeader>
          <CardContent>
            <UploadProjectImagescomponent projectId={project?.id as string} />
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default withAuth(UploadProjectImagespage);
