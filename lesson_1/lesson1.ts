
(() => {
    // Kiểu string
    const chu = 'Type is string';
    const chu2 = "sinh nam 1996";
    console.log(`Xin chao ${chu}, có phải bạn là ${chu2}`)
    // Kiểu số
    let x : number;
    x = 10;
    console.log(`Kiểu number là: ${x}`)
    // Kiểu mảng chữ
    var student : string[];
    student = ["teo", "ti", "dau"];

    for (let index = 0; index < student.length; index++) {
        const element = student[index];
        console.log(`Hoc vien dduoc sap xep theo: ${element}`)
    }

    // Kiểu mảng số
    var interger : number [] = [2,3,4];
    for (let index = 0; index < interger.length; index++) {
        const element = interger[index];
        console.log(`So nguyen: ${element}`)
    }

    // Kiểu đúng sai
    var flag : boolean
    flag = true;
    console.log(`Kieu boolean: ${flag}`)

    // Kiểu enum thì kiểu khai bao là const
    // Kiểu gần giống như cái mảng
    const enum status {payment = 10, success};
    console.log(`Kiểu enum: ${status.payment}`)

    // Kiểu tupele là kiểu khai báo vừa số và chữ xếp theo thứ tự: chữ, số, chữ
    // Khai báo kiểu dữ liệu trước rồi mới tới giá trị
    let code_student : [string, number, string]
    code_student = ["việt nam", 100, "hàn quốc"];
    console.log(`Kiểu tupele là kiểu hỗn tạp gồm giá tri là số và chữ: ${code_student}`)

    // Kiểu any là kiểu phức hợp
    var full_name : any;
    full_name = ["việt nam", 100, "hàn quốc"];
    console.log(`Kieu any ${full_name}`)

    // Kiểu any đối tượng obj
    var any_obj : any;
    any_obj = {
        clock: {
            price: 100000,
            color: 'red',
            weight: '1kg'
        },
        store: "Hải triều"
    }

    console.log(`Kieu du lieu any obj: ${any_obj.clock.price}`)


    // Kiểu void không chứa giá trị dùng chủ yếu ở functions và ko có return

    function caculate(): void {
        console.log(`Kieu du lieu void không tra về giá trị gì hết`);
        console.log("Không có return nha. Không được viết giá trị return");
    }

    caculate();

    // Ép kiểu, có 2 cách
    let condition_1 : any;
    condition_1 = "Đây là ví dụ về ép kiểu trong ts";
    console.log("ép kiểu sử dụng dấu ngoặc nhọn, bên trong dấu ngoặc nhọn và nằm sau là gia tri")
    console.log((<string>condition_1).length);

    // ép kiểu cách 2, sử dụng từ khóa as
    console.log("Ép kiểu cách 2");
    let condition_2 = (condition_1 as string).length;
    console.log(`Ep kieu cach 2 ${condition_2}`)


    // tóm lại:
    // trong typescript gồm 7 kiểu dữ liệu và lấy ví dụ trên xem có rõ.
    // Không khác gì nhiều so với javacript

    

})();