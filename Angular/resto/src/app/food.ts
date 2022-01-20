export class Food {
    id:number=0;
    foodName:string='';
    FoodDetail:string='';
    foodPrice:number=0;
    time:string='';
    foodImage:string='';

    constructor(id:number,foodName:string,FoodDetail:string,foodPrice:number,time:string,foodImage:string){
        this.id = id;
        this.foodName = foodName;
        this.FoodDetail = FoodDetail;
        this.foodPrice = foodPrice;
        this.time = time
        this.foodImage = foodImage;
    }
}
