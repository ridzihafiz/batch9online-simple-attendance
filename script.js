console.log('Hello!');

let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');

let absensi_data = [];

absensi_form.addEventListener('submit', (event) => {
  event.preventDefault();

  let fullname = event.target.fullname.value;

  if (fullname == '') {
    alert('Please, input your name');
    return;
  }

  let name_value = {
    nama_lengkap: fullname,
    waktu: new Date().toLocaleTimeString(),
    tanggal: new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }),
  };

  absensi_data.push(name_value);

  // console.info(absensi_data);

  event.target.fullname.value = ' ';

  renderToHtml();
});

function renderToHtml() {
  root.innerHTML = '';

  absensi_data.forEach((e, i) => {
    root.innerHTML += `
    <div class="card" draggable="true" ondragend="handleDelete(${i})">
      <span> ${i + 1}. &nbsp; ${e.nama_lengkap} </span>
      <span> ${e.waktu} ${e.tanggal} </span>
    </div>
    `;
  });
}

function handleDelete(index) {
  // console.info(index);

  absensi_data.splice(index, 1);

  renderToHtml();
}
