function hitung_luas_segitiga() {
  var alas = document.getElementById("alas_luas_segitiga").value;
  var tinggi = document.getElementById("tinggi_luas_segitiga").value;

  var luas_segitiga = (1 / 2) * parseFloat(alas) * parseFloat(tinggi);

  var hasil1 = document.getElementById("hasil1");
  hasil1.innerHTML = "L = 1/2 x a x t" + "<br />" + "L = 1/2 x " + alas + " x " + tinggi + "<br/>" + "L = " + luas_segitiga;
}

function hitung_keliling_segitiga() {
  var s1 = document.getElementById("s1_segitiga").value;
  var s2 = document.getElementById("s2_segitiga").value;
  var s3 = document.getElementById("s3_segitiga").value;

  var keliling_segitiga = parseFloat(s1) + parseFloat(s2) + parseFloat(s3);

  var hasil2 = document.getElementById("hasil2");
  hasil2.innerHTML = "K = s1 + s2 + s3" + "<br />" + "K = " + S1 + " + " + S2 + " + " + S3 + "<br/>" + "K = " + keliling_segitiga;
}

function hitung_luas_jajargenjang() {
  var alas = document.getElementById("alas_luas_jajargenjang").value;
  var tinggi = document.getElementById("tinggi_luas_jajargenjang").value;

  var luas_jajargenjang = parseFloat(alas) * parseFloat(tinggi);

  var hasil3 = document.getElementById("hasil3");
  hasil3.innerHTML = "L = a x t" + "<br />" + "L = " + alas + " x " + tinggi + "<br/>" + "L = " + luas_jajargenjang;
}

function hitung_keliling_jajargenjang() {
  var sisia = document.getElementById("sisia_jajargenjang").value;
  var sisib = document.getElementById("sisib_jajargenjang").value;

  var keliling_jajargenjang = 2 * (parseFloat(sisia) + parseFloat(sisib));

  var hasil4 = document.getElementById("hasil4");
  hasil4.innerHTML = "K = 2 x (a + b)" + "<br />" + "K = 2 x (" + sisia + " + " + sisib + ")" + "<br/>" + "K = " + keliling_jajargenjang;
}
