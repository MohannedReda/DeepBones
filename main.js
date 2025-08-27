
  // صور الخلفية
  const images = [
    "url('img/landing-1.jpg')",
    "url('img/landing-2.jpg')",
    "url('img/landing.jpg')",
  ];

  let current = 1; // الصورة الحالية (0,1,2)

  const landing = document.querySelector('.landing');
  const dots = document.querySelectorAll('.circle span');
  const leftArrow = document.querySelector('.left');
  const rightArrow = document.querySelector('.right');

  // تحديث الخلفية وتفعيل الدائرة
  function updateBackground(index) {
    
    landing.style.backgroundImage = `${images[index]}`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    current = index;
  }

  // عند الضغط على دائرة
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => updateBackground(index));
  });

  // عند الضغط على السهم الأيسر
  leftArrow.addEventListener('click', () => {
    let newIndex = (current - 1 + images.length) % images.length; // 0 1 2
    updateBackground(newIndex);
  });

  // عند الضغط على السهم الأيمن
  rightArrow.addEventListener('click', () => {
    let newIndex = (current + 1) % images.length;// 0 1 2
    updateBackground(newIndex);
  });

  // تعيين الصورة الأولى عند التحميل

  updateBackground(current);
    setInterval(() => {
     let newIndex = (current + 1) % images.length;// 0 1 2
    updateBackground(newIndex);
}, 3000); // 5000 ملي ثانية = 5 ثوانٍ
  

