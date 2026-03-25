$(document).ready(function () {
  // ========== BURGER MENU ==========
  $("#burgerBtn").on("click", function (e) {
    e.preventDefault();
    $("#mobileMenu").addClass("active");
    $("#mobileMenuOverlay").fadeIn(300);
    $("body").css("overflow", "hidden");
  });

  $("#closeMobileMenu").on("click", function (e) {
    e.preventDefault();
    $("#mobileMenu").removeClass("active");
    $("#mobileMenuOverlay").fadeOut(300);
    $("body").css("overflow", "auto");
  });

  $("#mobileMenuOverlay").on("click", function () {
    $("#mobileMenu").removeClass("active");
    $("#mobileMenuOverlay").fadeOut(300);
    $("body").css("overflow", "auto");
  });

  $("#mobileMenu a").on("click", function () {
    $("#mobileMenu").removeClass("active");
    $("#mobileMenuOverlay").fadeOut(300);
    $("body").css("overflow", "auto");
  });

  // ========== MODALS ==========
  $("#openLoginModal").on("click", function (e) {
    e.preventDefault();
    $("#loginModal").fadeIn(300);
    $("#loginForm").addClass("active");
    $("#registerForm").removeClass("active");
  });

  $("#openCallModal").on("click", function (e) {
    e.preventDefault();
    $("#orderCallModal").fadeIn(300);
  });

  $("#openCartModal").on("click", function (e) {
    e.preventDefault();
    updateCartDisplay();
    $("#cartModal").fadeIn(300);
  });

  $(".close-modal").on("click", function () {
    $(this).closest(".modal").fadeOut(200);
  });

  $(window).on("click", function (e) {
    if ($(e.target).hasClass("modal")) {
      $(e.target).fadeOut(200);
    }
  });

  $(".switch-form").on("click", function (e) {
    e.preventDefault();
    const formToShow = $(this).data("form");
    if (formToShow === "register") {
      $("#loginForm").removeClass("active");
      $("#registerForm").addClass("active");
    } else {
      $("#registerForm").removeClass("active");
      $("#loginForm").addClass("active");
    }
  });

  // ========== TRANSLATIONS ==========
  const translations = {
    ru: {
      about: "О нас",
      payment: "Оплата и доставка",
      news: "Новости",
      contacts: "Контакты",
      personal_cabinet: "Личный кабинет",
      moscow: "Москва",
      order_call: "Заказать звонок",
      checkout: "Оформить заказ",
      catalog_knives: "Каталог ножей",
      bladed_weapons: "Клинковое оружие",
      armytek_flashlight: "Фонарик ARMYTEK",
      related_products: "Сопутствующие товары",
      banner_title:
        "Интернет магазин сертифицированных <span>златоустовских ножей</span>",
      banner_text:
        "Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине представлен наиболее широкий выбор Златоустовских ножей от Златоустовских Оружейных Фабрик и компаний, мы являемся официальными поставщиками.",
      details: "Подробнее",
      feature1: "Гарантия 100% возврата денежных средств",
      feature2: "Доставка по России, Казахстану и Белоруссии",
      feature3: "Оформление заказа без регистрации",
      feature4: "Скидки постоянным покупателям",
      login_title: "Вход в личный кабинет",
      email: "Email",
      password: "Пароль",
      remember_me: "Запомнить меня",
      forgot_password: "Забыли пароль?",
      login_button: "Войти",
      no_account: "Нет аккаунта?",
      register_link: "Зарегистрироваться",
      register_title: "Регистрация",
      name: "Имя",
      confirm_password: "Повторите пароль",
      agree_terms:
        'Я согласен с <a href="/terms" class="terms-link">условиями</a>',
      register_button: "Зарегистрироваться",
      have_account: "Уже есть аккаунт?",
      login_link: "Войти",
      order_call_title: "Заказать звонок",
      your_name: "Ваше имя",
      phone_number: "Номер телефона",
      convenient_time: "Удобное время для звонка",
      select_time: "Выберите время",
      comment_optional: "Комментарий (необязательно)",
      privacy_agreement: "Я согласен на обработку персональных данных",
      order_call_button: "Заказать звонок",
      call_info:
        "Наш менеджер свяжется с вами в указанное время. Если вы заняты, мы перезвоним позже.",
      your_cart: "Ваша корзина",
      cart_empty: "Ваша корзина пуста",
      total: "Итого:",
      clear_cart: "Очистить корзину",
      hits_title: "Хиты продаж",
      go_to_catalog: "Перейти в каталог →",
      add_to_cart: "В корзину",
      added_to_cart: "Добавлено!",
      product1_name: 'Охотничий нож "Медведь"',
      product1_size: "Длина: 28 см",
      product2_name: 'Туристический нож "Скаут"',
      product2_size: "Длина: 22 см",
      product3_name: 'Кухонный нож "Шеф"',
      product3_size: "Длина: 20 см",
      product4_name: 'Складной нож "Компакт"',
      product4_size: "Длина: 15 см",
      our_articles: "Наши статьи",
      article1_title: "Все о ножах: как правильно выбрать",
      article2_title: "Как правильно выбрать фонарь",
      article3_title: "Кухонные ножи для хозяек",
      article4_title: "Туристические ножи для походов",
      lights1_title: "Тактические фонари",
      lights1_text:
        "Высококачественные тактические фонари для профессионального использования. Надежность и мощность в каждой модели.",
      lights2_title: "Походные мультифонари",
      lights2_text:
        "Универсальные мультифункциональные фонари для походов и активного отдыха. Компактность и функциональность.",
      lights_products_title: "Фонари ARMYTEK",
      lights_product1_name: "ARMYTEK Predator Pro",
      lights_product1_power: "Мощность: 1650 люмен",
      lights_product2_name: "ARMYTEK Wizard Pro",
      lights_product2_power: "Мощность: 2300 люмен",
      lights_product3_name: "ARMYTEK Dobermann Pro",
      lights_product3_power: "Мощность: 1450 люмен",
      lights_product4_name: "ARMYTEK Barracuda Pro",
      lights_product4_power: "Мощность: 1850 люмен",
      footer_description:
        "Интернет-магазин сертифицированных златоустовских ножей и тактических фонарей. Официальный поставщик качественных товаров для охоты, туризма и профессионального использования.",
      footer_categories: "Категории",
      footer_knife_accessories: "Аксессуары для ножей",
      footer_info: "Информация",
      footer_guarantee: "Гарантия и возврат",
      footer_contacts: "Контакты и адреса",
      footer_wholesale: "Оптовым покупателям",
      footer_address: "Москва, ул. Оружейная, 15",
      footer_hours: "Ежедневно 9:00 - 21:00",
      footer_rights: "Все права защищены.",
      footer_privacy: "Политика конфиденциальности",
      footer_terms: "Пользовательское соглашение",
    },
    en: {
      about: "About Us",
      payment: "Payment and Delivery",
      news: "News",
      contacts: "Contacts",
      personal_cabinet: "Personal Cabinet",
      moscow: "Moscow",
      order_call: "Request a Call",
      checkout: "Checkout",
      catalog_knives: "Knives Catalog",
      bladed_weapons: "Bladed Weapons",
      armytek_flashlight: "ARMYTEK Flashlight",
      related_products: "Related Products",
      banner_title: "Online store of certified <span>Zlatoust knives</span>",
      banner_text:
        "Welcome to the official website of «ZLATMAX»! Our store offers the widest selection of Zlatoust knives from Zlatoust Weapons Factories and companies, we are official suppliers.",
      details: "Details",
      feature1: "100% money back guarantee",
      feature2: "Delivery to Russia, Kazakhstan and Belarus",
      feature3: "Order placement without registration",
      feature4: "Discounts for regular customers",
      login_title: "Login to Personal Cabinet",
      email: "Email",
      password: "Password",
      remember_me: "Remember me",
      forgot_password: "Forgot password?",
      login_button: "Login",
      no_account: "No account?",
      register_link: "Register",
      register_title: "Registration",
      name: "Name",
      confirm_password: "Confirm Password",
      agree_terms:
        'I agree with the <a href="/terms" class="terms-link">terms</a>',
      register_button: "Register",
      have_account: "Already have an account?",
      login_link: "Login",
      order_call_title: "Request a Call",
      your_name: "Your Name",
      phone_number: "Phone Number",
      convenient_time: "Convenient time for call",
      select_time: "Select time",
      comment_optional: "Comment (optional)",
      privacy_agreement: "I agree to the processing of personal data",
      order_call_button: "Request a Call",
      call_info:
        "Our manager will contact you at the specified time. If you are busy, we will call back later.",
      your_cart: "Your Cart",
      cart_empty: "Your cart is empty",
      total: "Total:",
      clear_cart: "Clear Cart",
      hits_title: "Best Sellers",
      go_to_catalog: "Go to Catalog →",
      add_to_cart: "Add to Cart",
      added_to_cart: "Added!",
      product1_name: "Hunting Knife 'Bear'",
      product1_size: "Length: 28 cm",
      product2_name: "Tourist Knife 'Scout'",
      product2_size: "Length: 22 cm",
      product3_name: "Kitchen Knife 'Chef'",
      product3_size: "Length: 20 cm",
      product4_name: "Folding Knife 'Compact'",
      product4_size: "Length: 15 cm",
      our_articles: "Our Articles",
      article1_title: "All About Knives: How to Choose Correctly",
      article2_title: "How to Choose a Flashlight",
      article3_title: "Kitchen Knives for Housewives",
      article4_title: "Tourist Knives for Hiking",
      lights1_title: "Tactical Flashlights",
      lights1_text:
        "High-quality tactical flashlights for professional use. Reliability and power in every model.",
      lights2_title: "Camping Multifunctional Lights",
      lights2_text:
        "Universal multifunctional lights for hiking and active recreation. Compactness and functionality.",
      lights_products_title: "ARMYTEK Flashlights",
      lights_product1_name: "ARMYTEK Predator Pro",
      lights_product1_power: "Power: 1650 lumens",
      lights_product2_name: "ARMYTEK Wizard Pro",
      lights_product2_power: "Power: 2300 lumens",
      lights_product3_name: "ARMYTEK Dobermann Pro",
      lights_product3_power: "Power: 1450 lumens",
      lights_product4_name: "ARMYTEK Barracuda Pro",
      lights_product4_power: "Power: 1850 lumens",
      footer_description:
        "Online store of certified Zlatoust knives and tactical flashlights. Official supplier of quality products for hunting, tourism and professional use.",
      footer_categories: "Categories",
      footer_knife_accessories: "Knife Accessories",
      footer_info: "Information",
      footer_guarantee: "Warranty and Return",
      footer_contacts: "Contacts and Addresses",
      footer_wholesale: "Wholesale Buyers",
      footer_address: "Moscow, Oruzheynaya st., 15",
      footer_hours: "Daily 9:00 - 21:00",
      footer_rights: "All rights reserved.",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms of Use",
    },
    hy: {
      about: "Մեր մասին",
      payment: "Վճարում և առաքում",
      news: "Նորություններ",
      contacts: "Կոնտակտներ",
      personal_cabinet: "Անձնական գրասենյակ",
      moscow: "Մոսկվա",
      order_call: "Զանգ պատվիրել",
      checkout: "Պատվիրել",
      catalog_knives: "Դանակների կատալոգ",
      bladed_weapons: "Սառը զենքեր",
      armytek_flashlight: "ARMYTEK լապտեր",
      related_products: "Հարակից ապրանքներ",
      banner_title:
        "Հավաստագրված <span>Զլատոուստյան դանակների</span> առցանց խանութ",
      banner_text:
        "Բարի գալուստ «ԶԼԱՏՄԱԿՍ»-ի պաշտոնական կայք։ Մեր խանութն առաջարկում է Զլատոուստյան դանակների ամենալայն ընտրությունը Զլատոուստյան զենքի գործարաններից և ընկերություններից, մենք պաշտոնական մատակարարներ ենք։",
      details: "Մանրամասներ",
      feature1: "100% գումարի վերադարձի երաշխիք",
      feature2: "Առաքում Ռուսաստան, Ղազախստան և Բելառուս",
      feature3: "Պատվերի ձևակերպում առանց գրանցման",
      feature4: "Զեղչեր մշտական հաճախորդների համար",
      login_title: "Մուտք անձնական գրասենյակ",
      email: "Էլ․ փոստ",
      password: "Գաղտնաբառ",
      remember_me: "Հիշել ինձ",
      forgot_password: "Մոռացե՞լ եք գաղտնաբառը",
      login_button: "Մուտք",
      no_account: "Հաշիվ չունե՞ք",
      register_link: "Գրանցվել",
      register_title: "Գրանցում",
      name: "Անուն",
      confirm_password: "Կրկնել գաղտնաբառը",
      agree_terms:
        'Ես համաձայն եմ <a href="/terms" class="terms-link">պայմանների</a> հետ',
      register_button: "Գրանցվել",
      have_account: "Արդեն հաշիվ ունե՞ք",
      login_link: "Մուտք",
      order_call_title: "Զանգ պատվիրել",
      your_name: "Ձեր անունը",
      phone_number: "Հեռախոսահամար",
      convenient_time: "Հարմար ժամ զանգի համար",
      select_time: "Ընտրեք ժամանակը",
      comment_optional: "Մեկնաբանություն (ըստ ցանկության)",
      privacy_agreement: "Ես համաձայն եմ անձնական տվյալների մշակմանը",
      order_call_button: "Զանգ պատվիրել",
      call_info:
        "Մեր մենեջերը կկապնվի ձեզ հետ նշված ժամին։ Եթե զբաղված եք, մենք հետագայում նորից կզանգենք։",
      your_cart: "Ձեր զամբյուղը",
      cart_empty: "Ձեր զամբյուղը դատարկ է",
      total: "Ընդամենը:",
      clear_cart: "Մաքրել զամբյուղը",
      hits_title: "Վաճառքի հիթեր",
      go_to_catalog: "Անցնել կատալոգ →",
      add_to_cart: "Ավելացնել զամբյուղում",
      added_to_cart: "Ավելացված է!",
      product1_name: "Որսորդական դանակ 'Արջ'",
      product1_size: "Երկարություն: 28 սմ",
      product2_name: "Զբոսաշրջային դանակ 'Զննիչ'",
      product2_size: "Երկարություն: 22 սմ",
      product3_name: "Խոհանոցային դանակ 'Շեֆ'",
      product3_size: "Երկարություն: 20 սմ",
      product4_name: "Ծալովի դանակ 'Կոմպակտ'",
      product4_size: "Երկարություն: 15 սմ",
      our_articles: "Մեր հոդվածները",
      article1_title: "Ամեն ինչ դանակների մասին՝ ինչպես ճիշտ ընտրել",
      article2_title: "Ինչպես ճիշտ ընտրել լապտեր",
      article3_title: "Խոհանոցային դանակներ տնտեսուհիների համար",
      article4_title: "Զբոսաշրջային դանակներ արշավների համար",
      lights1_title: "Տակտիկական լապտերներ",
      lights1_text:
        "Բարձրորակ տակտիկական լապտերներ պրոֆեսիոնալ օգտագործման համար։ Հուսալիություն և հզորություն յուրաքանչյուր մոդելում։",
      lights2_title: "Արշավային բազմաֆունկցիոնալ լապտերներ",
      lights2_text:
        "Ունիվերսալ բազմաֆունկցիոնալ լապտերներ արշավների և ակտիվ հանգստի համար։ Կոմպակտություն և ֆունկցիոնալություն։",
      lights_products_title: "ARMYTEK լապտերներ",
      lights_product1_name: "ARMYTEK Predator Pro",
      lights_product1_power: "Հզորություն: 1650 լյումեն",
      lights_product2_name: "ARMYTEK Wizard Pro",
      lights_product2_power: "Հզորություն: 2300 լյումեն",
      lights_product3_name: "ARMYTEK Dobermann Pro",
      lights_product3_power: "Հզորություն: 1450 լյումեն",
      lights_product4_name: "ARMYTEK Barracuda Pro",
      lights_product4_power: "Հզորություն: 1850 լյումեն",
      footer_description:
        "Հավաստագրված Զլատոուստյան դանակների և տակտիկական լապտերների առցանց խանութ։ Որակյալ արտադրանքի պաշտոնական մատակարար որսի, տուրիզմի և պրոֆեսիոնալ օգտագործման համար։",
      footer_categories: "Կատեգորիաներ",
      footer_knife_accessories: "Դանակների պարագաներ",
      footer_info: "Տեղեկատվություն",
      footer_guarantee: "Երաշխիք և վերադարձ",
      footer_contacts: "Կոնտակտներ և հասցեներ",
      footer_wholesale: "Մեծածախ գնորդների համար",
      footer_address: "Մոսկվա, Օրուժեյնայա փողոց 15",
      footer_hours: "Ամեն օր 9:00 - 21:00",
      footer_rights: "Բոլոր իրավունքները պաշտպանված են։",
      footer_privacy: "Գաղտնիության քաղաքականություն",
      footer_terms: "Օգտագործման պայմաններ",
    },
  };

  // ========== PRODUCTS DATA ==========
  const products = {
    1: { name: 'Охотничий нож "Медведь"', price: 4500 },
    2: { name: 'Туристический нож "Скаут"', price: 3200 },
    3: { name: 'Кухонный нож "Шеф"', price: 2800 },
    4: { name: 'Складной нож "Компакт"', price: 1900 },
    101: { name: "ARMYTEK Predator Pro", price: 8900 },
    102: { name: "ARMYTEK Wizard Pro", price: 9500 },
    103: { name: "ARMYTEK Dobermann Pro", price: 6800 },
    104: { name: "ARMYTEK Barracuda Pro", price: 7900 },
  };

  // ========== LANGUAGE MANAGEMENT ==========
  let currentLang = localStorage.getItem("selectedLanguage") || "ru";
  $("#languageSelect").val(currentLang);

  function applyTranslations(lang) {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((element) => {
      const key = element.dataset.i18n;
      const translation = translations[lang]?.[key];

      if (translation) {
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.placeholder = translation;
        } else if (element.tagName === "OPTION") {
          element.textContent = translation;
        } else {
          element.innerHTML = translation;
        }
      }
    });

    localStorage.setItem("selectedLanguage", lang);
  }

  applyTranslations(currentLang);

  $("#languageSelect").on("change", function () {
    const selectedLang = $(this).val();
    applyTranslations(selectedLang);
  });

  // ========== CART MANAGEMENT ==========
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCartDisplay() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    $(".cart-count").text(totalCount);

    const cartItemsContainer = $("#cartItems");
    const cartTotalPrice = $("#cartTotalPrice");

    if (cart.length === 0) {
      cartItemsContainer.html(`
        <div class="empty-cart-message">
          <i class="fas fa-shopping-basket"></i>
          <p data-i18n="cart_empty">Ваша корзина пуста</p>
        </div>
      `);
      applyTranslations(currentLang);
    } else {
      let cartHtml = "";
      cart.forEach((item, index) => {
        cartHtml += `
          <div class="cart-item" data-index="${index}">
            <div class="cart-item-info">
              <h3 class="cart-item-title">${escapeHtml(item.name)}</h3>
              <h3 class="cart-item-price">${item.price.toLocaleString()} ₽</h3>
            </div>
            <div class="cart-item-actions">
              <div class="quantity-control">
                <button class="quantity-btn minus" type="button">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn plus" type="button">+</button>
              </div>
              <button class="remove-item-btn" type="button">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        `;
      });
      cartItemsContainer.html(cartHtml);
    }
    cartTotalPrice.text(totalPrice.toLocaleString() + " ₽");
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  $("#cartItems").on("click", ".quantity-btn", function () {
    const cartItem = $(this).closest(".cart-item");
    const index = cartItem.data("index");
    const isPlus = $(this).hasClass("plus");

    if (isPlus) {
      cart[index].quantity++;
    } else {
      cart[index].quantity--;
      if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
  });

  $("#cartItems").on("click", ".remove-item-btn", function () {
    const cartItem = $(this).closest(".cart-item");
    const index = cartItem.data("index");

    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
  });

  // ========== WISHLIST MANAGEMENT ==========
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index === -1) {
      wishlist.push(productId);
    } else {
      wishlist.splice(index, 1);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateWishlistButtons();
  }

  function updateWishlistButtons() {
    $(".wishlist-btn, .lights-wishlist-btn").each(function () {
      const productId = $(this).data("id");
      const icon = $(this).find("i");
      if (wishlist.includes(productId)) {
        $(this).addClass("active");
        icon.removeClass("far").addClass("fas");
      } else {
        $(this).removeClass("active");
        icon.removeClass("fas").addClass("far");
      }
    });
  }

  // ========== ADD TO CART FUNCTIONALITY ==========
  function addToCart(productId, btnElement) {
    const product = products[productId];
    const btn = $(btnElement);
    const addedText = translations[currentLang]?.added_to_cart || "Добавлено!";

    if (product) {
      const existingItem = cart.find((item) => item.name === product.name);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartDisplay();
    }

    const originalHtml = btn.html();
    btn.html(`<i class="fas fa-check"></i> ${addedText}`);
    btn.css("background", "linear-gradient(135deg, #4CAF50, #45a049)");

    setTimeout(() => {
      const addToCartText =
        translations[currentLang]?.add_to_cart || "В корзину";
      btn.html(originalHtml);
      btn.css(
        "background",
        "linear-gradient(135deg, var(--primary-color), #ffc107)",
      );
    }, 1500);
  }

  $(document).on("click", ".add-to-cart", function () {
    const productId = $(this).data("id");
    addToCart(productId, this);
  });

  $(document).on("click", ".lights-add-to-cart", function () {
    const productId = $(this).data("id");
    addToCart(productId, this);
  });

  // ========== WISHLIST BUTTONS ==========
  $(document).on("click", ".wishlist-btn", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const productId = $(this).data("id");
    toggleWishlist(productId);
  });

  $(document).on("click", ".lights-wishlist-btn", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const productId = $(this).data("id");
    toggleWishlist(productId);
  });

  // ========== NAVIGATION LINKS ==========
  $(".catalog-link").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(".catalog").offset().top - 80,
      },
      800,
    );
    $(".bottom-header a").removeClass("active");
    $(".bottom-header a:first-child").addClass("active");
  });

  $(".lights-catalog-link").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(".lights-products").offset().top - 80,
      },
      800,
    );
    $(".bottom-header a").removeClass("active");
    $(".bottom-header a[data-i18n='armytek_flashlight']").addClass("active");
  });

  // ========== FORM SUBMISSIONS ==========
  $("#loginFormElement").on("submit", function (e) {
    e.preventDefault();
    const email = $("#email").val().trim();
    const password = $("#password").val().trim();

    if (!email || !password) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    alert("Вход выполнен успешно!");
    $("#loginModal").fadeOut(200);
    $("#email").val("");
    $("#password").val("");
    $("#remember").prop("checked", false);
  });

  $("#registerFormElement").on("submit", function (e) {
    e.preventDefault();
    const name = $("#regName").val().trim();
    const email = $("#regEmail").val().trim();
    const password = $("#regPassword").val();
    const confirmPassword = $("#regConfirmPassword").val();

    if (!name || !email || !password || !confirmPassword) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    if (password !== confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }

    if (password.length < 6) {
      alert("Пароль должен быть не менее 6 символов");
      return;
    }

    if (!$("#terms").prop("checked")) {
      alert("Пожалуйста, согласитесь с условиями");
      return;
    }

    alert("Регистрация успешна!");
    $("#loginModal").fadeOut(200);
    $("#regName").val("");
    $("#regEmail").val("");
    $("#regPassword").val("");
    $("#regConfirmPassword").val("");
    $("#terms").prop("checked", false);

    $("#registerForm").removeClass("active");
    $("#loginForm").addClass("active");
  });

  $("#callFormElement").on("submit", function (e) {
    e.preventDefault();
    const name = $("#callName").val().trim();
    const phone = $("#callPhone").val().trim();
    const time = $("#callTime").val();

    if (!name || !phone || !time) {
      alert("Пожалуйста, заполните обязательные поля");
      return;
    }

    if (!$("#callTerms").prop("checked")) {
      alert("Пожалуйста, согласитесь на обработку данных");
      return;
    }

    alert("Заявка на звонок отправлена! Мы свяжемся с вами в указанное время.");
    $("#orderCallModal").fadeOut(200);
    $("#callName").val("");
    $("#callPhone").val("");
    $("#callTime").val("");
    $("#callComment").val("");
    $("#callTerms").prop("checked", false);
  });

  // ========== PHONE INPUT FORMATTING ==========
  $("#callPhone").on("input", function () {
    let value = $(this).val().replace(/\D/g, "");
    if (value.length > 0) {
      if (value.length <= 11) {
        if (value[0] === "7" || value[0] === "8") {
          value = value.substring(1);
        }
        let formatted = "+7";
        if (value.length > 0) formatted += " (" + value.substring(0, 3);
        if (value.length >= 3) formatted += ") " + value.substring(3, 6);
        if (value.length >= 6) formatted += "-" + value.substring(6, 8);
        if (value.length >= 8) formatted += "-" + value.substring(8, 10);
        $(this).val(formatted);
      }
    }
  });

  // ========== SEARCH FUNCTIONALITY ==========
  $(".search i").on("click", function () {
    const searchQuery = $(".search input").val().trim();
    if (searchQuery) {
      alert("Поиск: " + searchQuery);
    }
  });

  $(".search input").on("keypress", function (e) {
    if (e.which === 13) {
      $(".search i").click();
    }
  });

  // ========== BOTTOM NAVIGATION ==========
  $(".bottom-header a").on("click", function (e) {
    e.preventDefault();
    $(".bottom-header a").removeClass("active");
    $(this).addClass("active");

    const targetId = $(this).attr("href");
    if (targetId && targetId !== "#") {
      const targetElement = $(targetId);
      if (targetElement.length) {
        $("html, body").animate(
          {
            scrollTop: targetElement.offset().top - 80,
          },
          800,
        );
      }
    }
  });

  // ========== BANNER BUTTON ==========
  $(".more-btn").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(".catalog").offset().top - 80,
      },
      800,
    );
  });

  // ========== LIGHTS SECTION BUTTONS ==========
  $(".lights .about button").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(".lights-products").offset().top - 80,
      },
      800,
    );
    $(".bottom-header a").removeClass("active");
    $(".bottom-header a[data-i18n='armytek_flashlight']").addClass("active");
  });

  // ========== INITIALIZE ==========
  updateCartDisplay();
  updateWishlistButtons();

  // Fix for responsive issues - close mobile menu on window resize
  $(window).on("resize", function () {
    if ($(window).width() > 991) {
      if ($("#mobileMenu").hasClass("active")) {
        $("#mobileMenu").removeClass("active");
        $("#mobileMenuOverlay").fadeOut(300);
        $("body").css("overflow", "auto");
      }
    }
  });
});
