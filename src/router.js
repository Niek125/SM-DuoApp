import Vue from "vue"
import Router from "vue-router"
import LogIn from "@/components/LogIn";
import Meals from "@/components/Meals";
import AppWrapper from "@/components/AppWrapper";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "*",
            redirect: "/meals",
        },
        {
            path: "/mealshare",
            name: "MealShare",
            component: AppWrapper,
            children: [
                {
                    path: "/meals",
                    name: "Meals",
                    component: Meals,
                    meta: {
                        auth: true,
                        title: "Meals",
                    },
                },
            ],
        },
        {
            path: "/login",
            name: "login",
            component: LogIn,
        },
    ]
})