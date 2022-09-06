const hamburger = document.querySelector(".ham");  
 const navsub = document.querySelector(".nav-sub");  
 hamburger.addEventListener('click', () => {  
  hamburger.classList.toggle("active")  
  navsub.classList.toggle("active")  
 });
  document.querySelectorAll("nav-link").forEach(n =>n.addEventListener("click",() =>{
    hamburger.classList.remove("change")  
    navsub.classList.remove("nav-change")  
   }));
  
const card = document.getElementsByClassName("card");
for(let i=0;i < card.length;i++){

  card[i].addEventListener("click",()=>{
    let imageUrl=card[i].querySelector("img").src;
    let brandName = card[i].querySelector(".container").childNodes[1].innerText;
    let price = card[i].querySelector(".container").childNodes[3].innerText;

    console.log(brandName);
    console.log(price);
    let selected_card = {
      imageUrl, brandName, price };
    localStorage.setItem('selected_card',JSON.stringify(selected_card));
    window.location.href ="http://127.0.0.1:5500/maintaskproduct.html";
  });
}