import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";


const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(3, "10 s"),
});

export default async function middleware(
    request: NextRequest,
    event: NextFetchEvent
): Promise<Response | undefined> {
    const ip = request.ip ?? "127.0.0.1";
    console.log("ip: ", request.ip)
    const { success, pending, limit, reset, remaining } = await ratelimit.limit(
        ip
    );
    if (!success) {
        const now = Date.now();
        const retryAfter = Math.floor((reset - now) / 1000);
        return new NextResponse("Too Many Requests", {
            status: 429,
            headers: {
                ["retry-after"]: `${retryAfter}`
            },
        });
    }
    NextResponse.next()

}

export const config = {
    matcher: "/",
};