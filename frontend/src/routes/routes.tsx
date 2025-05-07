//import Users from "@/pages/users/index.jsx";
//import Posts from "@/pages/posts/index.jsx";
//import PostsMore from "@/pages/posts/actions/more/index.jsx";
//import PostsEdit from "@/pages/posts/actions/edit/index.jsx";
//import PostsCreate from "@/pages/posts/actions/create/index.jsx";

//import AuthorizationLayout from "@/UI/layouts/auth.jsx";
//import HomeLayout from "@/UI/layouts/home.jsx";
import { Navigate } from "react-router-dom";

//import SignIn from "@/pages/auth/signIn/index.jsx";
//import SignUp from "@/pages/auth/signUp/index.jsx";
//import Badge from "@/pages/auth/badge/index.jsx";

import Homespace from "@/views/homespace.jsx";
import Authentication from "@/views/authentication.jsx";

import HomeSpace from "@/pages/homespace/index.jsx";
import NewSignIn from "@/pages/sign-in/index.jsx";
import NewSignUp from "@/pages/sign-up/index.jsx";

import NewUsers from "@/pages/new-users/index.jsx";
import NewPosts from "@/pages/new-posts/index.jsx";
import NotFound from "@/pages/404/index.jsx";
import Feed from "@/pages/feed/index.jsx";

import PostView from "@/pages/new-posts/view.jsx";
import PostCreate from "@/pages/new-posts/create.jsx";
import PostEdit from "@/pages/new-posts/edit.jsx";
/*

Postagens :: {Users, Posts, PostsMore, PostsEdit, PostsCreate }
Layouts :: {AuthorizationLayout, HomeLayout, Natvigate }
Authentication :: {SignIn, SingUp, Badge }

*/

export const routes = [
  {
    path: "/",
    element: <Navigate to={String(import.meta.env.VITE_ROUTER_FEED_POSTS)} />,
  },
  // [Routes] ~ Users - Views
  {
    path: "/postweb/",
    element: <Homespace children={<HomeSpace />} />,
  },
  {
    path: import.meta.env.VITE_ROUTER_FEED_POSTS,
    element: <Homespace children={<Feed children={<NewPosts />} />} />,
  },
  {
    path: import.meta.env.VITE_ROUTER_FEED_USERS,
    element: <Homespace children={<Feed children={<NewUsers />} />} />,
  },
  {
    path: "/postweb/posts/view",
    element: <Homespace children={<PostView />} />,
  },
  {
    path: "/postweb/posts/create",
    element: <Homespace children={<PostCreate />} />,
  },
  {
    path: "/postweb/posts/edit",
    element: <Homespace children={<PostEdit />} />,
  },
  {
    path: import.meta.env.VITE_ROUTER_SIGNUP,
    element: <Authentication children={<NewSignUp />} />,
  },
  {
    path: import.meta.env.VITE_ROUTER_SIGNIN,
    element: <Authentication children={<NewSignIn />} />,
  },
  // [Routes] ~ 404
  {
    path: "*",
    element: <Authentication children={<NotFound />} />,
  },
];

/*
old
{
  {
    path: "/signIn",
    element: <AuthorizationLayout children={<SignIn />} />,
  },
  {
    path: "/signUp",
    element: <AuthorizationLayout children={<SignUp />} />,
  },
  {
    path: "/badge",
    element: <AuthorizationLayout authorization={true} children={<Badge />} />,
  },
  {
    path: "/postweb/users/",
    element: <HomeLayout children={<Users />} />,
  },
  // [Routes] ~ Posts - Views
  {
    path: "/postweb/",
    element: <HomeLayout children={<h1>...funcionou...</h1>} />,
  },
  {
    path: "/postweb/posts/",
    element: <HomeLayout children={<Posts />} />,
  },
  {
    path: "/postweb/posts/create",
    element: <HomeLayout children={<PostsCreate />} />,
  },
  {
    path: "/postweb/posts/edit/:id",
    element: <HomeLayout children={<PostsEdit />} />,
  },
  {
    path: "/postweb/posts/more/:id",
    element: <HomeLayout children={<PostsMore />} />,
  },
}
*/
