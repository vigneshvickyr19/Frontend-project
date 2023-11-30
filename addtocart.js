var cartbag = document.querySelector("#cart-bag");
var cart = document.querySelector(".cart");
var closeCart = document.querySelector("#close-cart");

cartbag.onclick = () =>{
    cart.classList.add("active");
};
closeCart.onclick = () =>{
    cart.classList.remove("active");
};

// // // Cart
// let cartIcon = document.querySelector("#cart-bag");
// let cart = document.querySelector(".cart");
// let closeCart = document.querySelector("#close-cart");
// // Open Cart
// cartIcon.onclick= () => {
// cart.classList.add("active");
// };
// cl
// oseCart.onclick = () => {
// cart.classList.remove("active");
// };