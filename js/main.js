let answerBudjet = +prompt('Ваш бюджет?'),
    marketName = prompt('Название вашего магазина?'),
    budjetOfDay = answerBudjet / 30,
    time = 19,

    mainList = {
        budjet: answerBudjet,
        market: marketName,
        shopGoods: [],
        employers: {},
        open: false
    };

for (let i = 0; i < 5; i++) {
    var answerShopGoods = prompt('Какие товары вы собираетесь продавать?');
    if ((typeof (answerShopGoods)) === 'string' && (typeof (answerShopGoods)) !== null && (typeof (answerShopGoods)) != '' && answerShopGoods.length < 50) {
        mainList.shopGoods[i] = answerShopGoods;
    }
    // else {
    // сделать так чтобы цикл запускался заново
    // }
}

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
console.log(mainList.shopGoods);