'use client'

import { useEffect, useState } from "react"
import "tw-elements/dist/css/tw-elements.min.css";
import FormInput from "./FormInput";
import { useRouter } from "next/navigation";

export interface formType {
    [key: string]: string | number | null,
    title: string,
    hero: string,
    price: number | null,
    year: string,
    category: string,
    description: string,
}

export default function Form() {
    const [img, setImg] = useState<File | null>(null);
    const [imgLink, setImgLink] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isFull, setIsFull] = useState<boolean | null>(null)
    const router = useRouter()

    const [formData, setFormData] = useState<formType>({
        title: "",
        hero: "",
        price: null,
        year: "",
        category: "",
        description: "",
        total: 0
    })

    const emptyFields = Object.keys(formData).reduce((result, key) => {
        const value = formData[key]
        if (value === null || value === '') {
            result.push(key as any);
        }
        return result;
    }, [] as any);

    useEffect(() => {
        if (emptyFields.length < 1) {
            setIsFull(true)
        }
    }, [emptyFields])

    const formHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const fileSetter = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | null = event.target.files?.[0] || null;
        if (file?.type == 'image/png' || file?.type == 'image/jpeg' || file?.type == 'image/jpg') {
            setImg(file)
        }
        // console.log(file?.type)
        return
    }

    const sendHandler = async () => {
        const isFull = Object.values(formData).every(x => x !== null && x !== "" && x !== '');
        if (img && isFull) {

            setIsLoading((prev) => true)
            const form = new FormData()
            form.append("file", img)

            for (const [key, value] of Object.entries(formData)) {
                form.append(key, value as string | Blob);
            }
            try {
                const data = await fetch('/api/add-set/upload', {
                    method: "POST",
                    body: form,
                }).then(r => r.json())
                setIsLoading((prev) => false)
                setImgLink(data.imgLink)
                //toast success
                router.push("/all-sets")
            } catch (err) {
                setIsLoading((prev) => false)
                //toast err
            }
        } else {
            setIsFull(false)
        }
    }

    useEffect(() => {
        const init = async () => {
            const { Input, initTE } = await import("tw-elements");
            initTE({ Input });
        };
        init();
    }, []);

    return (
        <div className=" flex flex-col mt-10 mb-20 mx-auto p-5">
            {
                isFull == false ?
                    <div
                        className="mb-6 rounded-lg bg-livingCoral px-4 py-4 mr-2 text-white text-lg text-center"
                        role="alert">
                        <>
                            <div className="mb-4">
                                <span className="p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 inline p-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                                    </svg>
                                    YOU FORGOT TO ADD
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 inline p-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                                    </svg>
                                </span>
                            </div>
                            <div className="mb-4">

                                {emptyFields.map((item: any) => {
                                    return (
                                        <span key={item} className="underline mx-2 text-base cursor-pointer">{item.toUpperCase()}</span>
                                    )
                                })}
                            </div>
                            {/* <span className="p-2">ARE EMPTY!</span> */}
                        </>
                    </div > : null
            }<div>
            </div>
            <div className="flex flex-col md:flex-row justify-around">
                <FormInput value={formData.title} type="text" name="title" placeholder="Title" setter={(event: React.ChangeEvent<HTMLInputElement>) => formHandler(event)} />
                <FormInput value={formData.hero} type="text" name="hero" placeholder="Hero" setter={(event: React.ChangeEvent<HTMLInputElement>) => formHandler(event)} />
                <FormInput value={formData.total} type="number" name="total" placeholder="Total" setter={(event: React.ChangeEvent<HTMLInputElement>) => formHandler(event)} />
            </div>
            <div className="flex justify-around flex-col md:flex-row">
                <FormInput value={formData.price} type="number" name="price" placeholder="Price" setter={(event: React.ChangeEvent<HTMLInputElement>) => formHandler(event)} />
                <FormInput value={formData.year} type="text" name="year" placeholder="Year" setter={(event: React.ChangeEvent<HTMLInputElement>) => formHandler(event)} />
                <FormInput value={formData.category} type="text" name="category" placeholder="Category" setter={(event: React.ChangeEvent<HTMLInputElement>) => formHandler(event)} />
            </div>

            <div className="relative mb-3" data-te-input-wrapper-init>
                <textarea
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="description"
                    name="description"
                    rows={2}
                    placeholder="Your message"
                    onChange={formHandler}
                >
                </textarea>
                <label
                    htmlFor="description"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                >Description
                </label>
            </div>

            <div className="self-center my-5 p-2 flex w-full flex-col md:flex-row">
                <div className="flex justify-center md:items-center flex-grow p-4">
                    <label htmlFor="ff" className="p-1 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                        </svg>
                    </label>
                    <input hidden

                        type="file"
                        className="s"
                        accept="image/*"
                        id="ff"
                        onChange={fileSetter}
                    />
                </div>

                <div className="self-center flex-grow">
                    {img && <img src={URL.createObjectURL(img)} width={550} height={374} className="rounded-md my-2" alt="Selected" />}

                </div>

                {
                    isLoading ?
                        <div
                            className="p-4 mt-2 mx-auto self-center inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status">
                            <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >Loading...</span>
                        </div>
                        : img ? < button
                            className="p-4 mt-2 mx-auto self-center"
                            onClick={sendHandler}
                            data-te-toggle="tooltip"
                            data-te-placement="top"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            title="Upload">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                            </svg>
                        </button> : null
                }
            </div>
        </div >
    )
}

