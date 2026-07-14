import { useState, type Dispatch, type SetStateAction } from "react";
import { helpData } from "../data/data";
import { HelpProvider, HelpButton, type Theme } from "@tiply-dev/tiply";

type Variant = "modal" | "drawer";
type Direction = "right" | "left" | "bottom";

function Header({
    variant,
    direction,
    setVariant,
    setDirection,
    theme,
    setTheme,
}: {
    variant: Variant;
    direction: Direction;
    setVariant: (v: Variant) => void;
    setDirection: (d: Direction) => void;
    theme: Theme;
    setTheme: (t: Theme) => void;
}) {
    return (
        <header className="demo-header">
            <div className="demo-left">
                <h2>Tiply Playground</h2>
            </div>
            <div className="demo-right">
                <button
                    className={`demo-button ${variant === "modal" ? "active" : ""}`}
                    onClick={() => setVariant("modal")}
                >
                    Modal
                </button>

                <button
                    className={`demo-button ${variant === "drawer" ? "active" : ""}`}
                    onClick={() => setVariant("drawer")}
                >
                    Drawer
                </button>
                <span style={{ width: 12 }} />
                <button
                    className={`demo-button ${variant === "drawer" && direction === "right"
                        ? "active"
                        : ""
                        }`}
                    onClick={() => {
                        setVariant("drawer");
                        setDirection("right");
                    }}
                >
                    Right
                </button>
                <button
                    className={`demo-button ${variant === "drawer" && direction === "left"
                        ? "active"
                        : ""
                        }`}
                    onClick={() => {
                        setVariant("drawer");
                        setDirection("left");
                    }}
                >
                    Left
                </button>
                <button
                    className={`demo-button ${variant === "drawer" && direction === "bottom"
                        ? "active"
                        : ""
                        }`}
                    onClick={() => {
                        setVariant("drawer");
                        setDirection("bottom");
                    }}
                >
                    Bottom
                </button>
                <span style={{ width: 12 }} />
                <button
                    className={`demo-button ${theme === "auto" ? "active" : ""}`}
                    onClick={() => {
                        setTheme("auto");
                    }}
                >
                    Auto
                </button>
                <button
                    className={`demo-button ${theme === "dark" ? "active" : ""}`}
                    onClick={() => {
                        setTheme("dark");
                    }}
                >
                    Dark
                </button>
                <button
                    className={`demo-button ${theme === "light" ? "active" : ""}`}
                    onClick={() => {
                        setTheme("light");
                    }}
                >
                    Light
                </button>
                <HelpButton page="dashboard" />
            </div>
        </header>
    );
}

function Page({ title }: { title: string }) {
    return (
        <div className="demo-page">
            <h1>{title}</h1>
            <p>
                This is <b>{title}</b> page. Open help and test search, markdown,
                navigation and highlight system.
            </p>
        </div>
    );
}

function Router({ route, setRoute }: { route: string, setRoute: Dispatch<SetStateAction<"home" | "dashboard" | "users" | "settings">> }) {
    return (
        <div>
            <nav className="demo-nav">
                <button onClick={() => setRoute("home")}>Home</button>
                <button onClick={() => setRoute("dashboard")}>Dashboard</button>
                <button onClick={() => setRoute("users")}>Users</button>
                <button onClick={() => setRoute("settings")}>Settings</button>
            </nav>

            {route === "home" && <Page title="Home" />}
            {route === "dashboard" && <Page title="Dashboard" />}
            {route === "users" && <Page title="Users" />}
            {route === "settings" && <Page title="Settings" />}
        </div>
    );
}

export default function Demo() {
    const [variant, setVariant] = useState<Variant>("modal");

    const [direction, setDirection] = useState<Direction>("right");

    const [route, setRoute] = useState<"home" | "dashboard" | "users" | "settings">("home");

    const [theme, setTheme] = useState<Theme>("auto")

    return (
        <HelpProvider
            data={helpData}
            variant={variant}
            direction={direction}
            theme={theme}
        >
            <div className="demo-app">
                <Header
                    variant={variant}
                    direction={direction}
                    setVariant={setVariant}
                    setDirection={setDirection}
                    theme={theme}
                    setTheme={setTheme}
                />
                <Router route={route} setRoute={setRoute} />
            </div>
        </HelpProvider>
    );
}