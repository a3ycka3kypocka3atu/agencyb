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
        theme_dark: "Темна",
        theme_light: "Світла",
        theme_toggle_aria: "Перемкнути світлу або темну тему",

        hero_badge: "Перетворюємо бізнес-задачі на чіткі рішення",
        hero_title_1: "Глибокий аналіз ринку",
        hero_title_2: "з конкретними цифрами",
        hero_title_3: "та планом дій",
        hero_subtitle: "Ми — команда спеціалістів, яка будує сильний новий agency brand через практичні рішення, чесну комунікацію і довгострокові партнерства.",
        hero_cta_main: "Безкоштовний міні-аудит",
        hero_cta_side: "Переглянути послуги",
        hero_micro: "Працюємо з бізнесами в UA, PL, CZ",
        hero_micro_price: "Early pricing від 150€",
        hero_micro_response: "Відповідаємо за 48 год",

        card_research: "Research",
        card_meta_1: "5-7 днів",
        card_strategy: "Strategy",
        card_meta_2: "10-14 днів",
        card_launch: "Launch",
        card_meta_3: "3-4 тижні",

        proof_projects: "Практичний підхід",
        proof_response: "Швидка комунікація",
        proof_spend: "Гнучкі рішення",
        proof_delivery: "Зростаюча екосистема",

        positioning_title: "Практичні системи для бізнесів, яким потрібен результат",
        positioning_desc: "Ми будуємо сильний новий agency brand через якісну роботу, чесну комунікацію і довгострокові партнерства.",
        positioning_1_title: "Real Execution",
        positioning_1_desc: "Фокус на практичному впровадженні, а не на презентаційних стратегіях без дії.",
        positioning_2_title: "Long-Term Partnerships",
        positioning_2_desc: "Ми шукаємо клієнтів, з якими можна рости разом і будувати сильні публічні кейси.",
        positioning_3_title: "Modern Technologies",
        positioning_3_desc: "Швидкі modern stacks, automation systems, AI workflows і масштабовані рішення.",
        positioning_4_title: "Flexible Early Pricing",
        positioning_4_desc: "Поточні ціни нижчі за ринок, бо ми формуємо перші сильні кейси і партнерську екосистему.",

        services_tag: "Послуги",
        services_title: "Практичні послуги за early-partner pricing",
        services_desc: "Ми даємо сильну ціну зараз, щоб створити якісні кейси, довгі партнерства і репутацію через результат.",

        service_deliverable: "Ви отримаєте:",
        service_badge: "ЦІНА ДЛЯ ПЕРШИХ КЛІЄНТІВ",
        service_current_label: "Поточна ціна",
        service_market_label: "Ринкова ціна",
        service_1_title: "Deep Research",
        service_1_desc: "Глибокий аналіз ринку, конкурентів та аудиторії з реальними цифрами.",
        service_1_deliverable: "PDF-звіт 20-35 стор. з цифрами, джерелами і SWOT",
        service_1_time: "5-7 днів",
        service_1_care: "+ 10–14 днів супроводу після здачі",

        service_2_title: "Marketing Strategy",
        service_2_desc: "Медіа-план, воронка, unit economics і 30-денний план дій.",
        service_2_deliverable: "Стратегічний документ 40-50 стор. + медіа-план + чеклісти",
        service_2_time: "10-14 днів",
        service_2_care: "+ 21–30 днів супроводу після здачі",

        service_3_title: "GTM Launch",
        service_3_desc: "Повний пакет для виходу на ринок: від дослідження до перших продажів.",
        service_3_deliverable: "Launch Kit: стратегія + креативи + кампанії + 30 днів підтримки",
        service_3_time: "3-4 тижні",
        service_3_care: "+ 45–60 днів супроводу запуску",

        service_4_title: "Creative Pack",
        service_4_desc: "Hooks, скрипти, ad copy та візуальний напрямок для продакшену.",
        service_4_deliverable: "10 hooks + 5 скриптів + 20 ad copies + Visual Direction",
        service_4_time: "3-5 днів",
        service_4_care: "+ 10–14 днів правок і супроводу",

        service_5_title: "Optimization",
        service_5_desc: "Аудит поточної реклами, виявлення money leaks і план масштабування.",
        service_5_deliverable: "Звіт з 10-15 рекомендаціями + scaling план",
        service_5_time: "Щомісячно",
        service_5_care: "Партнерський супровід протягом місяця",

        service_6_title: "ICP Deep Profile",
        service_6_desc: "Глибоке дослідження ідеального клієнта: 3-5 детальних Persona карт.",
        service_6_deliverable: "3-5 Persona карт + Messaging Matrix + Customer Journey",
        service_6_time: "7-10 днів",
        service_6_care: "+ 14–21 день уточнень і супроводу",

        service_7_title: "Competitor Watch",
        service_7_desc: "Щомісячний трекінг реклами і стратегій конкурентів у вашій ніші.",
        service_7_deliverable: "Місячний дайджест 10-15 стор. + рекомендації",
        service_7_time: "Щомісяця",
        service_7_care: "Щомісячний супровід і короткі рекомендації",

        service_8_title: "Funnel Audit",
        service_8_desc: "Знаходимо де воронка втрачає гроші. 15+ конкретних рекомендацій.",
        service_8_deliverable: "Звіт з friction points + 15 рекомендацій з пріоритетами",
        service_8_time: "5-7 днів",
        service_8_care: "+ 14–21 день супроводу впровадження",

        modal_care_label: "Супровід після здачі",
        modal_why_title: "Чому ціна нижча?",
        modal_why_text: "Наші спеціалісти вже працюють у development, automation, marketing і product systems, а зараз ми активно будуємо agency brand, сильні публічні кейси та довгострокову бізнес-екосистему. Тому поточні ціни навмисно нижчі за стандартний agency market pricing: ранні партнери отримують якісне виконання, більше уваги і нижчий entry cost без відчуття cheap labor.",
        modal_cta: "Обговорити послугу",

        pricing_tag: "Пакети",
        pricing_title: "Early Partner Packages",
        pricing_desc: "Прозорі пакети для бізнесів, які хочуть сильний результат зараз і партнерство на довшу дистанцію.",

        package_1_name: "RESEARCH",
        package_duration_1: "5-7 днів + 10-14 днів супроводу",
        package_1_f1: "Аналіз ринку",
        package_1_f2: "Аналіз конкурентів",
        package_1_f3: "Аналіз аудиторії",
        package_1_f4: "Канали + CPM",
        package_1_f5: "SWOT аналіз",

        package_2_name: "STRATEGY",
        package_duration_2: "10-14 днів + 21-30 днів супроводу",
        package_2_f1: "Все з Research",
        package_2_f2: "Маркетингова стратегія",
        package_2_f3: "Медіа-план",
        package_2_f4: "Unit Economics",
        package_2_f5: "30-денний план дій",

        package_3_name: "LAUNCH",
        package_duration_3: "3-4 тижні + 45-60 днів супроводу",
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

        faq_q5: "Чому зараз ціни нижчі за ринок?",
        faq_a5: "Ми будуємо новий agency brand і хочемо створити сильні публічні кейси з хорошими партнерами. Це не про дешеву роботу, а про early-client pricing: клієнт отримує якісне виконання і більше уваги за нижчий entry cost.",

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
        theme_dark: "Тёмная",
        theme_light: "Светлая",
        theme_toggle_aria: "Переключить светлую или тёмную тему",

        hero_badge: "Превращаем бизнес-задачи в чёткие решения",
        hero_title_1: "Глубокий анализ рынка",
        hero_title_2: "с конкретными цифрами",
        hero_title_3: "и планом действий",
        hero_subtitle: "Мы — команда специалистов, которая строит сильный новый agency brand через практичные решения, честную коммуникацию и долгосрочные партнёрства.",
        hero_cta_main: "Бесплатный мини-аудит",
        hero_cta_side: "Посмотреть услуги",
        hero_micro: "Работаем с бизнесами в UA, PL, CZ",
        hero_micro_price: "Early pricing от 150€",
        hero_micro_response: "Ответ за 48 ч",

        card_research: "Research",
        card_meta_1: "5-7 дней",
        card_strategy: "Strategy",
        card_meta_2: "10-14 дней",
        card_launch: "Launch",
        card_meta_3: "3-4 недели",

        proof_projects: "Практичный подход",
        proof_response: "Быстрая коммуникация",
        proof_spend: "Гибкие решения",
        proof_delivery: "Растущая экосистема",

        positioning_title: "Практичные системы для бизнесов, которым нужен результат",
        positioning_desc: "Мы строим сильный новый agency brand через качественную работу, честную коммуникацию и долгосрочные партнёрства.",
        positioning_1_title: "Real Execution",
        positioning_1_desc: "Фокус на практическом внедрении, а не на презентационных стратегиях без действия.",
        positioning_2_title: "Long-Term Partnerships",
        positioning_2_desc: "Мы ищем клиентов, с которыми можно расти вместе и строить сильные публичные кейсы.",
        positioning_3_title: "Modern Technologies",
        positioning_3_desc: "Быстрые modern stacks, automation systems, AI workflows и масштабируемые решения.",
        positioning_4_title: "Flexible Early Pricing",
        positioning_4_desc: "Текущие цены ниже рынка, потому что мы формируем первые сильные кейсы и партнёрскую экосистему.",

        services_tag: "Услуги",
        services_title: "Практичные услуги по early-partner pricing",
        services_desc: "Сейчас мы даём сильную цену, чтобы создавать качественные кейсы, долгие партнёрства и репутацию через результат.",

        service_deliverable: "Вы получите:",
        service_badge: "ЦЕНА ДЛЯ ПЕРВЫХ КЛИЕНТОВ",
        service_current_label: "Текущая цена",
        service_market_label: "Рыночная цена",
        service_1_title: "Deep Research",
        service_1_desc: "Глубокий анализ рынка, конкурентов и аудитории с реальными цифрами.",
        service_1_deliverable: "PDF-отчёт 20-35 стр. с цифрами, источниками и SWOT",
        service_1_time: "5-7 дней",
        service_1_care: "+ 10–14 дней сопровождения после сдачи",

        service_2_title: "Marketing Strategy",
        service_2_desc: "Медиа-план, воронка, unit economics и 30-дневный план действий.",
        service_2_deliverable: "Стратегический документ 40-50 стр. + медиа-план + чек-листы",
        service_2_time: "10-14 дней",
        service_2_care: "+ 21–30 дней сопровождения после сдачи",

        service_3_title: "GTM Launch",
        service_3_desc: "Полный пакет для выхода на рынок: от исследования до первых продаж.",
        service_3_deliverable: "Launch Kit: стратегия + креативы + кампании + 30 дней поддержки",
        service_3_time: "3-4 недели",
        service_3_care: "+ 45–60 дней сопровождения запуска",

        service_4_title: "Creative Pack",
        service_4_desc: "Хуки, скрипты, ad copy и визуальное направление для продакшена.",
        service_4_deliverable: "10 хуков + 5 скриптов + 20 ad copies + Visual Direction",
        service_4_time: "3-5 дней",
        service_4_care: "+ 10–14 дней правок и сопровождения",

        service_5_title: "Optimization",
        service_5_desc: "Аудит текущей рекламы, выявление money leaks и план масштабирования.",
        service_5_deliverable: "Отчёт с 10-15 рекомендациями + план масштабирования",
        service_5_time: "Ежемесячно",
        service_5_care: "Партнёрское сопровождение в течение месяца",

        service_6_title: "ICP Deep Profile",
        service_6_desc: "Глубокое исследование идеального клиента: 3-5 детальных Persona карт.",
        service_6_deliverable: "3-5 Persona карт + Messaging Matrix + Customer Journey",
        service_6_time: "7-10 дней",
        service_6_care: "+ 14–21 день уточнений и сопровождения",

        service_7_title: "Competitor Watch",
        service_7_desc: "Ежемесячное отслеживание рекламы и стратегий конкурентов в вашей нише.",
        service_7_deliverable: "Месячный дайджест 10-15 стр. + рекомендации",
        service_7_time: "Ежемесячно",
        service_7_care: "Ежемесячное сопровождение и короткие рекомендации",

        service_8_title: "Funnel Audit",
        service_8_desc: "Находим, где воронка теряет деньги. 15+ конкретных рекомендаций.",
        service_8_deliverable: "Отчёт с friction points + 15 рекомендаций с приоритетами",
        service_8_time: "5-7 дней",
        service_8_care: "+ 14–21 день сопровождения внедрения",

        modal_care_label: "Сопровождение после сдачи",
        modal_why_title: "Почему цена ниже?",
        modal_why_text: "Наши специалисты уже работают в development, automation, marketing и product systems, а сейчас мы активно строим agency brand, сильные публичные кейсы и долгосрочную бизнес-экосистему. Поэтому текущие цены намеренно ниже стандартного agency market pricing: ранние партнёры получают качественное выполнение, больше внимания и более низкий entry cost без ощущения cheap labor.",
        modal_cta: "Обсудить услугу",

        pricing_tag: "Пакеты",
        pricing_title: "Early Partner Packages",
        pricing_desc: "Прозрачные пакеты для бизнесов, которые хотят сильный результат сейчас и партнёрство на длинной дистанции.",

        package_1_name: "RESEARCH",
        package_duration_1: "5-7 дней + 10-14 дней сопровождения",
        package_1_f1: "Анализ рынка",
        package_1_f2: "Анализ конкурентов",
        package_1_f3: "Анализ аудитории",
        package_1_f4: "Каналы + CPM",
        package_1_f5: "SWOT анализ",

        package_2_name: "STRATEGY",
        package_duration_2: "10-14 дней + 21-30 дней сопровождения",
        package_2_f1: "Всё из Research",
        package_2_f2: "Маркетинговая стратегия",
        package_2_f3: "Медиа-план",
        package_2_f4: "Unit Economics",
        package_2_f5: "30-дневный план действий",

        package_3_name: "LAUNCH",
        package_duration_3: "3-4 недели + 45-60 дней сопровождения",
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

        faq_q5: "Почему сейчас цены ниже рынка?",
        faq_a5: "Мы строим новый agency brand и хотим создать сильные публичные кейсы с хорошими партнёрами. Это не про дешёвую работу, а про early-client pricing: клиент получает качественное выполнение и больше внимания за более низкий entry cost.",

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
        theme_dark: "Dark",
        theme_light: "Light",
        theme_toggle_aria: "Switch light or dark theme",

        hero_badge: "Transforming business tasks into clear solutions",
        hero_title_1: "Deep market analysis",
        hero_title_2: "with concrete numbers",
        hero_title_3: "and an action plan",
        hero_subtitle: "We are experienced specialists building a strong new agency brand through practical systems, honest communication, and long-term partnerships.",
        hero_cta_main: "Free Mini-Audit",
        hero_cta_side: "View Services",
        hero_micro: "Working with businesses in UA, PL, CZ",
        hero_micro_price: "Early pricing from 150€",
        hero_micro_response: "48hr response",

        card_research: "Research",
        card_meta_1: "5-7 days",
        card_strategy: "Strategy",
        card_meta_2: "10-14 days",
        card_launch: "Launch",
        card_meta_3: "3-4 weeks",

        proof_projects: "Practical approach",
        proof_response: "Fast communication",
        proof_spend: "Flexible solutions",
        proof_delivery: "Growing ecosystem",

        positioning_title: "Practical systems for businesses that want results",
        positioning_desc: "We are building a strong new agency brand through quality execution, transparent communication, and long-term client partnerships.",
        positioning_1_title: "Real Execution",
        positioning_1_desc: "We focus on practical implementation, not presentation-only strategies.",
        positioning_2_title: "Long-Term Partnerships",
        positioning_2_desc: "We want clients we can grow with while building strong public case studies together.",
        positioning_3_title: "Modern Technologies",
        positioning_3_desc: "Fast modern stacks, automation systems, AI workflows, and scalable solutions.",
        positioning_4_title: "Flexible Early Pricing",
        positioning_4_desc: "Current pricing is intentionally lower while we build strong case studies and a partner ecosystem.",

        services_tag: "Services",
        services_title: "Practical services with early-partner pricing",
        services_desc: "We offer stronger pricing now to build quality cases, long-term partnerships, and reputation through real results.",

        service_deliverable: "You'll get:",
        service_badge: "EARLY CLIENT PRICING",
        service_current_label: "Current price",
        service_market_label: "Market price",
        service_1_title: "Deep Research",
        service_1_desc: "In-depth analysis of market, competitors, and audience with real numbers.",
        service_1_deliverable: "PDF report 20-35 pages with numbers, sources, and SWOT",
        service_1_time: "5-7 days",
        service_1_care: "+ 10–14 days of follow-up care",

        service_2_title: "Marketing Strategy",
        service_2_desc: "Media plan, funnel, unit economics, and 30-day action plan.",
        service_2_deliverable: "Strategy document 40-50 pages + media plan + checklists",
        service_2_time: "10-14 days",
        service_2_care: "+ 21–30 days of follow-up care",

        service_3_title: "GTM Launch",
        service_3_desc: "Full package for market entry: from research to first sales.",
        service_3_deliverable: "Launch Kit: strategy + creatives + campaigns + 30 days support",
        service_3_time: "3-4 weeks",
        service_3_care: "+ 45–60 days of launch support",

        service_4_title: "Creative Pack",
        service_4_desc: "Hooks, scripts, ad copy, and visual direction for production.",
        service_4_deliverable: "10 hooks + 5 scripts + 20 ad copies + Visual Direction",
        service_4_time: "3-5 days",
        service_4_care: "+ 10–14 days of edits and care",

        service_5_title: "Optimization",
        service_5_desc: "Audit of current ads, money leak detection, and scaling plan.",
        service_5_deliverable: "Report with 10-15 recommendations + scaling plan",
        service_5_time: "Monthly",
        service_5_care: "Partner-level care throughout the month",

        service_6_title: "ICP Deep Profile",
        service_6_desc: "In-depth research of your ideal client: 3-5 detailed Persona cards.",
        service_6_deliverable: "3-5 Persona cards + Messaging Matrix + Customer Journey",
        service_6_time: "7-10 days",
        service_6_care: "+ 14–21 days of refinement and care",

        service_7_title: "Competitor Watch",
        service_7_desc: "Monthly tracking of competitor ads and strategies in your niche.",
        service_7_deliverable: "Monthly digest 10-15 pages + recommendations",
        service_7_time: "Monthly",
        service_7_care: "Monthly care and short recommendations",

        service_8_title: "Funnel Audit",
        service_8_desc: "Finding where your funnel loses money. 15+ specific recommendations.",
        service_8_deliverable: "Report with friction points + 15 prioritized recommendations",
        service_8_time: "5-7 days",
        service_8_care: "+ 14–21 days of implementation support",

        modal_care_label: "Care after delivery",
        modal_why_title: "Why lower pricing?",
        modal_why_text: "Our specialists already work across development, automation, marketing, and product systems, and we are now actively building the agency brand, strong public case studies, and a long-term business ecosystem. Because of this, current pricing is intentionally lower than standard agency market pricing. Early partners get high-quality execution, more attention, and a significantly reduced entry cost without the feel of cheap labor.",
        modal_cta: "Discuss this service",

        pricing_tag: "Packages",
        pricing_title: "Early Partner Packages",
        pricing_desc: "Transparent packages for businesses that want a strong result now and a longer-term partnership.",

        package_1_name: "RESEARCH",
        package_duration_1: "5-7 days + 10-14 days care",
        package_1_f1: "Market analysis",
        package_1_f2: "Competitor analysis",
        package_1_f3: "Audience analysis",
        package_1_f4: "Channels + CPM",
        package_1_f5: "SWOT analysis",

        package_2_name: "STRATEGY",
        package_duration_2: "10-14 days + 21-30 days care",
        package_2_f1: "Everything from Research",
        package_2_f2: "Marketing strategy",
        package_2_f3: "Media plan",
        package_2_f4: "Unit Economics",
        package_2_f5: "30-day action plan",

        package_3_name: "LAUNCH",
        package_duration_3: "3-4 weeks + 45-60 days care",
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

        faq_q5: "Why are prices lower right now?",
        faq_a5: "We are building a new agency brand and want to create strong public cases with good partners. This is not cheap work. It is early-client pricing: clients receive high-quality execution and more attention at a lower entry cost.",

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
        theme_dark: "Tmavá",
        theme_light: "Světlá",
        theme_toggle_aria: "Přepnout světlé nebo tmavé téma",

        hero_badge: "Přeměňujeme podnikatelské úkoly na jasná řešení",
        hero_title_1: "Hluboká analýza trhu",
        hero_title_2: "s konkrétními čísly",
        hero_title_3: "a akčním plánem",
        hero_subtitle: "Jsme tým specialistů, který buduje silný nový agency brand přes praktická řešení, férovou komunikaci a dlouhodobá partnerství.",
        hero_cta_main: "Bezplatný mini-audit",
        hero_cta_side: "Zobrazit služby",
        hero_micro: "Práce s podniky v UA, PL, CZ",
        hero_micro_price: "Early pricing od 150€",
        hero_micro_response: "Odpověď do 48 hod",

        card_research: "Research",
        card_meta_1: "5-7 dní",
        card_strategy: "Strategy",
        card_meta_2: "10-14 dní",
        card_launch: "Launch",
        card_meta_3: "3-4 týdny",

        proof_projects: "Praktický přístup",
        proof_response: "Rychlá komunikace",
        proof_spend: "Flexibilní řešení",
        proof_delivery: "Rostoucí ekosystém",

        positioning_title: "Praktické systémy pro firmy, které chtějí výsledky",
        positioning_desc: "Budujeme silný nový agency brand přes kvalitní práci, transparentní komunikaci a dlouhodobá klientská partnerství.",
        positioning_1_title: "Real Execution",
        positioning_1_desc: "Zaměřujeme se na praktickou implementaci, ne na strategie pouze do prezentace.",
        positioning_2_title: "Long-Term Partnerships",
        positioning_2_desc: "Hledáme klienty, se kterými můžeme růst a společně budovat silné veřejné case studies.",
        positioning_3_title: "Modern Technologies",
        positioning_3_desc: "Rychlé modern stacks, automation systems, AI workflows a škálovatelná řešení.",
        positioning_4_title: "Flexible Early Pricing",
        positioning_4_desc: "Současné ceny jsou záměrně nižší, zatímco budujeme silné case studies a partnerský ekosystém.",

        services_tag: "Služby",
        services_title: "Praktické služby s early-partner pricing",
        services_desc: "Teď nabízíme silnější cenu, abychom budovali kvalitní cases, dlouhodobá partnerství a reputaci přes výsledky.",

        service_deliverable: "Získáte:",
        service_badge: "CENA PRO PRVNÍ KLIENTY",
        service_current_label: "Současná cena",
        service_market_label: "Tržní cena",
        service_1_title: "Deep Research",
        service_1_desc: "Hluboká analýza trhu, konkurence a publika s reálnými čísly.",
        service_1_deliverable: "PDF zpráva 20-35 stran s čísly, zdroji a SWOT",
        service_1_time: "5-7 dní",
        service_1_care: "+ 10–14 dní následné péče",

        service_2_title: "Marketing Strategy",
        service_2_desc: "Media plán, trychtýř, unit economics a 30denní akční plán.",
        service_2_deliverable: "Strategický dokument 40-50 stran + media plán + kontrolní seznamy",
        service_2_time: "10-14 dní",
        service_2_care: "+ 21–30 dní následné péče",

        service_3_title: "GTM Launch",
        service_3_desc: "Kompletní balíček pro vstup na trh: od výzkumu po první prodeje.",
        service_3_deliverable: "Launch Kit: strategie + kreativy + kampaně + 30 dní podpory",
        service_3_time: "3-4 týdny",
        service_3_care: "+ 45–60 dní podpory při launchi",

        service_4_title: "Creative Pack",
        service_4_desc: "Hooks, skripty, ad copy a vizuální směr pro produkci.",
        service_4_deliverable: "10 hooks + 5 skriptů + 20 ad copies + Visual Direction",
        service_4_time: "3-5 dní",
        service_4_care: "+ 10–14 dní úprav a péče",

        service_5_title: "Optimalizace",
        service_5_desc: "Audit současné reklamy, detekce úniků peněz a plán škálování.",
        service_5_deliverable: "Zpráva s 10-15 doporučeními + plán škálování",
        service_5_time: "Měsíčně",
        service_5_care: "Partnerská péče během celého měsíce",

        service_6_title: "ICP Deep Profile",
        service_6_desc: "Hluboký výzkum vašeho ideálního klienta: 3-5 detailních Persona karet.",
        service_6_deliverable: "3-5 Persona karet + Messaging Matrix + Customer Journey",
        service_6_time: "7-10 dní",
        service_6_care: "+ 14–21 dní zpřesnění a péče",

        service_7_title: "Sledování konkurence",
        service_7_desc: "Měsíční sledování reklamy a strategií konkurence ve vašem oboru.",
        service_7_deliverable: "Měsíční digest 10-15 stran + doporučení",
        service_7_time: "Měsíčně",
        service_7_care: "Měsíční péče a krátká doporučení",

        service_8_title: "Audit trychtýře",
        service_8_desc: "Najdeme, kde váš trychtýř ztrácí peníze. 15+ konkrétních doporučení.",
        service_8_deliverable: "Zpráva s friction points + 15 prioritizovaných doporučení",
        service_8_time: "5-7 dní",
        service_8_care: "+ 14–21 dní podpory implementace",

        modal_care_label: "Péče po dodání",
        modal_why_title: "Proč je cena nižší?",
        modal_why_text: "Naši specialisté už pracují v development, automation, marketing a product systems a nyní aktivně budujeme agency brand, silné veřejné case studies a dlouhodobý business ecosystem. Proto jsou současné ceny záměrně nižší než standardní agency market pricing: early partners získají kvalitní exekuci, více pozornosti a nižší entry cost bez pocitu cheap labor.",
        modal_cta: "Probrat službu",

        pricing_tag: "Balíčky",
        pricing_title: "Early Partner Packages",
        pricing_desc: "Transparentní balíčky pro firmy, které chtějí silný výsledek nyní a dlouhodobější partnerství.",

        package_1_name: "RESEARCH",
        package_duration_1: "5-7 dní + 10-14 dní péče",
        package_1_f1: "Analýza trhu",
        package_1_f2: "Analýza konkurence",
        package_1_f3: "Analýza publika",
        package_1_f4: "Kanály + CPM",
        package_1_f5: "SWOT analýza",

        package_2_name: "STRATEGY",
        package_duration_2: "10-14 dní + 21-30 dní péče",
        package_2_f1: "Vše z Research",
        package_2_f2: "Marketingová strategie",
        package_2_f3: "Media plán",
        package_2_f4: "Unit Economics",
        package_2_f5: "30denní akční plán",

        package_3_name: "LAUNCH",
        package_duration_3: "3-4 týdny + 45-60 dní péče",
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

        faq_q5: "Proč jsou ceny teď nižší než trh?",
        faq_a5: "Budujeme nový agency brand a chceme vytvořit silné veřejné cases s dobrými partnery. Není to levná práce, ale early-client pricing: klient získá kvalitní exekuci a více pozornosti za nižší entry cost.",

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

const serviceModalDetails = {
    service_1: {
        price: "150€–500€",
        market: "800€–2500€",
        detail: {
            uk: "Deep Research допомагає швидко зрозуміти ринок, конкурентів, аудиторію і реальні можливості для росту. Ми збираємо практичні інсайти, цифри, джерела і висновки, які можна використати для маркетингу, продукту, позиціонування або запуску.",
            ru: "Deep Research помогает быстро понять рынок, конкурентов, аудиторию и реальные возможности для роста. Мы собираем практичные инсайты, цифры, источники и выводы, которые можно использовать для маркетинга, продукта, позиционирования или запуска.",
            en: "Deep Research helps you understand the market, competitors, audience, and real growth opportunities quickly. We collect practical insights, numbers, sources, and conclusions that can be used for marketing, product, positioning, or launch decisions.",
            cs: "Deep Research pomáhá rychle pochopit trh, konkurenci, publikum a reálné příležitosti pro růst. Sbíráme praktické insights, čísla, zdroje a závěry použitelné pro marketing, produkt, positioning nebo launch."
        }
    },
    service_2: {
        price: "450€–1200€",
        market: "1800€–5000€",
        detail: {
            uk: "Marketing Strategy перетворює дослідження на конкретний план дій: воронка, канали, messaging, unit economics і пріоритети на перші 30 днів. Підходить бізнесам, яким потрібна не теорія, а зрозуміла система росту.",
            ru: "Marketing Strategy превращает исследование в конкретный план действий: воронка, каналы, messaging, unit economics и приоритеты на первые 30 дней. Подходит бизнесам, которым нужна не теория, а понятная система роста.",
            en: "Marketing Strategy turns research into a practical action plan: funnel, channels, messaging, unit economics, and first 30-day priorities. It is built for businesses that need a clear growth system, not theory.",
            cs: "Marketing Strategy mění výzkum na konkrétní akční plán: funnel, kanály, messaging, unit economics a priority na prvních 30 dní. Je pro firmy, které potřebují jasný růstový systém, ne teorii."
        }
    },
    service_3: {
        price: "900€–2500€",
        market: "3500€–9000€",
        detail: {
            uk: "GTM Launch — це практичний комплект для виходу на ринок: стратегія, креативний напрям, структура кампаній, перші гіпотези і супровід запуску. Ми допомагаємо зменшити хаос на старті і зробити запуск керованим.",
            ru: "GTM Launch — это практичный комплект для выхода на рынок: стратегия, креативное направление, структура кампаний, первые гипотезы и сопровождение запуска. Мы помогаем уменьшить хаос на старте и сделать запуск управляемым.",
            en: "GTM Launch is a practical market-entry package: strategy, creative direction, campaign structure, first hypotheses, and launch support. We help reduce launch chaos and make the first market push more controlled.",
            cs: "GTM Launch je praktický balík pro vstup na trh: strategie, creative direction, struktura kampaní, první hypotézy a launch support. Pomáháme snížit chaos na startu a udělat launch řiditelný."
        }
    },
    service_4: {
        price: "150€–450€",
        market: "700€–2200€",
        detail: {
            uk: "Creative Pack дає бізнесу готову основу для реклами і контенту: hooks, scripts, ad copy і visual direction. Ми фокусуємось на меседжах, які можна швидко тестувати і покращувати.",
            ru: "Creative Pack даёт бизнесу готовую основу для рекламы и контента: hooks, scripts, ad copy и visual direction. Мы фокусируемся на сообщениях, которые можно быстро тестировать и улучшать.",
            en: "Creative Pack gives the business a usable base for ads and content: hooks, scripts, ad copy, and visual direction. We focus on messages that can be tested and improved quickly.",
            cs: "Creative Pack dává firmě použitelný základ pro reklamy a content: hooks, scripts, ad copy a visual direction. Soustředíme se na messaging, který lze rychle testovat a zlepšovat."
        }
    },
    service_5: {
        price: "350€–900€/mo",
        market: "1200€–3500€/mo",
        detail: {
            uk: "Optimization знаходить, де реклама, воронка або процеси втрачають гроші, і перетворює це на план покращення. Формат підходить для бізнесів, які хочуть спокійний, системний monthly growth support.",
            ru: "Optimization находит, где реклама, воронка или процессы теряют деньги, и превращает это в план улучшений. Формат подходит бизнесам, которым нужен спокойный, системный monthly growth support.",
            en: "Optimization identifies where ads, funnels, or workflows are leaking money and turns that into an improvement plan. It fits businesses that want calm, systematic monthly growth support.",
            cs: "Optimization hledá, kde reklama, funnel nebo procesy ztrácejí peníze, a mění to na plán zlepšení. Hodí se pro firmy, které chtějí klidný a systematický monthly growth support."
        }
    },
    service_6: {
        price: "250€–700€",
        market: "1000€–3000€",
        detail: {
            uk: "ICP Deep Profile уточнює, хто ваш найцінніший клієнт, як він мислить, що купує, чого боїться і які меседжі працюють. Це корисна база для продукту, sales, ads, контенту і positioning.",
            ru: "ICP Deep Profile уточняет, кто ваш самый ценный клиент, как он думает, что покупает, чего боится и какие сообщения работают. Это полезная база для продукта, sales, ads, контента и positioning.",
            en: "ICP Deep Profile clarifies who your most valuable customer is, how they think, what they buy, what they fear, and which messages work. It becomes a strong base for product, sales, ads, content, and positioning.",
            cs: "ICP Deep Profile zpřesňuje, kdo je váš nejcennější klient, jak přemýšlí, co kupuje, čeho se bojí a jaký messaging funguje. Je to silný základ pro product, sales, ads, content a positioning."
        }
    },
    service_7: {
        price: "150€–400€/mo",
        market: "700€–2000€/mo",
        detail: {
            uk: "Competitor Watch тримає вас в курсі того, що роблять конкуренти: реклама, меседжі, офери, нові механіки і ринкові сигнали. Це легкий спосіб не втрачати контекст і швидше знаходити можливості.",
            ru: "Competitor Watch держит вас в курсе того, что делают конкуренты: реклама, сообщения, офферы, новые механики и рыночные сигналы. Это лёгкий способ не терять контекст и быстрее находить возможности.",
            en: "Competitor Watch keeps you aware of what competitors are doing: ads, messages, offers, new mechanics, and market signals. It is a lightweight way to keep context and spot opportunities faster.",
            cs: "Competitor Watch vás drží v obraze o tom, co dělá konkurence: reklamy, messaging, offers, nové mechaniky a tržní signály. Je to lehký způsob, jak neztratit kontext a rychleji nacházet příležitosti."
        }
    },
    service_8: {
        price: "250€–800€",
        market: "1200€–3500€",
        detail: {
            uk: "Funnel Audit показує, де користувачі губляться, де падає довіра і де бізнес втрачає конверсії. Ви отримуєте пріоритетні правки, які можна впроваджувати без зайвої теорії.",
            ru: "Funnel Audit показывает, где пользователи теряются, где падает доверие и где бизнес теряет конверсии. Вы получаете приоритетные правки, которые можно внедрять без лишней теории.",
            en: "Funnel Audit shows where users get lost, where trust drops, and where the business loses conversions. You receive prioritized fixes that can be implemented without extra theory.",
            cs: "Funnel Audit ukazuje, kde se uživatelé ztrácejí, kde klesá důvěra a kde firma ztrácí konverze. Získáte prioritizované úpravy, které lze implementovat bez zbytečné teorie."
        }
    }
};

// Current language
let currentLang = localStorage.getItem('lang') || 'uk';
let currentTheme = localStorage.getItem('theme') || document.documentElement.getAttribute('data-theme') || 'dark';

function setTheme(theme) {
    currentTheme = theme === 'light' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', currentTheme === 'light' ? 'true' : 'false');
        themeToggle.classList.toggle('is-light', currentTheme === 'light');

        const dictionary = translations[currentLang] || translations.uk;
        themeToggle.setAttribute('aria-label', dictionary.theme_toggle_aria || 'Switch theme');
        themeToggle.setAttribute('title', dictionary.theme_toggle_aria || 'Switch theme');
    }
}

function toggleTheme() {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
}

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

    setTheme(currentTheme);

    const openModal = document.getElementById('serviceModal');
    if (openModal && openModal.classList.contains('active')) {
        updateServiceModal(openModal.getAttribute('data-active-service'));
    }
}

function updateServiceModal(serviceId) {
    const service = serviceModalDetails[serviceId];
    if (!service) return;

    const dictionary = translations[currentLang] || translations.uk;
    const title = dictionary[`${serviceId}_title`];
    const care = dictionary[`${serviceId}_care`];

    document.getElementById('modalServiceTitle').textContent = title || '';
    document.getElementById('modalServiceDesc').textContent = service.detail[currentLang] || service.detail.en;
    document.getElementById('modalCurrentPrice').textContent = service.price;
    document.getElementById('modalMarketPrice').textContent = service.market;
    document.getElementById('modalCare').textContent = care || '';
    document.getElementById('modalWhyText').textContent = dictionary.modal_why_text || translations.en.modal_why_text;
}

function openServiceModal(serviceId) {
    const modal = document.getElementById('serviceModal');
    if (!modal || !serviceModalDetails[serviceId]) return;

    modal.setAttribute('data-active-service', serviceId);
    updateServiceModal(serviceId);
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (!modal) return;

    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('data-active-service');
    document.body.style.overflow = '';
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    setTheme(currentTheme);
    setLanguage(currentLang);

    document.querySelectorAll('.service-card[data-service-id]').forEach(card => {
        card.addEventListener('click', () => {
            openServiceModal(card.getAttribute('data-service-id'));
        });

        card.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openServiceModal(card.getAttribute('data-service-id'));
            }
        });
    });

    document.querySelectorAll('[data-modal-close]').forEach(closeControl => {
        closeControl.addEventListener('click', closeServiceModal);
    });
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeServiceModal();
    }
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
