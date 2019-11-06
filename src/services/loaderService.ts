import { Observable, of } from "rxjs";

const loaderService = ():Observable<null> => {
  return of(null);
}

export { loaderService };