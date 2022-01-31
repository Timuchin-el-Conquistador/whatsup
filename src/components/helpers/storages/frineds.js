

class Friends{
    constructor(contact){
        this.contact = contact 
    }

    static addAFriend(contact){
        console.log(contact)
        this.friends.push(contact)
    }

     save(contacts){
        this.friends = [...contacts, this.contact]
        localStorage.setItem('friends', JSON.stringify(this.friends))
    }

    static getFriend(id){
        const friend = this.friends.filter(friend => friend.id===id)
        console.log(friend)
    }

    static getFriends(){
        const friends = localStorage.getItem('friends')
        if(friends!=null){
           return JSON.parse(friends)
        }else{
            return []
        }
    }
}

export default Friends