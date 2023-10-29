import React from 'react'

function Toast() {
    return (
        <div
            className="pointer-events-auto mx-auto hidden w-96 max-w-full rounded-lg bg-white bg-clip-padding text-sm shadow-lg shadow-black/5 data-[te-toast-show]:block data-[te-toast-hide]:hidden"
            id="static-example"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-te-autohide="false"
            data-te-toast-init
            data-te-toast-show>
            <div
                className="flex items-center justify-between rounded-t-lg border-b-2 border-neutral-100 border-opacity-100 bg-white bg-clip-padding px-4 pb-2 pt-2.5">
                <p className="font-bold text-neutral-500">
                    SUCCESS!
                </p>
                <div className="flex items-center">

                    <button
                        type="button"
                        className="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-toast-dismiss
                        aria-label="Close">
                        <span
                            className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <div
                className="break-words rounded-b-lg bg-white px-4 py-4 text-neutral-700">
                User Created Successfully!
            </div>
        </div>
    )
}

export default Toast