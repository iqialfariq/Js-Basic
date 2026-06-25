# 🧠 Penjelasan JavaScript
<p align="justify">
JavaScript (disingkat JS) adalah bahasa pemrograman yang digunakan terutama untuk membuat halaman web menjadi dinamis dan interaktif, bekerja bersama HTML (struktur) dan CSS (desain). JavaScript dibuat oleh Brendan Eich pada tahun 1995 saat ia bekerja di Netscape Communications.
ada 2 cara untuk menyimpan file javascript internal js dan external js.
</p>

---

- **Internal JavaScript**  
  Menyisipkan isi code javascript di dalam tag <script>...</script> pada html.  
  ```html
    <script>
        function sapa() {
          alert("Halo semua, ini dari internal JS!");
        }
    </script>
  ```
  
  ---

- **External JavaScript**  
  Menyisipkan src"..." di dalam tag <script>...</script> pada html.  
  ```html
    <script src="script.js"></script>
  ```

## penjelasan Fungsi Interaksi
```
- alert (Digunakan untuk menampilkan pesan sederhana.)
  cara menggunakan => alert('pesan');

- prompt (Digunakan untuk meminta input teks dari pengguna.)
  cara menggunakan=> prompt('pesan');

- confirm (Digunakan untuk meminta konfirmasi dari pengguna)
  cara menggunakan => confirm('pesan');

- console.log (Digunakan untuk menampilkan pesan atau nilai ke console. Biasanya digunakan untuk debuging)
  cara menggunakan => console.log('pesan');

```

### 🔤 Penjelasan Variabel
<p align="justify"> 
Variabel adalah wadah untuk menyimpan data yang bisa digunakan dan dimanipulasi dalam program. Dengan variabel, kita bisa memberi nama pada sebuah nilai agar mudah dipanggil kembali. Ada 3 cara untuk mendeklarasikan variable yaitu:
</p>

```
- var
  - Scope: Fungsi (function-scoped). Tidak terbatas pada blok {}.
  - Reassign: Bisa diubah nilainya.
  - Redeclare: Bisa dideklarasikan ulang dalam scope yang sama.
  - Hoisting: Di-hoist ke atas, tapi nilainya undefined sampai dieksekusi.
```

```
- let
  - Scope: Blok (block-scoped), hanya berlaku di dalam {}.
  - Reassign: Bisa diubah nilainya.
  - Redeclare: Tidak bisa dideklarasikan ulang dalam scope yang sama.
  - Hoisting: Di-hoist, tapi tidak bisa diakses sebelum deklarasi 'temporal dead zone'.
```

```
- const
  - Scope: Blok (block-scoped).
  - Reassign: Tidak bisa diubah nilainya setelah deklarasi.
  - Redeclare: Tidak bisa dideklarasikan ulang.
  - Hoisting: Sama seperti let, ada 'temporal dead zone'.
```
