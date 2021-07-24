export interface Doctor {
    
    id : number;
    name : string;
    address_line1 : string;
    address_line2 : string;
    pincode : number;
    image : string;
    rating : number;
    isFavorite: boolean;
    degree?: object;
}