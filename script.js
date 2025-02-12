let products = {
    data : [
        
        {
        id:"1",
        productName: "GIƯỜNG NGỦ HIỆN ĐẠI THIẾT KẾ TIỆN LỢI V3-4102",
        category: "Giuongngu",
        price: "6.500.000đ",
        image: "https://gotrangtri.vn/wp-content/uploads/2021/10/giuong-ngu-hien-dai-bang-go-cong-nghiep-cao-cap-ghs-9217-ava.jpg",
        },

        {
        id: "2",
        productName: "Giường ngủ bằng gỗ phong cách hiện đại tiện dụng ",
        category: "Giuongngu",
        price: "12,800,000đ",
        image: "https://gotrangtri.vn/wp-content/uploads/2021/03/Giuong-ngu-bang-go-phong-cach-hien-dai-tien-dung-GHS-9138-ava.png",
        },

        {
        id:"3",
        productName: "Giường ngủ phong cách tối giản hiện đại GHS-9220",
        category: "Giuongngu",
        price: "6,200,000đ",
        image: "https://gotrangtri.vn/wp-content/uploads/2022/08/avar-.jpg",
        },

        {
            id:"4",
            productName: "Tủ quần áo bằng gỗ công nghiệp MDF GHS-51094",
            category: "Tuquanao",
            price: "12,800,000đ",
            image: "https://gotrangtri.vn/wp-content/uploads/2020/10/tu-quan-ao-bang-go-cong-nghiep-mdf-ghs-51094-ava.jpg",
        },

        {
            id:"5",
            productName: "Tủ áo bằng gỗ kiểu dáng nhỏ gọn GHS-5961",
            category: "Tuquanao",
            price: "3,700,000đ",
            image: "https://gotrangtri.vn/wp-content/uploads/2020/08/tu-ao-6.jpg",
        },

        {
            id:"6",
            productName: "TỦ ĐẦU GIƯỜNG CHO PHÒNG NGỦ ĐẸP V3-4507",
            category: "Tudaugiuong",
            price: "1,050,000đ",
            image: "https://noithatvanphonggiare.com/media/product/6103_oc_tu_dau_giuong_ngu_go_mdf_tab07.jpg",
        },

        {
            id:"7",
            productName: "Tủ Đầu Giường Gỗ MOHO VIENNA 201",
            category: "Tudaugiuong",
            price: "1,290,000đ",
            image: "https://product.hstatic.net/200000065946/product/pro_mau_tu_nhien_noi_that_moho_tu_dau_giuong_vienna_1_ec62678e4488474cbe84fe001dfd1d6d_master.jpg",
        },

        {
            id:"8",
            productName: "Bàn phấn trang điểm hiện đại GHS-41580",
            category: "Bantrangdiem",
            price: "2,900,000đ",
            image: "https://gotrangtri.vn/wp-content/uploads/2021/10/ban-phan-trang-diem-hien-dai-ghs-41580ava.jpg",
        },

        {
            id:"9",
            productName: "Bàn làm việc tại nhà hiện đại BV6810",
            category: "Banlamviec",
            price: "1,400,000đ",
            image: "https://hahoi.vn/wp-content/uploads/2022/03/z3240972871577_570a98ead70053f0386e3050c66a8590.jpg?v=1646711114",
        },

],
};

for(let i of products.data){
    let id = document.getElementById("id");
    //tạo card
    let card = document.createElement("div");
    //phân loại danh mục card và ẩn card
    card.classList.add("card",i.category,"hide");
    //ảnh div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // img tag"
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price giá
    let price = document.createElement("h6");
    price.innerText = i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}
//phân loại theo danh mục
    function filterProduct(value){
        //code nút bấm
        let buttons = document.querySelectorAll("button-value");
        buttons.forEach((button)=>{
            //check giá trị có bằng innerText ko
            if (value.toUpperCase() == button.innerText.toUpperCase())
            {
                button.classList.add("active");
            }
            else{
                button.classList.remove("active");
            }
        });

        // chọn all cards
        let elements = document.querySelectorAll(".card");
        //loop through all card
        elements.forEach((element)=> {
            //hiển thị tất cả card bằng "tất cả"
            if (value =="all"){
                element.classList.remove("hide");
            }
            else{
                //kiểm tra phần tử chứa danh mục
                if (element.classList.contains(value)){
                    //hiển thị phtu theo danh mục
                    element.classList.remove("hide");
                }
                else{
                    //ẩn phtu khác
                    element.classList.add("hide")
                }
            }
        });
    }
    //tìm kiếm
    document.getElementById("search").addEventListener("click", () => {
        // khởi tạo
        let searchInput = document.getElementById("search-input").value;
        let elements = document.querySelectorAll(".product-name");
        let cards = document.querySelectorAll(".card");
        // loop through all element
        elements.forEach((element,index) =>{
            //kiểm tra text đc đưa vào
            if(element.innerText.includes(searchInput.toUpperCase())){
                //hiển thị card
                cards[index].classList.remove("hide");
            }
            else{
                //ẩn khác
                cards[index].classList.add("hide");
            }
        }
    )
    });




//hiển thị sản phẩm
window.onload = (all) => {
    filterProduct("all");
};