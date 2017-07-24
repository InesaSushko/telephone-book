class AddUser {
  constructor() {
    this.editFields = ["First Name", "Last Name", "Company"];
    this.editInfo = [
      "add mobile phone",
      "add home phone",
      "add email",
      "add address",
      "add birthday",
      "add social profile",
      "add field"
    ];
  }

  header() {
    const header = `<header class="header">
		                <div class="container top-radius">
			                <nav class="user-top-line">
				                <a href="user.html">Cansel</a>
				                <button class = "done-btn">Done</button>
			                </nav>
		                </div>
	                </header>`;
    return header
  }

  createEditField(arr) {
    let editFieldHTML = ``;
    arr.forEach(e => {
      editFieldHTML += `<div class="edit-field">
							<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
								<span>${e}</span>
							</button>
						</div>`;
    });
    return editFieldHTML;
  }

  main() {
    let mainHTML = `<main class="main">
		                <div class="container">
			                <div class="edit-main-info">
				                <div class="edit-foto">
                                <button class="add-foto-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						            <span>add foto</span></button>
					            </div>
					            <div class="main-info-holder">`;
    mainHTML += this.createEditField(this.editFields);
    mainHTML += `</div>
			</div>
			<div class="scroll-holder">
				<div class="edit-info">`;
    mainHTML += this.createEditField(this.editInfo);
    mainHTML += `<div class="edit-field">
							<button href="#" class="delete-contact">delete contact</button>
						</div>
					</div>
				</div>
			</div>
		</main>`;
    return mainHTML
  }

    contentEditable() {
    const main = document.querySelector("main");
    let activeElem;
    main.addEventListener("click", e => {
      if (e.target.className.includes("add-btn")) {
        activeElem = e.target.children[1];
      }
      if (e.target.parentElement.className.includes("add-btn")) {
        activeElem = e.target.parentElement.lastElementChild;
      }
      activeElem.contentEditable = "true";
    });
  }

  render() {
    const mainDiv = document.createElement("div");
    mainDiv.innerHTML = this.header() + this.main();
    document.body.prepend(mainDiv);
    this.contentEditable()
  }
}

let myNewKeypad = new AddUser();
myNewKeypad.render();
