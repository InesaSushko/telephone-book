class App {
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
    const header = `<header class="header">
		                  <div class="container top-radius">
			                  <h2>Contacts</h2>
		                  </div>
	                  </header>`;
    return header;
  }

  createForm() {
    const form = `<form class="form-inline search-form">
				            <div class="form-group">
					            <label class="sr-only" for="search">Search</label>
					            <input type="text" class="form-control" id= "search" placeholder="Search">
				            </div>
			            </form>`;
    return form;
  }

  createContacts(contact) {
    let tags = ``;
    for (let param in contact) {
      tags += `<td>${contact[param]}</td>`;
    }
    return tags;
  }

  createTable() {
    let table = `<table class="table table-hover contacts"><thead>`;
    table += this.headings.map(header => `<th>${header}</th>`).join("");
    table += `<tbody>`;
    table += this.contacts
      .map(contact => `<tr>` + this.createContacts(contact) + `</tr>`)
      .join("");
    table += `</tbody></table>`;
    table += `</div></main>`;
    return table;
  }

  main() {
    let mainHTML = `<main><div class="container">`;
    mainHTML += this.createForm();
    mainHTML += this.createTable();

    return mainHTML;
  }

  filterEvent() {
    const search = document.querySelector("#search");
    search.addEventListener("keydown", e => {
      this.filterFN(search, e);
    });
  }

  filterFN(input, e) {
    const raws = [...document.getElementsByTagName("tr")].slice(1);
    let param;
    let value = input.value;
    e.key === "Backspace"
      ? (param = value.slice(0, value.length - 1))
      : (param = value + e.key);
    raws.forEach(elem => {
      let eachName = elem.children[0].textContent.toLowerCase();
      return eachName.includes(param.toLowerCase()) ? (elem.style.display = "table") : (elem.style.display = "none");
    });
  }

  sortingEvent() {
    const thead = document.querySelector("thead");
    const th = [...document.querySelectorAll("th")];
    thead.addEventListener("click", e => {
      if (e.target.tagName === "TH") {
        let index = th.indexOf(e.target);
        this.sortingFN(index);
      }
    });
  }

  sortingFN(index) {
    const raws = [...document.getElementsByTagName("tr")].slice(1);
    let newRaws = raws.sort((a, b) => {
      const raws = [...document.getElementsByTagName("tr")].slice(1);
      let prev = [...a.querySelectorAll("td")][index].textContent;
      let next = [...b.querySelectorAll("td")][index].textContent;
      return prev > next ? 1 : -1;
    }).map(elem => elem.outerHTML).join("");
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = newRaws;
  }

  render() {
    const mainDiv = document.createElement("div");
    mainDiv.innerHTML = this.header() + this.main();
    document.body.prepend(mainDiv);
    this.sortingEvent();
    this.filterEvent();
  }
}

let phoneBook = new App();
phoneBook.render();
