// Lấy danh sách các lựa chọn và ảnh
const colorOptions = document.querySelectorAll(".products-page .option");
const productImage = document.querySelector(
  ".products-page .product-detail #product-image"
);
const productTextColor = document.querySelector(
  ".products-page .product-detail .product-text-color"
);

// Khi xem thêm câu hỏi thường gặp
const questionCard = document.querySelectorAll(".questions .question-card");

// 1. Khi chọn màu ô tô: Lặp qua mỗi lựa chọn và thêm sự kiện click
colorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // Xóa lớp 'clicked' nếu nó đã có trước đó
    colorOptions.forEach((option) => option.classList.remove("option-clicked"));
    // Lấy đường dẫn ảnh và text
    const selectedImage = option.getAttribute("data-image");
    const selectedTextColor = option.getAttribute("data-text");

    // Thêm lớp 'clicked' cho hình tròn được click
    option.classList.add("option-clicked");
    // Thay đổi ảnh và text
    productImage.src = selectedImage;
    productTextColor.innerHTML = selectedTextColor;
  });
});

// 2. Khi xem thêm Câu hỏi thường gặp
for (let i = 0; i < questionCard.length; i++) {
  questionCard[i].addEventListener("click", function () {
    const iconChevron = questionCard[i].querySelector(
      ".fa-circle-chevron-right"
    );
    const questionCardDes = questionCard[i].querySelector(
      ".question-card__des"
    );

    questionCardDes.classList.toggle("show-des");
    iconChevron.classList.toggle("active");
  });
}

// animation
const animation = ScrollReveal({
  distance: "50px",
  duration: 2000,
  delay: 200,
  reset: true,
});

animation.reveal(".products-page .product-infor", { origin: "top" });
