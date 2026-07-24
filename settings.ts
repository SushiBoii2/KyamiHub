/*
 * Vencord Plugin
 */

import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

import { KeybindRecorder } from "./components/KeybindRecorder";

export const keybindRecordingState = {
    active: false
};

export const settings = definePluginSettings({
    keybind: {
        type: OptionType.STRING,
        description: "Keyboard shortcut used to open Kyami Hub.",
        default: "alt+k",
        hidden: true
    },

    keybindRecorder: {
        type: OptionType.COMPONENT,
        description: "",
        component: KeybindRecorder
    }
});
