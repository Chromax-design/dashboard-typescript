"use client"

import { signIn } from "next-auth/react"

const Loginpage = () => {
    return (
        <div className="space-y-10 w-full">
            <h1 className="capitalize text-3xl text-center font-semibold">Login</h1>
               <button onClick={() => signIn("google")}>Sign in with google</button>
            {/* <p className="text-sm">Don't have an account? <Link href={'/register'} className="text-destructive">Register</Link></p> */}
        </div>
    )
}

export default Loginpage