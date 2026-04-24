"use client";

import { AuthGuard } from "@/components/shared/AuthGuard";
import { MessageItem } from "@/components/sage-ai/MessageItem";
import { ChatInput } from "@/components/sage-ai/ChatInput";
import { SageContextSheet } from "@/components/sage-ai/SageContextSheet";
import { initialMessages } from "@/components/sage-ai/sage-ai-data";

export default function SageAIClient() {
  return (
    <AuthGuard
      featureName="Sage AI"
      featureDesc="NEPSE Sage AI is a high-precision clinical analyst. Sign in to chat with the AI about your portfolio and NEPSE market trends."
    >
      <div className="flex flex-col h-[calc(100vh-3.5rem)] w-full overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between px-4 py-1 bg-background/50 backdrop-blur-sm sticky top-0 z-20">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-50">Sage AI Assistant</span>
          <SageContextSheet />
        </div>

        {/* Conversation Area */}
        <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-4 py-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {initialMessages.map((msg, i) => (
              <MessageItem key={i} msg={msg} />
            ))}
          </div>
        </div>

        {/* Fixed Footer Area */}
        <ChatInput />
      </div>
    </AuthGuard>
  );
}
