import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { projectDetails } from '@/lib/data'
import { Badge } from './ui/badge'
import Link from 'next/link'
import { Button } from './ui/button'
import { FaFolder } from 'react-icons/fa'

const TableHeadData: string[] = ['Title', 'Date', 'Status']

const HomepageProjectTable = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {
                        TableHeadData.map((data, i) => (
                            <TableHead key={i}>{data}</TableHead>
                        ))
                    }
                </TableRow>
            </TableHeader>
            <TableBody>
                {projectDetails.slice(0, 3).map((project, i) => (
                    <TableRow key={i}>
                        <TableCell className="font-medium">
                            <Link href={`/projects/${project.title}`}>
                                <Button className=" cursor-pointer" variant={'link'}>
                                    <FaFolder className="size-5" />
                                    <span>{project.title}</span>
                                </Button>
                            </Link>
                        </TableCell>
                        <TableCell>{project.date}</TableCell>
                        <TableCell>
                            {
                                <Badge variant={project.status === 'published' ? 'outline' : 'destructive'}>
                                    {project.status}
                                </Badge>
                            }
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default HomepageProjectTable