import { useState } from "react";

export type HelpMode =
    | "modal"
    | "drawer-right"
    | "drawer-left"
    | "drawer-bottom";

export function usePlaygroundHelp() {
    const [mode, setMode] = useState<HelpMode>("modal");

    const [opened, setOpened] = useState(false);

    return {
        mode,
        setMode,
        opened,
        open: () => setOpened(true),
        close: () => setOpened(false),
        toggle: () => setOpened((v) => !v),
    };
}