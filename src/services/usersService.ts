import { Observable, Subscription } from "rxjs";
import { ajax } from "rxjs/ajax";

const userService = (url: string):Observable<Subscription> => {
  return ajax.getJSON(url);
}

export { userService };