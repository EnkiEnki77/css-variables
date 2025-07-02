// Something we can do with CSS variables is change their values with JavaScript. Something we cant do with Sass
// as is transpiled down to regular CSS.

let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
root.style.setProperty('--red', 'blue');
console.log(red);


