// ===============================
// DARK MODE
// ===============================

const btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        btnTema.textContent="☀️";
    }else{
        btnTema.textContent="🌙";
    }
});


// ===============================
// LIKE BUTTON
// ===============================

const tombolLike = document.querySelectorAll(".actions button:first-child");

tombolLike.forEach(btn=>{

    let jumlah=0;

    btn.addEventListener("click",()=>{

        jumlah++;

        btn.innerHTML=`👍 Suka (${jumlah})`;

    });

});


// ===============================
// POSTING BARU
// ===============================
async function tampilkanPosting() {

    feed.innerHTML = "";

    const data = await ambilPosting();

    data.forEach((item) => {

        const posting = document.createElement("div");

        posting.className = "post";

        posting.innerHTML = `

<div class="post-header">

<img src="https://i.pravatar.cc/62">

<div>
<h4>Karel</h4>
<small>Baru saja</small>
</div>

</div>

<p>${item.text}</p>

<div class="actions">
<button>👍 Suka (0)</button>
<button class="btnKomentar">💬 Komentar</button>
<button>↗ Bagikan</button>
</div>

<div class="komentar-area" style="display:none; margin-top:10px;">
<input type="text" class="inputKomentar" placeholder="Tulis komentar...">
<button class="kirimKomentar">Kirim</button>

<div class="daftarKomentar"></div>
</div>

`;

        feed.appendChild(posting);
const likeBaru = posting.querySelector(".actions button");

let jumlah = 0;

likeBaru.addEventListener("click", () => {

    jumlah++;

    likeBaru.innerHTML = `👍 Suka (${jumlah})`;

});
    });

}
const input=document.querySelector(".create-post input");
const tombol=document.querySelector(".create-post button");
const feed=document.querySelector(".feed");

tombol.addEventListener("click", async () => {

const isi = input.value.trim();

if (isi === "") {
    alert("Tulis sesuatu dulu 😄");
    return;
}


const posting=document.createElement("div");

posting.className="post";

posting.innerHTML = `

<div class="post-header">

<img src="https://i.pravatar.cc/62">

<div>
<h4>Karel</h4>
<small>Baru saja</small>
</div>

</div>

<p>${isi}</p>

<div class="actions">
<button>👍 Suka (0)</button>
<button class="btnKomentar">💬 Komentar</button>
<button>↗ Bagikan</button>
</div>

<div class="komentar-area" style="display:none; margin-top:10px;">
<input type="text" class="inputKomentar" placeholder="Tulis komentar...">
<button class="kirimKomentar">Kirim</button>

<div class="daftarKomentar"></div>
</div>

`;

await simpanPosting(isi);
input.value="";
await tampilkanPosting();

});
tampilkanPosting();