import { React, useState } from "@webpack/common";

import { Forms, Button } from "@webpack/common";

import { settings } from "../settings";

export function KeybindRecorder() {
    const [recording, setRecording] = useState(false);

    function format(e: KeyboardEvent) {
        const keys: string[] = [];

        if (e.ctrlKey) keys.push("Ctrl");
        if (e.altKey) keys.push("Alt");
        if (e.shiftKey) keys.push("Shift");
        if (e.metaKey) keys.push("Meta");

        if (
            ![
                "Control",
                "Shift",
                "Alt",
                "Meta"
            ].includes(e.key)
        ) {
            keys.push(e.key.toUpperCase());
        }

        return keys.join(" + ");
    }

    function beginRecording() {
        if (recording) return;

        setRecording(true);

        function listener(e: KeyboardEvent) {
            e.preventDefault();
            e.stopPropagation();

            settings.store.keybind = format(e);

            window.removeEventListener("keydown", listener, true);
            setRecording(false);
        }

        window.addEventListener("keydown", listener, true);
    }

    return (
        <Forms.FormSection>
            <Forms.FormTitle>
                Keyboard Shortcut
            </Forms.FormTitle>

            <Forms.FormText>
                Current: <strong>{settings.store.keybind}</strong>
            </Forms.FormText>

            <Button onClick={beginRecording}>
                {recording ? "Press any key..." : "Record Shortcut"}
            </Button>
        </Forms.FormSection>
    );
}
