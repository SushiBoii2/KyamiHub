/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import definePlugin from "@utils/types";
import { openModal } from "@utils/modal";

import { Hub } from "./components/Hub";
import { settings, keybindRecordingState } from "./settings";

let keyListener: ((event: KeyboardEvent) => void) | null = null;

function matchesKeybind(event: KeyboardEvent): boolean {
    const bind = settings.store.keybind.toLowerCase().trim();

    const parts = bind.split("+");

    const wantsCtrl = parts.includes("ctrl");
    const wantsShift = parts.includes("shift");
    const wantsAlt = parts.includes("alt");
    const wantsMeta = parts.includes("meta");

    const key = parts[parts.length - 1];

    const expectedCode =
        key.length === 1
            ? `Key${key.toUpperCase()}`
            : key;

    return (
        event.ctrlKey === wantsCtrl &&
        event.shiftKey === wantsShift &&
        event.altKey === wantsAlt &&
        event.metaKey === wantsMeta &&
        event.code === expectedCode
    );
}

export default definePlugin({
    name: "KyamiHub",
    description: "An all-in-one productivity hub for Discord.",
    authors: [
        {
            name: "Sushi",
            id: 1524021529782780045n,
        }
    ],

    start() {
        keyListener = (event: KeyboardEvent) => {
            if (keybindRecordingState.active) return;

            const target = event.target as HTMLElement | null;

            if (
                target &&
                (
                    target.tagName === "INPUT" ||
                    target.tagName === "TEXTAREA" ||
                    target.isContentEditable
                )
            ) {
                return;
            }

            if (!matchesKeybind(event))
                return;

            event.preventDefault();

            openModal(props => (
                <Hub {...props} />
            ));
        };

        window.addEventListener("keydown", keyListener);
    },

    stop() {
        if (keyListener) {
            window.removeEventListener("keydown", keyListener);
            keyListener = null;
        }
    }
});
