"use client"

import { projectDetailsTypes } from "@/lib/types"
import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { FaFolder } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import Link from "next/link"

export const columns: ColumnDef<projectDetailsTypes>[] = [
    {
        accessorKey: "title",
        header: "Title",
        cell: ({ row }) => {
            return (
                <Link href={`/projects/${row.original.title}`}>
                    <Button className=" cursor-pointer" variant={'link'}>
                        <FaFolder className="size-5" />
                        <span>{row.getValue("title")}</span>
                    </Button>
                </Link>
            )
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