var answerBudjet = +prompt('Ваш бюджет?');
var marketName = prompt('Название вашего магазина?');

var mainList = {
    budjet: answerBudjet,
    market: marketName,
    shopGoods: [],
    employers: {},
    open: true
};

for (var i = 0; i < 3; i++) {
    var answerShopGoods = prompt('Какие товары вы собираетесь продавать?');
    mainList.shopGoods.push(answerShopGoods);
}

var budjetOfDay = answerBudjet / 30;
alert('Ваш бюджет на день составляет ' + budjetOfDay);