class KeyPad {
    constructor() {
    }

    createHeader() {
        const header = document.createElement("header");
        const headInside = `<div class='container top-radius'><h2>Keypad</h2></div>`;
        header.className = "header";
        header.innerHTML = headInside;
        return header;
    }

    createKeypadHolder() {
        const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'];
        let strKeypad = `<div class="keypad-holder">`;
        keys.forEach(elem => strKeypad += `<button class="key">${elem}</button>`)
        strKeypad += `<button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button></div>`;
        return strKeypad;
    }

    createMain() {
        const main = document.createElement('main');
        main.className = 'main';

        const number = `<div class="number">
				<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
				<span class ="numbers"></span>
				<span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
			</div>`;

        const mainInner = `<div class="container">${number}` + this.createKeypadHolder() + `</div>`;
        main.innerHTML = mainInner;
        return main
    }

    formatNumber() {
        const keys = [...document.getElementsByClassName('key')]
        keys.forEach(elem => {
            elem.onclick = () => {
                const numbers = document.querySelector('.number>.numbers');
                let entered = numbers.textContent.length;
                if (entered < 15) {
                    if (entered == 0) {
                        numbers.textContent += '('
                    };
                    if (entered == 4) {
                        numbers.textContent += ') '
                    };
                    if (entered == 9 || entered == 12) {
                        numbers.textContent += '-'
                    };
                    numbers.textContent += elem.textContent;
                }
            }
        })
    }

    render() {
        document.body.prepend(this.createMain());
        document.body.prepend(this.createHeader());
        this.formatNumber();
    }
}


let myNewKeypad = new KeyPad()
myNewKeypad.render()