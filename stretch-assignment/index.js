firstBlock = 0;

// moveToTop = function (box) {
//     firstBlock-= 1;
//     console.log(`firstlBlock: ${firstBlock} Background-color: ${box.className}`)
//     box.style.order = firstBlock;
// }

// let red = document.querySelector('.block--red');
// let blue = document.querySelector('.block--blue');
// let green = document.querySelector('.block--green');
// let pink = document.querySelector('.block--pink');
// let gray = document.querySelector('.block--gray');

// console.log(red)



// red.addEventListener('click', function() {moveToTop(red)});
// blue.addEventListener('click', function() {moveToTop(blue)});
// green.addEventListener('click', function() {moveToTop(green)});
// pink.addEventListener('click', function () {moveToTop(pink)});
// gray.addEventListener('click', function () {moveToTop(gray)});



class Box {
    constructor(block) {
        this.block = block
        this.boxColor = this.block.className
        this.block.addEventListener('click', () => {this.moveToTop(this.block)})
        this.block.addEventListener('mousedown', () => {window.setInterval(this.moveToRight(this.block), 100)})
        this.block.addEventListener('mouseup', () => {this.resetMargin(this.block)})
        this.block.addEventListener('mouseleave', () => {this.resetMargin(this.block)})
    }
    moveToTop(box) {
        firstBlock--;
        box.style.order = firstBlock;
        console.log(`move to top executed`)
        this.resetMargin(box);
    }
    moveToRight(box) {
        let leftMargin = '10'
        let newLeftMargin = parseInt(leftMargin, 10) + 5;
        box.style.marginLeft = `${newLeftMargin}px`;
        console.log('moveToRight executed')
    }
    resetMargin(box) {
        box.style.marginLeft = '10px'
    }
}
let blocks = document.querySelectorAll('.block');

blocks.forEach(function (block) {
    return new Box(block);
})