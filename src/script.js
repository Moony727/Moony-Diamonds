// Import CSS
import './style.css';

// Product data with updated prices
const products = [
    {
        name: { ru: "Free Fire 559 Алмаз", az: "Free Fire 559 Almaz" },
        price: 8.90,
        description: { ru: "На каждый аккаунт (ID) только 1 раз", az: "Hər hesaba (ID) yalnız 1 dəfə vurulur" },
        category: "diamonds",
        icon: "fas fa-gem"
    },
    {
        name: { ru: "Free Fire 1046 Алмаз", az: "Free Fire 1046 Almaz" },
        price: 16.50,
        description: { ru: "На каждый аккаунт (ID) только 1 раз", az: "Hər hesaba (ID) yalnız 1 dəfə vurulur" },
        category: "diamonds",
        icon: "fas fa-gem"
    },
    {
        name: { ru: "Free Fire 2018 Алмаз", az: "Free Fire 2018 Almaz" },
        price: 28.50,
        description: { ru: "На каждый аккаунт (ID) только 1 раз", az: "Hər hesaba (ID) yalnız 1 dəfə vurulur" },
        category: "diamonds",
        icon: "fas fa-gem"
    },
    {
        name: { ru: "Free Fire 4033 Алмаз", az: "Free Fire 4033 Almaz" },
        price: 48.00,
        description: { ru: "На каждый аккаунт (ID) только 1 раз", az: "Hər hesaba (ID) yalnız 1 dəfə vurulur" },
        category: "diamonds",
        icon: "fas fa-gem"
    },
    {
        name: { ru: "Free Fire 10360 Алмаз", az: "Free Fire 10360 Almaz" },
        price: 99.00,
        description: { ru: "На каждый аккаунт (ID) только 1 раз", az: "Hər hesaba (ID) yalnız 1 dəfə vurulur" },
        category: "diamonds",
        icon: "fas fa-gem"
    },
    {
        name: { ru: "Free Fire 110 Алмаз", az: "Free Fire 110 Almaz" },
        price: 3.00,
        description: { ru: "Ваш заказ загружается автоматически!", az: "Sifarişiniz Avtomatik Yüklənir!" },
        category: "diamonds",
        icon: "fas fa-gem"
    },
    {
        name: { ru: "Free Fire 341 Алмаз", az: "Free Fire 341 Almaz" },
        price: 7.70,
        description: { ru: "Ваш заказ загружается автоматически!", az: "Sifarişiniz Avtomatik Yüklənir!" },
        category: "diamonds",
        icon: "fas fa-gem"
    },
    {
        name: { ru: "Free Fire 572 Алмаз", az: "Free Fire 572 Almaz" },
        price: 11.80,
        description: { ru: "Ваш заказ загружается автоматически!", az: "Sifarişiniz Avtomatik Yüklənir!" },
        category: "diamonds",
        icon: "fas fa-gem"
    },
    {
        name: { ru: "Free Fire 1166 Алмаз", az: "Free Fire 1166 Almaz" },
        price: 19.50,
        description: { ru: "Ваш заказ загружается автоматически!", az: "Sifarişiniz Avtomatik Yüklənir!" },
        category: "diamonds",
        icon: "fas fa-gem"
    },
    {
        name: { ru: "Free Fire 2398 Алмаз", az: "Free Fire 2398 Almaz" },
        price: 34.00,
        description: { ru: "Ваш заказ загружается автоматически!", az: "Sifarişiniz Avtomatik Yüklənir!" },
        category: "diamonds",
        icon: "fas fa-gem"
    },
    {
        name: { ru: "Free Fire 6160 Алмаз", az: "Free Fire 6160 Almaz" },
        price: 80.00,
        description: { ru: "Загружается через Player ID", az: "Player ID ilə yüklənir" },
        category: "diamonds",
        icon: "fas fa-gem"
    },
    {
        name: { ru: "Free Fire Mini Недельный - 90 Алмаз", az: "Free Fire Mini Həftəlik - 90 Almaz" },
        price: 2.10,
        description: { ru: "Загружается через Player ID", az: "Player ID ilə yüklənir" },
        category: "membership",
        icon: "fas fa-crown"
    },
    {
        name: { ru: "Free Fire Недельный - 450 Алмаз", az: "Free Fire Həftəlik - 450 Almaz" },
        price: 5.50,
        description: { ru: "Ваш заказ загружается автоматически!", az: "Sifarişiniz Avtomatik Yüklənir!" },
        category: "membership",
        icon: "fas fa-crown"
    },
    {
        name: { ru: "Free Fire Месячный - 2600 Алмаз", az: "Free Fire Aylıq - 2600 Almaz" },
        price: 14.50,
        description: { ru: "Ваш заказ загружается автоматически!", az: "Sifarişiniz Avtomatik Yüklənir!" },
        category: "membership",
        icon: "fas fa-crown"
    },
    {
        name: { ru: "Evo Access 3 Дня", az: "Evo Access 3 Day" },
        price: 2.20,
        description: { ru: "Загружается через Player ID", az: "Player ID ilə yüklənir" },
        category: "evo",
        icon: "fas fa-gamepad"
    },
    {
        name: { ru: "Evo Access 7 Дней", az: "Evo Access 7 Day" },
        price: 3.80,
        description: { ru: "Загружается через Player ID", az: "Player ID ilə yüklənir" },
        category: "evo",
        icon: "fas fa-gamepad"
    },
    {
        name: { ru: "Evo Access 30 Дней", az: "Evo Access 30 Day" },
        price: 5.00,
        description: { ru: "Загружается через Player ID", az: "Player ID ilə yüklənir" },
        category: "evo",
        icon: "fas fa-gamepad"
    }
];

// Translations
const translations = {
    ru: {
        "products-title": "Наши товары",
        "products-subtitle": "Алмазы и подписки для Free Fire",
        "profile": "Профиль",
        "buy": "Купить",
        "footer-desc": "Надежный поставщик алмазов и подписок для Free Fire",
        "footer-products": "Товары",
        "footer-diamonds": "Алмазы",
        "footer-subscriptions": "Подписки",
        "footer-evo": "Evo Access",
        "footer-support": "Поддержка",
        "footer-faq": "FAQ",
        "footer-contact": "Контакты",
        "footer-terms": "Условия",
        "footer-follow": "Мы в соцсетях",
        "footer-rights": "Все права защищены.",
        "tab-all": "Все",
        "tab-membership": "Membership",
        "tab-diamonds": "Diamonds",
        "tab-evo": "Evo Access",
        "profile-title": "Вход / Регистрация",
        "whatsapp-number": "Номер WhatsApp",
        "password": "Пароль",
        "sign-in": "Войти",
        "sign-up": "Регистрация",
        "cancel": "Отмена",
        "order-success": "Заказ успешно оформлен!",
        "order-error": "Ошибка при оформлении заказа",
        "settings-saved": "Настройки сохранены!",
        "password-mismatch": "Пароли не совпадают",
        "fill-contact": "Заполните контактные данные",
        "player-id": "Player ID",
        "confirm-purchase": "Подтверждение покупки",
        "confirm": "Подтвердить покупку",
        "order-details": "Детали заказа",
        "sending-telegram": "Отправка в Telegram...",
        "telegram-sent": "Отправлено в Telegram",
        "telegram-error": "Ошибка отправки в Telegram",
        "auth-success": "Авторизация успешна!",
        "auth-error": "Ошибка авторизации",
        "sign-in-success": "Вход выполнен успешно!",
        "sign-in-error": "Ошибка входа",
        "sign-up-success": "Регистрация выполнена успешно!",
        "sign-up-error": "Ошибка регистрации",
        "network-error": "Ошибка сети. Проверьте подключение к интернету.",
        "invalid-phone": "Неверный формат номера телефона",
        "weak-password": "Пароль слишком простой",
        "user-not-found": "Пользователь не найден",
        "wrong-password": "Неверный пароль",
        "email-in-use": "Этот номер уже используется",
        "processing": "Обработка...",
        "firebase-error": "Ошибка подключения к Firebase. Пожалуйста, попробуйте позже."
    },
    az: {
        "products-title": "Məhsullarımız",
        "products-subtitle": "Free Fire üçün almazlar və abunəliklər",
        "profile": "Profil",
        "buy": "Satın al",
        "footer-desc": "Free Fire üçün etibarlı almaz və abunəlik təchizatçısı",
        "footer-products": "Məhsullar",
        "footer-diamonds": "Almazlar",
        "footer-subscriptions": "Abunəliklər",
        "footer-evo": "Evo Access",
        "footer-support": "Dəstək",
        "footer-faq": "FAQ",
        "footer-contact": "Əlaqə",
        "footer-terms": "Şərtlər",
        "footer-follow": "Sosial şəbəkələrdə",
        "footer-rights": "Bütün hüquqlar qorunur.",
        "tab-all": "Hamısı",
        "tab-membership": "Membership",
        "tab-diamonds": "Diamonds",
        "tab-evo": "Evo Access",
        "profile-title": "Daxil ol / Qeydiyyat",
        "whatsapp-number": "WhatsApp nömrəsi",
        "password": "Şifrə",
        "sign-in": "Daxil ol",
        "sign-up": "Qeydiyyat",
        "cancel": "Ləğv et",
        "order-success": "Sifariş uğurla tamamlandı!",
        "order-error": "Sifariş zamanı xəta",
        "settings-saved": "Ayarlar yadda saxlanıldı!",
        "password-mismatch": "Şifrələr uyğun gəlmir",
        "fill-contact": "Əlaqə məlumatlarını doldurun",
        "player-id": "Player ID",
        "confirm-purchase": "Alışın təsdiqi",
        "confirm": "Alışı təsdiqlə",
        "order-details": "Sifariş detalları",
        "sending-telegram": "Telegram-a göndərilir...",
        "telegram-sent": "Telegram-a göndərildi",
        "telegram-error": "Telegram-a göndərmə xətası",
        "auth-success": "Avtorizasiya uğurlu!",
        "auth-error": "Avtorizasiya xətası",
        "sign-in-success": "Uğurla daxil oldunuz!",
        "sign-in-error": "Daxil olma xətası",
        "sign-up-success": "Uğurla qeydiyyatdan keçdiniz!",
        "sign-up-error": "Qeydiyyat xətası",
        "network-error": "Şəbəkə xətası. İnternet bağlantısını yoxlayın.",
        "invalid-phone": "Telefon nömrəsi formatı səhvdir",
        "weak-password": "Şifrə çox zəifdir",
        "user-not-found": "İstifadəçi tapılmadı",
        "wrong-password": "Yanlış şifrə",
        "email-in-use": "Bu nömrə artıq istifadə olunur",
        "processing": "Emal edilir...",
        "firebase-error": "Firebase bağlantı xətası. Zəhmət olmasa, sonra yenidən cəhd edin."
    }
};

let currentLang = 'ru';
let currentFilter = 'all';
let currentUser = null;
let auth = null;
let database = null;
let firebaseInitialized = false;

// Firebase initialization function with persistence
function initializeFirebase() {
    try {
        // Check if firebase is available
        if (typeof firebase === 'undefined') {
            console.error("Firebase SDK not loaded");
            return false;
        }

        // Firebase configuration with placeholders
        const firebaseConfig = {
            apiKey: "FIREBASE_API_KEY",
            authDomain: "FIREBASE_AUTH_DOMAIN",
            databaseURL: "FIREBASE_DATABASE_URL",
            projectId: "FIREBASE_PROJECT_ID",
            storageBucket: "FIREBASE_STORAGE_BUCKET",
            messagingSenderId: "FIREBASE_MESSAGING_SENDER_ID",
            appId: "FIREBASE_APP_ID"
        };  

        // Check if configuration is not a placeholder
        if (firebaseConfig.apiKey === "FIREBASE_API_KEY") {
            console.log("Firebase configuration is not set. Using local storage only.");
            return false;
        }

        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        
        // Set auth persistence
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                auth = firebase.auth();
                database = firebase.database();
                firebaseInitialized = true;
                
                // Listen for auth state changes
                auth.onAuthStateChanged((user) => {
                    if (user) {
                        // User is signed in, get user data from Firebase
                        database.ref('users/' + user.uid).once('value')
                            .then((snapshot) => {
                                const userData = snapshot.val();
                                if (userData) {
                                    currentUser = {
                                        uid: user.uid,
                                        whatsapp: userData.whatsapp,
                                        // Other user data can be added here
                                    };
                                    // Save to localStorage as backup
                                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                                }
                            })
                            .catch((error) => {
                                console.error("Error fetching user data:", error);
                            });
                    } else {
                        currentUser = null;
                        localStorage.removeItem('currentUser');
                    }
                });
                
                return true;
            })
            .catch((error) => {
                console.error("Error setting persistence:", error);
                return false;
            });
    } catch (error) {
        console.error("Firebase initialization error:", error);
        return false;
    }
}

// Function to send order to Telegram with Firebase user data
async function sendOrderToTelegram(orderData) {
    try {
        // Show notification about sending
        showNotification({
            message: translations[currentLang]['sending-telegram'],
            type: 'info',
            duration: 2000
        });
        
        // If Firebase is initialized and we have a current user, try to get latest user info from Firebase
        if (firebaseInitialized && currentUser) {
            try {
                const snapshot = await database.ref('users/' + currentUser.uid).once('value');
                const userData = snapshot.val();
                if (userData) {
                    // Use user info from Firebase
                    orderData.userWhatsapp = userData.whatsapp;
                    // Can add other user info here
                }
            } catch (error) {
                console.error("Error fetching user data from Firebase:", error);
                // Fall back to current user info (may be from localStorage)
                orderData.userWhatsapp = currentUser.whatsapp;
            }
        } else {
            // If Firebase not initialized or no current user, use current user info (may be from localStorage)
            orderData.userWhatsapp = currentUser ? currentUser.whatsapp : 'N/A';
        }
        
        // Format message for Telegram
        const message = `
🔥 <b>НОВЫЙ ЗАКАЗ</b> 🔥

📦 <b>Товар:</b> ${orderData.productName}
💰 <b>Цена:</b> ${orderData.price} AZN
🎮 <b>Player ID:</b> ${orderData.playerId}
📱 <b>WhatsApp:</b> ${orderData.userWhatsapp}
⏰ <b>Время:</b> ${new Date(orderData.timestamp).toLocaleString()}

👤 <b>Пользователь:</b> ${orderData.userId}
        `;
        
        // Use a CORS proxy to avoid CORS issues
        const proxyUrl = 'https://api.codetabs.com/v1/proxy/?quest=';
        const telegramUrl = `https://api.telegram.org/botTELEGRAM_BOT_TOKEN/sendMessage`;
        
        // Send request to Telegram API
        const response = await fetch(proxyUrl + encodeURIComponent(telegramUrl), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: "TELEGRAM_CHANNEL_ID",
                text: message,
                parse_mode: 'HTML'
            })
        });
        
        const data = await response.json();
        
        if (data.ok) {
            showNotification({
                message: translations[currentLang]['telegram-sent'],
                type: 'success',
                duration: 3000
            });
            return true;
        } else {
            console.error('Telegram API error:', data);
            showNotification({
                message: translations[currentLang]['telegram-error'],
                type: 'error',
                duration: 4000
            });
            return false;
        }
    } catch (error) {
        console.error('Error sending to Telegram:', error);
        showNotification({
            message: translations[currentLang]['telegram-error'],
            type: 'error',
            duration: 4000
        });
        return false;
    }
}

// Theme setting function with persistence
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    // Save theme to localStorage
    localStorage.setItem('theme', theme);
    
    // Update active button for desktop
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Update active button for mobile
    document.querySelectorAll('#light-theme, #light-theme-mobile').forEach(btn => {
        if (theme === 'light') {
            btn.classList.add('active');
        }
    });
    
    document.querySelectorAll('#dark-theme, #dark-theme-mobile').forEach(btn => {
        if (theme === 'dark') {
            btn.classList.add('active');
        }
    });
}

// Language switching function with persistence
function switchLanguage(lang) {
    currentLang = lang;
    // Save language to localStorage
    localStorage.setItem('language', lang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update product cards
    updateProductCards();
    
    // Close any open modals
    closeProfileModal();
    closePurchaseModal();
}

// Update product cards with current language
function updateProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        const product = products[index];
        if (product) {
            const nameElement = card.querySelector('h4');
            const descElement = card.querySelector('p.text-sm');
            const buyButton = card.querySelector('.buy-btn');
            
            if (nameElement) nameElement.textContent = product.name[currentLang];
            if (descElement) descElement.textContent = product.description[currentLang];
            if (buyButton) buyButton.textContent = translations[currentLang].buy;
        }
    });
}

// Product filtering function with slowed animation
function filterProducts(category) {
    currentFilter = category;
    
    // Update active tab
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.closest('.tab').classList.add('active');
    
    // Get all product cards
    const productCards = document.querySelectorAll('.product-card');
    const grid = document.getElementById('products-grid');
    
    // Optimized filtering with slowed animation
    if (category === 'all') {
        // Show all cards with delay
        productCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.remove('hidden');
                card.classList.add('visible');
            }, index * 150); // Increased delay for smoothness
        });
    } else {
        // Hide all cards first
        productCards.forEach(card => {
            card.classList.add('hidden');
            card.classList.remove('visible');
        });
        
        // Show only needed ones with delay
        const visibleCards = Array.from(productCards).filter(card => 
            card.getAttribute('data-category') === category
        );
        
        visibleCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.remove('hidden');
                card.classList.add('visible');
            }, index * 150); // Increased delay for smoothness
        });
    }
    
    // Optimize container height for mobile devices
    setTimeout(() => {
        grid.style.minHeight = 'auto';
    }, 500);
}

// Product rendering function
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card fade-in filter-animation visible';
        card.setAttribute('data-category', product.category);
        
        card.innerHTML = `
            <div class="icon-container">
                <div class="icon-bg"></div>
                <i class="${product.icon} icon icon-pulse"></i>
            </div>
            <h4 class="text-lg font-semibold mb-2">${product.name[currentLang]}</h4>
            <p class="text-sm mb-4 opacity-80">${product.description[currentLang]}</p>
            <div class="flex items-center justify-between mb-4">
                <span class="text-2xl font-bold gradient-text">${product.price.toFixed(2)} AZN</span>
                ${getDiscountBadge(product)}
            </div>
            <button class="btn-primary w-full buy-btn" onclick="buyProduct('${product.name[currentLang]}', ${product.price})">
                ${translations[currentLang].buy}
            </button>
        `;
        
        grid.appendChild(card);
    });
}

// Get discount badge
function getDiscountBadge(product) {
    const originalPrice = product.price - (product.price < 10 ? 1 : product.price < 50 ? 2 : 3);
    const discount = ((originalPrice - product.price) / originalPrice * 100).toFixed(0);
    return `<span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full">-${discount}%</span>`;
}

// Function to open profile modal
function openProfileModal() {
    // Check if modal exists
    let modal = document.getElementById('profile-modal');
    
    // If modal doesn't exist, create it
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'profile-modal';
        modal.className = 'fixed inset-0 modal-backdrop flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="modal-content rounded-2xl p-8 max-w-md w-full mx-4">
                <div class="text-center">
                    <div class="profile-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-6" data-lang="profile-title">${translations[currentLang]['profile-title']}</h3>
                    
                    <div class="settings-section">
                        <div class="settings-input">
                            <label class="settings-label" data-lang="whatsapp-number">${translations[currentLang]['whatsapp-number']}</label>
                            <input type="tel" id="whatsapp-number" class="form-input" placeholder="+994 XX XXX XX XX">
                        </div>
                        
                        <div class="settings-input">
                            <label class="settings-label" data-lang="password">${translations[currentLang]['password']}</label>
                            <input type="password" id="password" class="form-input" placeholder="••••••••">
                        </div>
                    </div>
                    
                    <div class="flex flex-col space-y-3">
                        <button class="btn-primary auth-btn" id="sign-in-btn" onclick="signIn()">
                            <i class="fas fa-sign-in-alt mr-2"></i>
                            <span data-lang="sign-in">${translations[currentLang]['sign-in']}</span>
                        </button>
                        <button class="btn-secondary auth-btn" id="sign-up-btn" onclick="signUp()">
                            <i class="fas fa-user-plus mr-2"></i>
                            <span data-lang="sign-up">${translations[currentLang]['sign-up']}</span>
                        </button>
                    </div>
                    
                    <button class="mt-4 text-sm opacity-70 hover:opacity-100 transition" onclick="closeProfileModal()">
                        <span data-lang="cancel">${translations[currentLang]['cancel']}</span>
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Add event listener to close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeProfileModal();
            }
        });
    }
    
    // Show modal
    modal.classList.remove('hidden');
    
    // Check if user is logged in
    if (currentUser) {
        // If user is logged in, show their data
        const whatsappInput = document.getElementById('whatsapp-number');
        if (whatsappInput) {
            whatsappInput.value = currentUser.whatsapp || '';
        }
    }
    
    // Update modal content with current language
    updateModalContent();
}

// Update modal content with current language
function updateModalContent() {
    // Update profile modal
    const profileModal = document.getElementById('profile-modal');
    if (profileModal && !profileModal.classList.contains('hidden')) {
        profileModal.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[currentLang][key]) {
                element.textContent = translations[currentLang][key];
            }
        });
    }
    
    // Update purchase modal if exists
    const purchaseModal = document.querySelector('.fixed.inset-0.modal-backdrop');
    if (purchaseModal) {
        purchaseModal.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[currentLang][key]) {
                element.textContent = translations[currentLang][key];
            }
        });
    }
}

// Function to close profile modal
function closeProfileModal() {
    const modal = document.getElementById('profile-modal');
    if (modal) {
        modal.classList.add('hidden');
        
        // Clear form fields
        const whatsappInput = document.getElementById('whatsapp-number');
        const passwordInput = document.getElementById('password');
        
        if (whatsappInput) whatsappInput.value = '';
        if (passwordInput) passwordInput.value = '';
    }
}

// Enhanced sign in function with Firebase
function signIn() {
    const whatsappInput = document.getElementById('whatsapp-number');
    const passwordInput = document.getElementById('password');
    
    if (!whatsappInput || !passwordInput) {
        showNotification({
            message: translations[currentLang]['fill-contact'],
            type: 'error',
            duration: 3000
        });
        return;
    }
    
    const whatsapp = whatsappInput.value.trim();
    const password = passwordInput.value;
    
    // Validation
    if (!whatsapp || !password) {
        showNotification({
            message: translations[currentLang]['fill-contact'],
            type: 'error',
            duration: 3000
        });
        return;
    }
    
    // Show loading indicator
    const signInBtn = document.getElementById('sign-in-btn');
    if (!signInBtn) return;
    
    const originalContent = signInBtn.innerHTML;
    signInBtn.innerHTML = '<div class="loader"></div>' + translations[currentLang]['processing'];
    signInBtn.disabled = true;
    
    // Check if Firebase is initialized
    if (!firebaseInitialized) {
        // Use local storage for demo
        setTimeout(() => {
            // Simulate login
            currentUser = {
                uid: 'demo-user-' + Date.now(),
                whatsapp: whatsapp
            };
            
            // Save to localStorage
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            showNotification({
                message: translations[currentLang]['sign-in-success'],
                type: 'success',
                duration: 3000
            });
            closeProfileModal();
            
            // Restore button
            signInBtn.innerHTML = originalContent;
            signInBtn.disabled = false;
        }, 1500);
        return;
    }
    
    // Convert phone number to email format for Firebase
    const email = whatsapp.replace(/\s/g, '') + '@whatsapp.moony';
    
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successful login
            const user = userCredential.user;
            
            // Get user data from Firebase
            database.ref('users/' + user.uid).once('value')
                .then((snapshot) => {
                    const userData = snapshot.val();
                    if (userData) {
                        currentUser = {
                            uid: user.uid,
                            whatsapp: userData.whatsapp,
                            // Other user data can be added here
                        };
                        
                        // Save to localStorage
                        localStorage.setItem('currentUser', JSON.stringify(currentUser));
                        
                        showNotification({
                            message: translations[currentLang]['sign-in-success'],
                            type: 'success',
                            duration: 3000
                        });
                        closeProfileModal();
                    } else {
                        showNotification({
                            message: translations[currentLang]['user-not-found'],
                            type: 'error',
                            duration: 4000
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                    showNotification({
                        message: translations[currentLang]['sign-in-error'],
                        type: 'error',
                        duration: 4000
                    });
                });
        })
        .catch((error) => {
            let errorMessage = translations[currentLang]['sign-in-error'];
            
            // Handle errors
            switch (error.code) {
                case 'auth/user-not-found':
                    errorMessage = translations[currentLang]['user-not-found'];
                    break;
                case 'auth/wrong-password':
                    errorMessage = translations[currentLang]['wrong-password'];
                    break;
                case 'auth/network-request-failed':
                    errorMessage = translations[currentLang]['network-error'];
                    break;
                default:
                    errorMessage += ': ' + error.message;
            }
            
            showNotification({
                message: errorMessage,
                type: 'error',
                duration: 4000
            });
        })
        .finally(() => {
            // Restore button
            signInBtn.innerHTML = originalContent;
            signInBtn.disabled = false;
        });
}

// Enhanced sign up function with Firebase
function signUp() {
    const whatsappInput = document.getElementById('whatsapp-number');
    const passwordInput = document.getElementById('password');
    
    if (!whatsappInput || !passwordInput) {
        showNotification({
            message: translations[currentLang]['fill-contact'],
            type: 'error',
            duration: 3000
        });
        return;
    }
    
    const whatsapp = whatsappInput.value.trim();
    const password = passwordInput.value;
    
    // Validation
    if (!whatsapp || !password) {
        showNotification({
            message: translations[currentLang]['fill-contact'],
            type: 'error',
            duration: 3000
        });
        return;
    }
    
    if (password.length < 6) {
        showNotification({
            message: translations[currentLang]['weak-password'],
            type: 'error',
            duration: 3000
        });
        return;
    }
    
    // Show loading indicator
    const signUpBtn = document.getElementById('sign-up-btn');
    if (!signUpBtn) return;
    
    const originalContent = signUpBtn.innerHTML;
    signUpBtn.innerHTML = '<div class="loader"></div>' + translations[currentLang]['processing'];
    signUpBtn.disabled = true;
    
    // Check if Firebase is initialized
    if (!firebaseInitialized) {
        // Use local storage for demo
        setTimeout(() => {
            // Simulate registration
            currentUser = {
                uid: 'demo-user-' + Date.now(),
                whatsapp: whatsapp
            };
            
            // Save to localStorage
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            showNotification({
                message: translations[currentLang]['sign-up-success'],
                type: 'success',
                duration: 3000
            });
            closeProfileModal();
            
            // Restore button
            signUpBtn.innerHTML = originalContent;
            signUpBtn.disabled = false;
        }, 1500);
        return;
    }
    
    // Convert phone number to email format for Firebase
    const email = whatsapp.replace(/\s/g, '') + '@whatsapp.moony';
    
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successful registration
            const user = userCredential.user;
            currentUser = {
                uid: user.uid,
                whatsapp: whatsapp
            };
            
            // Save to Firebase
            database.ref('users/' + currentUser.uid).set({
                whatsapp: whatsapp,
                createdAt: new Date().toISOString(),
                // Other user data can be added here
            });
            
            // Save to localStorage
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            showNotification({
                message: translations[currentLang]['sign-up-success'],
                type: 'success',
                duration: 3000
            });
            closeProfileModal();
        })
        .catch((error) => {
            let errorMessage = translations[currentLang]['sign-up-error'];
            
            // Handle errors
            switch (error.code) {
                case 'auth/email-already-in-use':
                    errorMessage = translations[currentLang]['email-in-use'];
                    break;
                case 'auth/weak-password':
                    errorMessage = translations[currentLang]['weak-password'];
                    break;
                case 'auth/network-request-failed':
                    errorMessage = translations[currentLang]['network-error'];
                    break;
                default:
                    errorMessage += ': ' + error.message;
            }
            
            showNotification({
                message: errorMessage,
                type: 'error',
                duration: 4000
            });
        })
        .finally(() => {
            // Restore button
            signUpBtn.innerHTML = originalContent;
            signUpBtn.disabled = false;
        });
}

// Function to buy product
function buyProduct(name, price) {
    // Check if user is logged in
    if (!currentUser) {
        showNotification({
            message: translations[currentLang]['sign-in-error'],
            type: 'error',
            duration: 3000
        });
        openProfileModal();
        return;
    }
    
    // Create purchase confirmation modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 modal-backdrop flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="modal-content rounded-2xl p-8 max-w-md w-full mx-4">
            <div class="text-center">
                <h3 class="text-2xl font-bold mb-4" data-lang="confirm-purchase">${translations[currentLang]['confirm-purchase']}</h3>
                <div class="mb-6">
                    <p class="text-lg mb-2"><strong>${name}</strong></p>
                    <p class="text-2xl font-bold gradient-text">${price.toFixed(2)} AZN</p>
                </div>
                <div class="mb-6">
                    <label class="settings-label" data-lang="player-id">${translations[currentLang]['player-id']}</label>
                    <input type="text" id="player-id" class="form-input" placeholder="1234567890">
                </div>
                <div class="flex flex-col space-y-3">
                    <button class="btn-primary w-full" onclick="confirmPurchase('${name}', ${price})">
                        <i class="fas fa-check mr-2"></i>
                        <span data-lang="confirm">${translations[currentLang]['confirm']}</span>
                    </button>
                    <button class="btn-secondary w-full" onclick="closePurchaseModal()">
                        <span data-lang="cancel">${translations[currentLang]['cancel']}</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Add event listener to close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closePurchaseModal();
        }
    });
}

// Function to confirm purchase
async function confirmPurchase(name, price) {
    const playerIdInput = document.getElementById('player-id');
    if (!playerIdInput) {
        showNotification({
            message: translations[currentLang]['player-id'] + ' ' + translations[currentLang]['fill-contact'],
            type: 'error',
            duration: 3000
        });
        return;
    }
    
    const playerId = playerIdInput.value.trim();
    
    // Validation
    if (!playerId) {
        showNotification({
            message: translations[currentLang]['player-id'] + ' ' + translations[currentLang]['fill-contact'],
            type: 'error',
            duration: 3000
        });
        return;
    }
    
    // Show loading indicator
    const confirmBtn = event.target;
    const originalContent = confirmBtn.innerHTML;
    confirmBtn.innerHTML = '<div class="loader"></div>' + translations[currentLang]['processing'];
    confirmBtn.disabled = true;
    
    // Simulate order submission
    setTimeout(async () => {
        // Random error (10% chance)
        if (Math.random() < 0.1) {
            showNotification({
                message: translations[currentLang]['order-error'],
                type: 'error',
                duration: 4000
            });
        } else {
            // Check if Firebase is initialized
            if (firebaseInitialized) {
                // Save order to Firebase
                const orderData = {
                    productName: name,
                    price: price,
                    playerId: playerId,
                    userId: currentUser.uid,
                    userWhatsapp: currentUser.whatsapp,
                    timestamp: new Date().toISOString(),
                    status: 'pending'
                };
                
                try {
                    await database.ref('orders/').push(orderData);
                    showNotification({
                        message: translations[currentLang]['order-success'],
                        type: 'success',
                        duration: 4000
                    });
                    
                    // Send order to Telegram
                    await sendOrderToTelegram(orderData);
                    
                    closePurchaseModal();
                } catch (error) {
                    showNotification({
                        message: translations[currentLang]['order-error'] + ': ' + error.message,
                        type: 'error',
                        duration: 5000
                    });
                }
            } else {
                // Use local storage for demo
                const orders = JSON.parse(localStorage.getItem('orders') || '[]');
                const orderData = {
                    productName: name,
                    price: price,
                    playerId: playerId,
                    userId: currentUser.uid,
                    userWhatsapp: currentUser.whatsapp,
                    timestamp: new Date().toISOString(),
                    status: 'pending'
                };
                orders.push(orderData);
                localStorage.setItem('orders', JSON.stringify(orders));
                
                showNotification({
                    message: translations[currentLang]['order-success'],
                    type: 'success',
                    duration: 4000
                });
                
                // Send order to Telegram
                await sendOrderToTelegram(orderData);
                
                closePurchaseModal();
            }
        }
        
        // Restore button
        confirmBtn.innerHTML = originalContent;
        confirmBtn.disabled = false;
    }, 2000);
}

// Function to close purchase modal
function closePurchaseModal() {
    const modal = document.querySelector('.fixed.inset-0.modal-backdrop');
    if (modal) {
        modal.remove();
    }
}

// IMPROVED NOTIFICATION SYSTEM
class NotificationSystem {
    constructor() {
        this.container = this.createContainer();
        this.notifications = [];
        this.maxVisible = 5;
        this.defaultDuration = 3000;
        this.defaultPosition = 'top-right';
        this.defaultType = 'info';
        this.animationDuration = 300;
    }

    createContainer() {
        const container = document.createElement('div');
        container.id = 'notification-container';
        container.className = 'fixed z-50 pointer-events-none';
        document.body.appendChild(container);
        return container;
    }

    show(options) {
        // Normalize options
        const notification = {
            id: Date.now() + Math.random(),
            message: options.message || '',
            type: options.type || this.defaultType,
            duration: options.duration !== undefined ? options.duration : this.defaultDuration,
            position: options.position || this.defaultPosition,
            icon: this.getIcon(options.type || this.defaultType),
            color: this.getColor(options.type || this.defaultType),
            dismissible: options.dismissible !== false,
            ...options
        };

        // Create notification element
        const element = this.createNotificationElement(notification);
        
        // Add to container
        this.container.appendChild(element);
        
        // Set position
        this.updateContainerPosition(notification.position);
        
        // Add to notifications array
        this.notifications.push({ notification, element });
        
        // Animate in
        setTimeout(() => {
            element.classList.add('show');
        }, 10);
        
        // Auto dismiss if duration > 0
        if (notification.duration > 0) {
            setTimeout(() => {
                this.dismiss(notification.id);
            }, notification.duration);
        }
        
        // Limit visible notifications
        this.checkVisibleLimit();
        
        return notification.id;
    }

    createNotificationElement(notification) {
        const element = document.createElement('div');
        element.className = `notification notification-${notification.type}`;
        element.dataset.id = notification.id;
        
        const icon = notification.icon ? `<i class="${notification.icon}"></i>` : '';
        
        element.innerHTML = `
            <div class="notification-content">
                <div class="notification-icon">${icon}</div>
                <div class="notification-message">${notification.message}</div>
                ${notification.dismissible ? '<div class="notification-close"><i class="fas fa-times"></i></div>' : ''}
            </div>
        `;
        
        // Add event listener for close button
        if (notification.dismissible) {
            const closeBtn = element.querySelector('.notification-close');
            closeBtn.addEventListener('click', () => {
                this.dismiss(notification.id);
            });
        }
        
        return element;
    }

    getIcon(type) {
        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };
        return icons[type] || icons.info;
    }

    getColor(type) {
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#3b82f6'
        };
        return colors[type] || colors.info;
    }

    updateContainerPosition(position) {
        const positions = {
            'top-right': 'top-4 right-4',
            'top-left': 'top-4 left-4',
            'bottom-right': 'bottom-4 right-4',
            'bottom-left': 'bottom-4 left-4',
            'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
            'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
        };
        
        // Remove all position classes
        Object.values(positions).forEach(pos => {
            this.container.classList.remove(...pos.split(' '));
        });
        
        // Add new position class
        this.container.classList.add(...positions[position].split(' '));
        
        // Set flex direction
        if (position.includes('bottom')) {
            this.container.classList.add('flex-col-reverse');
            this.container.classList.remove('flex-col');
        } else {
            this.container.classList.add('flex-col');
            this.container.classList.remove('flex-col-reverse');
        }
    }

    checkVisibleLimit() {
        const visible = this.notifications.filter(n => !n.element.classList.contains('hidden'));
        
        if (visible.length > this.maxVisible) {
            const toHide = visible.slice(0, visible.length - this.maxVisible);
            toHide.forEach(n => {
                this.dismiss(n.notification.id);
            });
        }
    }

    dismiss(id) {
        const index = this.notifications.findIndex(n => n.notification.id === id);
        if (index !== -1) {
            const { element } = this.notifications[index];
            element.classList.add('hide');
            
            setTimeout(() => {
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                this.notifications.splice(index, 1);
            }, this.animationDuration);
        }
    }

    clear() {
        this.notifications.forEach(n => {
            this.dismiss(n.notification.id);
        });
    }
}

// Initialize notification system
const notificationSystem = new NotificationSystem();

// Enhanced show notification function
function showNotification(options) {
    if (typeof options === 'string') {
        options = { message: options };
    }
    
    return notificationSystem.show(options);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Firebase
    initializeFirebase();
    
    // Set saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    // Set saved language
    const savedLanguage = localStorage.getItem('language') || 'ru';
    currentLang = savedLanguage;
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === savedLanguage) {
            btn.classList.add('active');
        }
    });
    
    // Render products
    renderProducts();
    
    // Hide loader after a short delay
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800);
        }
    }, 1500);
});