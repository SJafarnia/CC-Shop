import Breadcrumb from "@/components/layout/Breadcrumb"
import { Metadata } from "next/types"

function PrivacyPolicy() {
    return (
        <>
            <Breadcrumb pp={true} />
            <div className="mx-auto text-center my-20">
                <h1 className="text-6xl">
                    Privacy Policy
                </h1>
                <div className="text-left px-10 w-5/6 mx-auto">
                    <p className="my-12">
                        {"This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from Collector's Cache Gift Shop / https://collectorscachegift.shop/ (the “Site”)."}
                    </p>
                    <h3 className="mb-3 font-semibold text-4xl">PERSONAL INFORMATION WE COLLECT</h3>
                    <p className="mb-12">
                        <p className="mb-5">
                            {"When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”"}
                        </p>
                        <p className="mb-5 text-lg font-semibold">
                            {"We collect Device Information using the following technologies:"}
                        </p>
                        <ol className="mb-5">
                            <li className="d list-disc ml-5 mb-2">{"“Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org."}</li>
                            <li className="d list-disc ml-5 mb-2">
                                {"“Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps."}</li>
                            <li className="d list-disc ml-5 mb-2">
                                {"“Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site."}
                            </li>

                        </ol>
                        <p className="mb-5">
                            {"Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, email address, and phone number.  We refer to this information as “Order Information.”"}
                        </p>
                        <p className="mb-5">
                            {"When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information."}</p>
                    </p>

                    <h3 className="mb-3 font-semibold text-4xl">{"HOW DO WE USE YOUR PERSONAL INFORMATION?"}</h3>
                    <p className="mb-12">
                        <p className="mb-5">
                            {"We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).  Additionally, we use this Order Information to:"}
                        </p>
                        <p className="mb-5">
                            {"Communicate with you;"}
                        </p>

                        <p className="mb-5">
                            {"Screen our orders for potential risk or fraud; and"}
                        </p>
                        <p className="mb-5">
                            {"When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services."}
                        </p>
                        <p className="mb-5">
                            {"We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns as well as to market our products and services to visitors of our site, including retargeting them)."}
                        </p>
                    </p>
                    <h3 className="mb-3 font-semibold text-4xl">DATA RETENTION</h3>
                    <p className="mb-12">
                        <p className="mb-5">
                            {"When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information."}
                        </p>
                    </p>
                    <h3 className="mb-3 font-semibold text-4xl">MINORS</h3>
                    <p className="mb-12">
                        <p className="mb-5">
                            The Site is not intended for individuals under the age of 18.
                        </p>
                    </p>
                    <h3 className="mb-3 font-semibold text-4xl">{"CHANGES"}</h3>
                    <p className="mb-12">

                        <p className="mb-5">
                            {"We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons."}
                        </p>
                    </p>

                    <h3 className="mb-3 font-semibold text-4xl">{"CONTACT US"}</h3>
                    <p className="mb-12">

                        <p className="mb-5">
                            {"For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at support@collectorscachegift.shop"}
                        </p>
                    </p>
                </div>
            </div>
        </>
    )
}


export const metadata: Metadata = {
    title: "Privacy Policy - CC Shop"
}

export default PrivacyPolicy