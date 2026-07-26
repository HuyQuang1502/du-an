/* Hàm Cập nhật ảnh lớn và văn bản alt khi di chuột hoặc focus bàn phím */
function upDate(previewPic) {
    const displayBox = document.getElementById("image");
    
    // Cập nhật đường dẫn ảnh nền
    displayBox.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Cập nhật đoạn văn bản bằng nội dung alt
    displayBox.innerHTML = previewPic.alt;
}

/* Hàm Phục hồi về trạng thái ban đầu khi rời chuột hoặc blur bàn phím */
function unDo() {
    const displayBox = document.getElementById("image");
    
    // Khôi phục ảnh nền rỗng
    displayBox.style.backgroundImage = "url('')";
    
    // Khôi phục lại dòng chữ mặc định
    displayBox.innerHTML = "Rê chuột hoặc dùng phím Tab để xem ảnh tại đây.";
}

/* Hàm tự động thêm thuộc tính tabindex khi trang web tải xong */
function addTabFocus() {
    console.log("Sự kiện onload đã kích hoạt thành công!");
    
    // Lấy tất cả các hình ảnh có class "preview"
    const images = document.querySelectorAll(".preview");
    
    // Vòng lặp for gắn tabindex="0" cho từng ảnh
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}