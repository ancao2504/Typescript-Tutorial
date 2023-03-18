

(function () {
    // Tìm hiểu cách viết hàm trong typescript
    
    // hàm trả về kiểu number
    function tinhtong() : number {
        let total = 100 + 200;
        return total;
    }

    // hàm trả về string
    function kieuString() : String {
        return "Chào bạn đến với khóa học typescript";
    }

    // hàm trả về kiểu mảng
    function kieumang(): string[] {
        const array = ["lien minh huyen thoai", "vo lam truyen ky", "con duong to lua"];
        return array;
    }

    // hàm trả về mảng số
    function array_number() :number[] {
        const number = [2,3,4,5,6];
        return number;
    }

    // hàm trả về mảng đối tượng thì sử dụng any
    function return_obj() : any {
        const obj = {
            name: "mouse",
            number: {
                stt: 1,
                level: 1
            }
        }

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
    const demo_anonymous = function(x:number, y: string) : string {
        return `Chao ban ${y}, nam nay ban ${x} tuoi phai khong`;
    }

    console.log(demo_anonymous(31, "Viet"))

    // Tìm hiểu OOP trong typescript
    class nhan_vat_game {
        ten_nhan_vat: string
        thuoc_tinh: string
        mau: number

        constructor(ten_nhan_vat: string, thuoc_tinh: string, mau: number) {
            this.ten_nhan_vat = ten_nhan_vat;
            this.thuoc_tinh = thuoc_tinh;
            this.mau = mau;
        }

        display_name() {
            return `Nhân vật: ${this.ten_nhan_vat} có thuộc tính ${this.thuoc_tinh} với số lượng máu là: ${this.mau}`
        }
    }

    let nv1 = new nhan_vat_game("Garen", "Ỷ thiên kiếm", 1000000);
    console.log(nv1.display_name())

})();