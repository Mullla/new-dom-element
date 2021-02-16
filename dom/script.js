// DomElement.prototype = Object.create(HTMLElement.prototype);
// DomElement.prototype.constructor = DomElement;

function DomElement (selector, options) {
    
        this.selector = selector;
        options = options || {};
        this.height = options.height;
        this.width = options.width;
        this.bg = options.bg;
        this.fontSize = options.fontSize;
        this.text = options.text;
}

DomElement.prototype.createElem = function () {

    if (this.selector.slice(0,1) === '.') {

        const elem = document.createElement('div');
        elem.classList.add(`${this.selector.slice(1)}`);
        document.body.append(elem);

        elem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
        elem.textContent = `${this.text}`;

    } else if (this.selector.slice(0,1) === '#') {

        const elem = document.createElement('p');
        elem.id = this.selector.slice(1);
        document.body.append(elem);

        elem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
        elem.textContent = `${this.text}`;
    }

};

function SquareElem (selector, options, position, positionOptions) {
    DomElement.apply(this, arguments);
    this.position = position;
    positionOptions = positionOptions || {};
    this.x = positionOptions.x;
    this.y = positionOptions.y;
    
}

SquareElem.prototype = Object.create(DomElement.prototype);
SquareElem.prototype.constructor = SquareElem;

SquareElem.prototype.changePosition = function (code) {
    if (code === 38){
        this.y -= 10;
    } else if (code === 40){
        this.y += 10;
    } else if (code === 37){
        this.x -= 10;
    } else if (code === 39){
        this.x += 10;
    }

    return { posX: this.x, posY: this.y }
};

let square = new SquareElem('.square', {height: '100px', width: '100px', bg: 'cornflowerblue', text: ''}, 'absolute', {x: 0, y: 0});


document.addEventListener('DOMContentLoaded', function () {
    square.createElem();

    const elem = this.querySelector('.square');

    this.addEventListener('keydown', function (event) {
        elem.style.position = 'absolute';

        if (event.keyCode === 38 || event.keyCode === 40){

            elem.style.top = `${square.changePosition(event.keyCode).posY}px`;
            // elem.style.transform = `translate(${square.changePosition(event.keyCode).posX}px, ${square.changePosition(event.keyCode).posY}px)`;

        } else if (event.keyCode === 37 || event.keyCode === 39){

            // elem.style.transform = `translate(${square.changePosition(event.keyCode).posX}px, ${square.changePosition(event.keyCode).posY}px)`;
            elem.style.left = `${square.changePosition(event.keyCode).posX}px`;
        }
    });

});


