export class Users {
    id:number=0;
    email:string='';
    pass:string='';
    mobile:number=0;
    

    constructor(id:number,email:string,pass:string,mobile:number){
        this.id = id;
        this.email = email;
        this.pass = pass;
        this.mobile = mobile;
    
    }
}
