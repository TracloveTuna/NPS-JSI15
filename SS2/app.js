// // điểm khác biệt giữa let, var, const( khai báo hằng số=> không thay đổi)
// const PI=3.14
// console.log("PI: ", PI);

// {
//     {
//         {
//             let a="đây là biến a";
//             var b="đây là biến b";
//             {
//                 console.log(a);
//             }
//         }
//     }
// }
// console.log(a);//lỗi: do phạm vi khai báo của let ngắn
// console.log(b);//thành công
 /*
let: sử dụng để khai báo biến cục bộ   => nếu ở ngoài thì không còn nữa, ko thể tìm được
var: sử dụng để khai báo biến toàn cục: 
 */
/*
  ôn tập kiến thức về hàm
  
  Khai báo hàm

  hàm có tham số( ko tham số thì bỉ tham số đi là được)
  function sum(a,b,c){
    return a+b+c;
  }

  hàm có return or hàm ko có return

  hàm có tên hàm và không có tên hàm



  hàm mũi tên: cú pháp khai báo
  const sum = ()=>{
    ... code hà
  }
 */
// sum(1,2,3)   tham chiếu với func    a=1, b=2, c=3

// VD khai báo hàm : kiểm tra số nguyên tố
// let a= prompt("mời người dùng nhập vào số tự nhiên"); //đây là số nguyên tố
// const CheckSNTo = (a) =>{
//     for (i=2;i<a; i++){
//         if(a%i==0 || a< 0){
//             return false
//         }
        

//     }    
//     return true;
// }
// if(CheckSNTo(a) == true){//chú ý phải chuyển biến vào hàm CheckSNTo nếu ko sẽ không hoạt động
//     alert(`${a} là một số nguyên tố` )
// }
// else{
//     alert(`$ không phải số nguyên tố`)
// }
 /*
khái niệm spread syntax
*/
//sai cú pháp copy mảng
// let arr=[1,2,3];
// let arr1 = arr;
// arr1[2]=0;
// console.log("arr: ", arr);

// //cách đúng
// let arr= [1,2,3]
// let arr1= [...arr];//copy toàn bộ giá trị của arr sang một ô nhớ mới => 2 biến này ko liên quan nhau

// arr1[0]= 1000;
// console.log(arr);//[1,2,3]


////Nối mảng thành mảng lớn
// let a=[1,2,3]
// let b=[4,5,6]

// let c=[...a, ...b]
// // console.log("c: ", c);

// ////copy đối tượng;
// let obj1= {
//     name: "Ngáo",
//     type: "husky",

// }
// let obj2={
//     name: "pub",
//     type: "pug",
//     height: "short"
// }

// let obj3= { ...obj1, ...obj2}
// console.log("obj3: ",obj3);//// cái sau ghi đè cái trước




// //////////////Map    đề bài: tăng gấp đôi gái trị các pgaanf tử bên trong mảng và in ra nó
// let arr=[1,2,3,4,5,6]//[2,4,6,8,10,12]
// let result = arr.map(item => item*2);///[2,4,6,8,10,12]
// console.log("result: ", result);


/////// Đề bài" lọc các phang tử dương ra 1 mảng mới và in ra nó
// let arr=[-1,345,6,100,-10,-3];
// let ans=arr.filter(item => item>0);
// console.log("result: ", ans);

/**
 * đề bài ứng dụng  
 */

let users =[
    {id:1, name: "Quân", age: "15", group: "vice-monitor-student"},
    {id:2, name: "Đăng", age: "15", group: "vice-student"},
    {id:3, name: "Đạt", age: "17", group: "student"},
    {id:4, name: "Tùng Anh", age: "16", group: "student"},
    {id:5, name: "Thành", age: "16", group: "student"},
    {id:6, name: "Chi", age: "15", group: "student"},
    {id:7, name: "Hiếu", age: "25", group: "teacher"},
]
/**
 * yêu cầu đề bài:
 * 1.lọ ra các bạn học sinh trong lớp (có role là student)
 * 2. từ kq trên, lọc tiếp các bạn hs có tuổi >15
 * 3. từ kq trên: lọc ra các bạn có id<5
 * 4. thay đổi all id của lớp hs thành dạng: "số mindx" VD: 1-mindx,2-mindx).
 * 
 */
let kq= users.filter(item => item.group.includes("student"));
console.log(kq)
;
 let kq2= kq.filter( item=> item.age>15);
console.log(kq2);

let kq3= kq2.filter(item=> item.id<5);
console.log( kq3);

let kq4= users.map(item => item.id =item.id+"-mindx");
console.log("usersMindX: " ,kq4);