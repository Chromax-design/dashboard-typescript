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

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const UploadProjectImagespage = () => {
  const { projectId } = useParams();
  const { data: project, isLoading } = useGetProjectByIdQuery({
    id: projectId as string,
  });
  const images = project?.images || [];
  const imageCount = images.length;
  const imagesLeft = 20 - imageCount;

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
              {project?.title} ({imageCount} / 20 images uploaded)
            </CardTitle>
          </CardHeader>
          <CardContent>
            {imageCount < 20 && (
              <UploadProjectImagescomponent
                projectId={project?.id as string}
                maxFiles={imagesLeft}
              />
            )}
            {imageCount > 0 && (
              <div className=" mt-10">
                <LightGallery
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  elementClassNames="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5"
                >
                  {images.map((image, i) => {
                    return (
                      <a href={image.url} className="">
                        <img
                          alt="img1"
                          src={image.thumbnailUrl}
                          className=" rounded-sm w-full h-80 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                          key={i}
                        />
                      </a>
                    );
                  })}
                </LightGallery>
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default withAuth(UploadProjectImagespage);
