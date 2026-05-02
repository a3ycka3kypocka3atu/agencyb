/* ================================================
   STRAIGHTFORWARD AGENCY — App JS
   ================================================ */

// Translations
const translations = {
    uk: {
        nav_services: "Послуги",
        nav_packages: "Пакети",
        nav_process: "Процес",
        nav_ecosystem: "Екосистема агенцій",
        nav_faq: "FAQ",
        nav_cta: "Безкоштовний аудит",

        hero_badge: "Перетворюємо бізнес-задачі на чіткі рішення",
        hero_title_1: "Глибокий аналіз ринку",
        hero_title_2: "з конкретними цифрами",
        hero_title_3: "та планом дій",
        hero_subtitle: "Ми за 5-7 днів даємо вам дослідження, стратегію та план дій. Те, на що класична агенція витрачає місяць. Без зайвих слів.",
        hero_cta_main: "Безкоштовний міні-аудит",
        hero_cta_side: "Переглянути послуги",
        hero_micro: "Працюємо з бізнесами в UA, PL, CZ",
        hero_micro_price: "Від $500",
        hero_micro_response: "Відповідаємо за 48 год",

        card_research: "Research",
        card_meta_1: "5-7 днів",
        card_strategy: "Strategy",
        card_meta_2: "10-14 днів",
        card_launch: "Launch",
        card_meta_3: "3-4 тижні",

        proof_projects: "Проектів завершено",
        proof_response: "Годин — середня відповідь",
        proof_spend: "Проаналізований ad spend",
        proof_delivery: "Днів до результату",

        services_tag: "Послуги",
        services_title: "Все, що потрібно для зростання бізнесу",
        services_desc: "Кожна послуга — конкретний deliverable. Ви знаєте, що отримаєте.",

        service_deliverable: "Ви отримаєте:",
        service_1_title: "Deep Research",
        service_1_desc: "Глибокий аналіз ринку, конкурентів та аудиторії з реальними цифрами.",
        service_1_deliverable: "PDF-звіт 20-35 стор. з цифрами, джерелами і SWOT",
        service_1_time: "5-7 днів",

        service_2_title: "Marketing Strategy",
        service_2_desc: "Медіа-план, воронка, unit economics і 30-денний план дій.",
        service_2_deliverable: "Стратегічний документ 40-50 стор. + медіа-план + чеклісти",
        service_2_time: "10-14 днів",

        service_3_title: "GTM Launch",
        service_3_desc: "Повний пакет для виходу на ринок: від дослідження до перших продажів.",
        service_3_deliverable: "Launch Kit: стратегія + креативи + кампанії + 30 днів підтримки",
        service_3_time: "3-4 тижні",

        service_4_title: "Creative Pack",
        service_4_desc: "Hooks, скрипти, ad copy та візуальний напрямок для продакшену.",
        service_4_deliverable: "10 hooks + 5 скриптів + 20 ad copies + Visual Direction",
        service_4_time: "3-5 днів",

        service_5_title: "Optimization",
        service_5_desc: "Аудит поточної реклами, виявлення money leaks і план масштабування.",
        service_5_deliverable: "Звіт з 10-15 рекомендаціями + scaling план",
        service_5_time: "Щомісячно",

        service_6_title: "ICP Deep Profile",
        service_6_desc: "Глибоке дослідження ідеального клієнта: 3-5 детальних Persona карт.",
        service_6_deliverable: "3-5 Persona карт + Messaging Matrix + Customer Journey",
        service_6_time: "7-10 днів",

        service_7_title: "Competitor Watch",
        service_7_desc: "Щомісячний трекінг реклами і стратегій конкурентів у вашій ніші.",
        service_7_deliverable: "Місячний дайджест 10-15 стор. + рекомендації",
        service_7_time: "Щомісяця",

        service_8_title: "Funnel Audit",
        service_8_desc: "Знаходимо де воронка втрачає гроші. 15+ конкретних рекомендацій.",
        service_8_deliverable: "Звіт з friction points + 15 рекомендацій з пріоритетами",
        service_8_time: "5-7 днів",

        pricing_tag: "Пакети",
        pricing_title: "Оберіть свій пакет",
        pricing_desc: "Все чітко. Всі ціни фіксовані. Ніяких сюрпризів.",

        package_1_name: "RESEARCH",
        package_duration_1: "5-7 днів доставки",
        package_1_f1: "Аналіз ринку",
        package_1_f2: "Аналіз конкурентів",
        package_1_f3: "Аналіз аудиторії",
        package_1_f4: "Канали + CPM",
        package_1_f5: "SWOT аналіз",

        package_2_name: "STRATEGY",
        package_duration_2: "10-14 днів доставки",
        package_2_f1: "Все з Research",
        package_2_f2: "Маркетингова стратегія",
        package_2_f3: "Медіа-план",
        package_2_f4: "Unit Economics",
        package_2_f5: "30-денний план дій",

        package_3_name: "LAUNCH",
        package_duration_3: "3-4 тижні доставки",
        package_3_f1: "Все зі Strategy",
        package_3_f2: "Креативний пакет",
        package_3_f3: "Структура кампаній",
        package_3_f4: "Трекінг чекліст",
        package_3_f5: "30 днів підтримки",

        badge_popular: "ПОПУЛЯРНИЙ",
        badge_best: "НАЙКРАЩИЙ",

        btn_contact: "Замовити",

        process_tag: "Процес",
        process_title: "Як ми працюємо",
        process_desc: "Від брифу до готового deliverable — всього 4 кроки",

        process_1_title: "Бриф",
        process_1_desc: "30-хвилинний дзвінок або листування. Розуміємо ваш бізнес і цілі.",
        process_1_duration: "Безкоштовно",

        process_2_title: "Дослідження",
        process_2_desc: "Наша AI-система аналізує 50+ джерел даних по вашій ніші.",
        process_2_duration: "3-7 днів",

        process_3_title: "Deliverable",
        process_3_desc: "Отримуєте готовий документ: стратегія, медіа-план, креативи.",
        process_3_duration: "PDF + Таблиці",

        process_4_title: "Підтримка",
        process_4_desc: "Допомагаємо впровадити, відповідаємо на питання.",
        process_4_duration: "Опційно",

        ecosystem_tag: "Екосистема",
        ecosystem_title: "Частина екосистеми MA3",
        ecosystem_desc: "Ми — одна з трьох агенцій. Обирайте ту, що підходить вашому бізнесу.",

        agency_main_desc: "Головна сторінка всіх трьох агенцій",
        agency_digital_title: "Digital & Startups Agency",
        agency_digital_desc: "Технології, інновації, масштабування",
        agency_ethic_title: "Ethic & Conscious Agency",
        agency_ethic_desc: "Ідейність, етика, гармонія",
        agency_soon: "Скоро",

        form_title: "Безкоштовний Міні-Аудит",
        form_subtitle: "За 48 годин ми зробимо експрес-аналіз вашого проєкту і покажемо 3 головних точки росту.",
        trust_1: "Без зобов'язань",
        trust_2: "Відповідь за 48 год",
        trust_3: "Реальні дані",

        form_website_label: "Ваш сайт або продукт",
        form_niche_label: "Ваша ніша",
        form_niche_select: "Оберіть нішу",
        form_email_label: "Email для результатів",
        form_telegram_label: "Telegram (опційно)",
        btn_audit_submit: "Отримати безкоштовний аудит",
        form_note: "Без зобов'язань. Відповідаємо за 48 годин.",
        form_success: "Дякуємо! Відповімо за 48 годин.",

        faq_tag: "FAQ",
        faq_title: "Часті запитання",

        faq_q1: "Скільки часу займає дослідження?",
        faq_a1: "Research Pack — 5-7 робочих днів. Strategy Pack — 10-14 днів. Launch Pack — 3-4 тижні. Ми завжди озвучуємо точні дедлайни перед початком.",

        faq_q2: "Що я отримаю в результаті?",
        faq_a2: "Конкретний документ (PDF + таблиці) з реальними даними, цифрами і рекомендаціями. Не абстрактні поради, а чіткий план дій.",

        faq_q3: "Як ви можете робити це так швидко?",
        faq_a3: "Ми використовуємо AI-технології нового покоління, що дозволяють за 5-7 днів зробити роботу, на яку агенція витрачає 4-6 тижнів.",

        faq_q4: "А що якщо мені не сподобається результат?",
        faq_a4: "Ми показуємо проміжні результати на кожному етапі. Фінальний документ включає 1 раунд правок для повного задоволення.",

        faq_q5: "Чи працюєте ви з маленькими бюджетами?",
        faq_a5: "Так. Ми створили пакети від $500, доступні для стартапів. Великий бюджет не потрібен — потрібна правильна стратегія.",

        faq_q6: "В яких нішах ви маєте досвід?",
        faq_a6: "E-commerce, SaaS, мобільні додатки, сервісні бізнеси. Географія: Україна, Польща, Чехія. Наша методологія працює для будь-якої ніші.",

        faq_q7: "Чи можна замовити тільки одну послугу?",
        faq_a7: "Абсолютно. Кожна послуга працює самостійно. Рекомендуємо починати з Research — це фундамент для всього іншого.",

        faq_q8: "Як почати співпрацю?",
        faq_a8: "Залиште заявку на безкоштовний міні-аудит. Ми проведемо 30-хвилинний бриф і запропонуємо оптимальний план.",

        footer_nav: "Навігація",
        footer_services: "Послуги",
        footer_contact: "Контакти",
        footer_desc: "Перетворюємо бізнес-задачі на чіткі рішення без зайвих слів."
    },

    ru: {
        nav_services: "Услуги",
        nav_packages: "Пакеты",
        nav_process: "Процесс",
        nav_ecosystem: "Экосистема агентств",
        nav_faq: "FAQ",
        nav_cta: "Бесплатный аудит",

        hero_badge: "Превращаем бизнес-задачи в чёткие решения",
        hero_title_1: "Глубокий анализ рынка",
        hero_title_2: "с конкретными цифрами",
        hero_title_3: "и планом действий",
        hero_subtitle: "За 5-7 дней мы предоставляем вам исследование, стратегию и план действий. То, на что классическое агентство тратит месяц. Без лишних слов.",
        hero_cta_main: "Бесплатный мини-аудит",
        hero_cta_side: "Посмотреть услуги",
        hero_micro: "Работаем с бизнесами в UA, PL, CZ",
        hero_micro_price: "От $500",
        hero_micro_response: "Ответ за 48 ч",

        card_research: "Research",
        card_meta_1: "5-7 дней",
        card_strategy: "Strategy",
        card_meta_2: "10-14 дней",
        card_launch: "Launch",
        card_meta_3: "3-4 недели",

        proof_projects: "Проектов завершено",
        proof_response: "Часов — средний ответ",
        proof_spend: "Проанализированный ad spend",
        proof_delivery: "Дней до результата",

        services_tag: "Услуги",
        services_title: "Всё, что нужно для роста бизнеса",
        services_desc: "Каждая услуга — конкретный deliverable. Вы знаете, что получите.",

        service_deliverable: "Вы получите:",
        service_1_title: "Deep Research",
        service_1_desc: "Глубокий анализ рынка, конкурентов и аудитории с реальными цифрами.",
        service_1_deliverable: "PDF-отчёт 20-35 стр. с цифрами, источниками и SWOT",
        service_1_time: "5-7 дней",

        service_2_title: "Marketing Strategy",
        service_2_desc: "Медиа-план, воронка, unit economics и 30-дневный план действий.",
        service_2_deliverable: "Стратегический документ 40-50 стр. + медиа-план + чек-листы",
        service_2_time: "10-14 дней",

        service_3_title: "GTM Launch",
        service_3_desc: "Полный пакет для выхода на рынок: от исследования до первых продаж.",
        service_3_deliverable: "Launch Kit: стратегия + креативы + кампании + 30 дней поддержки",
        service_3_time: "3-4 недели",

        service_4_title: "Creative Pack",
        service_4_desc: "Хуки, скрипты, ad copy и визуальное направление для продакшена.",
        service_4_deliverable: "10 хуков + 5 скриптов + 20 ad copies + Visual Direction",
        service_4_time: "3-5 дней",

        service_5_title: "Optimization",
        service_5_desc: "Аудит текущей рекламы, выявление money leaks и план масштабирования.",
        service_5_deliverable: "Отчёт с 10-15 рекомендациями + план масштабирования",
        service_5_time: "Ежемесячно",

        service_6_title: "ICP Deep Profile",
        service_6_desc: "Глубокое исследование идеального клиента: 3-5 детальных Persona карт.",
        service_6_deliverable: "3-5 Persona карт + Messaging Matrix + Customer Journey",
        service_6_time: "7-10 дней",

        service_7_title: "Competitor Watch",
        service_7_desc: "Ежемесячное отслеживание рекламы и стратегий конкурентов в вашей нише.",
        service_7_deliverable: "Месячный дайджест 10-15 стр. + рекомендации",
        service_7_time: "Ежемесячно",

        service_8_title: "Funnel Audit",
        service_8_desc: "Находим, где воронка теряет деньги. 15+ конкретных рекомендаций.",
        service_8_deliverable: "Отчёт с friction points + 15 рекомендаций с приоритетами",
        service_8_time: "5-7 дней",

        pricing_tag: "Пакеты",
        pricing_title: "Выберите свой пакет",
        pricing_desc: "Всё чётко. Все цены фиксированы. Никаких сюрпризов.",

        package_1_name: "RESEARCH",
        package_duration_1: "5-7 дней доставки",
        package_1_f1: "Анализ рынка",
        package_1_f2: "Анализ конкурентов",
        package_1_f3: "Анализ аудитории",
        package_1_f4: "Каналы + CPM",
        package_1_f5: "SWOT анализ",

        package_2_name: "STRATEGY",
        package_duration_2: "10-14 дней доставки",
        package_2_f1: "Всё из Research",
        package_2_f2: "Маркетинговая стратегия",
        package_2_f3: "Медиа-план",
        package_2_f4: "Unit Economics",
        package_2_f5: "30-дневный план действий",

        package_3_name: "LAUNCH",
        package_duration_3: "3-4 недели доставки",
        package_3_f1: "Всё из Strategy",
        package_3_f2: "Креативный пакет",
        package_3_f3: "Структура кампаний",
        package_3_f4: "Чек-лист трекинга",
        package_3_f5: "30 дней поддержки",

        badge_popular: "ПОПУЛЯРНЫЙ",
        badge_best: "ЛУЧШИЙ",

        btn_contact: "Заказать",

        process_tag: "Процесс",
        process_title: "Как мы работаем",
        process_desc: "От брифа до готового deliverable — всего 4 шага",

        process_1_title: "Бриф",
        process_1_desc: "30-минутный звонок или переписка. Понимаем ваш бизнес и цели.",
        process_1_duration: "Бесплатно",

        process_2_title: "Исследование",
        process_2_desc: "Наша AI-система анализирует 50+ источников данных по вашей нише.",
        process_2_duration: "3-7 дней",

        process_3_title: "Deliverable",
        process_3_desc: "Вы получаете готовый документ: стратегия, медиа-план, креативы.",
        process_3_duration: "PDF + Таблицы",

        process_4_title: "Поддержка",
        process_4_desc: "Помогаем внедрить, отвечаем на вопросы.",
        process_4_duration: "Опционально",

        ecosystem_tag: "Экосистема",
        ecosystem_title: "Часть экосистемы MA3",
        ecosystem_desc: "Мы — одно из трёх агентств. Выбирайте то, что подходит вашему бизнесу.",

        agency_main_desc: "Главная страница всех трёх агентств",
        agency_digital_title: "Digital & Startups Agency",
        agency_digital_desc: "Технологии, инновации, масштабирование",
        agency_ethic_title: "Ethic & Conscious Agency",
        agency_ethic_desc: "Идейность, этика, гармония",
        agency_soon: "Скоро",

        form_title: "Бесплатный мини-аудит",
        form_subtitle: "За 48 часов мы сделаем экспресс-анализ вашего проекта и покажем 3 главные точки роста.",
        trust_1: "Без обязательств",
        trust_2: "Ответ за 48 ч",
        trust_3: "Реальные данные",

        form_website_label: "Ваш сайт или продукт",
        form_niche_label: "Ваша ниша",
        form_niche_select: "Выберите нишу",
        form_email_label: "Email для результатов",
        form_telegram_label: "Telegram (опционально)",
        btn_audit_submit: "Получить бесплатный аудит",
        form_note: "Без обязательств. Отвечаем за 48 часов.",
        form_success: "Спасибо! Ответим за 48 часов.",

        faq_tag: "FAQ",
        faq_title: "Часто задаваемые вопросы",

        faq_q1: "Сколько времени занимает исследование?",
        faq_a1: "Research Pack — 5-7 рабочих дней. Strategy Pack — 10-14 дней. Launch Pack — 3-4 недели. Мы всегда озвучиваем точные дедлайны перед началом.",

        faq_q2: "Что я получу в результате?",
        faq_a2: "Конкретный документ (PDF + таблицы) с реальными данными, цифрами и рекомендациями. Не абстрактные советы, а чёткий план действий.",

        faq_q3: "Как вы можете делать это так быстро?",
        faq_a3: "Мы используем AI-технологии нового поколения, которые позволяют за 5-7 дней сделать работу, на которую агентство тратит 4-6 недель.",

        faq_q4: "А что если мне не понравится результат?",
        faq_a4: "Мы показываем промежуточные результаты на каждом этапе. Финальный документ включает 1 раунд правок для полного удовлетворения.",

        faq_q5: "Работаете ли вы с маленькими бюджетами?",
        faq_a5: "Да. Мы создали пакеты от $500, доступные для стартапов. Большой бюджет не нужен — нужна правильная стратегия.",

        faq_q6: "В каких нишах у вас есть опыт?",
        faq_a6: "E-commerce, SaaS, мобильные приложения, сервисные бизнесы. География: Украина, Польша, Чехия. Наша методология работает для любой ниши.",

        faq_q7: "Можно ли заказать только одну услугу?",
        faq_a7: "Абсолютно. Каждая услуга работает самостоятельно. Рекомендуем начинать с Research — это фундамент для всего остального.",

        faq_q8: "Как начать сотрудничество?",
        faq_a8: "Оставьте заявку на бесплатный мини-аудит. Мы проведём 30-минутный бриф и предложим оптимальный план.",

        footer_nav: "Навигация",
        footer_services: "Услуги",
        footer_contact: "Контакты",
        footer_desc: "Превращаем бизнес-задачи в чёткие решения без лишних слов."
    },

    en: {
        nav_services: "Services",
        nav_packages: "Packages",
        nav_process: "Process",
        nav_ecosystem: "Agency Ecosystem",
        nav_faq: "FAQ",
        nav_cta: "Free Audit",

        hero_badge: "Transforming business tasks into clear solutions",
        hero_title_1: "Deep market analysis",
        hero_title_2: "with concrete numbers",
        hero_title_3: "and an action plan",
        hero_subtitle: "We deliver research, strategy, and action plan in 5-7 days. What a classic agency spends a month on. No fluff.",
        hero_cta_main: "Free Mini-Audit",
        hero_cta_side: "View Services",
        hero_micro: "Working with businesses in UA, PL, CZ",
        hero_micro_price: "From $500",
        hero_micro_response: "48hr response",

        card_research: "Research",
        card_meta_1: "5-7 days",
        card_strategy: "Strategy",
        card_meta_2: "10-14 days",
        card_launch: "Launch",
        card_meta_3: "3-4 weeks",

        proof_projects: "Projects completed",
        proof_response: "Hours avg. response",
        proof_spend: "Ad spend analyzed",
        proof_delivery: "Days to result",

        services_tag: "Services",
        services_title: "Everything you need to grow your business",
        services_desc: "Each service is a concrete deliverable. You know what you'll get.",

        service_deliverable: "You'll get:",
        service_1_title: "Deep Research",
        service_1_desc: "In-depth analysis of market, competitors, and audience with real numbers.",
        service_1_deliverable: "PDF report 20-35 pages with numbers, sources, and SWOT",
        service_1_time: "5-7 days",

        service_2_title: "Marketing Strategy",
        service_2_desc: "Media plan, funnel, unit economics, and 30-day action plan.",
        service_2_deliverable: "Strategy document 40-50 pages + media plan + checklists",
        service_2_time: "10-14 days",

        service_3_title: "GTM Launch",
        service_3_desc: "Full package for market entry: from research to first sales.",
        service_3_deliverable: "Launch Kit: strategy + creatives + campaigns + 30 days support",
        service_3_time: "3-4 weeks",

        service_4_title: "Creative Pack",
        service_4_desc: "Hooks, scripts, ad copy, and visual direction for production.",
        service_4_deliverable: "10 hooks + 5 scripts + 20 ad copies + Visual Direction",
        service_4_time: "3-5 days",

        service_5_title: "Optimization",
        service_5_desc: "Audit of current ads, money leak detection, and scaling plan.",
        service_5_deliverable: "Report with 10-15 recommendations + scaling plan",
        service_5_time: "Monthly",

        service_6_title: "ICP Deep Profile",
        service_6_desc: "In-depth research of your ideal client: 3-5 detailed Persona cards.",
        service_6_deliverable: "3-5 Persona cards + Messaging Matrix + Customer Journey",
        service_6_time: "7-10 days",

        service_7_title: "Competitor Watch",
        service_7_desc: "Monthly tracking of competitor ads and strategies in your niche.",
        service_7_deliverable: "Monthly digest 10-15 pages + recommendations",
        service_7_time: "Monthly",

        service_8_title: "Funnel Audit",
        service_8_desc: "Finding where your funnel loses money. 15+ specific recommendations.",
        service_8_deliverable: "Report with friction points + 15 prioritized recommendations",
        service_8_time: "5-7 days",

        pricing_tag: "Packages",
        pricing_title: "Choose your package",
        pricing_desc: "Everything is clear. All prices are fixed. No surprises.",

        package_1_name: "RESEARCH",
        package_duration_1: "5-7 days delivery",
        package_1_f1: "Market analysis",
        package_1_f2: "Competitor analysis",
        package_1_f3: "Audience analysis",
        package_1_f4: "Channels + CPM",
        package_1_f5: "SWOT analysis",

        package_2_name: "STRATEGY",
        package_duration_2: "10-14 days delivery",
        package_2_f1: "Everything from Research",
        package_2_f2: "Marketing strategy",
        package_2_f3: "Media plan",
        package_2_f4: "Unit Economics",
        package_2_f5: "30-day action plan",

        package_3_name: "LAUNCH",
        package_duration_3: "3-4 weeks delivery",
        package_3_f1: "Everything from Strategy",
        package_3_f2: "Creative pack",
        package_3_f3: "Campaign structure",
        package_3_f4: "Tracking checklist",
        package_3_f5: "30 days support",

        badge_popular: "POPULAR",
        badge_best: "BEST VALUE",

        btn_contact: "Order",

        process_tag: "Process",
        process_title: "How we work",
        process_desc: "From brief to ready deliverable — just 4 steps",

        process_1_title: "Brief",
        process_1_desc: "30-minute call or correspondence. Understanding your business and goals.",
        process_1_duration: "Free",

        process_2_title: "Research",
        process_2_desc: "Our AI system analyzes 50+ data sources in your niche.",
        process_2_duration: "3-7 days",

        process_3_title: "Deliverable",
        process_3_desc: "You receive a ready document: strategy, media plan, creatives.",
        process_3_duration: "PDF + Tables",

        process_4_title: "Support",
        process_4_desc: "We help implement, answer questions.",
        process_4_duration: "Optional",

        ecosystem_tag: "Ecosystem",
        ecosystem_title: "Part of MA3 ecosystem",
        ecosystem_desc: "We are one of three agencies. Choose the one that fits your business.",

        agency_main_desc: "Main page of all three agencies",
        agency_digital_title: "Digital & Startups Agency",
        agency_digital_desc: "Technologies, innovation, scaling",
        agency_ethic_title: "Ethic & Conscious Agency",
        agency_ethic_desc: "Ideology, ethics, harmony",
        agency_soon: "Coming soon",

        form_title: "Free Mini-Audit",
        form_subtitle: "In 48 hours we'll do an express analysis of your project and show 3 main growth points.",
        trust_1: "No obligations",
        trust_2: "Response in 48hr",
        trust_3: "Real data",

        form_website_label: "Your site or product",
        form_niche_label: "Your niche",
        form_niche_select: "Select niche",
        form_email_label: "Email for results",
        form_telegram_label: "Telegram (optional)",
        btn_audit_submit: "Get Free Audit",
        form_note: "No obligations. Response in 48 hours.",
        form_success: "Thank you! We'll respond within 48 hours.",

        faq_tag: "FAQ",
        faq_title: "Frequently asked questions",

        faq_q1: "How long does research take?",
        faq_a1: "Research Pack — 5-7 business days. Strategy Pack — 10-14 days. Launch Pack — 3-4 weeks. We always state exact deadlines before starting.",

        faq_q2: "What will I get as a result?",
        faq_a2: "A concrete document (PDF + tables) with real data, numbers, and recommendations. Not abstract advice, but a clear action plan.",

        faq_q3: "How can you do it so fast?",
        faq_a3: "We use next-generation AI technologies that allow us to do in 5-7 days what an agency spends 4-6 weeks on.",

        faq_q4: "What if I don't like the result?",
        faq_a4: "We show interim results at each stage. The final document includes 1 round of revisions for complete satisfaction.",

        faq_q5: "Do you work with small budgets?",
        faq_a5: "Yes. We've created packages from $500, accessible for startups. You don't need a big budget — you need the right strategy.",

        faq_q6: "What niches do you have experience in?",
        faq_a6: "E-commerce, SaaS, mobile apps, service businesses. Geography: Ukraine, Poland, Czech Republic. Our methodology works for any niche.",

        faq_q7: "Can I order just one service?",
        faq_a7: "Absolutely. Each service works independently. We recommend starting with Research — it's the foundation for everything else.",

        faq_q8: "How to start cooperation?",
        faq_a8: "Leave a request for a free mini-audit. We'll conduct a 30-minute brief and propose an optimal plan.",

        footer_nav: "Navigation",
        footer_services: "Services",
        footer_contact: "Contacts",
        footer_desc: "Transforming business tasks into clear solutions without fluff."
    },

    cs: {
        nav_services: "Služby",
        nav_packages: "Balíčky",
        nav_process: "Proces",
        nav_ecosystem: "Ekosystém agentur",
        nav_faq: "FAQ",
        nav_cta: "Bezplatný audit",

        hero_badge: "Přeměňujeme podnikatelské úkoly na jasná řešení",
        hero_title_1: "Hluboká analýza trhu",
        hero_title_2: "s konkrétními čísly",
        hero_title_3: "a akčním plánem",
        hero_subtitle: "Za 5-7 dní vám dodáme výzkum, strategii a akční plán. To, na co klasická agentura spotřebuje měsíc. Bez zbytečných řečí.",
        hero_cta_main: "Bezplatný mini-audit",
        hero_cta_side: "Zobrazit služby",
        hero_micro: "Práce s podniky v UA, PL, CZ",
        hero_micro_price: "Od $500",
        hero_micro_response: "Odpověď do 48 hod",

        card_research: "Research",
        card_meta_1: "5-7 dní",
        card_strategy: "Strategy",
        card_meta_2: "10-14 dní",
        card_launch: "Launch",
        card_meta_3: "3-4 týdny",

        proof_projects: "Dokončených projektů",
        proof_response: "Hodin průměrná odpověď",
        proof_spend: "Analýza reklamního rozpočtu",
        proof_delivery: "Dní do výsledku",

        services_tag: "Služby",
        services_title: "Vše, co potřebujete k růstu podnikání",
        services_desc: "Každá služba je konkrétní deliverable. Víte, co dostanete.",

        service_deliverable: "Získáte:",
        service_1_title: "Deep Research",
        service_1_desc: "Hluboká analýza trhu, konkurence a publika s reálnými čísly.",
        service_1_deliverable: "PDF zpráva 20-35 stran s čísly, zdroji a SWOT",
        service_1_time: "5-7 dní",

        service_2_title: "Marketing Strategy",
        service_2_desc: "Media plán, trychtýř, unit economics a 30denní akční plán.",
        service_2_deliverable: "Strategický dokument 40-50 stran + media plán + kontrolní seznamy",
        service_2_time: "10-14 dní",

        service_3_title: "GTM Launch",
        service_3_desc: "Kompletní balíček pro vstup na trh: od výzkumu po první prodeje.",
        service_3_deliverable: "Launch Kit: strategie + kreativy + kampaně + 30 dní podpory",
        service_3_time: "3-4 týdny",

        service_4_title: "Creative Pack",
        service_4_desc: "Hooks, skripty, ad copy a vizuální směr pro produkci.",
        service_4_deliverable: "10 hooks + 5 skriptů + 20 ad copies + Visual Direction",
        service_4_time: "3-5 dní",

        service_5_title: "Optimalizace",
        service_5_desc: "Audit současné reklamy, detekce úniků peněz a plán škálování.",
        service_5_deliverable: "Zpráva s 10-15 doporučeními + plán škálování",
        service_5_time: "Měsíčně",

        service_6_title: "ICP Deep Profile",
        service_6_desc: "Hluboký výzkum vašeho ideálního klienta: 3-5 detailních Persona karet.",
        service_6_deliverable: "3-5 Persona karet + Messaging Matrix + Customer Journey",
        service_6_time: "7-10 dní",

        service_7_title: "Sledování konkurence",
        service_7_desc: "Měsíční sledování reklamy a strategií konkurence ve vašem oboru.",
        service_7_deliverable: "Měsíční digest 10-15 stran + doporučení",
        service_7_time: "Měsíčně",

        service_8_title: "Audit trychtýře",
        service_8_desc: "Najdeme, kde váš trychtýř ztrácí peníze. 15+ konkrétních doporučení.",
        service_8_deliverable: "Zpráva s friction points + 15 prioritizovaných doporučení",
        service_8_time: "5-7 dní",

        pricing_tag: "Balíčky",
        pricing_title: "Vyberte si svůj balíček",
        pricing_desc: "Vše je jasné. Všechny ceny jsou fixní. Žádná překvapení.",

        package_1_name: "RESEARCH",
        package_duration_1: "Doručení 5-7 dní",
        package_1_f1: "Analýza trhu",
        package_1_f2: "Analýza konkurence",
        package_1_f3: "Analýza publika",
        package_1_f4: "Kanály + CPM",
        package_1_f5: "SWOT analýza",

        package_2_name: "STRATEGY",
        package_duration_2: "Doručení 10-14 dní",
        package_2_f1: "Vše z Research",
        package_2_f2: "Marketingová strategie",
        package_2_f3: "Media plán",
        package_2_f4: "Unit Economics",
        package_2_f5: "30denní akční plán",

        package_3_name: "LAUNCH",
        package_duration_3: "Doručení 3-4 týdny",
        package_3_f1: "Vše ze Strategy",
        package_3_f2: "Kreativní balíček",
        package_3_f3: "Struktura kampaní",
        package_3_f4: "Kontrolní seznam sledování",
        package_3_f5: "30 dní podpory",

        badge_popular: "POPULÁRNÍ",
        badge_best: "NEJLEPŠÍ HODNOTA",

        btn_contact: "Objednat",

        process_tag: "Proces",
        process_title: "Jak pracujeme",
        process_desc: "Od briefu k hotovému deliverable — pouze 4 kroky",

        process_1_title: "Brief",
        process_1_desc: "30minutový hovor nebo korespondence. Pochopení vašeho podnikání a cílů.",
        process_1_duration: "Zdarma",

        process_2_title: "Výzkum",
        process_2_desc: "Náš AI systém analyzuje 50+ zdrojů dat ve vašem oboru.",
        process_2_duration: "3-7 dní",

        process_3_title: "Deliverable",
        process_3_desc: "Získáte hotový dokument: strategie, media plán, kreativy.",
        process_3_duration: "PDF + Tabulky",

        process_4_title: "Podpora",
        process_4_desc: "Pomáháme s implementací, odpovídáme na otázky.",
        process_4_duration: "Volitelně",

        ecosystem_tag: "Ekosystém",
        ecosystem_title: "Součást MA3 ekosystému",
        ecosystem_desc: "Jsme jednou ze tří agentur. Vyberte si tu, která vyhovuje vašemu podnikání.",

        agency_main_desc: "Hlavní stránka všech tří agentur",
        agency_digital_title: "Digital & Startups Agency",
        agency_digital_desc: "Technologie, inovace, škálování",
        agency_ethic_title: "Ethic & Conscious Agency",
        agency_ethic_desc: "Ideologie, etika, harmonie",
        agency_soon: "Již brzy",

        form_title: "Bezplatný Mini-Audit",
        form_subtitle: "Za 48 hodin uděláme expresní analýzu vašeho projektu a ukážeme 3 hlavní růstové body.",
        trust_1: "Bez závazků",
        trust_2: "Odpověď do 48 hod",
        trust_3: "Reálná data",

        form_website_label: "Vaše stránky nebo produkt",
        form_niche_label: "Váš obor",
        form_niche_select: "Vyberte obor",
        form_email_label: "Email pro výsledky",
        form_telegram_label: "Telegram (volitelně)",
        btn_audit_submit: "Získat bezplatný audit",
        form_note: "Bez závazků. Odpovíme do 48 hodin.",
        form_success: "Děkujeme! Odpovíme do 48 hodin.",

        faq_tag: "FAQ",
        faq_title: "Často kladené otázky",

        faq_q1: "Jak dlouho trvá výzkum?",
        faq_a1: "Research Pack — 5-7 pracovních dní. Strategy Pack — 10-14 dní. Launch Pack — 3-4 týdny. Vždy předem sdělíme přesné termíny.",

        faq_q2: "Co získám jako výsledek?",
        faq_a2: "Konkrétní dokument (PDF + tabulky) s reálnými daty, čísly a doporučeními. Ne abstraktní rady, ale jasný akční plán.",

        faq_q3: "Jak můžete být tak rychlí?",
        faq_a3: "Používáme AI technologie nové generace, které nám umožňují za 5-7 dní udělat práci, na kterou agentura spotřebuje 4-6 týdnů.",

        faq_q4: "Co když se mi výsledek nebude líbit?",
        faq_a4: "Na každé etapě ukazujeme průběžné výsledky. Závěrečný dokument obsahuje 1 kolo revizí pro úplnou spokojenost.",

        faq_q5: "Pracujete s malými rozpočty?",
        faq_a5: "Ano. Vytvořili jsme balíčky od $500, dostupné pro startupy. Velký rozpočet není potřeba — je potřeba správná strategie.",

        faq_q6: "V jakých oborech máte zkušenosti?",
        faq_a6: "E-commerce, SaaS, mobilní aplikace, servisní podniky. Geografie: Ukrajina, Polsko, Česko. Naše metodologie funguje pro jakýkoli obor.",

        faq_q7: "Mohu objednat pouze jednu službu?",
        faq_a7: "Rozhodně. Každá služba funguje samostatně. Doporučujeme začít s Research — to je základ pro vše ostatní.",

        faq_q8: "Jak začít spolupráci?",
        faq_a8: "Zanechte žádost o bezplatný mini-audit. Provedeme 30minutový brief a navrhneme optimální plán.",

        footer_nav: "Navigace",
        footer_services: "Služby",
        footer_contact: "Kontakty",
        footer_desc: "Přeměňujeme podnikatelské úkoly na jasná řešení bez zbytečných řečí."
    }
};

// Current language
let currentLang = localStorage.getItem('lang') || 'uk';

// Set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});

// Mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.remove('active');
    document.body.style.overflow = '';
}

// Header scroll behavior
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll to form
function scrollToForm() {
    document.getElementById('audit').scrollIntoView({ behavior: 'smooth' });
}

// FAQ accordion
function toggleFaq(element) {
    const item = element.closest('.faq-item');
    const isActive = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
    });

    // Open clicked if it wasn't active
    if (!isActive) {
        item.classList.add('active');
    }
}

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Count-up animation for proof numbers
const countElements = document.querySelectorAll('[data-target]');

const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target'));
            const duration = 1500;
            const start = 0;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(start + (target - start) * easeOut);

                el.textContent = current;

                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            }

            requestAnimationFrame(update);
            countObserver.unobserve(el);
        }
    });
}, {
    threshold: 0.5
});

countElements.forEach(el => {
    countObserver.observe(el);
});

// Sticky mobile CTA
const stickyCta = document.getElementById('stickyCta');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 800) {
        stickyCta.classList.add('visible');
    } else {
        stickyCta.classList.remove('visible');
    }
});

// Note: handleFormSubmit is defined in telegram-bot.js
// which handles Telegram integration properly