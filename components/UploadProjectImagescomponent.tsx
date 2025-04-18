"use client"

import { useEdgeStore } from '@/lib/edgeStore';
import React from 'react'
import { UploaderProvider, type UploadFn } from './upload/uploader-provider';
import { ImageUploader } from './upload/multi-image';

const UploadProjectImagescomponent = () => {
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
        <UploaderProvider uploadFn={uploadFn} autoUpload>
            <ImageUploader
                maxFiles={20}
                maxSize={1024 * 1024 * 1} // 1 MB 
            />
        </UploaderProvider>
    )
}

export default UploadProjectImagescomponent