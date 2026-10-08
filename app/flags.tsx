"use client";

import { LDProvider, useFlags } from "launchdarkly-react-client-sdk";

const clientSideID = process.env.NEXT_PUBLIC_LD_CLIENT_ID ?? "";

// The app has no stored identity yet: a stable per-browser key stands in for the user.
function currentUserKey(): string {
  if (typeof window === "undefined") return "server";
  const k = "marginalia.user";
  let id = window.localStorage.getItem(k);
  if (!id) {
    id = "user_" + Math.random().toString(36).slice(2, 10);
    window.localStorage.setItem(k, id);
  }
  return id;
}

export function FlagsProvider({ children }: { children: React.ReactNode }) {
  return (
    <LDProvider clientSideID={clientSideID} context={{ kind: "user", key: currentUserKey(), plan: "free" }}>
      {children}
    </LDProvider>
  );
}

// Flags in use: archive_button (targeted: on for plan = pro, 10% of everyone else), pinned_first (on for everyone).
export function useAppFlags() {
  const flags = useFlags();
  return {
    archiveButton: flags["archiveButton"] === true,
    pinnedFirst: flags["pinnedFirst"] !== false,
  };
}
