"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'

const formSchema = z.object({
    title: z.string().min(1, "Title is required"),
});


const AddPage = () => {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
        },
    })

    const demoClick = () => {
        const demoId = 12345
        router.push(`/addproject/${demoId}`)
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <section>
            <Card className='shadow-xl shadow-neutral-100 outline-none border-none'>
                <CardHeader>
                    <CardTitle className="capitalize text-2xl">add project</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="capitalize text-sm">project title</FormLabel>
                                        <FormControl>
                                            <Input {...field} className="p-3 rounded-none h-auto max-w-prose" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className='flex gap-2'>
                                <Button type="submit" className=" bg-blue-600 rounded-sm cursor-pointer hover:bg-blue-500 capitalize">add project</Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </section>
    )
}

export default AddPage