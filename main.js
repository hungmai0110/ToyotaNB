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
    const iconMinus = questionCard[i].querySelector(".fa-circle-minus");
    const iconPlus = questionCard[i].querySelector(".fa-circle-plus");
    const questionCardDes = questionCard[i].querySelector(
      ".question-card__des"
    );
    const questionCardTitle = questionCard[i].querySelector(
      ".question-card__title h4"
    );

    if (
      questionCardDes.style.display === "none" ||
      questionCardDes.style.display === ""
    ) {
      iconPlus.style.display = "none";
      iconMinus.style.display = "block";
      questionCardDes.style.display = "block";
      questionCardTitle.classList.add("text-active");
    } else {
      iconPlus.style.display = "block";
      iconMinus.style.display = "none";
      questionCardDes.style.display = "none";
      questionCardTitle.classList.remove("text-active");
    }
  });
}
