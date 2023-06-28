export const contractsHints = {
  contractId: 'Unique identifier for a smart contract instance that lives on the blockchain.',
  contractCreated: 'Keyblock height and exact date and time when the smart contract was created.',
  contractTxHash: 'The transaction hash of a ContractCreateTx that was executed to create the smart contract on the blockchain.',
  contractCreator: 'Account that created the smart contract.',
  bytecode: 'Low-level representation of the smart contract that is generated when the contract\'s source code is compiled.',
  contractsAccount: 'The account associated to the smart contract.',
  contractsAccountBalance: 'The balance of the account associated to the smart contract.',
  contractCalls: 'Amount of calls to the smart contract.',
  apiLinks: 'Links to sources of the smart contract data.',
  callTransactionsHash: 'Unique identifier of the ContractCallTx.',
  callTransactionsTime: 'Keyblock height and exact date and time when the smart contract was called.',
  callTransactionsCaller: 'Account that called the smart contract.',
  callTransactionsEntryPoint: 'Name of the smart contract entrypoint that was called.',
  eventsCallTransaction: 'Unique identifier of the ContractCallTx which emitted the event.',
  eventsCreated: 'Keyblock height and estimated date and time when the smart contract had emitted the event.',
  eventsName: 'Name of the emitted event.',
  eventsArguments: 'The arguments of the emitted event.',
  data: 'The content of the emitted event.',
}
