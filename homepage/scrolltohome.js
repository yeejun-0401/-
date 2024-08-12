//scroll to new product
let a = document.getElementById("newproduct");
a.addEventListener('click', scrolltotarget);
let b = document.getElementById("new");

function scrolltotarget() {
    // console.log("hi");
    b.scrollIntoView({ behavior: "smooth"});
};

//scroll to label
document.getElementById("label").addEventListener('click',scrolltotarget2);

function scrolltotarget2(){
    document.getElementById("romand").scrollIntoView({behavior:"smooth"});
}
