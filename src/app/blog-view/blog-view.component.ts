import { Component, OnInit, OnDestroy,ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import { Location } from '@angular/common';
import { Local } from 'protractor/built/driverProviders';




@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit,OnDestroy {

  public currentBlog;
 
  constructor(private _route: ActivatedRoute, private router : Router,public blogService: BlogService,public blogHttpService: BlogHttpService,private toastr: ToastsManager, vcr: ViewContainerRef, private location: Location) {
    console.log("constructor is called");
    this.toastr.setRootViewContainerRef(vcr);

   }

  ngOnInit() {
    console.log("ngOninit Is called  view");
    let myBlogId=this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data =>
      {
        console.log(data);
        this.currentBlog=data["data"];
      },
      error=>
      {
        console.log("error has occoured");
        console.log(error.errorMessage);
      })
    
    
  }

public deleteThisBlog():any
{
  this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
    data =>
    {
      console.log(data);
      this.toastr.success('blog deleted success','sucess');
      setTimeout(()=>
      {
        this.router.navigate(['/home']);
      },1)
    },
    error=>
    {
      console.log("error has occoured");
      console.log(error.errorMessage);
      this.toastr.success('error occoured','Error');
   }
  )
}


public goBackToPreviousPage():any
{
  this.location.back();
}


  ngOnDestroy() {
    console.log("Destructor view");
   
  } 


}


