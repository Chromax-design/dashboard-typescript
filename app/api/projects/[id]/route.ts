import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const GET = async (req: Request, context: any) => {
  try {
    const { id } = context.params;
    const data = await prisma.project.findUnique({
      where: {
        id,
      },
    });
    if (!data)
      return NextResponse.json({ message: "Data not found" }, { status: 404 });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
};

export const PATCH = async (req: Request, context: any) => {
  try {
    const { id } = context.params;
    const { title } = await req.json();
    const projectExists = prisma.project.findUnique({
      where: {
        id,
      },
    });

    if (!projectExists)
      return NextResponse.json(
        { message: "Project does not exist" },
        { status: 404 }
      );

    await prisma.project.update({
      where: {
        id,
      },
      data: {
        title,
      },
    });

    return NextResponse.json(
      { message: "Data updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json("An error has occurred", { status: 500 });
  }
};

export const DELETE = async (req: Request, context: any) => {
  try {
    const { id } = context.params;
    const projectExists = await prisma.project.findUnique({
      where: {
        id,
      },
    });

    if (!projectExists)
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );

    await prisma.project.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      { message: "Deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
};
