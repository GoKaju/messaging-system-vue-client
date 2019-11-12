import { getModule } from "vuex-module-decorators";
import MainModule from "@/store/modules/mainModule";

const main = getModule(MainModule);

// Check before each page load whether the page requires authentication/
// if it does check whether the user is signed into the web app or
// redirect to the sign-in page to enable them to sign-in

export default (next:any) => {
   // console.log(main.user)
    // @ts-ignore
    if (main.user&& main.user.username) {
        next();
    } else {
      next('/');
    //    next()
    }
}