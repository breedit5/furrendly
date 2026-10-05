import { NextRequest, NextResponse } from "next/server";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import superjson from "superjson";

// Set this in your Vercel project's Environment Variables:
// CHAT_API_URL = https://<your-deployed-backend>.vercel.app
// (the base URL only — no trailing slash, no /api/trpc)
const CHAT_API_URL = process.env.CHAT_API_URL;

// We don't have the AppRouter type in this repo (it's a separate project),
// so this client is loosely typed. It still talks the standard tRPC wire
// protocol, so it works against any standard tRPC server.
const client = CHAT_API_URL
  ? createTRPCProxyClient<any>({
      links: [
        httpBatchLink({
          url: `${CHAT_API_URL}/api/trpc`,
          transformer: superjson,
        }),
      ],
    })
  : null;

export async function POST(req: NextRequest) {
  if (!client) {
    console.error("CHAT_API_URL env var is not set.");
    return NextResponse.json(
      { error: "Chat backend is not configured." },
      { status: 500 },
    );
  }

  try {
    const body = await req.json();
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    const sessionId =
      typeof body?.sessionId === "string" ? body.sessionId : undefined;

    if (!message) {
      return NextResponse.json(
        { error: "message is required" },
        { status: 400 },
      );
    }

    const result = await (client as any).aiChat.sendMessage.mutate({
      message,
      sessionId,
    });

    return NextResponse.json(result);
  } catch (err) {
    console.error("Chat proxy error:", err);
    return NextResponse.json(
      { error: "Failed to reach Biscuit right now." },
      { status: 502 },
    );
  }
}