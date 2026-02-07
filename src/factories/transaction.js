export class Transaction {
    constructor(title, category, type){
        this.title = title;
        this.id = crypto.randomUUID();
        this.amount = 0; // initial amount
        this.category = category; // Food, Transport, Subscription
        this.type = type; //either income or expenses
    }
}