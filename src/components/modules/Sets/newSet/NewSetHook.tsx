import next from "next/types"
import { useEffect, useState } from "react"

import { formType } from "./Form"
// type MyFunction = () => Promise<{ isLoading: boolean, data: object }>;
type func = (value: boolean) => any


export function NewSetHook(formData: formType, imgLink: string | null, setIsLoading: func) {
    const [data, setData] = useState<object | null>(null)

    useEffect(() => {
        const upload = async () => {
            if (imgLink) {
                const data = await fetch("/api/add-set/create", {
                    method: "POST",
                    body: JSON.stringify({ ...formData, imgLink }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((r) => r.json())
                // const data = await response.json();
                setData(data)
                setIsLoading(false)
            }
        }
        upload()
    }, [imgLink])

    return { data }

}