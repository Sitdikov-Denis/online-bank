import { NotFound } from "@/components/screens/not-found/not-found.component";
import { Routes } from "./routes.data";

export class Router {
    #currentRoute
    #routes
    constructor() {
        this.#routes = Routes;
        this.#currentRoute = null;

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
        this.render()
    }

    render() {
        const component = new this.#currentRoute.component();
        document.getElementById('app').innerHTML = component.render();
    }
}