"use client";

import { useEdgeStore } from "@/lib/edgeStore";
import React, { useEffect } from "react";
import { UploaderProvider, type UploadFn } from "./upload/uploader-provider";
import { ImageUploader } from "./upload/multi-image";
import { useUploadImagesMutation } from "@/services/projects";
import { normalizeError } from "@/helpers/helper";
import { toast } from "sonner";

const UploadProjectImagescomponent = ({ projectId }: { projectId: string }) => {
  const [uploadImages, { error, isSuccess }] = useUploadImagesMutation();
  const { edgestore } = useEdgeStore();
  const uploadFn: UploadFn = React.useCallback(
    async ({ file, onProgressChange, signal }) => {
      if (!projectId) throw new Error("Missing project ID");

      const res = await edgestore.publicImages.upload({
        file,
        signal,
        onProgressChange,
      });
      // you can run some server action or api here
      // to add the necessary data to your database
      const { thumbnailUrl, url } = res as {
        thumbnailUrl: string;
        url: string;
      };
      await uploadImages({ id: projectId, thumbnailUrl, url });
      console.log(res);
      return res;
    },
    [edgestore, projectId, uploadImages]
  );

  useEffect(() => {
    if (error) {
      const errMsg = normalizeError(error);
      toast.error(errMsg || "An unknown error has occurred");
    }
    if (isSuccess) {
      toast.success("Images uploaded successfully");
    }
  }, [error, isSuccess]);

  return (
    <UploaderProvider uploadFn={uploadFn} autoUpload>
      <ImageUploader
        maxFiles={20}
        maxSize={1024 * 1024 * 1} // 1 MB
      />
    </UploaderProvider>
  );
};

export default UploadProjectImagescomponent;
