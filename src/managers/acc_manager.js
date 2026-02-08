import { Account } from "../factories/account"
import { stateDependencies } from "./transaction_manager";

export const createAccount = (username) => {
    const existingUsername = stateDependencies.accounts.some(account => account.username === username);
    if (existingUsername) return;
    const account = new Account(username);
    stateDependencies.accounts.push(account);

    return account;
}

export const accTransactions = (accountId, transaction) => {
    const account = stateDependencies.accounts.find(acc => acc.id === accountId);
    if (!account) return;
    account.transactions.push(transaction);
}

export const deleteAccount = (accId) => {
    const accIndex = stateDependencies.accounts.findIndex(a => acc.id === accId);
    if (accIndex === -1) return;
    stateDependencies.accounts.splice(accIndex, 1);
}