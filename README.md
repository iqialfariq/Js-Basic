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

## 📌 penjelasan tipe data
<p align="justify"> 
tipe data JavaScript memiliki dua kategori yaitu: Primitive types dan Non-primitive (Reference) types.
</p>

### 🔤 Tipe data primitive types

- **Number**📎
  <p align="justify">  
    Number adalah tipe data primitif yang digunakan untuk merepresentasikan angka, baik bilangan bulat (integer) maupun bilangan pecahan (floating
    point). Semua angka di JavaScript (kecuali BigInt) disimpan dalam format 64-bit floating point (IEEE 754) istilah penting dalam number:
  </p>
  
  ```
  - let
    - Integer → bilangan bulat, contoh: 10, -5. maksimal 15 digit
   	- Floating Point → bilangan desimal, contoh: 3.14, -0.5 maksimal 17 digit dibelakang koma
   	- Exponential Notation → penulisan angka dengan pangkat 10, contoh: 2e3 → 2000
   	- Infinity / -Infinity → hasil dari pembagian dengan nol atau angka terlalu besar
   	- NaN (Not-a-Number) → hasil operasi matematika yang tidak valid, contoh: 0/0
  ```

  - **String**📎
  <p align="justify">  
    Tipe data String di JavaScript adalah tipe data primitif yang digunakan untuk menyimpan teks, yaitu kumpulan karakter. String bisa berupa huruf,
    angka, simbol, atau bahkan emoji, selama diapit oleh tanda kutip tunggal ('...'), tanda kutip ganda ("..."), atau template literal dengan backtick
    (`...`). macam-macam escape caracter yaitu:
  </p>
  
  ```
   	- \0 => karakter null
   	- \' => ' (kutip satu)
   	- \" => " (kutip dua)
   	- \\ => \
   	- \n => baris baru
   	- \t => tab
   	- \b => backspace
   	- \uXXXX => Unicode
  ```

  - **Boolean**📎
  <p align="justify">  
    Tipe data Boolean di JavaScript adalah salah satu tipe data primitif yang hanya memiliki dua nilai: true atau false. Boolean biasanya digunakan
    untuk logika, pengambilan keputusan, dan kondisi dalam program.
  </p>
  
  ```
  Operator Logika yang Menghasilkan Boolean:
   	- AND (&&) → bernilai true jika kedua kondisi benar
   	- OR (||) → bernilai true jika salah satu kondisi benar
   	- NOT (!) → membalik nilai Boolean
  ```

  - **Null**📎
  <p align="justify">  
    Null adalah sebuah nilai khusus dalam pemrograman yang menandakan bahwa sebuah variabel tidak memiliki nilai atau kosong. Biasanya dipakai dalam
    situasi di mana kita ingin menandai bahwa sebuah variabel belum memiliki nilai atau tidak ada data yang relevan.
  </p>

  - **undefined**📎
  <p align="justify">  
    undefined adalah tipe data primitif di JavaScript. Nilai ini muncul ketika sebuah variabel sudah dideklarasikan tetapi belum diberi nilai. Jadi,
    undefined berarti "variabel ada, tapi belum ada isi".
  </p>
