let info = document.getElementById("Overall")
function toggleContent() {
    const section = document.getElementById("info-section");
    const button = document.querySelector("button");
  
    if (!section.classList.contains("show")) {
      section.style.display = "block";
      setTimeout(() => {
        section.classList.add("show");
      }, 10);
      button.textContent = "ซ่อนข้อมูล"; // เปลี่ยนชื่อปุ่ม
    } else {
      section.classList.remove("show");
      setTimeout(() => {
        section.style.display = "none";
      }, 3000);
      button.textContent = "แสดงข้อมูล"; // เปลี่ยนกลับ
    }
  }
  