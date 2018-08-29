import { component } from "zeron/functions/component.function";
import { $ } from "zeron/functions/$.function";
import { pushStateRoutes } from "zeron/functions/push-state-routes.function";
import { urlSegments } from "zeron/functions/url-segments.function";
import { navbarTemplate } from "./nav-bar.template";

export function navbarComponent() {
    component($('#nav-bar-socket'), navbarTemplate(urlSegments()[1]));
    pushStateRoutes('nav-bar-component');
}