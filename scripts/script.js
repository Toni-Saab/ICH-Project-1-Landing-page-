//Cookie
document.addEventListener('DOMContentLoaded', () => {
  const cookieBanner = document.getElementById('cookie');
  const acceptButton = document.getElementById('accept-cookies');
  const rejectButton = document.getElementById('reject-cookies');
  const settingsButton = document.getElementById('cookie-settings');

  // cookieBanner.style.display = localStorage.getItem('cookiesAccepted') ? 'none' : 'flex';

  const handleCookieChoice = (choice) => {
    localStorage.setItem('cookiesAccepted', choice);
    cookieBanner.style.display = 'none';
  };

  acceptButton.addEventListener('click', () => handleCookieChoice('true'));
  rejectButton.addEventListener('click', () => handleCookieChoice('false'));
  settingsButton.addEventListener('click', () => alert('The miner program was installed successfully'));
});






// КОД для переключения стилей динамически при Zoom страницы и модификации html под мобилу
document.addEventListener("DOMContentLoaded", () => {

  const title = document.querySelector(".header__core-title");
  const extras = document.querySelector(".header__core-extras");
  const logo = document.querySelector(".header__core-logo");
  const video = document.querySelector("video");
  const newPoster = "media/images/Iframe-mobile.png";
  const defaultPoster = "media/images/Iframe.png";

  // Функция для перемещения logo из extras в title (для мобильной версии)
  const swapHeaderElements = () => {
    extras.removeChild(logo);
    title.parentNode.insertBefore(logo, title);
  };

  // Функция для возвращения logo в исходное положение (для десктопной версии)
  const revertHeaderElements = () => {
    extras.appendChild(logo);
  };

  // *** Главная функция для изменения header, video и подключения стилей
  const checkAndApplyStyles = () => {
    const windowWidth = window.innerWidth;
    const mobileStylesheet = document.querySelector('link[href="styles/style-mobile.css"]');
    const desktopStylesheet = document.querySelector('link[href="styles/style.css"]');

    windowWidth <= 768
      ? (
          // Мобильная версия
          swapHeaderElements(),
          video && video.setAttribute("poster", newPoster),
          mobileStylesheet && (mobileStylesheet.disabled = false),
          desktopStylesheet && (desktopStylesheet.disabled = true)
        )
      : (
          // Десктопная версия
          revertHeaderElements(),
          video && video.setAttribute("poster", defaultPoster),
          desktopStylesheet && (desktopStylesheet.disabled = false),
          mobileStylesheet && (mobileStylesheet.disabled = true)
        );
  };

  checkAndApplyStyles();

  window.addEventListener('resize', checkAndApplyStyles);

  // Обработчик изменения экрана
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  mediaQuery.addEventListener("change", checkAndApplyStyles);
});





// КОД для обработки кликов по ответам в FAQ
document.addEventListener("DOMContentLoaded", () => {
  const answers = document.querySelectorAll('.faqs__answer');

  answers.forEach(answer => {
      answer.addEventListener('click', () => {
          const details = answer.closest('.faqs__question');
          details.open = false;
      });
  });
});
