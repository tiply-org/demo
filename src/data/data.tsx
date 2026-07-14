import type { HelpData } from "@tiply-dev/tiply";

export const helpData: HelpData = {
  intro: {
    title: "Tiply Introduction 🚀",
    markdown: `
# Welcome to Tiply

Tiply is a **modern help system** for React applications.

---

## ✨ Features

- Full text search
- Markdown support
- ReactNode rendering
- Modal / Drawer modes
- Active match navigation

---

## 💡 Usage Example

\`\`\`ts
import { HelpProvider } from "tiply";

<HelpProvider data={helpData}>
  <App />
</HelpProvider>
\`\`\`

---

## 📌 Why Tiply?

> Because documentation should feel like product UX, not a wiki.

---

## 🔥 Try searching:

- Tiply
- Markdown
- React
- Drawer
- Modal
- Search
`
  },

  dashboard: {
    title: "Dashboard Guide",
    description: "Dashboard overview for users",
    content: (
      <div>
        <h3>Steps</h3>
        <ol>
          <li>Open dashboard</li>
          <li>Check stats</li>
          <li>Use filters</li>
        </ol>
      </div>
    )
  },

  users: {
    title: "Users Management",
    markdown: `
# Users System

Manage your users easily.

---

## Actions

- Create user
- Edit user
- Delete user

---

## Permissions

| Role | Access |
|------|--------|
| Admin | Full |
| Editor | Limited |
| Viewer | Read only |

---

## Code Example

\`\`\`ts
const user = {
  name: "John",
  role: "admin"
};
\`\`\`
`
  },

  settings: {
    title: "Settings Panel",
    description: "App configuration",
    content: (
      <div>
        <p>Toggle features:</p>
        <ul>
          <li>Dark mode</li>
          <li>Notifications</li>
          <li>Auto save</li>
        </ul>
      </div>
    )
  }
};