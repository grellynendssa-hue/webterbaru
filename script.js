const form = document.getElementById("laporForm");
const toast = document.getElementById("toast");
const key = "pengaduan";

function readData() {
  return JSON.parse(localStorage.getItem(key) || "[]");
}
function saveData(data) {
  localStorage.setItem(key, JSON.stringify(data));
}

if(form){
  form.addEventListener("submit", e => {
    e.preventDefault();
    const fd = new FormData(form);
    const item = {
      tanggal: new Date().toLocaleString("id-ID"),
      judul: fd.get("judul"),
      kategori: fd.get("kategori"),
      status: "Terkirim",
      kronologi: fd.get("kronologi"),
      alamat: fd.get("alamat"),
      nama: fd.get("nama") || "Anonim"
    };
    const data = readData();
    data.unshift(item);
    saveData(data);
    toast.hidden = false;
    setTimeout(() => toast.hidden = true, 3000);
    form.reset();
  });
}