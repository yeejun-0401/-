// 數量選單
let n = document.getElementById("num").value;
function plus() {
    n = document.getElementById("num").value;
    n++;
    console.log(n);
    document.getElementById("num").value = n;
}
function minus() {
    n = document.getElementById("num").value;
    n--;
    if (n == 0) {
        alert("確定要移出購物車?");
    } else {
        console.log(n);
    }
    document.getElementById("num").value = n;
}