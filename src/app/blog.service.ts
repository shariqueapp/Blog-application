import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {
  public allBlogs =
  [
    {
      "blogId":"1",
      "lastModified":"2017-10-20T12:20:47",
      "created":"2017-10-20T12:20:47.854Z",
      "tags":[],
      "author":"Admin",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHTML":"This is a blog Body",
      "description":"this is first blog description",
      "title":"This is Body 1"
    
   },
    
   {
     
      "blogId":"2",
      "lastModified":"2017-10-20T12:20:47",
      "created":"2017-10-20T12:20:47.854Z",
      "tags":[],
      "author":"Admin",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHTML":"This is a blog Body",
      "description":"this is first blog description",
      "title":"This is Body 2"
    
   },
    
    {
      "blogId":"3",
      "lastModified":"2017-10-20T12:20:47",
      "created":"2017-10-20T12:20:47.854Z",
      "tags":[],
      "author":"Admin",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHTML":"This is a blog Body",
      "description":"this is first blog description",
      "title":"This is Body 3"
    }


  ]
 public currentBlog;

constructor()
{
  console.log("Service constructor is called");
}

  public getAllBlogs():any
  {
    return this.allBlogs;
  }
  public getSingleBlogInformation(currentBlogId):any
  {
     for(let blog of this.allBlogs)
     {
       if(blog.blogId==currentBlogId)
       {
        this.currentBlog=blog;
       }
     }
     console.log(this.currentBlog);
     return this.currentBlog;
  }

  

}