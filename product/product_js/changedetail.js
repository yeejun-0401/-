//切換商品介紹
//點擊配送
 let theme = document.getElementById("Delivery");
 console.log(theme);
 theme.addEventListener('click',tab_d);

 function tab_d(){
     // console.log("yo");
     document.getElementById("del").style.display = "block";
     // console.log("hi");
     document.getElementById("pic").style.display = "none";
     document.getElementById("com").style.display = "none";
 }

 //點擊詳細圖
 document.getElementById("poster").addEventListener('click',tab_p);

 function tab_p(){
     // console.log("yo");
     document.getElementById("del").style.display = "none";
     // console.log("hi");
     document.getElementById("pic").style.display = "block";
     document.getElementById("com").style.display = "none";
 }

 //點擊評價
 document.getElementById("comment").addEventListener('click',tab_c);

 function tab_c(){
     // console.log("yo");
     document.getElementById("del").style.display = "none";
     // console.log("hi");
     document.getElementById("pic").style.display = "none";
     document.getElementById("com").style.display = "block";
 }