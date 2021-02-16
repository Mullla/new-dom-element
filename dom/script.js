function DomElement (selector, options) {
        this.selector = selector;
        options = options || {};
        this.height = options.height;
        this.width = options.width;
        this.bg = options.bg;
        this.fontSize = options.fontSize;
}

DomElement.prototype.createElem = function () {

        if (this.selector.slice(0,1) === '.') {

            console.log(this.selector);

            const elem = document.createElement('div');
            elem.classList.add(`${this.selector}`);
            document.body.append(elem);

            elem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
            elem.textContent = 'Это успех';

        } else if (this.selector.slice(0,1) === '#') {

            console.log(this.selector);

            const elem = document.createElement('p');
            elem.id = this.selector;
            document.body.append(elem);

            elem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
            elem.textContent = 'Это успех';

        }

        
};

let mySucces = new DomElement('#myclass', {height: '20px', width: '150px', bg: 'aquamarine', fontSize: '16px'});

mySucces.createElem();
