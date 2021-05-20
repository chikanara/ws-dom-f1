// console.log(document)
// console.log(document.getElementById("total").innerHTML)
// console.log(document.getElementsByClassName("like"))
// console.log(document.getElementsByTagName("p"))
// console.log(document.querySelectorAll(".like"))
// console.log(document.querySelector(".like"))
const btnsAddTag = document.getElementsByClassName("plus");

for (var i = 0; i < btnsAddTag.length; i++) {
  btnsAddTag[i].addEventListener("click", increment);
}
function increment(event) {
  var btnPlus = event.target;
  var divElt = btnPlus.parentElement;
  var quantityTag = divElt.querySelector("p");
  var quantity = Number(quantityTag.innerHTML);
  quantity++;
  quantityTag.innerHTML = quantity;
  var priceTag = divElt.parentElement.parentElement.querySelector(".price");
  var unitPriceTag =
    divElt.parentElement.parentElement.querySelector(".unitPrice");
  var unitPrice = Number(unitPriceTag.innerHTML);
  var price = unitPrice * quantity;
  priceTag.innerHTML = price;
}

var checkTags = document.querySelectorAll(".check");
for (var j = 0; j < checkTags.length; j++) {
  checkTags[j].onclick = totalPrice;
}

function totalPrice(event) {
  var checkTag = event.target;
  var priceTag = checkTag.parentElement.parentElement.querySelector(".price");
  console.log(priceTag);
  var price = Number(priceTag.innerHTML);
  console.log(price);
  var totalTag = document.getElementById("total");

  var total = Number(totalTag.innerHTML);
  var btnPlus = checkTag.parentElement.parentElement.querySelector(".plus")
  var btnMinus = checkTag.parentElement.parentElement.querySelector(".minus")

  if (checkTag.checked === true) {
    //  total = total + priceF

    total += price;
    btnPlus.setAttribute("disabled",true);
    btnMinus.setAttribute("disabled",true);
    
  } else {
    total =total- price;
    btnPlus.removeAttribute("disabled")
    btnMinus.removeAttribute("disabled")
  }
  totalTag.innerHTML = total;
}
