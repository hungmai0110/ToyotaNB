// Lấy danh sách các lựa chọn và ảnh
const colorOptions = document.querySelectorAll(".products-page .option");
const productImage = document.querySelector(
  ".products-page .product-detail #product-image"
);
const productTextColor = document.querySelector(
  ".products-page .product-detail .product-text-color"
);

// Lặp qua mỗi lựa chọn và thêm sự kiện click
for (let i = 0; i < colorOptions.length; i++) {
  colorOptions[i].addEventListener("click", function () {
    // Lấy đường dẫn ảnh và text
    const selectedImage = this.getAttribute("data-image");
    const selectedTextColor = this.getAttribute("data-text");
    // Thay đổi ảnh và text
    productImage.src = selectedImage;
    productTextColor.innerHTML = selectedTextColor;
  });
}
