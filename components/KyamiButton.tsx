import React from "react";
import { openModal } from "@utils/modal";

import { Hub } from "./Hub";

export function KyamiButton() {
    return (
        <div
            className="kyami-nav-button"
            onClick={() => openModal(() => <Hub />)}
        >
            ✦ Kyami
        </div>
    );
}
