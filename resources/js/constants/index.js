import seksFantyJPG from "./../assets/bg/sex-fanty.png";
import chernoeIBeloeJPG from "./../assets/bg/chernoe-i-beloe.png";
import rolevyeJPG from "./../assets/bg/rolevye-igry.png";
import seksFantyMOBJPG from "./../assets/bg/sex-mob.png";
import chernoeIBeloeMOBJPG from "./../assets/bg/chernoe-i-beloe-mob.png";
import rolevyeMOBJPG from "./../assets/bg/rolevue-mob.png";
import emailImgSvg from "./../assets/icons/icon-email.svg";
import passwordlImgSvg from "./../assets/icons/icon-lock.svg";
import checkImgSvg from "./../assets/icons/icon-check.svg";
import userImgSvg from "./../assets/icons/icon-user.svg";

const music_list = [
    {
        img_src: './images/stay.png',
        title: "Stay",
        artist: "The Kid LAROI, Justin Bieber",
        media: "./music/stay.mp3",
    },
    {
        img_src: './images/fallingdown.jpg',
        title: "Falling Down",
        artist: "Wid Cards",
        media: "./music/fallingdown.mp3",
    },
    {
        img_src: './images/faded.png',
        title: "Faded",
        artist: "Alan Walker",
        media: "./music/Faded.mp3",
    },
    {
        img_src: './images/ratherbe.jpg',
        title: "Rather Be",
        artist: "Clean Bandit",
        media: "./music/Rather Be.mp3",
    },
];

const inputFormLogin = [
    {
        type: 'email',
        name: 'email',
        autocomplete: 'userName',
        placeholder: "Почта",
        valueInput: 'values.email',
        password: false,
        imgStart: emailImgSvg,
        err: 'errors.email',
        errText: 'errors.email',
        changer: 'handleChange',
    },
    {
        type: "password",
        name: "password",
        autocomplete: "current-password",
        valueInput: 'values.password',
        placeholder: "Пароль",
        imgStart: passwordlImgSvg,
        password: true,
        err: 'errors.password',
        errText: 'errors.password',
        changer: 'handleChange',
    }
];

const sliderDataArr = [
    {
        id: 1,
        title: "Секс фанты",
        text: "Игра, которая позволит избавиться от ежедневного напряжения, убрать стеснение, получить наслаждение и при всём этом, не обидеть друг друга, а наоборот - зажечь. Здесь собрана нежность и пошлость, которая позволит разнообразить классическую модель секса. ",
        img: seksFantyJPG,
        img2: seksFantyMOBJPG,
        counter: "01.",
        pageUrl: "/seks-fanty/info",
    },
    {
        id: 2,
        title: "Черное и белое",
        text: "Игра, в которой Вы не увидите прелюдию, игра, в которой наслаждение переплетается с сладкой болью, здесь нет классики, здесь страсть, безумие, и вожделение. Предрассудки отсувствуют, мир похоти и разврата поглотит Вас.",
        img: chernoeIBeloeJPG,
        img2: chernoeIBeloeMOBJPG,
        counter: "02.",
        pageUrl: "/chernoe-i-beloe",
    },
    {
        id: 3,
        title: "Ролевые игры",
        text: "Игра, которая заставит дрожать тело от скрытых желаний - здесь отсутствует слово СТОП! Грань между моралью и вседозволенностью  размыта, экспериментируй, выбирай, чувствуй, ведь роль в этой жизни у каждого своя. А какая подходит тебе?! Добро пожаловать в мир секса без предрассудков!",
        img: rolevyeJPG,
        img2: rolevyeMOBJPG,
        counter: "03.",
        pageUrl: "/rolevye-igru",
    },
];

const inputFormRegistration = [
    {
        type: "text",
        name: "name",
        autocomplete: "name",
        valueInput: 'values.name',
        placeholder: "Имя",
        err: 'errors.name',
        errText: 'errors.name',
        imgStart: userImgSvg,
        changer: 'handleChange',
        password: false
    },

    {
        type: "email",
        name: "email",
        autocomplete: "userName",
        valueInput: "values.email",
        placeholder: "Почта",
        err: "errors.email",
        errText: "errors.email",
        imgStart: emailImgSvg,
        changer: "handleChange",
        password: false
    },

    {
        type: "password",
        name: "password",
        autocomplete: "new-password",
        valueInput: "values.password",
        placeholder: "Пароль",
        err: "errors.password",
        errText: "errors.password",
        imgStart: passwordlImgSvg,
        changer: "handleChange",
        password: "true",
    },

    {
        type: "password",
        name: "checkPassword",
        autocomplete: "new-password",
        valueInput: "values.checkPassword",
        placeholder: "Повторите пароль",
        err: "isCheckPassowrd",
        errText: "Пароль не совпадает",
        imgStart: checkImgSvg,
        changer: "handleChange",
        password: true,
    }
];

const linkFollowsArr = [
    {
        class: "fab fa-cc-visa",
        link: "https://vk.com/dip.baby",
        deactive: true,
    },
    {
        class: "fab fa-cc-mastercard",
        link: "https://vk.com/dip.baby",
        deactive: true,
    },
    { class: "fab fa-vk", link: "https://vk.com/dip.baby", deactive: false },
    {
        class: "fab fa-instagram",
        link: "https://www.instagram.com/dip.baby/",
        deactive: false,
    },
];

const dataPostArr = [
    {
        id: 1,
        svg: "fa fa-venus-mars",
        title: "Игра для пар",
        text: "Разожгите свой внутренний мир и почувствуйте новую волну страсти в Вашей паре..",
    },
    {
        id: 2,
        svg: "fa fa-rotate",
        title: "Очередность заданий",
        text: "Вы по очереди получаете задания. Вы можете читать их вместе, а можете и не показывать партнеру, тогда игра будет гораздо интересней, а ощущения ещё ярче.",
    },
    {
        id: 3,
        svg: "fa-solid fa-chart-simple",
        title: "Наростяющая страсть",
        text: "Игра поделена на 3 уровня: зеленый, оранжевый и красный. С каждым уровнем, шаг за шагом, Вы будете погружаться в мир удовольствий и наслаждаться друг другом.",
    },
    {
        id: 4,
        svg: "fa fa-gears",
        title: "Настройки",
        text: "Настройте игру под Ваши предпочтения, исключая варианты нежелательных действий.",
    },
    {
        id: 5,
        svg: "fa-solid fa-bolt-lightning",
        title: "Наказания за пропуск",
        text: "Безумие и страсть,  все что нужно знать, если решил/а отказаться.",
    },
    {
        id: 6,
        svg: "fas fa-circle-nodes",
        title: "Алгоритм",
        text: "ИИ чувствует настройки, анализируя желание, и приведет Вас до достижения  желаемой цели.",
    },
];

const dataPostFeatureArr = [
    {
        id: 1,
        title: "Правила игры",
        text: [`1. Эта игра как для состоявшихся пар, так и для тех кто впервые окунается в яркий мир секса. Она внесет огонёк и страсть в вашу суксуальную жизнь и/или подскажет и покажет как должны вести себя партнеры во время секса. Это некий путеводитель в мир наслаждения и пошлости от разработчиков dip.baby`,
            `2. Начало игры подразумевает
             - Вы соблюдаете правила гигиены - приняли душ, разделись до нижнего белья(что - бы было что снимать), девушки по желанию добавили красивые акссесуары на свое тело(чулки, корсет, подвязки и тд.)  и приготовились нажать на кнопку Играть 18 +
            - Вместе выберите найстройки для игры.Именно от Ваших желаний будет зависеть ход игры
            - Выберите продолжительность, кликнув на нужное количество заданий на каждом уровне.Раскройтесь для своей второй половинки, не стесняйтесь, растворитесь друг в друге. `,
            `3. Суть игры: каждый поочерёдно открывает фант и выполняет задание`],
    },
    {
        id: 2,
        title: "Наказания",
        text: [`1. Эту настройку можно активирвать в меню игры. Она внесёт в процесс нотки неординарности и сумашествия.`,
            `2. На оранжевом уровне  включается система наказаний котороая состоит из трёх этапов. С каждым отказом от задания наказания будут становиться более изысканными.`,
            `3. Лёгкая боль (а может быть и нет), крик, ошеломлённость, недоумение ждёт Вас в каждом отказе.`,
            `4. После трёх отказов партнер получит полную власть над вашим телом, и игра закончится.`],
    },
    {
        id: 3,
        title: "Узнай друг друга",
        text: [
            `1. Игра разработана таким образом, что после её окончания Вы откроете в своем партнере то, о чём может быть не догадывались.`,
            `2. Задания, которые сближают не только на физическом уровне, но и ментально.`,
            `3. Пробуйте, эксперементируйте с настройками. Каждая игра не предсказуема, индивидуальна.`
        ],
    },
    {
        id: 4,
        title: "Алгоритм",
        text: [`ИИ разработан таким образом, что чувствует Ваши желания, каждая дополнительная настройка активирована в меню игры добавит ей разнообразия. Активировав все настройки игра становится максимально разносторонней. Но помните! выбирайте те настройки, которые приняты в Вашей паре.`],
    },
];

const dataCardGameArr = [
    {
        id: 1,
        data: "14.03.2022 / в",
        link: "Играть",
        title: "Секс фанты",
        text: "Нежность и пошлость в переплёте с классическим сексом подарят новый взгляд на взаимные наслаждения",
        btnText: "Играть 18+",
        url: "/seks-fanty/info",
    },
    {
        id: 2,
        data: "11.11.18 / в",
        link: "Игра в стадии разработки",
        title: "Черное и белое",
        text: "Наслаждение и  сладкая боль, непредсказуемость и неопределённость помогут взгялнуть на мир секса с другой стороны.",
        btnText: "Играть 18+",
        url: "/chernoe-i-beloe",
    },

    {
        id: 3,
        data: "11.11.18 / в",
        link: "Игра в стадии разработки",
        title: "Ролевые игры",
        text: "Твоя роль в этой игре предопределена, не бойся опуститься на колени и окунуться в мир подчинения и доминирования.",
        btnText: "Играть 18+",
        url: "/role-playing",
    },
];

const blogTrendsArr = [
    {
        id: 1,
        imgUrl: "https://images.genius.com/2216a21a5494b153cb4c24005370d031.700x700x1.jpg",
        data: "11.11.18 ",
        title: "The best online game is out now!",
        url: "blogs/article/1",
    },
    {
        id: 2,
        imgUrl: "https://images.genius.com/2216a21a5494b153cb4c24005370d031.700x700x1.jpg",
        data: "11.11.18 ",
        title: "The best online game is out now!",
        url: "blogs/article/1",
    },
    {
        id: 3,
        imgUrl: "https://images.genius.com/2216a21a5494b153cb4c24005370d031.700x700x1.jpg",
        data: "11.11.18 ",
        title: "The best online game is out now!",
        url: "blogs/article/1",
    },
    {
        id: 4,
        imgUrl: "https://images.genius.com/2216a21a5494b153cb4c24005370d031.700x700x1.jpg",
        data: "11.11.18 ",
        title: "The best online game is out now!",
        url: "blogs/article/1",
    },
];

const blogsCategoriesListArr = [
    {
        id: 1,
        title: "Games",
    },
    {
        id: 2,
        title: "Gaming Tips & Tricks",
    },
    {
        id: 3,
        title: "Online Games",
    },
    {
        id: 4,
        title: "Team Games",
    },
    {
        id: 5,
        title: "Community",
    },
    {
        id: 6,
        title: "Uncategorized",
    },
];

const article = {
    imgUrl: "https://images.genius.com/2216a21a5494b153cb4c24005370d031.700x700x1.jpg",
    title: "Лучшие VR-игры на рынке",
    text: "Вы заполняете нашу электронную форму, чтобы запросить интересующие вас профили разработчиков. Другой вариант — просмотреть наш пул профессионалов, которые доступны для заключения контракта. Подписываем NDA. 2 Интервью с разработчиками Мы проводим первичную встречу и уточняем ваши требования. В результате мы рассылаем анонимные резюме подходящих людей, которые у нас есть. Основываясь на нашем опыте, мы можем предоставить запрашиваемые ресурсы в 90% случаев, доступные в течение 1-4 недель.3 Разгрузите свою работу! Мы подписываем контракт с указанием выделенных свойств команды. Вы начинаете разгружать свой бэклог команде. Наш менеджер проекта посещает еженедельные встречи и контролирует разработчиков с нашей стороны.",
    data: "11/12/11",
};

const optionsBasic = [
    { title: "Выключить все", checked: true, settings_id: 1 },
    { title: "Своя настройка", checked: false, settings_id: 2 },
    /*  { title: "Включить всё", checked: false, settings_id: 3 }, */
];

export {
    optionsBasic,
    article,
    blogsCategoriesListArr,
    sliderDataArr,
    linkFollowsArr,
    dataPostArr,
    dataPostFeatureArr,
    dataCardGameArr,
    music_list,
    blogTrendsArr,
    inputFormLogin,
    inputFormRegistration
};
