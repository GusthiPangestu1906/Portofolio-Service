const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Arahkan Node.js untuk membaca file statis (html, css, js, gambar) di folder yang sama
app.use(express.static(path.join(__dirname, '/')));

// Konfigurasi Email (GMAIL)
// PENTING: Anda harus menggunakan App Password, bukan password email biasa.
// 1. Buka https://myaccount.google.com/security
// 2. Aktifkan 2-Step Verification
// 3. Cari "App passwords" di kolom pencarian
// 4. Buat password baru dan copy ke variabel di bawah ini.
const EMAIL_USER = 'gusthipangestu1906@gmail.com'; 
const EMAIL_PASS = 'pddw euxz ysmd ijzu'; // <-- GANTI INI DENGAN APP PASSWORD GMAIL

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
});

// Route utama untuk membuka index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API Endpoint untuk mengirim email
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Harap isi semua kolom wajib!' });
    }

    const mailOptions = {
        from: `"${name}" <${email}>`, // Pengirim (tapi via akun kita)
        to: EMAIL_USER, // Kirim ke diri sendiri
        replyTo: email, // Agar bisa langsung reply ke pengirim
        subject: `[Portfolio Contact] ${subject || 'No Subject'}`, 
        text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        `,
        html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.json({ success: true, message: 'Pesan berhasil terkirim!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Gagal mengirim pesan. Silakan coba lagi atau hubungi via email langsung.' });
    }
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
    console.log(`NOTE: Pastikan sudah mengisi EMAIL_PASS di server.js dengan App Password Gmail Anda.`);
});
