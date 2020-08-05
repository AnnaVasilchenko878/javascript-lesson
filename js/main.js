let answerBudjet,
    marketName,
    time;

function start() {
    answerBudjet = prompt('Ваш бюджет?');
    while (isNaN(answerBudjet) || answerBudjet == '' || answerBudjet == null) {
        answerBudjet = prompt('Ваш бюджет?').toUpperCase();
    }
    marketName = prompt('Название вашего магазина?');
    time = 19;
}
start();

let mainList = {
    budjet: answerBudjet,
    market: marketName,
    shopGoods: [],
    employers: {},
    open: false
};

let budjetOfDay = answerBudjet / 30;

function chooseGoods() {
    for (let i = 0; i < 5; i++) {
        let answerShopGoods = prompt('Какие товары вы собираетесь продавать?');
        ((typeof (answerShopGoods)) === 'string' && (typeof (answerShopGoods)) != null && answerShopGoods != '' && answerShopGoods.length < 50) ? mainList.shopGoods[i] = answerShopGoods: i = i - 1;
    }
};
chooseGoods();

if (time < 0) {
    console.log('Такого не может быть');
} else if (time > 8 && time < 20) {
    console.log('Время работать');
} else if (time < 24) {
    console.log('Уже слишком поздно');
} else if (time > 24) {
    console.log('В сутках только 24 часа');
}

alert('Ваш бюджет на день составляет ' + budjetOfDay);
console.log(mainList);