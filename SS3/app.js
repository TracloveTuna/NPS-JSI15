///// khai báo kiểu dữ liệu Người
// class Nguoi{




//     /// ddịnh nghĩa một phương thức(hàm)
//     walk(){
//         alert("tôi đang đi bộ");
//     }

// }


// ////Làm thế nào để khai báo biến có kiểu dữ liệu là Nguoi
// let Dang = new Nguoi();
// Dang.walk();








/////// thuộc tính của Class
// class Nguoi{
// ///// định nghĩa thuộc tính : thuộc tính constructor( hàm khởi tạo thuộc tính)

// constructor(_name,_age,_address,_hobby){
//     this.name= _name;
//     this.age= _age;
//     this.address= _address;
//     this.hobby= _hobby
// }

// sleep(){
//     alert(`Quaan chỉ biết ngủ`);
// }
// }



// //// Khởi tạo biến có kiểu dữ liêu Nguoi
// let Quan = new Nguoi("Quân", 14, "Mê linh-Hà Nội", ['Cầu lông', "game"]);
// console.log("quân: ", Quan.name, Quan.age, Quan.address, Quan.hobby);




// ///// tính kế thừa; 
// class Person{
//     // Thuộc tính nhận vào gồm
//     constructor(_name, _age, _address,_id){
//         this.name=_name;
//         this.age=_age;
//         this.address=_address;
//         this.id=_id;
//     }
//     say(){
//         return `I am a person and my name is ${this.name}`
//     }
// }


// //// khai basi 1 class Student kế thừa từ class Person
// class Student extends Person{
//     constructor(_name, _age, _address,_id,_school, _class, _idStudent,_schooladdress){
//         // từ khóa kế thừa thuộc tính từ cha như sau:
//         super(_name, _age, _address,_id);
//         this.school=_school;
//         this.class=_class;
//         this.idStudent= _idStudent;
//         this.schooladdress= _schooladdress;

//     }

//     ///// kế thừa phương thức và tận dụng;
//     say(){
//         super.say();// cú pháp kế thùa phương thức
//         return super.say() + ` and I am learning from MindX school at ${this.schooladdress}`
//     }
// }


// ///// Khai báo 1 học sinh
// let Dat= new Student("Phạm Tuấn Đạt", 16, "Đống Đa", 20207008093,"mindX school", "NPS-JSI15"
// , "DAT1", "107A Nguyễn Phong Sắc");
// console.log(
//     Dat.say()
// );




// /**
//  * Bài 1: khởi tạo kiểu dữ liệu hình tròn
//  * yêu cầu: Xây dựng phưởn thức trong KDl hình tròn như sau
//  * + tính diện tính hình tròn
//  * +tính chu vi hình tròn
//  * 
//  * Bài 2: Khởi tạo  KDl(kiểu dữ liệu) hình chữ nhật
//  * biết rằng hình chữ nhật có thuộc tính truyền vào là: chiều dài, chiều rộng
//  * yêu cầu: Xây dựng phương thức
//  * + tính dieenjt ích hình chữ nhật
//  * + Tính chu vi hình chữ nhật
//  */

// ///bài 1
// const pi=3.141
// class Circle{
//     constructor(_r){
//         this.radius=_r;


//     }
//     area(){
//         return this.radius*pi*this.radius*2
//     }
//     chuvi(){
//         return this.radius*pi*2
//     }
// }
// let tron= new Circle(15);
// console.log(tron.area());
// console.log(tron.chuvi());


// /// Bài 2;
// let l = prompt("Vui long nhập vào Chiều dài")
// let w = prompt("vui lòng nhập vào chiều rộng")
// class Hcn{
//     constructor(_a,_b){
//         this.a=_a;///// this.  thực ra là các khai báo biến xử lý để đưa lên dạng string, nếu ko có thì constructor sẽ ko hoạt động
//         this.b=_b;

//     }
//     areaHcn(){
//         return this.a*this.b
//     }
// }
// let rec = new Hcn(l,w)
// console.log(rec.areaHcn());







/*
  Bài 11:
  tạo class people gồm:
  Thuộc tính: name , age. address để lưu lần lượt các giá giá trị tên , tuổi và địa chỉ
  phuowngg thức trong class people gồm: set(); get() là hàm nhập và xuất:
  Tạo class Studnts kế thừa từ class People.
  class Students sẽ có thêm:
  Thuộc tính id có thể lưu mã sinh viên, math lưu điểm môn tonas, physical để lưu điểm môn vật lý, chemistry để lưu điểm 
  môn hóa học.
  Phương thức: set(), get(), GPA(), để tính điểm trung bình 3 môn học
 */