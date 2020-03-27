import Vue from "vue"
import Router from "vue-router"
import LogIn from "@/components/LogIn";
import Meals from "@/components/Meals";
import AppWrapper from "@/components/AppWrapper";
import Map from "@/components/Map";
import MealForm from "@/components/MealForm";

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
                        title: "Meals",
                    },
                },
                {
                    path: "/map",
                    name: "Map",
                    component: Map,
                    meta: {
                        title: "Map",
                    },
                },
                {
                    path: "/form",
                    name: "Form",
                    component: MealForm,
                    meta: {
                        title: "Form",
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