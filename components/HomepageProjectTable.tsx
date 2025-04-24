import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaFolder } from "react-icons/fa";
import { useGetProjectsQuery } from "@/services/projects";
import Preloader from "./Preloader";
import { projects } from "@/lib/types";

const TableHeadData: string[] = ["Title", "Date", "Status"];

const HomepageProjectTable = () => {
  const { data, isLoading } = useGetProjectsQuery();
  return (
    <>
      {isLoading && <Preloader />}
      <Table>
        <TableHeader>
          <TableRow>
            {TableHeadData.map((data, i) => (
              <TableHead key={i}>{data}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {(data ?? [])?.length > 0 ? (
            data?.slice(0, 3).map((project: projects) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">
                  <Link href={`/projects/${project.id}`}>
                    <Button className=" cursor-pointer" variant={"link"}>
                      <FaFolder className="size-5" />
                      <span>{project.title}</span>
                    </Button>
                  </Link>
                </TableCell>
                <TableCell>
                  {new Date(project.createdAt).toLocaleString()}
                </TableCell>
                <TableCell>
                  {
                    <Badge
                      variant={
                        project.status === "PUBLISHED"
                          ? "outline"
                          : "destructive"
                      }
                    >
                      {project.status}
                    </Badge>
                  }
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={TableHeadData.length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default HomepageProjectTable;
