
function Breadcrumb(props: any) {
    const x = Array.from(Object.keys(props))

    return (
        <nav className="bg-grey-light w-full rounded-md mt-5 ml-2 px-2">
            <ol className="list-reset flex items-center">
                <>
                    <li>
                        <a
                            href="/"
                            className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                        >Home</a>
                    </li>
                    <li>
                        <span className="mx-2 flex text-neutral-500 dark:text-neutral-400"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                        </span>
                    </li>
                </>
                {props.allSets &&
                    <>
                        <li>
                            <a
                                href="/all-sets"
                                className={`${props.singleSet ? "text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600" : "text-neutral-500 dark:text-neutral-400 pointer-events-none"}`}
                            >All Sets</a>
                        </li>
                        {props.singleSet ?
                            <li>
                                <span className="mx-2 flex text-neutral-500 dark:text-neutral-400"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                                </span>
                            </li> : null
                        }
                    </>
                }
                {props.singleSet &&
                    <>
                        <li>
                            <p
                                className="transition duration-150 pointer-events-none ease-in-out text-neutral-500 dark:text-neutral-400"
                            >{props.singleSet}</p>
                        </li>
                        <li>
                            <span className="mx-2 text-neutral-500 dark:text-neutral-400"></span>
                        </li>
                    </>
                }

                {props.about &&
                    <>
                        <li>
                            <p
                                className="transition duration-150 pointer-events-none ease-in-out text-neutral-500 dark:text-neutral-400"
                            >About Us</p>
                        </li>
                        <li>
                            <span className="mx-2 text-neutral-500 dark:text-neutral-400"></span>
                        </li>
                    </>
                }

                {props.pp &&
                    <>
                        <li>
                            <p
                                className="transition duration-150 pointer-events-none ease-in-out text-neutral-500 dark:text-neutral-400"
                            >Privay Policy</p>
                        </li>
                        <li>
                            <span className="mx-2 text-neutral-500 dark:text-neutral-400"></span>
                        </li>
                    </>
                }
            </ol>
        </nav>
    )
}

export default Breadcrumb