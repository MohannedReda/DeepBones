const circles = document.querySelectorAll('.circle span');
const boxes = document.querySelectorAll('.boxes');
let currentIndex = 0;

// دالة لتحديث عرض الـ boxes وتحديد الدائرة النشطة
function updateBoxes(index) {
    boxes.forEach((box, i) => {
        box.style.display = (i === index) ? 'grid' : 'none';
    });

    circles.forEach((circle, i) => {
        circle.classList.toggle('active', i === index);
    });

    currentIndex = index;
}

// عند الضغط على أي دائرة
circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        updateBoxes(index);
    });
});

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    updateBoxes(currentIndex);
});

// ✅ التشغيل التلقائي كل 5 ثوانٍ
setInterval(() => {
    let nextIndex = (currentIndex + 1) % boxes.length;
    updateBoxes(nextIndex);
}, 3000); // 5000 ملي ثانية = 5 ثوانٍ
