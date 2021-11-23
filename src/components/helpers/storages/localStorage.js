


class LocalStorage {
    constructor(key){
        this.items = localStorage.getItem(key)
    }



    storage (){
        if(this.items){
            return this.items
        }
    }

    setStorage (key, data){
        localStorage.setItem(key, data)
    }

  
}

export default LocalStorage