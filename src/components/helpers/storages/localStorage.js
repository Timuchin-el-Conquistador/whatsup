


class LocalStorage {

    static returnContacts(key){
         const contacts = localStorage.getItem(key)
         return JSON.parse(contacts)
    }
    static setContacts({key, data}){
        console.log(key,data)
        localStorage.setItem(key, JSON.stringify(data))
    }
}

export default LocalStorage