"use client"
import { useState, useEffect } from "react"
import { credentialsType } from "types"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import Toast from "./Toast"


function RegisterPage() {
    const [credentials, setCredentials] = useState<credentialsType>({
        email: "",
        password: ""
    })
    const [isloading, setIsLoading] = useState<boolean>(false)
    const [err, setErr] = useState<string[]>([])
    const [created, setCreated] = useState<boolean>(false)
    const router = useRouter()

    useEffect(() => {
        setErr(() => [])
        const checker = (pwd: string) => {
            const isLong = pwd.length >= 8, hasCapt = /[A-Z]/.test(pwd), hasSmall = /[a-z]/.test(pwd), hasNum = /\d/.test(pwd)
            const mArray = [isLong, hasCapt, hasSmall, hasNum]
            console.log(isLong)
            mArray.forEach((item, indx) => {
                if (item == false) {
                    switch (indx) {
                        case 0:
                            setErr((prevState) => [...prevState, "Password must be atleast 8 characters"])
                            break;
                        case 1:
                            setErr((prevState) => [...prevState, "Password must have atleast 1 Capital character"])
                            break;
                        case 2:
                            setErr((prevState) => [...prevState, "Password must have atleast 1 Small character"])
                            break;
                        case 3:
                            setErr((prevState) => [...prevState, "Password must contains atleast 1 number"])
                            break;
                        default:
                            break;
                    }
                }
            })
        }

        if (credentials.password.length) checker(credentials.password)
    }, [credentials.password])

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setCredentials({ ...credentials, [name]: value })
    }


    const registerHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading((prev => !prev))
        setErr((prev) => [])

        const req = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const res = await req.json()
        setIsLoading((prev => !prev))
        if (res?.error) {
            setErr((prevState) => [...prevState, res.message])
            return
        }
        if (!res?.error) {
            setCreated(true)

            const req = await signIn("credentials", {
                email: credentials.email,
                password: credentials.password,
                redirect: false,
            }).
                then(res => {
                    if (res?.error) {
                        return setTimeout(() => router.push("/"), 500)
                    }
                    // router.replace("/dashboard")
                    window.location.href = "/dashboard"
                }
                )
                .catch(e => console.error(e))

        }
    }

    return (
        <section className="gradient-form h-full my-8" id="regform">
            {created ? <Toast /> : ""}
            <div className="container h-full p-5">
                <div
                    className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div
                            className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap justify-center">
                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:p-12">

                                        <div className="text-center">
                                            <img
                                                className="mx-auto w-48"
                                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                alt="logo" />
                                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                CC SHop
                                            </h4>
                                        </div>

                                        <form onSubmit={registerHandler} noValidate >
                                            <p className="mb-4">Create Your Account</p>
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
                                                    minLength={8}
                                                    onChange={inputHandler}
                                                    name="password"
                                                    autoComplete="current-password"
                                                    className="peer border-solid focus:border-2 transition-color duration-0 focus:border-veryPeri shadow-sm border block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none ease-linear focus:placeholder:opacity-100  motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
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
                                                            Register
                                                        </button>
                                                    </>
                                                }
                                                {err.length ? err.map((errText) => (
                                                    <p className="border-2 border-solid px-1 py-2 animate-fadeOut border-danger-600 text-danger-600 rounded-sm mt-4">{errText}</p>

                                                ))
                                                    : null}
                                            </div>
                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 mr-2">Already got an account?</p>

                                                <button
                                                    onClick={() => router.push("/login#loginform")}
                                                    type="button"
                                                    className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light">
                                                    Login
                                                </button>

                                            </div>
                                        </form>
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

export default RegisterPage