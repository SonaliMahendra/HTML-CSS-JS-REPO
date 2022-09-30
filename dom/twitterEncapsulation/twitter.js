class Twitter{
    #password;
    #tweets=[];
    user;
    constructor(user,password){
        this.user=user;
        this.#password=password;
    }

    checkPassword(password){
        return this.#password===password;
    }
    get password(){
        return "****";
    }
    set tweet(tweet){
        if(typeof tweet=="string")this.#tweets.push(tweet);
    }
    get tweet(){
        return [...this.#tweets];
    }
}

const classInstance = new Twitter("Sonali","sonz")
classInstance.tweet="How are you";
console.log(classInstance.tweet);