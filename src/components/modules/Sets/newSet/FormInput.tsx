import { useState } from "react"


type props = {
    name: string,
    placeholder: string,
    setter(event: React.ChangeEvent<HTMLInputElement>): void,
    type: string,
    value: any
}

export default function FormInput({ name, placeholder, setter, type, value }: props) {


    return (
        <div className="relative mb-4 w-full mr-2" data-te-input-wrapper-init>
            <input
                type={type}
                name={name}
                className="border-0 p-2 rounded-md shadow-inner peer block min-h-[auto] w-full bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-heavyPeri data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-veryPeri dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id={name}
                value={value}
                placeholder={placeholder}
                onChange={(event) => setter(event)}
            />
            <label
                htmlFor={name}
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >{placeholder}
            </label>
        </div>
    )
}

