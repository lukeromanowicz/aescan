export const accountHints = {
  balance: 'Amount of AE owned by the account.',
  value: 'USD value of AE owned by the account.',
  transactions: 'Amount of transactions where the account was involved.',
  aensNames: 'Amount of names owned by the account.',
  nonce: 'The nonce that has been used to execute the last transaction for the account. The nonce is used to prevent replay attacks and to keep transactions in the right order. If a transaction with a way higher nonce is broadcasted, it won\'t be executed until all transactions with lower nonces are executed.',
  apiLinks: 'Node API link of the account.',
  hash: 'Transaction hash of the transaction where the account was involved.',
  time: 'Keyblock height and exact date and time when the transaction has been executed by inclusion into a microblock.',
  type: 'Type of the transaction where the account was involved.',
  data: 'The data displayed differs for each tx type.',
  name: 'Name owned by this account.',
  expires: 'Keyblock height and estimated date and time when the name owned by the account expires.',
  pointsTo: 'The account that points to the name owned by the account.',
}
