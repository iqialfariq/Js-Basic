# 🧠 Penjelasan JavaScript
<p align="justify">
JavaScript (disingkat JS) adalah bahasa pemrograman yang digunakan terutama untuk membuat halaman web menjadi dinamis dan interaktif, bekerja bersama HTML (struktur) dan CSS (desain). JavaScript dibuat oleh Brendan Eich pada tahun 1995 saat ia bekerja di Netscape Communications.
ada 2 cara untuk menyimpan file javascript internal js dan external js.
</p>

---

- **Internal JavaScript** 📎
  <p align="justify">
  Menyisipkan isi code javascript di dalam tag <script>...</script> pada html.
  </p>
  
  ```html
    <script>
        function sapa() {
          alert("Halo semua, ini dari internal JS!");
        }
    </script>
  ```
  
  ---

- **External JavaScript** 📎
  <p align="justify">
  Menyisipkan src"..." di dalam tag <script>...</script> pada html.
  </p>
  
  ```html
    <script src="script.js"></script>
  ```

---

## 🔄 Penjelasan Fungsi Interaksi

```
alert (Digunakan untuk menampilkan pesan sederhana).
cara menggunakan | alert('pesan');

prompt (Digunakan untuk meminta input teks dari pengguna).
cara menggunakan | prompt('pesan');

confirm (Digunakan untuk meminta konfirmasi dari pengguna).
cara menggunakan | confirm('pesan');

console.log (Digunakan untuk menampilkan pesan atau nilai ke console. Biasanya digunakan untuk debuging).
cara menggunakan | console.log('pesan');

```

---

### 📝 Penjelasan Variabel
<p align="justify"> 
Variabel adalah wadah untuk menyimpan data yang bisa digunakan dan dimanipulasi dalam program. Dengan variabel, kita bisa memberi nama pada sebuah nilai agar mudah dipanggil kembali.
Ada 3 cara untuk mendeklarasikan variable yaitu:
</p>

```
var
  - Scope: Fungsi (function-scoped). Tidak terbatas pada blok {}.
  - Reassign: Bisa diubah nilainya.
  - Redeclare: Bisa dideklarasikan ulang dalam scope yang sama.
  - Hoisting: Di-hoist ke atas, tapi nilainya undefined sampai dieksekusi.
```

```
let
  - Scope: Blok (block-scoped), hanya berlaku di dalam {}.
  - Reassign: Bisa diubah nilainya.
  - Redeclare: Tidak bisa dideklarasikan ulang dalam scope yang sama.
  - Hoisting: Di-hoist, tapi tidak bisa diakses sebelum deklarasi 'temporal dead zone'.
```

```
const
  - Scope: Blok (block-scoped).
  - Reassign: Tidak bisa diubah nilainya setelah deklarasi.
  - Redeclare: Tidak bisa dideklarasikan ulang.
  - Hoisting: Sama seperti let, ada 'temporal dead zone'.
```

---

## 🧩 Penjelasan Tipe Data
<p align="justify"> 
Tipe data JavaScript memiliki dua kategori yaitu: Primitive types dan Non-primitive (Reference) types.
</p>

### 📌 Tipe Data Primitive Types

- **Number**📎
  <p align="justify">  
  Number adalah tipe data primitif yang digunakan untuk merepresentasikan angka, baik bilangan bulat (integer) maupun bilangan pecahan (floating point). Semua angka di JavaScript (kecuali BigInt) disimpan
  dalam format 64-bit floating point (IEEE 754).
  </p>
  
  ```
  istilah penting dalam number:
   	- Integer → bilangan bulat, contoh: 10, -5. maksimal 15 digit.
   	- Floating Point → bilangan desimal, contoh: 3.14, -0.5 maksimal 17 digit dibelakang koma.
   	- Exponential Notation → penulisan angka dengan pangkat 10, contoh: 2e3 → 2000.
   	- Infinity / -Infinity → hasil dari pembagian dengan nol atau angka terlalu besar.
   	- NaN (Not-a-Number) → hasil operasi matematika yang tidak valid, contoh: 0/0.
  ```

- **String**📎
  <p align="justify">  
  Tipe data String di JavaScript adalah tipe data primitif yang digunakan untuk menyimpan teks, yaitu kumpulan karakter. String bisa berupa huruf, angka, simbol, atau bahkan emoji, selama diapit oleh tanda
  kutip tunggal ('...'), tanda kutip ganda ("..."), atau template literal dengan backtick (`...`).
  </p>
  
  ```
  macam-macam escape caracter yaitu:
   	- \0 → karakter null.
   	- \' → ' (kutip satu).
   	- \" → " (kutip dua).
   	- \\ → \ (BackSlace satu).
   	- \n → baris baru.
   	- \t → tab.
   	- \b → backspace.
   	- \uXXXX → Unicode.
  ```

- **Boolean**📎
  <p align="justify">  
  Tipe data Boolean di JavaScript adalah salah satu tipe data primitif yang hanya memiliki dua nilai: true atau false. Boolean biasanya digunakan untuk logika, pengambilan keputusan, dan kondisi dalam
  program.
  </p>
  
  ```
  Operator Logika yang Menghasilkan Boolean:
   	- AND (&&) → bernilai true jika kedua kondisi benar.
   	- OR (||) → bernilai true jika salah satu kondisi benar.
   	- NOT (!) → membalik nilai Boolean.
  ```

- **Null**📎
  <p align="justify">  
  Null adalah sebuah nilai khusus dalam pemrograman yang menandakan bahwa sebuah variabel tidak memiliki nilai atau kosong. Biasanya dipakai dalam situasi di mana kita ingin menandai bahwa sebuah variabel
  belum memiliki nilai atau tidak ada data yang relevan.
  </p>

- **Undefined**📎
  <p align="justify">  
  Undefined adalah tipe data primitif di JavaScript. Nilai ini muncul ketika sebuah variabel sudah dideklarasikan tetapi belum diberi nilai. Jadi, undefined berarti "variabel ada, tapi belum ada isi".
  </p>  

---

## 📌 Penjelasan Operator
<p align="justify"> 
Operator adalah simbol khusus yang digunakan untuk melakukan operasi pada nilai atau variabel. JavaScript menyediakan berbagai jenis operator sesuai kebutuhan diantaranya ada 7 jenis yaitu:
</p>

- **Operator Aritmatika**📎
  <p align="justify">  
  Digunakan untuk operasi matematika dasar.
  </p>
  
  ```
   	- + → penjumlahan.
   	- - → pengurangan.
   	- * → perkalian.
   	- / → pembagian.
   	- % → modulus (sisa bagi).
   	- ** → pangkat.
  ```

- **Operator Aritmatika**📎
- **Operator Penugasan (Assignment)**📎
  <p align="justify">  
  Memberikan nilai ke variabel.
  </p>
  
  ```
   	- = → assignment dasar.
   	- += → tambah lalu assign.
   	- -= → kurang lalu assign.
   	- *= → kali lalu assign.
   	- /= → bagi lalu assign.
   	- %= → sisah bagi lalu assign.
  ```

- **Operator Perbandingan (Comparison)**📎
  <p align="justify">  
  Membandingkan dua nilai yang hasil nya Boolean true atau false.
  </p>
  
  ```
   	- == → dua sama dengan (longgar, cek nilai saja).
   	- === → tiga sama dengan (ketat, cek nilai & tipe data).
   	- != → tidak satu sama dengan (longgar, cek nilai saja).
   	- !== → tidak dua sama dengan (ketat, cek nilai & tipe data).
   	- > → lebih besar.
   	- < → lebih kecil.
   	- >= → lebih besar atau sama.
   	- <= → lebih kecil atau sama.
  ```

- **Operator Logika**📎
  <p align="justify">  
  Dipakai untuk operasi boolean.
  </p>
  
  ```
    - && → AND (kedua nya harus true).
   	- || → OR (salah satunya nya boleh true/false).
   	- ! → NOT (membalikan nilai true - false atau false - true).
  ```

- **Operator String**📎
  <p align="justify">  
  Dipakai untuk menggabungkan string atau tuisan dan angka.
  </p>
  
  ```
   	- +
   	- +=
  ```

- **Operator Increment / Decrement**📎
  <p align="justify">  
  Dipakai untuk melakukan tambah atau kurang secara singkat.
  </p>
  
  ```
   	- ++ → tambah 1.
   	- -- → kurang 1.
  ```

- **Unary Operator (typeof)**📎
  <p align="justify">  
  Operator yang bekerja pada satu operand saja.
  </p>
  
  ```
   	- +x → mengubah ke number.
   	- -x → negasi nilai.
   	- !x → logical NOT.
   	- typeof x → cek tipe data.
   	- delete obj.prop → hapus properti.
  ```

- **Operator Ternary (Conditional)**📎
  <p align="justify">  
  Operator yang bekerja pada tiga operand.
  </p>
  
  ```
  contoh:
   	- kondisi ? nilaiJikaTrue : nilaiJikaFalse
  ```
