import { NotFound } from "@/components/screens/not-found/not-found.component";
import { Routes } from "./routes.data";
import { Layout } from "@/components/layout/layout.component";

export class Router {
    #routes = Routes
    #currentRoute =  null
    #layout = null
    constructor() {
        this.#handleRouteChange()
    }

    getCurrentPath() {
        return window.location.pathname;
    }

    #handleRouteChange() {
        const path = this.getCurrentPath() || '/';
        let route = this.#routes.find(route => route.path === path);

        if (!route) {
            route = {
                component: NotFound
            }

        }

        this.#currentRoute = route;
        this.#render()
    }

    #render() {
        debugger
        const component = new this.#currentRoute.component();

        if (!this.#layout) {
            this.#layout = new Layout({
                router: this,
                children: component.render()
            })
            document.getElementById('app').innerHTML = this.#layout.render()
        }
        else {
            document.querySelector('main').innerHTML = component.render()
        }
        
    }
}