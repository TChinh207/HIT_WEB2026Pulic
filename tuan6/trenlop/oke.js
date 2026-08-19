const products = [
    {
        id: 1,
        name: "Laptop",
        price: 2000,
        category: "electronics",
        amount: 20
    },
    {
        id: 2,
        name: "Phone",
        price: 1000,
        category: "electronics",
        amount: 2
    },
    {
        id: 3,
        name: "Book",
        price: 20,
        category: "book",
        amount: 10
    },
    {
        id: 4,
        name: "Keyboard",
        price: 100,
        category: "electronics",
        amount: 0
    },
    {
        id: 5,
        name: "Mouse",
        price: 50,
        category: "accessory",
        amount: 15
    }
];
console.log(" ===== DANH SÁCH SẢN PHẨM ===== ")
 for (let i = 0; i < 5; i++) {
  console.log("ID: "+ products[i].id + " | " + products[i].name + " | $" + products[i].price + " | " + products[i].category + " | Số Lượng " + products[i].amount );
}
console.log(" ===== SẢN PHẨM CÒN HÀNG ===== ")
 for (let i = 0; i < 5; i++) {
    if(products[i].amount > 0){
        console.log(products[i].name)
    }
 }
 console.log(" ===== SẢN PHẨM HẾT HÀNG ===== ")
 for (let i = 0; i < 5; i++) {
    if(products[i].amount == 0){
        console.log(products[i].name)
    }
 }
 console.log(" ===== THỐNG KÊ ===== ")
 let i = 0;
 let sum = 0;
 let sumkho = 0
 while(i < 5){
    sum += products[i].amount;
    sumkho += products[i].price * products[i].amount;
    i++;
 }
 let tb = sumkho / sum
 console.log("Tổng Sản Phẩm: " + sum)
 console.log("Tổng giá trị kho: "+ sumkho)
 console.log("Giá trung bình: " + tb)
console.log(" ===== SẢN PHẨM ĐẮT NHẤT ===== ")
let max = 0;
for (let i = 0; i < 5; i++) {
    if(products[i].amount > max){
        max == i
    }
 }
 console.log(products[max].name +" - $"+products[max].price)
 console.log(" ===== TÌM SẢN PHẨM ID = 3 ===== ")
console.log( products[2].name + " - $" + products[2].price + " - " + products[2].category + " - " + products[2].amount );
console.log("===== ELECTRONICS =====")
for(let i = 0; i < 5 ; i++){
    if( products[i].category == "electronics"){
    console.log(products[i].name)
    }
}
console.log("===== THỐNG KÊ CATEGORY =====")
let check1 = 0
let check2 = 0
let check3 = 0
for(let i = 0; i < 5 ; i++){
    if( products[i].category == "electronics"){
        check1++;
    }
     if( products[i].category == "accessory"){
        check2++;
    }
     if( products[i].category == "book"){
        check3++;
    }
}
console.log("Tổng electronics: "+check1)
console.log("Tổng accessory: "+check2)
console.log("Tổng book: "+check3)
console.log("===== PHÂN LOẠI =====")
for(let i = 0; i < 5 ; i++){
    if(products[i].price >= 1000){
        console.log(products[i].name + " Hàng Cao Cấp")}
    else if(products[i].price >= 100 & products[i].price < 1000  ){
        console.log(products[i].name + " Hàng Trung Bình")}
    else if(products[i].price < 100){
        console.log(products[i].name + " Hàng Giá Rẻ")}
}