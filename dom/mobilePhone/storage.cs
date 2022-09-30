var mobile = {
    company : "Samsung",
    ram: 8,
    rom : 256,
    usedStorage : 40 ,
    
    remainingStorage : function(){
       return this.rom-this.usedStorage
    },
}
console.log("Remaining storage in mobile is " + mobile.remainingStorage());