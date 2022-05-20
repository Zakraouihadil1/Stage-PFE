import { CheckboxControlValueAccessor } from "@angular/forms";
import { user } from 'src/app/models/user.model';

export class projet{
    id?:any;
    Titre?:string;
    Description?:string;
    M1?:string;
    Process?:string;
    Machines?:string;
    user?:any;
    valid?:boolean;
    status?:string;


}