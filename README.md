# Node2Know — Express Static Assets

This repo demonstrates serving static files with Express using:

```js
app.use(express.static("public"));  // Look here first (Site assets)
app.use(express.static("uploads")); // Then look here (User profile pics)
```

Express checks these folders **before** your route handlers.

---

## Folder layout

```txt
/public
  /css
    - style.css
  /js
    - app.js
  /img
    - logo.png

/uploads
  - profile-demo.png
```

---

## ✅ Prereqs

- Node.js + npm

---

## 📦 Install

```bash
npm install
```

---

## ▶️ Run

```bash
npm start
```

Open:

- `http://localhost:3000/`

---

## 🧪 Try static files directly

From `public/`:

- `http://localhost:3000/css/style.css`
- `http://localhost:3000/js/app.js`
- `http://localhost:3000/img/logo.png`

From `uploads/`:

- `http://localhost:3000/profile-demo.png`

---

## 👀 Watch mode

```bash
npm run watch
```

Stop with:
- Ctrl + C

---

## Repo

- https://github.com/ProfessorSolo/Node2Know-ExpressStatic.git

---

## License

**Node2Know-LEARN-1.0**
