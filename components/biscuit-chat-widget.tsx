"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowLeft,
  Bone,
  Cat,
  MessageCircle,
  PawPrint,
  PlusCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: string;
};

const SUGGESTIONS = ["Pet care Tips", "Adoption Process", "Membership Perks"];

const formatTime = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const SESSION_STORAGE_KEY = "biscuit_session_id";

// Faint scattered paw/bone/cat/star pattern behind the chat, matching the app design
const BACKGROUND_ICONS: {
  Icon: typeof PawPrint;
  top: string;
  left: string;
  rotate: number;
  size: number;
}[] = [
  { Icon: Bone, top: "6%", left: "12%", rotate: -20, size: 22 },
  { Icon: Sparkles, top: "10%", left: "78%", rotate: 10, size: 16 },
  { Icon: PawPrint, top: "20%", left: "45%", rotate: 15, size: 20 },
  { Icon: Cat, top: "16%", left: "60%", rotate: -8, size: 22 },
  { Icon: Sparkles, top: "30%", left: "8%", rotate: 0, size: 14 },
  { Icon: Bone, top: "38%", left: "85%", rotate: 30, size: 18 },
  { Icon: PawPrint, top: "48%", left: "18%", rotate: -25, size: 18 },
  { Icon: Cat, top: "55%", left: "70%", rotate: 12, size: 20 },
  { Icon: Sparkles, top: "64%", left: "40%", rotate: 0, size: 14 },
  { Icon: Bone, top: "72%", left: "15%", rotate: -10, size: 20 },
  { Icon: PawPrint, top: "80%", left: "82%", rotate: 20, size: 20 },
  { Icon: Cat, top: "88%", left: "50%", rotate: -15, size: 18 },
];

function BackgroundPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {BACKGROUND_ICONS.map(({ Icon, top, left, rotate, size }, i) => (
        <Icon
          key={i}
          size={size}
          style={{
            position: "absolute",
            top,
            left,
            transform: `rotate(${rotate}deg)`,
          }}
          className="text-[#9A81D5]/20"
        />
      ))}
    </div>
  );
}

// Renders bot reply text as paragraphs, converting lines that start with
// -, *, •, or "1." style numbering into a real bullet/numbered list.
const BULLET_RE = /^\s*[-*•]\s+(.*)/;
const NUMBERED_RE = /^\s*(\d+)[.)]\s+(.*)/;

function formatReply(text: string) {
  const lines = text.split("\n");
  const blocks: React.ReactNode[] = [];
  let currentList: string[] | null = null;
  let listType: "ul" | "ol" | null = null;

  const flushList = () => {
    if (!currentList || currentList.length === 0) return;
    const key = `list-${blocks.length}`;
    if (listType === "ol") {
      blocks.push(
        <ol key={key} className="list-decimal space-y-1 pl-5">
          {currentList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>,
      );
    } else {
      blocks.push(
        <ul key={key} className="list-disc space-y-1 pl-5">
          {currentList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>,
      );
    }
    currentList = null;
    listType = null;
  };

  lines.forEach((rawLine, i) => {
    const line = rawLine.trim();
    if (line === "") {
      flushList();
      return;
    }

    const bulletMatch = line.match(BULLET_RE);
    const numberedMatch = line.match(NUMBERED_RE);

    if (bulletMatch) {
      if (listType !== "ul") flushList();
      listType = "ul";
      currentList = currentList ?? [];
      currentList.push(bulletMatch[1]);
    } else if (numberedMatch) {
      if (listType !== "ol") flushList();
      listType = "ol";
      currentList = currentList ?? [];
      currentList.push(numberedMatch[2]);
    } else {
      flushList();
      blocks.push(
        <p key={`p-${i}`} className="mb-1 last:mb-0">
          {line}
        </p>,
      );
    }
  });

  flushList();
  return <div className="space-y-1">{blocks}</div>;
}

export function BiscuitChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [sessionId, setSessionId] = useState<string | undefined>();
  const [isPending, setIsPending] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasInteractedRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-open the chat 5 seconds after the page loads, unless the
  // person has already opened or closed it themselves by then.
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteractedRef.current) {
        setIsOpen(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Restore session so a page refresh doesn't lose the conversation thread
  useEffect(() => {
    const stored = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (stored) setSessionId(stored);
  }, []);

  useEffect(() => {
    if (sessionId) {
      window.sessionStorage.setItem(SESSION_STORAGE_KEY, sessionId);
    }
  }, [sessionId]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isOpen]);

  const sendAiMessage = async (text: string) => {
    setIsPending(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, sessionId }),
      });

      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();
      setSessionId(data.sessionId);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text:
            data.reply || "Woof! I don't have an answer for that right now.",
          sender: "bot",
          timestamp: formatTime(),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: "Woof! I'm having a little trouble connecting. Could you please try asking again?",
          sender: "bot",
          timestamp: formatTime(),
        },
      ]);
    } finally {
      setIsPending(false);
    }
  };

  const handleSend = (overrideText?: string) => {
    const text = (overrideText ?? inputText).trim();
    if (text === "" || isPending) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: formatTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    void sendAiMessage(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!mounted) return null;

  return createPortal(
    <div className="fixed bottom-5 right-5 z-[9999]">
      {/* Chat panel */}
      {isOpen && (
        <div
          className="mb-3 flex h-[560px] w-[360px] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-3xl bg-white"
          style={{ boxShadow: "0 12px 40px rgba(109, 84, 87, 0.28)" }}
        >
          {/* Header */}
          <div className="relative flex items-center border-b border-[#F0EDF7] bg-white px-4 py-4">
            <button
              onClick={() => {
                hasInteractedRef.current = true;
                setIsOpen(false);
              }}
              aria-label="Close chat"
              className="text-black transition hover:opacity-70"
            >
              <ArrowLeft size={22} />
            </button>
            <span className="absolute left-1/2 -translate-x-1/2 text-base font-bold text-black">
              Talk With Biscuit
            </span>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="relative flex-1 overflow-y-auto bg-white px-4 pb-4 pt-5"
          >
            <BackgroundPattern />
            <div className="relative">
            {messages.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center pb-10 text-center">
                <p className="mb-1 text-2xl font-bold text-[#9A81D5]">
                  Hi! I&apos;m Biscuit
                </p>
                <p className="text-2xl font-bold text-[#825AC8]">
                  Woof Woof! How can I help?
                </p>
              </div>
            ) : (
              messages.map((item) => {
                const isUser = item.sender === "user";
                return (
                  <div
                    key={item.id}
                    className={`mb-4 flex max-w-[85%] ${
                      isUser ? "ml-auto justify-end" : "items-end"
                    }`}
                  >
                    {!isUser && (
                      <div className="mb-[18px] mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black">
                        <img
                          src="/ai-profile.png"
                          alt="Biscuit"
                          className="h-[18px] w-[18px] object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <div
                        className={`rounded-3xl px-4 py-3 text-[15px] leading-5 ${
                          isUser
                            ? "rounded-br-sm bg-[#2B2B2B] text-white"
                            : "rounded-bl-sm bg-[#E9DFFF] text-black"
                        }`}
                      >
                        {isUser ? item.text : formatReply(item.text)}
                      </div>
                      <p
                        className={`mt-1 text-[10px] text-gray-500 ${
                          isUser ? "text-right" : "text-left"
                        }`}
                      >
                        {item.timestamp}
                      </p>
                    </div>
                  </div>
                );
              })
            )}

            {isPending && (
              <div className="mb-4 flex max-w-[85%] items-end">
                <div className="mb-[18px] mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black">
                  <img
                    src="/ai-profile.png"
                    alt="Biscuit"
                    className="h-[18px] w-[18px] object-contain"
                  />
                </div>
                <div className="rounded-3xl rounded-bl-sm bg-[#E9DFFF] px-4 py-3 text-[15px] text-black">
                  Biscuit is thinking...
                </div>
              </div>
            )}
            </div>
          </div>

          {/* Suggestions */}
          {messages.length === 0 && (
            <div className="flex flex-wrap justify-center gap-2 px-4 pb-2">
              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSend(suggestion)}
                  className="rounded-full border border-[#4E376A] bg-white px-3 py-1.5 text-xs text-[#9A81D5] shadow-sm transition hover:bg-[#F7F4FF]"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-[#EFEFEF] px-4 py-3">
            <button
              type="button"
              className="text-[#9A81D5] transition hover:text-[#825AC8]"
              aria-label="Attach"
            >
              <PlusCircle size={22} strokeWidth={1.5} />
            </button>
            <textarea
              rows={1}
              className="max-h-24 flex-1 resize-none border-none bg-transparent text-sm text-black outline-none placeholder:text-[#A0A0A0]"
              placeholder="Ask Biscuit anything"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={() => handleSend()}
              disabled={isPending}
              aria-label="Send message"
              className="text-[#825AC8] transition disabled:opacity-40"
            >
              <Send size={22} />
            </button>
          </div>
        </div>
      )}

      {/* Launcher bubble */}
      <button
        onClick={() => {
          hasInteractedRef.current = true;
          setIsOpen((prev) => !prev);
        }}
        aria-label={isOpen ? "Close Biscuit chat" : "Chat with Biscuit"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#825AC8] text-white transition hover:bg-[#71499C]"
        style={{ boxShadow: "0 8px 24px rgba(109, 84, 87, 0.35)" }}
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
      </button>
    </div>,
    document.body,
  );
}