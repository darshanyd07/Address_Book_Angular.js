import { state } from "@angular/animations";

export class AddressBookModel {
    
    firstName:string;
    address:string;
    city:string;
    state:string;
    zip_code:string;
    mobile_Number:string;

    constructor(firstName:string,address:string,city:string,State:string,zip_code:string,mobile_Number:string) 
         {
        this.firstName=firstName;
        this.address=address;
        this.city=city;
        this.state=State;
        this.zip_code=zip_code;
        this.mobile_Number=mobile_Number;
    }


}
