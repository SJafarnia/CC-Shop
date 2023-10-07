// const { PAYPAL_CLIENT_ID, PAYPAL_SECRET } = process.env;
// const base = "https://api-m.sandbox.paypal.com";

// const generateAccessToken = async () => {
//     try {
//         const auth = Buffer.from(PAYPAL_CLIENT_ID + ":" + PAYPAL_SECRET).toString("base64");
//         const response = await fetch(`${base}/v1/oauth2/token`, {
//             method: "POST",
//             body: "grant_type=client_credentials",
//             headers: {
//                 Authorization: `Basic ${auth}`,
//             },
//         });

//         const data = await response.json();
//         return data.access_token;
//     } catch (error) {
//         console.error("Failed to generate Access Token:", error);
//     }
// };


// export const createOrder = async () => {
//     const accessToken = await generateAccessToken();
//     const url = `${base}/v2/checkout/orders`;
//     const payload = {
//         intent: "CAPTURE",
//         purchase_units: [
//             {
//                 amount: {
//                     currency_code: "USD",
//                     value: "0.02",
//                 },
//             },
//         ],
//     };

//     const response = await fetch(url, {
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}∫`,
//         },
//         method: "POST",
//         body: JSON.stringify(payload),
//     });

//     return handleResponse(response);
// };


// export const capturePayment = async (orderID) => {
//     const accessToken = await generateAccessToken();
//     const url = `${base}/v2/checkout/orders/\${orderID}/capture`;

//     const response = await fetch(url, {
//         method: "post",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}∫`,
//         }
//     });

//     return handleResponse(response);
// };

// async function handleResponse(response) {
//     if (response.status === 200 || response.status === 201) {
//         return response.json();
//     }

//     const errorMessage = await response.text();
//     throw new Error(errorMessage);
// }

