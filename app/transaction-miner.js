const Transaction = require('../wallet/transaction')

class TransactionMiner{
    constructor({ blockchain, transactionPool, wallet, pubsub }){
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.pubsub = pubsub;
    }
    
    mineTransaction(){
        // get the transaction pool's valid transactions
        const validTransaction = this.transactionPool.validTransaction();
    
        // generate the miner's reward
        validTransaction.push(
            Transaction.rewardTransaction({ minerWallet: this.wallet })
        );
        // add a block consisting of these transactions to the blockchain
        this.blockchain.addBlock({ data: validTransaction });

        // broadcast the updated blockchain
        this.pubsub.broadcastChain();

        // clear the pool
        this.transactionPool.clear();
    }
}

module.exports = TransactionMiner;