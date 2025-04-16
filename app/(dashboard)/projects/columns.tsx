"use client"

import { projectDetailsTypes } from "@/lib/types"
import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HiDotsVertical } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const columns: ColumnDef<projectDetailsTypes>[] = [
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "thumbnail",
        header: "Thumbnail",
        cell: ({ row }) => {
            return (
                <div className="size-20 rounded-lg relative">
                    <Image src={row.getValue("thumbnail")} alt="just a random image" className=" rounded-sm" fill />
                </div>)
        }
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "date",
        header: "Date",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            if (row.getValue('status') === 'published') {
                return <Badge variant={"outline"}>{row.getValue('status')}</Badge>
            } else {
                return <Badge variant={"destructive"}>{row.getValue('status')}</Badge>
            }
        }
    },
    {
        accessorKey: 'actions',
        header: 'Actions',
        cell: ({row}) => {
            const rowData = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-10 w-10 p-0 rounded-full cursor-pointer">
                            <span className="sr-only">Open menu</span>
                            <HiDotsVertical className="h-5 w-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="p-2">
                        <DropdownMenuItem className="p-2 cursor-pointer">
                            <FaEdit className=" size-5"/>
                            <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="p-2 cursor-pointer">
                            <MdDelete className=" size-5" />
                            <span>Delete</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]