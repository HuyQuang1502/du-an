/* Hàm xử lý khi di chuột vào ảnh nhỏ */
function upDate(previewPic) {
    // Bước 1 & 2: Dùng console.log để kiểm tra sự kiện và dữ liệu (Tiêu chí bắt buộc của Coursera)
    console.log("Sự kiện upDate đã kích hoạt!");
    console.log("Alt text: " + previewPic.alt);
    console.log("Source URL: " + previewPic.src);

    // Tìm phần tử hiển thị ảnh lớn bằng ID
    var targetDiv = document.getElementById('image');

    // Bước 3: Thay đổi nội dung chữ thành thuộc tính alt của ảnh được chọn
    targetDiv.innerHTML = previewPic.alt;

    // Bước 5: Thay đổi hình nền của khung div thành thuộc tính src của ảnh
    targetDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* Hàm xử lý khi đưa chuột ra ngoài */
function undo() {
    // Tìm phần tử hiển thị ảnh lớn bằng ID
    var targetDiv = document.getElementById('image');

    // Bước 7.1: Khôi phục ảnh nền về trạng thái trống ban đầu
    targetDiv.style.backgroundImage = "url('')";

    // Bước 7.2: Khôi phục lại đoạn text gốc chính xác từng ký tự theo yêu cầu đề bài
    targetDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
    
    console.log("Sự kiện undo đã kích hoạt thành công!");
}