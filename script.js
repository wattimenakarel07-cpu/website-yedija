// 1. Ganti tema gelap/terang pas tombol diklik
const btnTema = document.getElementById('btnTema');
btnTema.addEventListener('click', function() {
  document.body.classList.toggle('dark');
});

// 2. Alert pas form disubmit
const form = document.getElementById('formContoh');
form.addEventListener('submit', function(e) {
  e.preventDefault(); // biar gak reload
  const nama = document.getElementById('nama').value;
  alert('Terima kasih ' + nama + '! Data sudah dikirim 😊');
});