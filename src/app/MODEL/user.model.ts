import { cart } from "./cart.model";

export class userModel{

    id:number | null = null;
    name:string|null = null;
    email:string|null = null;
    password:string|null = null;
    cart: cart[] = [];
}