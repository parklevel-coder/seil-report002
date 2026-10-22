// 이미지 클릭 시 큰 팝업창으로 보여주는 기능
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    
    modal.style.display = "flex";
    modalImg.src = imageSrc;
}

// 팝업창 닫기 기능
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
