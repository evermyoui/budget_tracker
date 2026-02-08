//Transaction Manager
import { Transaction } from "../factories/transaction";

export const stateDependencies = (() => {
    const accounts = [];
    const transactions = [];
    const categories = ["Food", "Transportation", "Subscription", "Salary"];
    const type = ["Income", "Expenses"];

    return {
        accounts,
        transactions,
        categories,
        type
    }
})();

export const createTransaction = (title, category, type, amount) => {
    const transac = new Transaction(title, category, type, amount);
    stateDependencies.transactions.push(transac);
    return transac;
}