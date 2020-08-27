class Block {
    constructor({timestamp, lastHast, hash, data}){
        this.timestamp = timestamp;
        this.lastHast = lastHast;
        this.hash = hash;
        this.data = data
    }
}

const block1 = new Block({
    data : "foo-data",
    lastHast : "foo-lastHast",
    hash : "foo-hash",
    timestamp : "01/01/01"
});

console.log("block1", block1)