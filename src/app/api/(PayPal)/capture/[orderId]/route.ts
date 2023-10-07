// import { NextRequest, NextResponse } from 'next/server';
// import { capturePayment } from "../../payInit"

// export default async function route(request: NextRequest) {
//     try {
//         const url = new URL(request.url)
//         const orderID = url.searchParams.get("orderID")
//         const response = await capturePayment(orderID);
//         NextResponse.json(response);
//     } catch (error) {
//         console.error("Failed to create order:", error);
//         NextResponse.json({ error: "Failed to capture order." }, { status: 500 })
//     }
// }