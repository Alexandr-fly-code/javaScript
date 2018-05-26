

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    pork: 80,
    cheese: 60,
    tea: 20,
    candy: 25

};
 const order = {
    milk: 2,
     bread: 2,
    apples: 1,
    cheese: 1

};
function Cashier(name, products) {
    this.name = name;
    this.product = products;
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;

    this.countTotalPrice = function (order) {
        for (let key in order) {
            this.totalPrice += this.product[key] * order[key];
        }
    }
    
    this.getCustomerMoney = function () {
        let total = true;
        while (total){
           this.customerMoney = prompt(`Общая сумма покупок : ${this.totalPrice} грн.`);
            if (this.customerMoney === null){
               total = false;
           }else {
               this.customerMoney = +this.customerMoney;
               if (this.customerMoney < this.totalPrice){
                   alert(`Введена некорректная сумма`);
               } else {
                   break;
               }

            }

       }

    }
    this.countChange = function () {
        if (this.customerMoney === null){
            return;
        } else {
            this.changeAmount = this.customerMoney - this.totalPrice;
                // console.log(this.changeAmount);
        }
    }

    this.reset = function () {
        this.totalPrice = 0;
        this.customerMoney = 0;
        this.changeAmount = 0;
    }

    
    this.serve = function (order) {
        this.countTotalPrice(order);
        this.totalPrice;
        this.getCustomerMoney();
        this.countChange();
        if (this.customerMoney >= this.totalPrice){
            alert(`Спасибо за покупку, ваша сдача ${this.changeAmount} грн.`);
            this.reset();
        }else {
            alert(`Очень жаль, что-то пошло не так, приходите еще`);
            this.reset();
        }
    }
}



const cashier = new Cashier('Mango', products);
cashier.serve(order);

