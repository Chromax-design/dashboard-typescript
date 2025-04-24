import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const POST = async (req: Request) => {
  try {
    const { password, newPassword, id } = await req.json();
    const isIdentical = password === newPassword;
    if (!isIdentical) {
      return NextResponse.json(
        { message: "Passwords do not match" },
        { status: 400 }
      );
    }

    const res = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!res)
      return NextResponse.json({ message: "User not found" }, { status: 404 });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await prisma.user.update({
      where: {
        id,
      },
      data: {
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "Password updated succesfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An error occured" }, { status: 500 });
  }
};
