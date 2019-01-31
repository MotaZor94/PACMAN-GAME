const GRID_SIZE = 85;
let game = new Field(10,5);
let pacman = new Pacman(8,"close",0,"MARKO",game,"girl","dark");
let pacman1 = new Pacman(2,"close",0,"MARKO",game,"girl","light");


document.addEventListener('DOMContentLoaded', () => {
    game.mount(document.querySelector(".game"));
    pacman.mount(document.querySelector(".field")); 
    pacman.update();
    pacman1.mount(document.querySelector(".field"));
    pacman1.update();
    
});
