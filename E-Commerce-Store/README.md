## 🛒 E-Commerce Store (React)

A **production-style e-commerce frontend** built using **React** and **TanStack Query**, focused on real-world architecture, clean data fetching, global state management, and polished UX patterns like skeleton loaders and breadcrumbs.

This project is being built **incrementally**, following professional development practices with regular commits.

---

## ✨ Features (Implemented)

### 🧭 Navigation & Routing
- Client-side routing using **React Router**
- Dynamic product routes (`/product/:productId`)
- Layout-based routing with `<Outlet />`
- Custom **Breadcrumb navigation** (URL-aware)

### 🛍️ Product Experience
- Product listing page (fetched from API)
- Product details page with dynamic data
- Seamless navigation between pages

### 🛒 Global Cart System
- Global cart state using **React Context**
- Add to cart functionality
- Quantity handling
- Cart data persisted using `localStorage`
- Cart accessible from anywhere in the app

### 🔌 Data Fetching (Professional Setup)
- **TanStack Query** for data management
- Separate query hooks:
  - `useProducts()` – fetch all products
  - `useProduct(id)` – fetch single product
- Automatic caching & request deduplication
- Loading & error state handling

### ⚡ UX & Performance Polish
- Skeleton loaders for:
  - Product listing page
  - Product details page
  - Breadcrumbs
  - Cart (future-ready)
- No layout shift during loading
- Clean empty states
- Custom 404 (Not Found) page

---

## 🛠 Tech Stack

- **React**
- **React Router**
- **TanStack Query**
- **Tailwind CSS**
- **Context API**
- **LocalStorage API**

---

## 🧩 Architecture Highlights

- Clear separation of concerns:
  - Pages
  - Components
  - Hooks
  - Layouts
  - Skeleton UI components
- Derived UI state (no unnecessary refetching)
- Immutable data handling
- Production-style folder structure

---

## 🧠 Key Learnings

This project helped reinforce:

- Real-world async data handling
- Debugging route params & query conditions
- Global state management patterns
- Professional loading UX using skeletons
- Breadcrumb logic based on URL structure
- Avoiding common pitfalls (`Array.sort()` mutation, query `enabled` misuse)
- Thinking in terms of **architecture**, not just components

---

## 🚧 Planned Features

- 🔍 Product search
- 🗂️ Category filtering
- 🔢 Price sorting
- ⚡ Performance optimizations
- 🧾 Checkout flow (mock)

---

## 📌 How to Run Locally

```bash
git clone <your-repo-link>
cd ecommerce-store
npm install
npm run dev
