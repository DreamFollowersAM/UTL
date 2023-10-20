sc = false;

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

function showSC(){
  sc = !sc;

  if(sc){
    document.getElementById('scts').style.setProperty("display", "flex", "important");
  }else{
    document.getElementById('scts').style.setProperty("display", "none", "important");
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

var swiper2 = new Swiper(".mySwiper2", {
    keyboard: {
      enabled: true,
    },
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  var swiper3 = new Swiper(".mySwiper3", {
    keyboard: {
      enabled: true,
    },
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  var swiper4 = new Swiper(".mySwiper4", {
    keyboard: {
      enabled: true,
    },
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });