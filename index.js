const crypto = require('crypto');

function hash(string){
    return crypto.createHash("sha256").update(string.toString()).digest("hex")
}

function Block(previousHash, transactions){
    return hash([previousHash, transactions]);
}

var genesisBlock = Block(0, ["satoshi sent vitalik 10 btc"])
console.log(genesisBlock)


var secondBlock = Block(genesisBlock, ["vitalik sent blackrock 20 btc"])
console.log(secondBlock)


var thirdBlock = Block(secondBlock, ["satoshi sent vitalik 1 btc"])
console.log(thirdBlock)

//when any changes are made to a block, all following blocks will be effected
