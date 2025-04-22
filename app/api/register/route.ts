import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import bcrypt from "bcryptjs";

export const POST = async (req: Request) => {
  //   try {
  //     const { firstName, lastName, email, password } = await req.json();
  //     const userExists = await prisma.user.findUnique({
  //       where: {
  //         email: email,
  //       },
  //     });

  //     if (userExists) {
  //       return NextResponse.json(
  //         { error: "User already exists" },
  //         { status: 400 }
  //       );
  //     }

  //     const salt = await bcrypt.genSalt(10);
  //     const hashedPassword = await bcrypt.hash(password, salt);
  //     const user = await prisma.user.create({
  //       data: {
  //         firstName: firstName,
  //         lastName: lastName,
  //         email: email,
  //         password: hashedPassword,
  //       },
  //     });

  //     const { password: _, ...safeUser } = user;

  //     return NextResponse.json(
  //       { message: "User created successfully", safeUser },
  //       { status: 201 }
  //     );
  //   } catch (error) {
  //     console.error(error);
  //     return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  //   }
  return NextResponse.json(
    { message: "This is temporarily disabled" },
    { status: 405 }
  );
};
