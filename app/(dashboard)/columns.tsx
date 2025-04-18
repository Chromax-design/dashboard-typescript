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
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HiDotsVertical } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Copy } from "lucide-react"

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
        accessorKey: "date",
        header: "Date",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            return (
                <Badge variant={row.getValue('status') === 'published' ? 'outline' : 'destructive'}>
                    {row.getValue('status')}
                </Badge>
            );

        }
    },
    {
        accessorKey: 'actions',
        header: 'Actions',
        cell: ({ row }) => {
            const rowData = row.original
            return (
                <div className="flex gap-2">
                    <form>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Edit</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>Edit Title</DialogTitle>
                                </DialogHeader>
                                <Input
                                    type="text"
                                    defaultValue={rowData.title}
                                />
                                <DialogFooter className="sm:justify-start">
                                    <Button type="submit" className="p-3 capitalize">
                                        save changes
                                    </Button>
                                    <DialogClose asChild>
                                        <Button type="button" variant="secondary">
                                            Close
                                        </Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </form>
                    <form>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="destructive">Delete</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle className="text-center text-2xl">Are you sure about this?</DialogTitle>
                                </DialogHeader>
                                <DialogFooter className="flex justify-center! gap-4">
                                    <Button type="submit" className="p-3 capitalize" variant={'destructive'}>
                                        delete project
                                    </Button>
                                    <DialogClose asChild>
                                        <Button type="button" variant="secondary">
                                            close
                                        </Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </form>

                </div>
            )
        }
    }
]