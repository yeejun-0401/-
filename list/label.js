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