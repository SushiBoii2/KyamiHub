/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import definePlugin from "@utils/types";
import { openModal } from "@utils/modal";

import { Hub } from "./components/Hub";

let keyListener: ((event: KeyboardEvent) => void) | null = null;

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
            // Ignore if typing in a textbox
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

            if (
                event.altKey &&
                !event.ctrlKey &&
                !event.shiftKey &&
                !event.metaKey &&
                event.code === "KeyK"
            ) {
                event.preventDefault();

                openModal(props => (
                    <Hub {...props} />
                ));
            }
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
