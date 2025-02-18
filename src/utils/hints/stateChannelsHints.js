export const stateChannelsHints = {
  stateChannelId: 'Unique identifier of the state channel.',
  status: 'While the status is "Open", the state channel participants can execute an unlimited amount of transactions off-chain with instant finality. The status will be "Closed" if one of the participants executes either a ChannelCloseMutualTx or a ChannelSettleTx',
  participants: 'Initiator is the account that paid the fees to create the state channel. Responder is the account that joined the state channel.',
  onChainUpdates: 'Amount of on-chain transactions related to the state channel. Participants can for example deposit to, withdraw from or provide a snapshot of the state channel to the chain.',
  locked: 'Current amount of AE coins deposited to the state channel by both participants. While the state channel is open and no snapshot is provided to the chain, only the participants know who owns a specific amount of the deposited AE coins.',
  lastUpdated: 'Keyblock height and estimated date and time of the last on-chain interaction with the state channel.',
  lastTxType: 'Type of the last on-chain transaction related to the state channel.',
  apiLinks: 'Links to sources of the smart contract data.',
  createTransaction: 'The transaction that created the state channel.',
  initialAmount: 'The total amount of AE coins that have initially been deposited to the state channel by initiator and responder combined.',
  initiator: 'The account that initiated the creation of the state channel and covered the fees for its creation.',
  responder: 'The participating account that joined the state channel.',
  lastKnownRound: 'Participants can for example protect themselves from being cheated on by providing a snapshot from the latest off-chain round to the chain.',
}
