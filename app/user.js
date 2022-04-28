class user{

    constructor(id, username, name, bio){
        this.id=id
        this.username=username
        this.name=name
        this.bio=bio
        this.dateCreated=new Date()
        this.lastUpdate=new Date()
    }

    getUsername(){
        return (this.username)
    }

    getBio(){
        return(this.bio)
    }

    getDateCreated(){
        return(this.dateCreated)
    }

    getLastUpdate(){
        return(this.lastUpdate)
    }

    setUsername(username){
        this.username=username
    }

    setBio(bio){
        this.bio=bio
    }
}

module.exports=user