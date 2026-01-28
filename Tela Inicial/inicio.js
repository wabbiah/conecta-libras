    // Carrossel principal
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      indicators.forEach(ind => ind.classList.remove('active'));
      slides[index].classList.add('active');
      indicators[index].classList.add('active');
      currentSlide = index;
    }

    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => showSlide(index));
    });

    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);

    // Carrossel interno do cartão
    const innerSlides = document.querySelectorAll('.inner-slide');
    const innerIndicators = document.querySelectorAll('.inner-indicator');
    let currentInner = 0;

    function showInnerSlide(index) {
      innerSlides.forEach(slide => slide.classList.remove('active'));
      innerIndicators.forEach(ind => ind.classList.remove('active'));
      innerSlides[index].classList.add('active');
      innerIndicators[index].classList.add('active');
      currentInner = index;
    }

    innerIndicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => showInnerSlide(index));
    });

    setInterval(() => {
      currentInner = (currentInner + 1) % innerSlides.length;
      showInnerSlide(currentInner);
    }, 4000);

    // Feedback carousel
    const cards = document.getElementById('cards');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    let index = 0;

    next.addEventListener('click', () => {
      const cardWidth = document.querySelector('.feedback-card').offsetWidth + 20;
      if (index < cards.children.length - 3) index++;
      cards.style.transform = `translateX(-${index * cardWidth}px)`;
    });

    prev.addEventListener('click', () => {
      const cardWidth = document.querySelector('.feedback-card').offsetWidth + 20;
      if (index > 0) index--;
      cards.style.transform = `translateX(-${index * cardWidth}px)`;
    });