function JsxExpression() {
  const nama = "Irgi";
  const angka1 = 10;
  const angka2 = 5;
  const hargaAsli = 100000;
  const diskon = 0.2;

  // operasi matematika
  const penjumlahan = angka1 + angka2;
  const perkalian = angka1 * angka2;

  // fungsi sapaan
  function sapaan(user) {
    return `Halo, ${user}! Selamat Datang 👋`;
  }

  // manipulasi string
  const namaUpper = nama.toUpperCase();
  const jumlahHuruf = nama.length;

  // harga setelah diskon
  const hargaSetelahDiskon = hargaAsli - hargaAsli * diskon;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>{sapaan(nama)}</h2>

      <p>Penjumlahan {angka1} + {angka2} = <strong>{penjumlahan}</strong></p>
      <p>Perkalian {angka1} × {angka2} = <strong>{perkalian}</strong></p>

      <p>Harga Asli: Rp {hargaAsli.toLocaleString("id-ID")}</p>
      <p>Diskon: {diskon * 100}%</p>
      <p><strong>Harga Setelah Diskon: Rp {hargaSetelahDiskon.toLocaleString("id-ID")}</strong></p>

      <p>Nama dalam huruf besar: {namaUpper}</p>
      <p>Jumlah huruf pada namamu: {jumlahHuruf}</p>
    </div>
  );
}

export default JsxExpression;
