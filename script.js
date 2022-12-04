let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
table.style.border.collapse = "collapse";
table.style.border.spacing = "0";




table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('root').appendChild(table);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Ime i prezime";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Godište";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Prosjek ocjena";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);

let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "Haris Cizmic";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "1995";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "6.7";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);


let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "Ademir Muratovic";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "1996";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "7.9";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);


let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = "Sulejman Hodzic";
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = "1996";
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = "8.9";

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
tbody.appendChild(row_4);

let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.innerHTML = "Džemal Jukić";
let row_5_data_2 = document.createElement('td');
row_5_data_2.innerHTML = "1996";
let row_5_data_3 = document.createElement('td');
row_5_data_3.innerHTML = "9.9";

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
row_5.appendChild(row_5_data_3);
tbody.appendChild(row_5);

let row_6 = document.createElement('tr');
let row_6_data_1 = document.createElement('td');
row_6_data_1.innerHTML = "Bakir Izetbegovic";
let row_6_data_2 = document.createElement('td');
row_6_data_2.innerHTML = "1953";
let row_6_data_3 = document.createElement('td');
row_6_data_3.innerHTML = "2.9";

row_6.appendChild(row_6_data_1);
row_6.appendChild(row_6_data_2);
row_6.appendChild(row_6_data_3);
tbody.appendChild(row_6);


let row_7 = document.createElement('tr');
let row_7_data_1 = document.createElement('td');
row_7_data_1.innerHTML = "Armin Lelić";
let row_7_data_2 = document.createElement('td');
row_7_data_2.innerHTML = "1996";
let row_7_data_3 = document.createElement('td');
row_7_data_3.innerHTML = "8.5";

row_7.appendChild(row_7_data_1);
row_7.appendChild(row_7_data_2);
row_7.appendChild(row_7_data_3);
tbody.appendChild(row_7);


let row_8 = document.createElement('tr');
let row_8_data_1 = document.createElement('td');
row_8_data_1.innerHTML = "Milorad Dodik";
let row_8_data_2 = document.createElement('td');
row_8_data_2.innerHTML = "1956";
let row_8_data_3 = document.createElement('td');
row_8_data_3.innerHTML = "1.9";

row_8.appendChild(row_8_data_1);
row_8.appendChild(row_8_data_2);
row_8.appendChild(row_8_data_3);
tbody.appendChild(row_8);


let row_9 = document.createElement('tr');
let row_9_data_1 = document.createElement('td');
row_9_data_1.innerHTML = "Senad Bećirović";
let row_9_data_2 = document.createElement('td');
row_9_data_2.innerHTML = "1992";
let row_9_data_3 = document.createElement('td');
row_9_data_3.innerHTML = "8.2";

row_9.appendChild(row_9_data_1);
row_9.appendChild(row_9_data_2);
row_9.appendChild(row_9_data_3);
tbody.appendChild(row_9);



let row_10 = document.createElement('tr');
let row_10_data_1 = document.createElement('td');
row_10_data_1.innerHTML = "Nihad Omerović";
let row_10_data_2 = document.createElement('td');
row_10_data_2.innerHTML = "1966";
let row_10_data_3 = document.createElement('td');
row_10_data_3.innerHTML = "7.1";

row_10.appendChild(row_10_data_1);
row_10.appendChild(row_10_data_2);
row_10.appendChild(row_10_data_3);
tbody.appendChild(row_10);



let row_11 = document.createElement('tr');
let row_11_data_1 = document.createElement('td');
row_11_data_1.innerHTML = "Cristiano Ronaldo";
let row_11_data_2 = document.createElement('td');
row_11_data_2.innerHTML = "1985";
let row_11_data_3 = document.createElement('td');
row_11_data_3.innerHTML = "4.2";

row_11.appendChild(row_11_data_1);
row_11.appendChild(row_11_data_2);
row_11.appendChild(row_11_data_3);
tbody.appendChild(row_11);


