import { format } from "date-fns";

export class Transaction {
    constructor(title, amount, category, type, date){
        this.title = title;
        this.id = crypto.randomUUID();
        this.amount = amount;
        this.category = category; // Food, Transport, Subscription
        this.type = type; //either income or expenses
        this.date = format(new Date(), "dd-MMM-yyyy");
    }
}