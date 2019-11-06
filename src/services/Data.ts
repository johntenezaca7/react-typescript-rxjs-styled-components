import { Observable, Subscription } from "rxjs";
import { ajax } from "rxjs/ajax";

enum Endpoints {
  Users = "https://jsonplaceholder.typicode.com/users",
};

const getItems = (url:string):Observable<Subscription> => ajax.getJSON(url);

const getItemById = (id:number):Observable<Subscription> => ajax.getJSON(`${Endpoints.Users}?id=${id}`);

export { getItems, getItemById };