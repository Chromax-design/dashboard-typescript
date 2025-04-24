import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const POST = async (req: Request, context: any) => {
  try {
    const { id } = context.params;
    const { thumbnailUrl, url } = await req.json();
    const isProjectExist = await prisma.project.findUnique({
      where: {
        id,
      },
    });

    if (!isProjectExist)
      return NextResponse.json(
        { message: "project does not exist" },
        { status: 404 }
      );

    const imageUploadData = {
      projectId: id,
      url,
      thumbnailUrl,
    };

    const result = await prisma.image.createMany({
      data: imageUploadData,
    });

    if (result.count === 0) {
      NextResponse.json(
        { message: "No images were uploaded" },
        { status: 400 }
      );
    }
    await prisma.project.update({
      where: {
        id,
      },
      data: {
        status: "PUBLISHED",
      },
    });
    return NextResponse.json(
      { message: "Images uploaded successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    NextResponse.json({ message: "An error occurres" }, { status: 500 });
  }
};
