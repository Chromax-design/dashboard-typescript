"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageUploader } from "@/components/upload/multi-image"
import { UploaderProvider, UploadFn } from "@/components/upload/uploader-provider"
import { useEdgeStore } from "@/lib/edgeStore"


const UploadProjectImagespage = () => {
    const { edgestore } = useEdgeStore();
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
    return (
        <section>
            <Card className='shadow-xl shadow-neutral-100 outline-none border-none'>
                <CardHeader>
                    <CardTitle className="capitalize text-2xl">upload project images</CardTitle>
                </CardHeader>
                <CardContent>
                    <UploaderProvider uploadFn={uploadFn} autoUpload>
                        <ImageUploader
                            maxFiles={20}
                            maxSize={1024 * 1024 * 1} // 1 MB 
                        />
                    </UploaderProvider>
                </CardContent>
            </Card>
        </section>
    )
}

export default UploadProjectImagespage