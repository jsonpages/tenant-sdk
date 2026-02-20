# 🏗️ JsonPages Tenant SDK

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jsonpages/tenant-sdk)
[![NPM Version](https://img.shields.io/npm/v/@jsonpages/core?color=blue&label=@jsonpages/core)](https://www.npmjs.com/package/@jsonpages/core)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

> **The Sovereign Site Factory.**  
> A strictly typed, component-based architecture for agencies who value Governance over Captivity.

---

## ⚡ The 30-Second Architect

You don't need to clone this repo manually. The fastest way to start is via our CLI, which projects this architecture directly onto your machine.



```bash
# No install required. Just run:
npx @jsonpages/cli@latest new tenant "my-agency-site"
```

### What you get
1.  **Green Build Guarantee:** A React/Vite app that passes `tsc` (TypeScript Compiler) immediately.
2.  **Sovereign Core:** The engine (`@jsonpages/core`) is separated from your content.
3.  **Local CMS:** Edit content visually in `localhost:5173/admin` and save directly to JSON files.

---

## 📐 The Architecture (V1.2)

This is not a template. It is a **System** governed by strict protocols to ensure scalability and maintainability.

### 1. 🧱 Tenant Block Protocol (TBP)
Components are not just files; they are **Capsules**. Every component in `src/components/` is self-contained with its own:
*   `View.tsx`: The pure React component (Dumb View).
*   `schema.ts`: The Zod schema defining the data contract.
*   `types.ts`: TypeScript interfaces inferred from the schema.

### 2. 📐 Modular Type Registry (MTRP)
We reject `any`. The Core Engine doesn't know your components, but it orchestrates them safely via **Module Augmentation**.
*   **Your Code:** Defines the Schema.
*   **The Engine:** Reads the Schema to generate the Admin UI automatically.

### 3. 📂 JsonPages Site Protocol (JSP)
Global Governance is physically separated from Local Content.
*   `src/data/config/`: Site identity, Menu, Theme tokens.
*   `src/data/pages/`: Route-specific content (JSON).

---

## 📂 Project Structure

```text
my-agency-site/
├── src/
│   ├── components/       # TBP Capsules (Hero, Grid, etc.)
│   ├── data/             # The "Database" (JSON files)
│   │   ├── config/       # Global settings (site.json, theme.json)
│   │   └── pages/        # Page content (home.json)
│   ├── lib/              # Registry & Schemas wiring
│   └── App.tsx           # The Thin Entry Point
├── public/               # Static assets
└── package.json          # Dependencies
```

---

## 🚀 Workflow

### 1. Develop (Local)
Start the development server. The **Admin Interface** is automatically injected.

```bash
npm run dev
```
*   Go to `http://localhost:5173/admin`.
*   Edit content visually.
*   Click **Save**: The CLI writes changes directly to your `src/data/*.json` files.

### 2. Build (Production)
Verify the integrity of your architecture.

```bash
npm run build
```
If it compiles, it works. No runtime surprises.

### 3. Deploy (Global)
Push to GitHub or use the Vercel CLI.

```bash
npx vercel
```

---

## ☁️ Going Cloud (Optional)

By default, this Tenant is **Local-First**. Data lives in your Git repository.
To enable **Production Editing** (editing content directly on the live Vercel URL), you can link this project to the **JsonPages Cloud**.

*   **Git-Backed:** We commit to your repo. You own the data.
*   **Zero Config:** No database to setup.

*(Cloud Link coming soon)*

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

Built with ❤️ by the **JsonPages Ecosystem**.
```