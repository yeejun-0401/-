//品牌選單btn
document.getElementById("lab").addEventListener('click', lablist);

let btn = true;
function lablist() {
    // console.log("hi");
    if (btn) {
        document.getElementById("lab").innerHTML = '<i class="bi bi-chevron-left btn"></i>';
        document.getElementById("labli").setAttribute("class", "slide_b animated");
        document.getElementById("labli").style.display = 'block';
        btn = false;
        //
    } else {
        document.getElementById("lab").innerHTML = '<i class="bi bi-three-dots btn"></i>';
        document.getElementById("labli").setAttribute("class", "slide_a animated");
        // document.getElementById("labli").style.display = 'none';會直接消失沒有動畫效果
        btn = true;
    }
}

//scroll to romand
document.getElementById("scrollromand").addEventListener('click',scrolltoromand);

function scrolltoromand(){
    // console.log("hi");
    document.getElementById("romand").scrollIntoView({behavior:"smooth"});
}

//scroll to 3ce
document.getElementById("scroll3ce").addEventListener('click',scrollto3ce);

function scrollto3ce(){
    // console.log("hi");
    document.getElementById("3ce").scrollIntoView({behavior:"smooth"});
}

//scroll to skinfood
document.getElementById("scrollsf").addEventListener('click',scrolltosf);

function scrolltosf(){
    // console.log("hi");
    document.getElementById("skinfood").scrollIntoView({behavior:"smooth"});
}