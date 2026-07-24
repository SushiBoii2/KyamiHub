/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@utils/types";

import "./styles";
import { settings } from "./settings";
import { openModal } from "@utils/modal";
import { Hub } from "./components/Hub";

export default definePlugin({
    name: "KyamiHub",
    description: "An all-in-one productivity hub for Discord.",
    authors: [
        {
            name: "Sushi",
            id: 1524021529782780045n,
        }
    ],

    settings,

    start() {
        console.log("[Kyami] Plugin started.");
        console.log("[Kyami] Started");

        openModal(props => (
            <Hub />
        ));
    },

    stop() {
        console.log("[Kyami] Plugin stopped.");
    }
});
