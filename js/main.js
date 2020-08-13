 let btnOpen = document.querySelector('#open-btn'),
     budgetShop = document.querySelector('.budget-value'),
     nameShop = document.querySelector('.name-value'),
     goodsCategoryProducts = document.querySelector('.goods-item-btn'),
     inputGoodItems = document.querySelectorAll('.goods-item'),
     goodsValue = document.querySelector('.goods-value'),
     chooseItem = document.querySelector('.choose-item'),
     itemsValue = document.querySelector('.items-value'),
     timeValue = document.querySelector('.time-value'),
     openValue = document.querySelector('.isopen-value'),
     countBudget = document.querySelector('.count-budget-btn'),
     countBudgetValue = document.querySelector('.count-budget-value'),
     hireEmployersItem = document.querySelectorAll('.hire-employers-item'),
     hireEmployersBtn = document.querySelector('.hire-employers-btn'),
     employersValue = document.querySelector('.employers-value'),
     discountValue = document.querySelector('.discount-value');



 let answerBudget,
     budgetOfDay,
     time,
     price;

 btnOpen.addEventListener('click', () => {
     answerBudget = prompt('Ваш бюджет?', '');
     while (isNaN(answerBudget) || answerBudget == '' || answerBudget == null) {
         answerBudget = prompt('Ваш бюджет?', '');
     }
     budgetShop.textContent = answerBudget;
     nameShop.textContent = prompt('Название вашего магазина?', '').toUpperCase();

     let discountAnswer = confirm('Есть ли вашем магазине дисконтная система?');
     if (discountAnswer == true) {
         price = (price * 100) / 80;
         mainList.discount = true;
         discountValue.style.backgroundColor = '#2e856e';
     } else {
         mainList.discount = false;
         discountValue.style.backgroundColor = '#e3242b';
     }
 });

 goodsCategoryProducts.addEventListener('click', () => {
     for (let i = 0; i < inputGoodItems.length; i++) {
         let answerShopGoods = inputGoodItems[i].value;
         if ((typeof (answerShopGoods)) === 'string' && answerShopGoods.length < 50) {
             mainList.shopGoods[i] = answerShopGoods;
             goodsValue.textContent = mainList.shopGoods;
         } else {
             i = i - 1;
         }
     }
 });

 chooseItem.addEventListener('change', () => {
     let items = chooseItem.value;
     if (isNaN(items) && items != '') {
         mainList.shopItems = items.split(', ');
         mainList.shopItems.sort();
         itemsValue.textContent = mainList.shopItems;
     }
 });

 timeValue.addEventListener('change', () => {
     let time = timeValue.value;
     if (time < 0) {
         console.log('Такого не может быть');
         mainList.open = false;
     } else if (time > 8 && time < 20) {
         console.log('Время работать');
         mainList.open = true;
     } else if (time < 24) {
         console.log('Уже слишком поздно');
         mainList.open = false;
     } else if (time > 24) {
         console.log('В сутках только 24 часа');
         mainList.open = false;
     }

     if (mainList.open == true) {
         openValue.style.backgroundColor = '#2e856e';
     } else {
         openValue.style.backgroundColor = '#e3242b';

     }
 });

 countBudget.addEventListener('click', () => {
     countBudgetValue.value = Math.round(answerBudget / 30);
 });
 hireEmployersBtn.addEventListener('click', () => {

     for (let i = 0; i < hireEmployersItem.length; i++) {
         let answerNameEmployer = hireEmployersItem[i].value;
         if ((typeof (answerNameEmployer)) === 'string' && (typeof (answerNameEmployer)) != null && answerNameEmployer.length < 50) {
             mainList.employers[i] = answerNameEmployer;
             employersValue.textContent += mainList.employers[i] + ', ';
         } else {
             i = i - 1;
         }
     }
 });


 let mainList = {
     budget: answerBudget,
     market: nameShop,
     shopGoods: [],
     employers: {},
     open: false,
     discount: true,
     shopItems: []
 };