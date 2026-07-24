import React from "react";

export function Home() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 20
            }}
        >
            <div>
                <h1 style={{ margin: 0 }}>
                    Welcome to Kyami Hub
                </h1>

                <p style={{ opacity: 0.8 }}>
                    Your all-in-one productivity hub built directly into Discord.
                </p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 16
                }}
            >
                <Card
                    title="📅 Calendar"
                    description="View upcoming events and schedule your week."
                />

                <Card
                    title="📝 Notes"
                    description="Quick notes that save automatically."
                />

                <Card
                    title="⏰ Reminders"
                    description="Never forget something important again."
                />

                <Card
                    title="🤖 Kyami AI"
                    description="Your local AI assistant."
                />

                <Card
                    title="📂 Files"
                    description="Recent files and quick access."
                />

                <Card
                    title="⚙ Settings"
                    description="Customize every part of Kyami."
                />
            </div>

            <div
                style={{
                    marginTop: 12,
                    padding: 16,
                    border: "2px solid var(--kyami-border)",
                    background: "var(--kyami-bg-secondary)"
                }}
            >
                <h2 style={{ marginTop: 0 }}>
                    Planned Features
                </h2>

                <ul>
                    <li>✅ Calendar</li>
                    <li>✅ Notes</li>
                    <li>✅ Reminders</li>
                    <li>⬜ Local AI (Kyami)</li>
                    <li>⬜ Achievements</li>
                    <li>⬜ Pomodoro Timer</li>
                    <li>⬜ Weather</li>
                    <li>⬜ Calculator</li>
                    <li>⬜ File Explorer</li>
                    <li>⬜ Music Controls</li>
                    <li>⬜ Plugins</li>
                </ul>
            </div>
        </div>
    );
}

interface CardProps {
    title: string;
    description: string;
}

function Card({ title, description }: CardProps) {
    return (
        <div
            style={{
                border: "2px solid var(--kyami-border)",
                background: "var(--kyami-bg-secondary)",
                padding: 16,
                cursor: "pointer",
                transition: "0.15s"
            }}
        >
            <h3 style={{ marginTop: 0 }}>
                {title}
            </h3>

            <p
                style={{
                    marginBottom: 0,
                    opacity: 0.8
                }}
            >
                {description}
            </p>
        </div>
    );
}
