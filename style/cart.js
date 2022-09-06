window.onload = ()=>{
    let selected_card=JSON.parse(localStorage.getItem("selected_card"))
    document.getElementById("change-image").src = selected_card.imageUrl;
    document.getElementById("change-image1").src = selected_card.imageUrl;
    document.getElementById("candleaf-brandName").innerHTML = selected_card.brandName + " Candleaf®";
    console.log(selected_card)

    document.getElementById("candleaf-price").innerHTML = selected_card.price;
    console.log(selected_card)
    document.getElementById("candleaf-brandName1").innerHTML = selected_card.brandName + " Candleaf®";
    console.log(selected_card)

    document.getElementById("candleaf-price1").innerHTML = selected_card.price;
    console.log(selected_card)
}
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");

let a=0;
plus.addEventListener('click' , () =>{
   a++;
   a = (a<10) ? + a : a;
   num.innerText=a;
   console.log(a);
});
 minus.addEventListener('click' , () =>{
   if(a>0)
   a--;
   a = (a<10) ?+ a : a;
   num.innerText=a;
   console.log(a)
 })

 const plus1 = document.querySelector(".plus1");
const minus1 = document.querySelector(".minus1");
const num1 = document.querySelector(".num1");

let b=0;
plus1.addEventListener('click' , () =>{
   b++;
   b = (b<10) ? + b : b;
   num1.innerText=b;
   console.log(b);
});
 minus1.addEventListener('click' , () =>{
   if(b>0)
   b--;
   b = (b<10) ?+ b : b;
   num1.innerText=b;
   console.log(b)
 })
 function cartincrementValue()
 {
     let cartvalue = parseInt(document.getElementById('cart-number').value, 10);
     cartvalue = isNaN(cartvalue) ? 0 : cartvalue;
     if(cartvalue<10){
         cartvalue++;
             document.getElementById('cart-number').value = cartvalue;
     }
}