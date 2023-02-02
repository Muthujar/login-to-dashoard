import cookie from "react-cookies";

export const isLoogedIn = () => {
  const cookieValue = cookie.load("Tokeeen");
  console.log(cookieValue);
  return cookieValue;
};
