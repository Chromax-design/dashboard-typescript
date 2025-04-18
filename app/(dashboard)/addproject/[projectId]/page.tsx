import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import UploadProjectImagescomponent from "@/components/UploadProjectImagescomponent"


const UploadProjectImagespage = () => {
    return (
        <section>
            <Card className='shadow-xl shadow-neutral-100 outline-none border-none'>
                <CardHeader>
                    <CardTitle className="capitalize text-2xl">upload project images</CardTitle>
                </CardHeader>
                <CardContent>
                    <UploadProjectImagescomponent />
                </CardContent>
            </Card>
        </section>
    )
}

export default UploadProjectImagespage