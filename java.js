// التبديل بين إظهار وإخفاء القائمة عند الضغط على زر القائمة
document.querySelector(".menu-toggle").addEventListener("click", function () {
    const menu = document.querySelector("nav ul.menu");
    menu.classList.toggle("show");
});
