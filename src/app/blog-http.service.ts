import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'

@Injectable()
export class BlogHttpService {
  
  public allBlogs;
  public currentBlog;
  public baseUrl='https://blogapp.edwisor.com/api/v1/blogs';
  public authToken='NmZmNzQzNWNkNWI2MDA2MzMyOTQ1MzA5Y2VhZjc3YTgxMDY3ZjY3YTIxMWViMWM1MjljNjIwNjVmMDIwNzViMjZiZDA5ODU5MDA0NmQ2Y2QyZGMwODgwZGQ5NTZlZGY1YmU2ZjIxM2Q1MDQ1YzAxMjIyMTA5ZjdmYTQzZGQ3MTU3Zg=='	

  constructor(private _http:HttpClient) {
    console.log("Hi This is ");
   }

  private handleError(err:HttpErrorResponse)
  {
    console.log("hanfle error called")
    console.log(err.message)
    return Observable.throw(err.message)
  }

   public getAllBlogs():any
   {
     let myResponse= this._http.get(this.baseUrl+'/all?authToken='+this.authToken);
     console.log(myResponse);
     return myResponse;
     
   }
   public getSingleBlogInformation(currentBlogId):any
   {
     let myResponse=this._http.get(this.baseUrl+'/view'+'/'+currentBlogId+'?authToken='+this.authToken)
     return myResponse
   }  

   public createBlog(blogData):any
   {
     let myResponse=this._http.post(this.baseUrl+'/create'+'?authToken='+this.authToken, blogData)
     return myResponse
   }
 
   public deleteBlog(blogId):any
   { 
     let data={}
     let myResponse=this._http.post(this.baseUrl+'/'+blogId+'/delete'+'?authToken='+this.authToken, data)
     return myResponse
   }

   editBlog(blogId,blogData): any {

    
    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData)
    return myResponse;

  }// end delete blog




}
