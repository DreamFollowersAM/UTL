navigate(1);

function navigate(id){
    clear();
    let obj = 'p'+id;
    document.getElementById(obj).style.display = "block";
}

function clear(){
    for(let i = 1; i < 7; i++){
      let item = 'p'+i;
      document.getElementById(item).style.display = "none";
    }
}

function search(op){
  if(op){
    document.getElementById('searchbar').style.setProperty("display", "flex", "important");
  }else{
    document.getElementById('searchbar').style.setProperty("display", "none", "important");
  }
}

var swiper = new Swiper(".slider", {
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });