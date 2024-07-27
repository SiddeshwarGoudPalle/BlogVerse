// src/api/apiConstants.ts


export const ApiConstants = {
    Auth: {
      REGISTER: "/auth/Register",
      LOGIN: "/auth/Login",
      UPDATE_EMAIL:"/auth/update-email",//update email
      UPDATE_USERNAME:"/auth/update-username",// update username
      UPDATE_PASSWORD:"/auth/update-password",//update password
    },
    Blog:{
      CREATE_BLOG:"/api/blogs",
      GET_BLOG_BY_ID:"/api/blogs/id",
      GET_BLOG_BY_TITLE:"/api/blogs/search/title",
      GET_BLOG_BY_AUTHOR:"/api/blogs/search/author",//get blogs with username
      GET_BLOG_BY_USER:"/api/blogs/search/user",//get blog by id
      GET_BLOG_BY_GENRE:"/api/blogs/search/genre",//get blog by genre

    }

  };
  