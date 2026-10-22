# 🚕 URAL GO Park Perm
> Лендинг таксопарка «URAL GO» — подключение водителей к Яндекс.Про в г. Пермь
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Gulp](https://img.shields.io/badge/Gulp-CF4647?style=flat&logo=gulp&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

---
## 📋 О проекте
Одностраничный лендинг для таксопарка **URAL GO Park Perm**, ориентированный на привлечение водителей для подключения к агрегатору Яндекс.Такси через приложение Яндекс.Про.
Сайт не содержит форм заявок — акцент сделан на прямой контакт: кнопки звонка, мессенджеры (Telegram, WhatsApp, VK, MAX).

### 🔗 [Демо](https://itmtm.github.io/uralgo/)
---

## ✨ Возможности
- 📱 **Полная адаптивность** — десктоп, планшет, мобильные устройства
- 🎨 **Современный дизайн** — тёмный hero + светлые секции, оранжевые акценты
- 📞 **CTA-кнопки** — звонок, Telegram, WhatsApp, VK, MAX с иконками
- 🗺️ **Яндекс.Карта** — встроенная карта с адресом офиса
- ❓ **FAQ-аккордеон** — интерактивный блок частых вопросов
- 👥 **Секция команды** — карточки сотрудников с фото
- 💰 **Тарифы** — наглядное сравнение двух тарифных планов
- 🔄 **Бегущая строка** — ключевые преимущества в тикере
- 📜 **Юридические страницы** — политика конфиденциальности, согласие на обработку ПД
- 🍪 **Cookie-баннер** — с запоминанием выбора через localStorage
- 🔍 **SEO-оптимизация** — Open Graph теги, favicon, мета-теги
- 🎯 **Плавающая кнопка** — кнопка звонка появляется при скролле
- ✨ **Анимации** — scroll reveal, hover-эффекты, fadeInUp
- 💫 **Shimmer-эффект** — анимация золотого блика на кнопках звонка
- 🎨 **Кастомный скроллбар** — в цвет акцента сайта
- 👨‍💻 **Подпись разработчика** — в футере с анимацией свечения
---

## 🛠️ Технологии


| Технология | Назначение |
|---|---|
| HTML5 | Разметка |
| SCSS (модульная архитектура) | Стилизация, анимации, адаптив |
| JavaScript (ES6+) | Интерактивность, FAQ, бургер-меню |
| Gulp 4 | Сборка, минификация, autoprefixer, sourcemaps |
| Google Fonts | Шрифты Unbounded + Manrope |
| SVG | Иконки |
| Яндекс.Карты | Встроенная карта |
---

## 📁 Структура проекта
```
ural-go/
├── docs/                        # Исходники для разработки
│   ├── css/
│   │   ├── style.min.css        # Скомпилированные стили (генерируется gulp)
│   │   └── style.min.css.map    # Source map для отладки (генерируется gulp)
│   ├── scss/
│   │   ├── blocks/              # Блоки — по одному файлу на компонент
│   │   │   ├── _advantages.scss
│   │   │   ├── _btn.scss
│   │   │   ├── _contacts.scss
│   │   │   ├── _cookies.scss
│   │   │   ├── _cta-banner.scss
│   │   │   ├── _faq.scss
│   │   │   ├── _floating-cta.scss
│   │   │   ├── _footer.scss
│   │   │   ├── _header.scss
│   │   │   ├── _hero.scss
│   │   │   ├── _how.scss
│   │   │   ├── _conditions.scss
│   │   │   ├── _page-404.scss
│   │   │   ├── _privacy-page.scss
│   │   │   ├── _team.scss
│   │   │   └── _ticker.scss
│   │   ├── libs/                # Базовые стили
│   │   │   ├── _overall.scss    # Утилиты: .container, .reveal, .section-header, скроллбар
