// For setting the header text data.
const headerTextData = document.getElementById("headerTextData");
const headerData = ["Tour","Product","Feature","Enterprise","Support","pricing","cart"];

// For setting the card data in slider .
const cardData = [
  {id:1,flatText:"Flat",rs:'Rs. 500off',couponCode:"MMTFLAT500",validity:"*Valid on 3 Tickets Booking"},
  {id:2,flatText:"Flat",rs:'Rs. 300off',couponCode:"FLYMMT300",validity:"*Valid on 2 Tickets Booking"},
  {id:3,flatText:"Flat",rs:'Rs. 150off',couponCode:"FLYMMT150",validity:"*Valid on 1 Tickets Booking"},
  {id:4,flatText:"Upto",rs:'Rs. 2500off',couponCode:"MMTBEST",validity:""},
];

// For creating the header elements.
const headerText = document.getElementById("headerText");
for(var i=0; i< headerData.length;i++){
  headerTextData.innerHTML  += `<p class="textStle">${headerData[i]}</p>`;
}

// For closing the slider.
function closeCoupons(){
  document.querySelector(".cardContainer").style = "animation: 5s slide-up;";
 setTimeout(function(){
   document.querySelector(".cardContainer").remove();
 }, 5000);
}

// For creating the coupon card elements on slider.
const cardDataId = document.getElementById("cardDataId")
window.onload = function() {
  for(var i=0; i< cardData.length;i++){
    cardDataId.innerHTML  += `<div class="card">
    <p class="marginLeft10">${cardData[i].flatText}</p>
    <p class="marginLeft10 rs500">${cardData[i].rs}</p>
    <p class="cuponCode">${cardData[i].couponCode}</p>
    <p class="marginLeft10 validity">${cardData[i].validity!=''?cardData[i].validity:` - `}</p>
    <button  class="marginLeft10 copyButton" value =${cardData[i].couponCode}> COPY CODE</button>
    </div>`;
  }
}

// For click the button in cards and copy coupon code.
if(cardDataId!==undefined){
  cardDataId.addEventListener("click", (event) => {    
    event.path.find(($el) => {
      if($el.tagName === 'BUTTON' ){
        changeButtonText($el.value)
        copyToClipboard($el.value)
      }
    })
  })
}
// For changing text and background in coupon card button.
function changeButtonText(value){
  document.querySelectorAll("[class*='copyButton']").forEach(el=>{
    if(el.value !== value){
      el.innerHTML ="COPY CODE"
      el.style.background = "#4facfb"
    }else{
      el.innerHTML ="CODE COPIED"
      el.style.background = "grey"

    }
  })
}

// For copy the coupon code to Clipboard.
const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
