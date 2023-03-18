(function () {
    // Kiểu string
    var chu = 'Type is string';
    var chu2 = "sinh nam 1996";
    console.log("Xin chao ".concat(chu, ", c\u00F3 ph\u1EA3i b\u1EA1n l\u00E0 ").concat(chu2));
    // Kiểu số
    var x;
    x = 10;
    console.log("Ki\u1EC3u number l\u00E0: ".concat(x));
    // Kiểu mảng chữ
    var student;
    student = ["teo", "ti", "dau"];
    for (var index = 0; index < student.length; index++) {
        var element = student[index];
        console.log("Hoc vien dduoc sap xep theo: ".concat(element));
    }
    // Kiểu mảng số
    var interger = [2, 3, 4];
    for (var index = 0; index < interger.length; index++) {
        var element = interger[index];
        console.log("So nguyen: ".concat(element));
    }
    // Kiểu đúng sai
    var flag;
    flag = true;
    console.log("Kieu boolean: ".concat(flag));
    ;
    console.log("Ki\u1EC3u enum: ".concat(10 /* status.payment */));
    // Kiểu tupele là kiểu khai báo vừa số và chữ xếp theo thứ tự: chữ, số, chữ
    // Khai báo kiểu dữ liệu trước rồi mới tới giá trị
    var code_student;
    code_student = ["việt nam", 100, "hàn quốc"];
    console.log("Ki\u1EC3u tupele l\u00E0 ki\u1EC3u h\u1ED7n t\u1EA1p g\u1ED3m gi\u00E1 tri l\u00E0 s\u1ED1 v\u00E0 ch\u1EEF: ".concat(code_student));
    // Kiểu any là kiểu phức hợp
    var full_name;
    full_name = ["việt nam", 100, "hàn quốc"];
    console.log("Kieu any ".concat(full_name));
    // Kiểu any đối tượng obj
    var any_obj;
    any_obj = {
        clock: {
            price: 100000,
            color: 'red',
            weight: '1kg'
        },
        store: "Hải triều"
    };
    console.log("Kieu du lieu any obj: ".concat(any_obj.clock.price));
    // Kiểu void không chứa giá trị dùng chủ yếu ở functions và ko có return
    function caculate() {
        console.log("Kieu du lieu void kh\u00F4ng tra v\u1EC1 gi\u00E1 tr\u1ECB g\u00EC h\u1EBFt");
        console.log("Không có return nha. Không được viết giá trị return");
    }
    caculate();
    // Ép kiểu, có 2 cách
    var condition_1;
    condition_1 = "Đây là ví dụ về ép kiểu trong ts";
    console.log("ép kiểu sử dụng dấu ngoặc nhọn, bên trong dấu ngoặc nhọn và nằm sau là gia tri");
    console.log(condition_1.length);
    // ép kiểu cách 2, sử dụng từ khóa as
    console.log("Ép kiểu cách 2");
    var condition_2 = condition_1.length;
    console.log("Ep kieu cach 2 ".concat(condition_2));
    // tóm lại:
    // trong typescript gồm 7 kiểu dữ liệu và lấy ví dụ trên xem có rõ.
    // Không khác gì nhiều so với javacript
})();
