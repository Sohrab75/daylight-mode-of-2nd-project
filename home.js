function loadCoupon(){
    document.getElementsByClassName('coupon')[0].style.display = 'block';
    
}

const closeCoupon = () => {
    document.getElementsByClassName('coupon')[0].style.display = 'none';
    
}

var cpnBtn = document.getElementById("cpnBtn");
var cpnCode = document.getElementById("cpnCode");
cpnBtn.onclick = function(){
  navigator.clipboard.writeText(cpnCode.innerHTML);
  cpnBtn.innerHTML = "COPIED";
  setTimeout(function(){
    cpnBtn.innerHTML = "COPY CODE";

  }, 3000);
  alert("hello");
}