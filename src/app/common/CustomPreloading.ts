import { PreloadingStrategy, Route } from '@angular/router';
import { Observable,of } from 'rxjs';

//this is custome preloading 
export class CustomPreloading implements PreloadingStrategy {
    preload(route: Route, preload: Function): Observable<any> {
        if (route.data && route.data.preload) {
            return preload();
        } else {
            return of(null);
        }
    }
}