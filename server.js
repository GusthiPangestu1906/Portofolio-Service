const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Arahkan Node.js untuk membaca file statis (html, css, js, gambar) di folder yang sama
app.use(express.static(path.join(__dirname, '/')));

// Route utama untuk membuka index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});