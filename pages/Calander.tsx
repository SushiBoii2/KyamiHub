import React from "react";

export function Calendar() {
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
                    📅 Calendar
                </h1>

                <p style={{ opacity: 0.8 }}>
                    Keep track of your schedule and upcoming events.
                </p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    gap: 8
                }}
            >
                {[
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat"
                ].map(day => (
                    <div
                        key={day}
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            padding: 10,
                            border: "2px solid var(--kyami-border)",
                            background: "var(--kyami-bg-secondary)"
                        }}
                    >
                        {day}
                    </div>
                ))}

                {Array.from({ length: 35 }).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            aspectRatio: "1",
                            border: "2px solid var(--kyami-border)",
                            background: "var(--kyami-bg-secondary)",
                            padding: 8,
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            cursor: "pointer"
                        }}
                    >
                        {i + 1 <= 31 ? i + 1 : ""}
                    </div>
                ))}
            </div>

            <div
                style={{
                    border: "2px solid var(--kyami-border)",
                    background: "var(--kyami-bg-secondary)",
                    padding: 16
                }}
            >
                <h2 style={{ marginTop: 0 }}>
                    Upcoming Events
                </h2>

                <p style={{ opacity: 0.7 }}>
                    No upcoming events.
                </p>
            </div>
        </div>
    );
}
