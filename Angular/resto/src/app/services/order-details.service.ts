import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../food';


@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor(private http:HttpClient) { }

  // search property
  public search = new BehaviorSubject<string>("");
  url = "http://localhost:8000";
  


  getData():Observable<any>{
    return this.http.get<Food[]>(this.url+"/getFoodDetails");
    // return this.http.get(this.url)
  }

  postData(user:any){
    var URL = this.url + "/Users";
    // return this.http.post(URL,data);
    let header = {'content-type':'application/json'};

    return this.http.post(URL,user,{'headers':header,responseType:'text'});
  }
  

  foodDetails=[
    {
      id:1,
      foodName:"Paneer Grilled Sandwitch",
      FoodDetail:"Pen-fried masala paneer.",
      foodPrice:200,
      foodImage:"https://static.toiimg.com/thumb/60043279.cms?imgsize=195460&width=800&height=800"
    },
    {
      id:2,
      foodName:"Paneer supreme",
      FoodDetail:"Onion | green capsicum | mushroom | black Olives",
      foodPrice:329,
      foodImage:"https://5.imimg.com/data5/TC/IN/GLADMIN-61316502/paneer-soya-supreme-pizza-500x500.png"
    },
    {
      id:3,
      foodName:"Paneer Burger",
      FoodDetail:"panner ",
      foodPrice:149,
      foodImage:"http://5.imimg.com/data5/SELLER/Default/2021/2/NP/HV/OK/19736347/paneer-patty-burger-500x500.jpg"
    },
    {
      id:4,
      foodName:"Paneer Grilled Sandwitch",
      FoodDetail:"Pen-fried masala paneer.",
      foodPrice:200,
      foodImage:"https://static.toiimg.com/thumb/60043279.cms?imgsize=195460&width=800&height=800"
    },
    {
      id:5,
      foodName:"Veg Masala",
      FoodDetail:"A homely mix of mashed potato and veggies.",
      foodPrice:130,
      foodImage:"https://www.ayurveda.com/ayurveda/wp-content/uploads/2021/08/masala-1.jpeg"
    },
    {
      id:6,
      foodName:"Cheesecake ice cream",
      FoodDetail:"Oreo ice cream.",
      foodPrice:240,
      foodImage:"https://www.the-girl-who-ate-everything.com/wp-content/uploads/blogger/_A39cgxoHN64/Spk75M9EnbI/AAAAAAAADvg/aScnJ1FBy2o/s1600/IMG_3318.JPG"
    },
  ]
}
