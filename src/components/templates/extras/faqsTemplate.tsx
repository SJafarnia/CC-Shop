"use client"
import { useEffect } from "react";

function faqsTemplate() {
    useEffect(() => {
        const init = async () => {
            const { Collapse, initTE } = await import("tw-elements");
            initTE({ Collapse });
        };
        init();
    }, []);

    return (

        <div className="container my-24 mx-auto md:px-6 xl:px-24">

            <section className="mb-32">
                <h2 className="mb-6 pl-6 text-3xl font-bold">Frequently asked questions</h2>

                <div id="accordionFlushExample">
                    <div className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200">
                        <h2 className="mb-0" id="flush-headingOne">
                            <button
                                className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                                type="button" data-te-collapse-init data-te-target="#flush-collapseOne" aria-expanded="false"
                                aria-controls="flush-collapseOne">
                                How does it work?
                                <span
                                    className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </span>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="!visible border-0" data-te-collapse-item data-te-collapse-show
                            aria-labelledby="flush-headingOne" data-te-parent="#accordionFlushExample">
                            <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                                <ol>
                                    <li className="list-decimal mt-2 mb-7 pl-1">Browse through our catalog and decide which set(s) you'd like to have.</li>
                                    <li className="list-decimal mb-7 pl-1">Once you've found the set(s) you want. Simply add it to cart. Important: Under the sellers note, please type in your steam friend code/dota 2 id so that we know which steam account to deliver the set(s) to.</li>
                                    <li className="list-decimal mb-7 pl-1">Browse through our catalog and decide which set(s) you'd like to have.</li>
                                    <p className="mb-7 pl-1"><span className="font-semibold">Tip:</span> {"You can find your steam friend code by going to the steam friends tab > Add friend > Your Friend Code"}</p>
                                    <li className="list-decimal mb-7 pl-1">
                                        Proceed to checkout and fill in your information. Complete your order and that's it!
                                    </li>

                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200">
                        <h2 className="mb-0" id="flush-headingTwo">
                            <button
                                className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                                type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#flush-collapseTwo"
                                aria-expanded="false" aria-controls="flush-collapseTwo">
                                Will I receive my order(s) right away?
                                <span
                                    className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </span>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="!visible hidden border-0" data-te-collapse-item
                            aria-labelledby="flush-headingTwo" data-te-parent="#accordionFlushExample">
                            <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                                <p className="mt-2 mb-7">
                                    <span className="font-semibold">For first time customers:</span> As much as we would like to deliver the item(s) you've ordered right away, we can't. Per Valve's gifting policy, we still need to be friends on Steam for at least 30 days, before we can gift your purchased item(s) in-game in dota 2. This is mandatory for security reasons and there's no other way to go around it but wait.
                                </p>
                                <p className="mb-7">
                                    <span className="font-semibold">For returning customers: </span>As long as you didn't remove our steam account(s) from your friendslist, you can receive your next order as soon as possible, given that the item(s) ordered is available in that steam account(s) inventory.
                                </p>
                                <p className="mb-7">

                                    If you're not sure if the item is available or not. Feel free to check our inventory/inventories and send us a message for confirmation.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-neutral-200">
                        <h2 className="mb-0" id="flush-headingThree">
                            <button
                                className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                                type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#flush-collapseThree"
                                aria-expanded="false" aria-controls="flush-collapseThree">
                                After I've placed my order. How long before I receive a friend request on Steam?
                                <span
                                    className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </span>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="!visible hidden rounded-b-lg" data-te-collapse-item
                            aria-labelledby="flush-headingThree" data-te-parent="#accordionFlushExample">
                            <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                                As mentioned above, our website is run by real human staffs and we only have few at the moment. Due to difference in timezones, please allow at least 24 hours for us to process your order and send in request on steam
                            </div>
                        </div>
                    </div>
                    <div className="rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-neutral-200">
                        <h2 className="mb-0" id="flush-headingThree">
                            <button
                                className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                                type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#flush-collapseThree"
                                aria-expanded="false" aria-controls="flush-collapseThree">
                                Why is my item not yet delivered when majority of the reviews claims that orders were delivered on time?
                                <span
                                    className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </span>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="!visible hidden rounded-b-lg" data-te-collapse-item
                            aria-labelledby="flush-headingThree" data-te-parent="#accordionFlushExample">
                            <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                                <p className="mt-2 mb-7">
                                    We always strive to deliver orders on time but sometimes, there are unforseen circumstances that may cause delay in delivery.
                                </p>
                                <p className="mb-7">
                                    Also for reference, we can only gift 8 items per day following Valve's gifting policy.
                                </p>
                                <p className="mb-7">
                                    Rest assured though that you will receive your order as soon as possible. Should you encounter any delay, please feel free to contact us via email or via our Facebook page @ https://www.facebook.com/dota2collectorscache and we will get back to you in a timely manner.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default faqsTemplate