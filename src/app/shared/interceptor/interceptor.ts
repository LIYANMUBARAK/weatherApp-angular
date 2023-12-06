import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, finalize } from "rxjs";
import { LoaderService } from "../loader/loader.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class interceptor implements HttpInterceptor{

    constructor(public loaderService:LoaderService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        this.loaderService.isLoading.next(true)

        return next.handle(req).pipe(
            finalize(()=>{
                this.loaderService.isLoading.next(false)
            })
        )
      
    }
}