## 2. Memahami Perbedaan JSX dengan HTML

**Perbedaan utama JSX dengan HTML:**
- **HTML**: bahasa markup standar yang langsung dibaca browser.
- **JSX**: ekstensi JavaScript di React, mirip HTML tapi bisa embed **JavaScript expression** dengan `{}`.
- JSX butuh proses transpile (misalnya lewat Babel) biar jadi JavaScript murni.
- JSX punya aturan khusus, misalnya `class` → `className`, `for` → `htmlFor`.

###  Contoh HTML Biasa
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Contoh HTML</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Ini paragraf HTML</p>
  </body>
</html>
function App() {
  const name = "Bre";
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>Ini paragraf pakai JSX</p>
    </div>
  );
}

##3 . Virtual DOM adalah representasi ringan dari DOM asli yang disimpan di memori.

Cara kerjanya di React:

Ketika state/props berubah, React membuat Virtual DOM baru.

React membandingkan (diffing) Virtual DOM baru dengan versi sebelumnya.

React hanya mengupdate bagian DOM asli yang berbeda (reconciliation).

Hasilnya: update UI jadi lebih cepat & efisien.

keuntungan: React ga perlu lagi merender ulang suatu halaman, kita hanya perlu merubah elemen nya saja 

##4 . Single Page Application (SPA)
. Definisi: aplikasi web yang berjalan fi satu fileHTML utama. Navigasi di lukakan dengan javaScript tanpa reload penuh.
. contoh: Instagram, Facebook, Twitter.
Kelebihan:
1. User experience cepat(tidak reload penuh).
2. Cocok untuk aplikasi interaktif/dinamis
kelebihan:
1.kuraang ramah SEO(perlu tambahan SSR/teknik SEO).
2. Initial load berat karena JS banyk di awal

----------------------------------------------------------------------------------------------

Multi Page Application (MPA)
. Definisi: setiap halaman mempunyao file HTML sendiri. Navigasi = full reload halaman baru
. Contoh: website berita, e-commerce lama, portal kampus.
kelebihan: 
1. SEO friendly (setiap halaman mempunyai konten sendiri)
2.struktur lebih sederhana untuk website skala kecil\menengah

Kekurangan:
1. Navigasi lebih lambat(karena reload penuh)
2. Development lebih ribet kalau misalkan menggunakan apk Besar
