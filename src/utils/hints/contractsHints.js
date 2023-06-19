export const contractsHints = {
  contractId: 'Unique identifier for a Smart Contract instance that lives on the blockchain.',
  contractCreated: 'Estimated date, time and block height when the Smart Contract was created.',
  contractTxHash: 'The transaction hash of a ContractCreateTx that was executed to create the Smart Contract on the blockchain.',
  contractCreator: 'Account that created the Smart Contract.',
  bytecode: 'Pre-compiled code of the Smart Contract.',
  contractsAccount: 'The address where the Smart Contract is located. To be used if a Smart Contract is already deployed.',
  contractsAccountBalance: 'Smart Contract account balance. Balance is needed to execute "payable" functions.',
  contractCalls: 'Amount of calls to the Smart Contract.',
  apiLinks: 'Links to sources of the Smart Contract data.',
  callTransactionsHash: 'Unique identifier of ContractCallTx which represents call to Smart Contract function.',
  callTransactionsTime: 'Estimated date, time and block height when the Smart Contract was called.',
  callTransactionsCaller: 'Account that called the Smart Contract.',
  callTransactionsEntryPoint: 'Name of the Smart Contract function that was called.',
  eventsCallTransaction: 'Unique identifier of ContractCallTx which emitted the event.',
  eventsCreated: 'Estimated date, time and block height when the Smart Contract was emitted the event.',
  eventsEventName: 'Estimated date, time and block height when the Smart Contract was emitted the event.',
  eventsArguments: 'Payload emitted with the event.',
}
