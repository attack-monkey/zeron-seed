import { component } from "zeron/functions/component.function";
import { $ } from "zeron/functions/$.function";
import { urlSegments } from "zeron/functions/url-segments.function";
import { debug } from "zeron/functions/debug.function";
import { homeTemplate } from "./home.template";
import { pushStateRoutes } from 'zeron/functions/push-state-routes.function';

export function homeComponent() {
    
    if (urlSegments()[1] === '') {
        debug().log('Route: / => homeComponent() Loaded...')
        component($('#main-router-socket'), homeTemplate());
        pushStateRoutes('home-component');
    }
}