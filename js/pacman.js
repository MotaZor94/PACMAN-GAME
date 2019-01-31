class Pacman {
    constructor(xPos,mouth,yPos,name,field,gender,skin) {
      this.xPos = xPos;
      this.mouth = mouth;
      this.yPos = yPos;
      this.name = name;
      this.field = field;
      this.gender = gender;
      this.skin = skin;
    }
  
    update(dir) {
      let pacman = document.querySelector(".pac");
      if (this.mouth === "open") {
          if (dir === "left"){ 
            pacman.style.backgroundPositionY = -GRID_SIZE + "px";
            pacman.style.backgroundPositionX = "0px";
          } else if ( dir === "right") {
            pacman.style.backgroundPositionX = "0px";
            pacman.style.backgroundPositionY = "0px"
          } else if (dir === "up") {
            pacman.style.backgroundPositionY = 3 * -GRID_SIZE + "px";
            pacman.style.backgroundPositionX = "0px";
          } else if (dir === "down") {
            pacman.style.backgroundPositionY = 2 * -GRID_SIZE + "px";  
            pacman.style.backgroundPositionX = "0px";
          }
        
      }else {
        pacman.style.backgroundPositionX = GRID_SIZE + "px";
      }
      pacman.style.left = this.xPos * GRID_SIZE + "px";
      pacman.style.top = this.yPos * GRID_SIZE + "px";
    };
  
    move(dir) {
        if (this.mouth === "open") {
        this.mouth = "close";
        }else {
        this.mouth = "open";
        }
        switch(dir){
            case "right":
            if (this.xPos < this.field.width/GRID_SIZE -1) {
            this.xPos++;
            }
            break;
            case "left":
            if (this.xPos > 0) {
            this.xPos--;
            }
             break;
            case "up":
            if (this.yPos > 0) {
            this.yPos--;
            }
            break;
            case "down":
            if (this.yPos < this.field.height/GRID_SIZE -1) {
            this.yPos++;
            }
            break;
        }
        this.update(dir);
    };
    
  
    //Creating new Pacman
    render() {
      this.element = document.createElement('div');
      this.element.className = `pac ${this.gender}-active-${this.skin}`;
      this.element.innerHTML= (
        `${this.name}: 0`);
      
      document.addEventListener("keydown",(e)=> {
          if (e.keyCode === 39) {
          this.move("right");
        } else if (e.keyCode === 37) {
          this.move("left");
        } else if (e.keyCode === 38) {
          this.move("up");
        } else if (e.keyCode === 40) {
          this.move("down");
        }
    });
     
      return this.element;
    }
  
    mount(parent) {
      parent.appendChild(this.render());
      this.update();
    }
  
  }