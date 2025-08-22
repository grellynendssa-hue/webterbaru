const body = document.getElementById("adminBody");
const key = "pengaduan";

function readData() {
  return JSON.parse(localStorage.getItem(key) || "[]");
}
function saveData(data) {
  localStorage.setItem(key, JSON.stringify(data));
}
function render() {
  const data = readData();
  body.innerHTML = data.length ? data.map((r, i) => `
    <tr>
      <td>${r.tanggal}</td>
      <td>${r.judul}</td>
      <td>${r.kategori}</td>
      <td>${r.status}</td>
      <td>
        <button onclick="ubahStatus(${i}, 'Diproses')">Diproses</button>
        <button onclick="ubahStatus(${i}, 'Selesai')">Selesai</button>
      </td>
    </tr>
  `).join("") : "<tr><td colspan='5'>Belum ada data</td></tr>";
}
function ubahStatus(index, status) {
  const data = readData();
  data[index].status = status;
  saveData(data);
  render();
}
render();