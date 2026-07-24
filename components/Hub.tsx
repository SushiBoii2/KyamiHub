/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { React, useState } from "@webpack/common";

type Page =
    | "home"
    | "calendar"
    | "notes"
    | "reminders"
    | "ai"
    | "settings";

export function Hub() {
    const [page, setPage] = useState<Page>("home");

    return (
        <div
            style={{
                width: 1000,
                height: 650,
                display: "flex",
                background: "var(--kyami-bg)",
                color: "var(--kyami-text)",
                border: "2px solid var(--kyami-border)"
            }}
        >
            {/* Sidebar */}

            <div
                style={{
                    width: 220,
                    borderRight: "2px solid var(--kyami-border)",
                    background: "var(--kyami-bg-secondary)",
                    display: "flex",
                    flexDirection: "column",
                    padding: 12,
                    gap: 8
                }}
            >
                <h2
                    style={{
                        margin: "0 0 10px 0"
                    }}
                >
                    ✦ Kyami
                </h2>

                <SidebarButton
                    active={page === "home"}
                    text="🏠 Home"
                    onClick={() => setPage("home")}
                />

                <SidebarButton
                    active={page === "calendar"}
                    text="📅 Calendar"
                    onClick={() => setPage("calendar")}
                />

                <SidebarButton
                    active={page === "notes"}
                    text="📝 Notes"
                    onClick={() => setPage("notes")}
                />

                <SidebarButton
                    active={page === "reminders"}
                    text="⏰ Reminders"
                    onClick={() => setPage("reminders")}
                />

                <SidebarButton
                    active={page === "ai"}
                    text="🤖 Kyami AI"
                    onClick={() => setPage("ai")}
                />

                <SidebarButton
                    active={page === "settings"}
                    text="⚙ Settings"
                    onClick={() => setPage("settings")}
                />
            </div>

            {/* Main */}

            <div
                style={{
                    flex: 1,
                    padding: 24,
                    overflowY: "auto"
                }}
            >
                {page === "home" && (
                    <>
                        <h1>Welcome to Kyami Hub</h1>

                        <p>
                            Your all-in-one productivity hub.
                        </p>

                        <hr />

                        <h3>Coming Soon</h3>

                        <ul>
                            <li>📅 Calendar</li>
                            <li>📝 Notes</li>
                            <li>⏰ Reminders</li>
                            <li>🤖 Local AI (Kyami)</li>
                            <li>📂 File Explorer</li>
                            <li>📊 Statistics</li>
                            <li>⚙ Customisation</li>
                        </ul>
                    </>
                )}

                {page === "calendar" && (
                    <>
                        <h1>Calendar</h1>
                        <p>Coming soon...</p>
                    </>
                )}

                {page === "notes" && (
                    <>
                        <h1>Notes</h1>
                        <p>Coming soon...</p>
                    </>
                )}

                {page === "reminders" && (
                    <>
                        <h1>Reminders</h1>
                        <p>Coming soon...</p>
                    </>
                )}

                {page === "ai" && (
                    <>
                        <h1>Kyami AI</h1>
                        <p>Coming soon...</p>
                    </>
                )}

                {page === "settings" && (
                    <>
                        <h1>Settings</h1>
                        <p>Coming soon...</p>
                    </>
                )}
            </div>
        </div>
    );
}

interface SidebarButtonProps {
    text: string;
    active: boolean;
    onClick: () => void;
}

function SidebarButton({
    text,
    active,
    onClick
}: SidebarButtonProps) {
    return (
        <button
            onClick={onClick}
            style={{
                padding: "10px 12px",
                textAlign: "left",
                cursor: "pointer",

                background: active
                    ? "var(--active)"
                    : "transparent",

                color: "var(--kyami-text)",

                border: "2px solid var(--kyami-border)"
            }}
        >
            {text}
        </button>
    );
}
