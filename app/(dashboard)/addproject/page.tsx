"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'

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
import { UploaderProvider, type UploadFn } from '@/components/upload/uploader-provider'
import { SingleImageDropzone } from '@/components/upload/SingleImageDropzone'
import { useEdgeStore } from '@/lib/edgeStore'

const formSchema = z.object({
    title: z.string().min(1, "Title is required"),
});


const AddPage = () => {
    const { edgestore } = useEdgeStore()
    const uploadFn: UploadFn = React.useCallback(
        async ({ file, onProgressChange, signal }) => {
            const res = await edgestore.publicImages.upload({
                file,
                signal,
                onProgressChange,
            });
            // you can run some server action or api here
            // to add the necessary data to your database

            console.log(res);
            return res;
        },
        [edgestore],
    );
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
        },
    })

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
                            <div className='space-y-2'>
                                <FormLabel className="capitalize text-sm">select a thumbnail</FormLabel>
                                <UploaderProvider uploadFn={uploadFn} autoUpload>
                                    <SingleImageDropzone
                                        height={200}
                                        width={200}
                                        dropzoneOptions={{
                                            maxSize: 1024 * 1024 * 1, // 1 MB
                                        }}
                                    />
                                </UploaderProvider>
                            </div>
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="capitalize text-sm">project title</FormLabel>
                                        <FormControl>
                                            <Input {...field} className="p-3 rounded-none block h-auto" />
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