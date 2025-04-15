"use client"

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
import Link from "next/link";

const formSchema = z.object({
    firstName: z.string().min(4, {
        message: "Enter a valid email"
    }),
    lastName: z.string().min(4, {
        message: "Enter a valid email"
    }),
    email: z.string().email({
        message: "Enter a valid email"
    }),
    password: z.string().min(2, {
        message: "Username must be at least 6 characters.",
    }),
})

const Registerpage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <div className="space-y-10 w-full">
            <h1 className="capitalize text-3xl text-center font-semibold">Register</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize text-sm">First name</FormLabel>
                                <FormControl>
                                    <Input {...field} className="p-3 rounded-none block h-auto" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize text-sm">Last name</FormLabel>
                                <FormControl>
                                    <Input {...field} className="p-3 rounded-none block h-auto" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize text-sm">Email</FormLabel>
                                <FormControl>
                                    <Input {...field} className="p-3 rounded-none block h-auto" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize text-sm">Password</FormLabel>
                                <FormControl>
                                    <Input {...field} className="p-3 rounded-none block h-auto" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className=" rounded-none">Submit</Button>
                </form>
            </Form>
            <p className="text-sm">Already have an account? <Link href={'/login'} className="text-destructive">Login instead</Link></p>
        </div>
    )
}

export default Registerpage