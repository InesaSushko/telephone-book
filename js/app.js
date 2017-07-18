

class Html {
  constructor() {
    this.headings = ["Name", "Last Name", "Email"];
    this.contacts = [
      { name: "Inesa", lastName: "Sushko", email: "inesatat@gmail.com" },
      { name: "Alla", lastName: "Tsyupak", email: "alla@gmail.com" },
      { name: "Roman", lastName: "Pelyh", email: "roman@gmail.com" },
      { name: "Nikolay", lastName: "Sushko", email: "nikolay@gmail.com" },
      { name: "Kseniya", lastName: "Gurbanova", email: "kseniya@gmail.com" },
      { name: "Danil", lastName: "Zmuncila", email: "danil@gmail.com" },
      { name: "Tatyana", lastName: "Sushko", email: "tatyana@gmail.com" },
      { name: "Alina", lastName: "Pelyh", email: "alina@gmail.com" },
      { name: "Vika", lastName: "Loskot", email: "vika@gmail.com" },
      { name: "Grygoriy", lastName: "Kirichenko", email: "grygoriy@gmail.com" }
    ];
  }

  header() {
    const header = document.createElement("header");
    const headInside = `<div class='container top-radius'><h2>Contacts</h2></div>`;
    header.className = "header";
    header.innerHTML = headInside;
    return header;
  }

  form() {
    const form = document.createElement("form");
    form.className = "form-inline search-form";
    const div = `<div class='form-group>`;
    const label = `<label class='sr-only' for= 'search'>Search</label>`;
    const input = `<input type="text" class="form-control" id= "search" placeholder="Search">`;
    form.innerHTML = div + label + input + `</div>`;
    return form;
  }

  createContacts(contact) {
    let tags = ``;
    for (let param in contact) {
      tags += `<td>${contact[param]}</td>`
    }
    return tags
  }

  table() {
    const table = document.createElement("table");
    table.className = "table table-hover contacts";
    const heads = this.headings.map(header => `<th>${header}</th>`).join("");
    const people = this.contacts.map(contact => `<tr>` + this.createContacts(contact) + `</tr>`).join("");
    const thead = `<thead><tr>${heads}</tr></thead>`;
    const tbody = `<tbody>${people}</tbody>`;
    table.innerHTML = thead + tbody;
    return table;
  }


  main() {
    const main = document.createElement("main");
    const div = document.createElement("div");
    div.className = "container";
    div.appendChild(this.form());
    div.appendChild(this.table());
    main.appendChild(div);
    return main
  }

  sorting() {
    const th = [...document.querySelectorAll('th')];
    const raws = [...document.getElementsByTagName('tr')].slice(1);
    th.forEach((elem, index) => {
      elem.onclick = () => {
        raws.sort((a, b) => {
          let prev = [...a.querySelectorAll('td')][index].textContent;
          let next = [...b.querySelectorAll('td')][index].textContent;
          return prev > next ? 1 : -1});
        const people = raws.map(elem => elem.outerHTML).join('');
        const tbody = document.querySelector('tbody');
        tbody.innerHTML = people;
      }
    })
  }

  render() {
    document.body.prepend(this.main());
    document.body.prepend(this.header());
    this.sorting()
  }
}

let phoneBook = new Html();
phoneBook.render();



