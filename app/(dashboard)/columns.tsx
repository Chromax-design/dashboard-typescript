"use client";

import { projectDetailsTypes } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaFolder } from "react-icons/fa";
import Link from "next/link";
import EditProject from "@/components/EditProject";
import DeleteProject from "@/components/DeleteProject";

export const columns: ColumnDef<projectDetailsTypes>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return (
        <Link href={`/projects/${row.original.id}`}>
          <Button className=" cursor-pointer" variant={"link"}>
            <FaFolder className="size-5" />
            <span className=" max-sm:underline">{row.getValue("title")}</span>
          </Button>
        </Link>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      return `${new Date(row.original.createdAt).toLocaleString()}`;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <Badge
          variant={
            row.getValue("status") === "PUBLISHED" ? "outline" : "destructive"
          }
        >
          {row.getValue("status")}
        </Badge>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const rowData = row.original;
      return (
        <div className="flex gap-2">
          <EditProject rowData={rowData} />
          <DeleteProject rowData={rowData} />
        </div>
      );
    },
  },
];
