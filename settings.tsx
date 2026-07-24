/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { openModal } from "@utils/modal";
import { OptionType } from "@utils/types";
import { Button, Forms } from "@webpack/common";

import { Hub } from "./components/Hub";
import { KeybindRecorder } from "./components/KeybindRecorder";

export const keybindRecordingState = {
    active: false
};

function QuickAccessSetting() {
    return (
        <Forms.FormSection>
            <Forms.FormTitle tag="h3">
                Quick Access
            </Forms.FormTitle>

            <Forms.FormText
                style={{
                    marginBottom: 8,
                    opacity: 0.8
                }}
            >
                Open Kyami Hub instantly.
            </Forms.FormText>

            <Button
                onClick={() =>
                    openModal(props => <Hub {...props} />)
                }
            >
                Open Kyami Hub
            </Button>
        </Forms.FormSection>
    );
}

export const settings = definePluginSettings({

    //-----------------------------------------
    // Hidden values
    //-----------------------------------------

    keybind: {
        type: OptionType.STRING,
        description: "Keyboard shortcut used to open Kyami Hub.",
        default: "alt+k",
        hidden: true
    },

    //-----------------------------------------
    // Visible settings
    //-----------------------------------------

    quickAccess: {
        type: OptionType.COMPONENT,
        description: "",
        component: QuickAccessSetting
    },

    keybindRecorder: {
        type: OptionType.COMPONENT,
        description: "",
        component: KeybindRecorder
    },

    openOnStartup: {
        type: OptionType.BOOLEAN,
        description: "Automatically open Kyami Hub when Discord starts.",
        default: false
    },

    enableAnimations: {
        type: OptionType.BOOLEAN,
        description: "Enable interface animations.",
        default: true
    },

    closeOnEscape: {
        type: OptionType.BOOLEAN,
        description: "Press Escape to close Kyami Hub.",
        default: true
    },

    rememberLastTab: {
        type: OptionType.BOOLEAN,
        description: "Reopen the last selected page.",
        default: true
    }

});
