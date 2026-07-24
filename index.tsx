/*
 * Vencord Plugin
 */

import "./styles.css";

import definePlugin from "@utils/types";
import { openModal } from "@utils/modal";

import { Hub } from "./components/Hub";

function KyamiButton() {
    return (
        <div
            className="kyami-nav-button"
            onClick={() => openModal(() => <Hub />)}
        >
            ✦ Kyami
        </div>
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

    patches: [
        {
            find: "PRIVATE_CHANNELS",
            replacement: {
                match: /children:\[/,
                replace: "children:[<KyamiButton key='kyami'/>,"
            }
        }
    ],

    KyamiButton,
});
