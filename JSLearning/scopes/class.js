class user{
    constructor(){
       this.firstname="demi";
    }
    firstname;
}
class student extends user{
    constructor(){
        super();
        this.username="ram";
    }
    username="mahitha";
}
 s =new student();
 s.username="zzz";
console.log(s);
