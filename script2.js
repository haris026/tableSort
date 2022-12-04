

let studenti = [
  {
    imePrezime: "Haris Cizmic",
    godiste: "1995",
    prosjek: "2.9",
  },
  {
    imePrezime: "Senad Becirovic",
    godiste: "1992",
    prosjek: "5.9",
  },
  {
    imePrezime: "Milorad Dodik",
    godiste: "1956",
    prosjek: "2.1",
  },
  {
    imePrezime: "Ademir Muratovic",
    godiste: "1996",
    prosjek: "8.9",
  },
  {
    imePrezime: "Armin Lelic",
    godiste: "1998",
    prosjek: "4.9",
  },
  {
    imePrezime: "Sulejman Hodzic",
    godiste: "1996",
    prosjek: "7.9",
  },
  {
    imePrezime: "Cristiano Ronaldo",
    godiste: "1985",
    prosjek: "7.1",
  },
  {
    imePrezime: "Dzemal Jukic",
    godiste: "1996",
    prosjek: "8.2",
  },
  {
    imePrezime: "Bakir Izetbegovic",
    godiste: "1953",
    prosjek: "0.9",
  },
];

let sortIndex = 0;


const table = document.createElement("table");
table.classList.add("my-table");

let html = "";

const headers = ["Ime i prezime", "Godište", "Prosjek ocjena"];

html += `<thead>`;
headers.forEach((header, i) => (html += `<th id="${i}">${header}</th>`));
html += `</thead>`;


html += `<tbody>`;
studenti.forEach(
  (row) =>
    (html += `<tr>
    <td>${row.imePrezime}</td>
    <td>${row.godiste}</td>
    <td>${row.prosjek}</td>
</tr>`)
);
html += `</tbody>`;

function updateTable(data) {
  const tableBody = document.querySelector("table tbody");

  let tableBodyHtml = "";
  tableBodyHtml += `<tbody>`;
  data.forEach(
    (row) =>
      (tableBodyHtml += `<tr>
      <td>${row.imePrezime}</td>
      <td>${row.godiste}</td>
      <td>${row.prosjek}</td>
  </tr>`)
  );
  tableBodyHtml += `</tbody>`;
  
  tableBody.innerHTML = tableBodyHtml;
}


table.innerHTML = html;


function sortData(sortIndex) {
  const keys = Object.keys(studenti[0]);

  const sorted = studenti.sort((a, b) =>
    a[keys[sortIndex]].localeCompare(b[keys[sortIndex]], "bs", {
      sensitivity: "base",
    })
  );
  return sorted;
}


const headerElements = table.getElementsByTagName("th");

Array.from(headerElements).forEach((header, i) =>
  header.addEventListener("click", () => {
    updateTable(sortData(i));
  })
);


document.getElementById("root").appendChild(table);
