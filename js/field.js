class Field {
    constructor(width,height) {
        this.width = width * GRID_SIZE;
        this.height = height * GRID_SIZE;

    }

    size() {
        let field = document.querySelector(".field");
        field.style.width = this.width + "px";
        field.style.height = this.height + "px";
    }
  
    render() {
      this.element = document.createElement('div');
      this.element.className = 'field';
      this.element.innerHTML = "";
      return this.element;
    
    }


  
    mount(parent) {
        parent.appendChild(this.render());
        this.size();
    }
  
}