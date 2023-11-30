
var productImg = document.getElementById("product-img");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function(){
productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
productImg.src = smallImg[3].src;
}


const puls = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num");

    let a = 1;

    plus.addEventListener("click", ()=> {
        a++;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
        console.log(a);
    });
    minus.addEventListener("click", ()=> {
       if( a > 1)
        {
            a--;
            a = (a < 10) ? "0" + a : a;
        num.innerText = a; 
    }
    });