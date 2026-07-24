/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@utils/types";

import "./styles";
import { settings } from "./settings";

export default definePlugin({
    name: "KyamiHub",
    description: "An all-in-one productivity hub for Discord.",
    authors: [
        {
            name: "Sushi",
            id: 0n,
        }
    ],

    settings,

    start() {
        console.log("[Kyami] Plugin started.");
    },

    stop() {
        console.log("[Kyami] Plugin stopped.");
    }
});
