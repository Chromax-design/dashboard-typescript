import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const POST = async (req: Request) => {
  try {
    const { title } = await req.json();
    await prisma.project.create({
      data: {
        title,
      },
    });
    return NextResponse.json(
      { message: "Post created successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const res = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.error(error);
  }
};
