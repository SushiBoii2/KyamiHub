import React, { useEffect, useState } from "react";

interface Note {
    id: number;
    title: string;
    content: string;
}

const STORAGE_KEY = "kyami_notes";

export function Notes() {
    const [notes, setNotes] = useState<Note[]>([]);
    const [selected, setSelected] = useState<number | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed: Note[] = JSON.parse(saved);
            setNotes(parsed);
            if (parsed.length) setSelected(parsed[0].id);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    }, [notes]);

    const current = notes.find(n => n.id === selected);

    function createNote() {
        const note: Note = {
            id: Date.now(),
            title: "Untitled",
            content: ""
        };

        setNotes([note, ...notes]);
        setSelected(note.id);
    }

    function deleteNote(id: number) {
        const filtered = notes.filter(n => n.id !== id);
        setNotes(filtered);

        if (filtered.length)
            setSelected(filtered[0].id);
        else
            setSelected(null);
    }

    function updateTitle(value: string) {
        setNotes(notes.map(n =>
            n.id === selected
                ? { ...n, title: value }
                : n
        ));
    }

    function updateContent(value: string) {
        setNotes(notes.map(n =>
            n.id === selected
                ? { ...n, content: value }
                : n
        ));
    }

    return (
        <div
            style={{
                display: "flex",
                height: "100%",
                gap: 20
            }}
        >
            <div
                style={{
                    width: 260,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    borderRight: "2px solid var(--kyami-border)",
                    paddingRight: 15
                }}
            >
                <button onClick={createNote}>
                    + New Note
                </button>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        overflowY: "auto"
                    }}
                >
                    {notes.map(note => (
                        <div
                            key={note.id}
                            onClick={() => setSelected(note.id)}
                            style={{
                                cursor: "pointer",
                                padding: 10,
                                border: "2px solid var(--kyami-border)",
                                background:
                                    note.id === selected
                                        ? "var(--active)"
                                        : "transparent"
                            }}
                        >
                            <strong>{note.title}</strong>

                            <div
                                style={{
                                    fontSize: 12,
                                    opacity: .7,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                }}
                            >
                                {note.content || "Empty note"}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12
                }}
            >
                {current ? (
                    <>
                        <input
                            value={current.title}
                            onChange={e => updateTitle(e.target.value)}
                            placeholder="Title"
                            style={{
                                fontSize: 28,
                                background: "transparent",
                                color: "inherit",
                                border: "none",
                                outline: "none"
                            }}
                        />

                        <textarea
                            value={current.content}
                            onChange={e => updateContent(e.target.value)}
                            placeholder="Start typing..."
                            style={{
                                flex: 1,
                                resize: "none",
                                padding: 12,
                                background: "var(--kyami-bg-secondary)",
                                color: "inherit",
                                border: "2px solid var(--kyami-border)"
                            }}
                        />

                        <button
                            onClick={() => deleteNote(current.id)}
                        >
                            Delete Note
                        </button>
                    </>
                ) : (
                    <div
                        style={{
                            opacity: .6,
                            fontSize: 20
                        }}
                    >
                        No notes yet.
                    </div>
                )}
            </div>
        </div>
    );
}
