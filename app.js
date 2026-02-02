"use strict";

/**
 * Node2Know — Express Static Assets
 *
 * Static middleware serves files directly from disk (CSS, JS, images, etc.).
 * Express checks these folders BEFORE hitting your routes.
 *
 * Order matters:
 *   app.use(express.static("public"));  // site assets
 *   app.use(express.static("uploads")); // user-uploaded assets
 */

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Look here first (Site assets)
app.use(express.static("public"));

// Then look here (User profile pics)
app.use(express.static("uploads"));

app.get("/", (req, res) => {
  // serve a page that references static assets
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Created process at PID: ${process.pid}`);
  console.log(`Listening on port: ${PORT}`);
  console.log(`Open: http://localhost:${PORT}/`);
  console.log(`Static CSS: http://localhost:${PORT}/css/style.css`);
  console.log(`Static JS:  http://localhost:${PORT}/js/app.js`);
  console.log(`Logo:       http://localhost:${PORT}/img/logo.png`);
  console.log(`Upload:     http://localhost:${PORT}/profile-demo.png`);
});
