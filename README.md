# Khanza Update Publisher

Publisher untuk membuat manifest update otomatis untuk SIMRS Khanza.

Project ini akan menghasilkan:

- `version.json`
- `manifest.json`
- file update

## Prasyarat

- Node.js 16+ (disarankan versi LTS terbaru)

## Menjalankan

1. Pastikan berada di folder proyek:

```bash
cd D:/khanza-update-publisher
```

2. Jalankan:

```bash
npm start
```

Output akan menampilkan ringkasan file dan membuat manifest di direktori `release`.

## Konfigurasi

File konfigurasi yang digunakan adalah `config/publisher.json` di root proyek. Contoh pengaturan:

```json
{
	"projectName": "SIMRS Khanza",
	"version": "1.0.0",
	"sourceDirectory": "D:/SIMRS-KHANZA",
	"releaseDirectory": "./release",
	"algorithm": "sha256",
	"ignore": [".git", "node_modules", "logs", "release"]
}
```

Perubahan yang dilakukan:
- `src/config/config.js` sekarang mencari `publisher.json` relatif terhadap modul untuk menghindari ketergantungan pada `cwd`.
- `src/config/validator.js` kini membuat `releaseDirectory` jika belum ada, dan memvalidasi `algorithm`.

## Troubleshooting

- Jika `npm start` gagal, periksa path `sourceDirectory` pada `config/publisher.json`.
- Untuk debug cepat, jalankan `node src/index.js` langsung.

---

Jika ingin, saya bisa melanjutkan ke langkah terakhir: menyiapkan commit dan saran perintah `git` untuk PR.