(function () {
    // Tìm hiểu cách viết hàm trong typescript
    // hàm trả về kiểu number
    function tinhtong() {
        var total = 100 + 200;
        return total;
    }
    // hàm trả về string
    function kieuString() {
        return "Chào bạn đến với khóa học typescript";
    }
    // hàm trả về kiểu mảng
    function kieumang() {
        var array = ["lien minh huyen thoai", "vo lam truyen ky", "con duong to lua"];
        return array;
    }
    // hàm trả về mảng số
    function array_number() {
        var number = [2, 3, 4, 5, 6];
        return number;
    }
    // hàm trả về mảng đối tượng thì sử dụng any
    function return_obj() {
        var obj = {
            name: "mouse",
            number: {
                stt: 1,
                level: 1
            }
        };
        return obj;
    }
    console.log(tinhtong());
    console.log(kieuString());
    console.log(kieumang());
    console.log(array_number());
    console.log(return_obj());
    // Kiểu Anonymous functions và tham số tùy chọn
    // demo anonymous là function không có tên
    // luu y sử dụng cách này để giảm bộ nhớ
    var demo_anonymous = function (x, y) {
        return "Chao ban ".concat(y, ", nam nay ban ").concat(x, " tuoi phai khong");
    };
    console.log(demo_anonymous(31, "Viet"));
    // Tìm hiểu OOP trong typescript
    var nhan_vat_game = /** @class */ (function () {
        function nhan_vat_game(ten_nhan_vat, thuoc_tinh, mau) {
            this.ten_nhan_vat = ten_nhan_vat;
            this.thuoc_tinh = thuoc_tinh;
            this.mau = mau;
        }
        nhan_vat_game.prototype.display_name = function () {
            return "Nh\u00E2n v\u1EADt: ".concat(this.ten_nhan_vat, " c\u00F3 thu\u1ED9c t\u00EDnh ").concat(this.thuoc_tinh, " v\u1EDBi s\u1ED1 l\u01B0\u1EE3ng m\u00E1u l\u00E0: ").concat(this.mau);
        };
        return nhan_vat_game;
    }());
    var nv1 = new nhan_vat_game("Garen", "Ỷ thiên kiếm", 1000000);
    console.log(nv1.display_name());
})();
