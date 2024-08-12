let cart = [];

// 數量選單
let n = document.getElementById("num").value;
function plus() {
    n = document.getElementById("num").value;
    n++;
    // console.log(n);
    document.getElementById("num").value = n;
}
function minus() {
    n = document.getElementById("num").value;
    n--;
    // if (n == 0) {
    //     alert("確定要移出購物車?");
    //     document.getElementById("sum").innerText = "0";
    // } else {
    //     console.log(n);
    // }
    document.getElementById("num").value = n;
}

//點"加入購物車"
//想法:新增陣列將n加入，利用for迴圈將n總和
// document.getElementById("num").addEventListener
function addcart(){
    cart.push(parseInt(n));
    console.log(cart);//將值加入陣列
    
    let quantity = cart.length;
    console.log(quantity);//陣列長度等於點擊幾次
    
    let total = 0;
    for(let i = 0; i < quantity; i++){
        total+=cart[i];
    }
    console.log(total);
    document.getElementById("sum").innerText = total;
    
}

//點"立即購買"
function buynow(){
    alert('請先登入');
    document.location.href = "../../login.html";
}