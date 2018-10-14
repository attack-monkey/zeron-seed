import { component, debug, pushStateRoutes } from "zeron";
import { homeTemplate } from "./home.template";

export function homeComponent() {
    debug().log('Route: / => homeComponent() Loaded...')
    component('main-router-component', homeTemplate());
}