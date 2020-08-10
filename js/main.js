let answerBudjet,
    budjetOfDay,
    marketName,
    time,
    price;

function start() {
    answerBudjet = prompt('Ваш бюджет?', '');
    while (isNaN(answerBudjet) || answerBudjet == '' || answerBudjet == null) {
        answerBudjet = prompt('Ваш бюджет?', '');
    }
    marketName = prompt('Название вашего магазина?', '').toUpperCase();
    time = 19;
}
// start();


let mainList = {
    budjet: answerBudjet,
    market: marketName,
    shopGoods: [],
    employers: {},
    open: false,
    discount: true,
    shopItems: [],
    iscountCalc: function discountCalc() {
        (mainList.discount) ? price = 0.8: price = 1;
        return price;
    },
    chooseGoods: function chooseGoods() {
        for (let i = 0; i < 5; i++) {
            let answerShopGoods = prompt('Какие товары вы собираетесь продавать?', '');
            ((typeof (answerShopGoods)) === 'string' && (typeof (answerShopGoods)) != null && answerShopGoods != '' && answerShopGoods.length < 50) ? mainList.shopGoods[i] = answerShopGoods: i = i - 1;
        }
    },
    hiringEmployers: function hiringEmployers() {
        for (let i = 0; i < 4; i++) {
            let answerNameEmployer = prompt('Введите имя сотрудника', '');
            ((typeof (answerNameEmployer)) === 'string' && (typeof (answerNameEmployer)) != null && answerNameEmployer != '' && answerNameEmployer.length < 50) ? mainList.employers[i] = answerNameEmployer: i = i - 1;
        }
    },
    workTime: function workTime(time) {
        if (time < 0) {
            console.log('Такого не может быть');
        } else if (time > 8 && time < 20) {
            console.log('Время работать');
            mainList.open = true;
        } else if (time < 24) {
            console.log('Уже слишком поздно');
        } else if (time > 24) {
            console.log('В сутках только 24 часа');
        }
    },
    dailyBudget: function dailyBudget() {
        budjetOfDay = Math.round(answerBudjet / 30);
        alert('Ваш бюджет на день составляет ' + budjetOfDay);
    },
    chooseShopItem: function chooseShopItem() {
        let items = prompt('Перечислите через запятую ваши товары', '');
        ((typeof (items)) === 'string' && items) ? mainList.shopItems = items.split(','): items = prompt('Перечислите через запятую ваши товары', '');
        mainList.shopItems.push(prompt('Все товары вы учли?', ''));
        mainList.shopItems.sort();
    }
};
console.log(mainList.chooseShopItem());
// console.log(mainList.shopItems);
// console.log(mainList);