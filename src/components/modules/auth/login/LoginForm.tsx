"use client"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { credentialsType } from "types"
import { useRouter, useSearchParams } from "next/navigation"

function LoginForm() {
    const [credentials, setCredentials] = useState<credentialsType>({
        email: "",
        password: ""
    })
    const [isloading, setIsLoading] = useState<boolean>(false)
    const [err, setErr] = useState("")
    const router = useRouter()
    const searchParams = useSearchParams();
    const redirect = searchParams.get("redirect")

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setCredentials({ ...credentials, [name]: value })
    }

    const loginHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading((prev => !prev))
        const req = await signIn("credentials", {
            email: credentials.email,
            password: credentials.password,
            redirect: false,
        }).
            then(res => {
                if (res?.error) {
                    setErr("Password or Email is incorrect")
                    return
                }
                // router.replace("/dashboard")
                if (!res?.error) {
                    // window.location.href = redirect || "/dashboard"
                    router.push(redirect || "/dashboard")
                }
            }
            )
            .catch(e => console.error(e))

        setIsLoading((prev => !prev))
    }

    return (
        <section className="gradient-form h-full my-8" id="loginform">
            <div className="container h-full p-5">
                <div
                    className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div
                            className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap">
                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:p-12">

                                        <div className="text-center">
                                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                Collector's Cache Shop
                                            </h4>
                                        </div>

                                        <form onSubmit={loginHandler}>
                                            <p className="mb-5">Login To Your Account</p>
                                            <div className="relative mb-4">
                                                <input
                                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                                    disabled={isloading ? true : undefined}
                                                    type="email"
                                                    onChange={inputHandler}
                                                    className="peer border-solid focus:border-2 transition-color duration-0 focus:border-veryPeri shadow-sm border block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none ease-linear focus:placeholder:opacity-100 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="emailInput"
                                                    autoComplete="username"
                                                    name="email"
                                                />
                                                <label
                                                    htmlFor="emailInput"
                                                    className={`${credentials.email ? "-translate-y-[0.9rem] scale-[0.7]" : ""} bg-white px-2 pt-0 pointer-events-none absolute left-1 top-1 mb-0 max-w-[90%] truncate leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.7] peer-focus:text-primary-600 dark:text-neutral-200 dark:peer-focus:text-primary`}
                                                >Email address
                                                </label>
                                            </div>

                                            <div className="relative mb-4" data-te-input-wrapper-init>
                                                <input
                                                    disabled={isloading ? true : undefined}
                                                    type="password"
                                                    onChange={inputHandler}
                                                    name="password"
                                                    autoComplete="current-password"
                                                    className="peer border-solid focus:border-2 transition-color duration-0 focus:border-veryPeri shadow-sm border block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="passwordInput"
                                                />
                                                <label
                                                    htmlFor="passwordInput"
                                                    className={`${credentials.password ? "-translate-y-[0.9rem] scale-[0.7]" : ""} bg-white px-2 pt-0 pointer-events-none absolute left-1 top-1 mb-0 max-w-[90%] truncate leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.7] peer-focus:text-primary-600 dark:text-neutral-200 dark:peer-focus:text-primary`}
                                                >Password
                                                </label>
                                            </div>

                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                {isloading ?
                                                    <div className="mb-4 p-2 animate-fadeOut text-white text-sm login-button inline-block w-full rounded font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]">
                                                        <div
                                                            className="inline-block mt-1 h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                                            role="status">
                                                            <span
                                                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                                            >Loading...</span>
                                                        </div>
                                                    </div>
                                                    :
                                                    <>
                                                        <button
                                                            className="mb-4 p-4 animate-fadeOut text-white text-sm login-button inline-block w-full rounded px-6 pb-2 pt-2.5  font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                            type="submit"
                                                            data-te-ripple-init
                                                            data-te-ripple-color="light"
                                                        >
                                                            Log in
                                                        </button>
                                                    </>
                                                }
                                                {err ?
                                                    <p className="border-2 border-solid px-1 py-2 border-danger-600 text-danger-600 rounded-sm my-3">{err}</p>
                                                    : null}
                                                <a href="#!">Forgot password?</a>
                                            </div>
                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 mr-2">{"Don't have an account?"}</p>
                                                <button
                                                    onClick={() => router.push("/register#regform")}
                                                    type="button"
                                                    className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light">
                                                    Register
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div
                                    className="flex items-center login-button rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                    style={{ background: "background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>
                                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                        <h4 className="mb-6 text-xl font-semibold">
                                            We are more than just a company
                                        </h4>
                                        <p className="text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex
                                            ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginForm