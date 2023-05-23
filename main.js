const btnDarkMode = document.querySelector('.dark-mode-btn');

 //проверка темной темы в системных настройках 
 if (window.matchMedia && window.matchMedia('(prefers-color-sheme: dark)').matches) {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}
//проверка темной темы в LocalStorage
 if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
}




// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle('dark-mode-btn--active');
    const isDark = document.body.classList.toggle('dark');
    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light');
    }
}