//account.js

export class Account {
    constructor(username){
        this.username = username;
        this.id = crypto.randomUUID();
        this.transactions = [];
    }
}