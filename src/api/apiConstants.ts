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
      CREATE_BLOG:()=>{
        return "/api/blogs";
      },
      GET_BLOG_BY_USER:"/api/blogs/search/user"
    }

  };
  