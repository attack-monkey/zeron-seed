import { component } from "zeron/functions/component.function";
import { $ } from "zeron/functions/$.function";
import { urlSegments } from "zeron/functions/url-segments.function";
import { debug } from "zeron/functions/debug.function";
import { aboutTemplate } from "./about.template";
import { pushStateRoutes } from "zeron/functions/push-state-routes.function";
import { pushStateTransitions } from "../../../node_modules/zeron/functions/push-state-transitions.function";

export function aboutComponent() {
    
    if (urlSegments()[1] === 'about') {
        debug().log('Route: /about => aboutComponent() Loaded...')
        component($('#main-router-socket'), aboutTemplate(
            JSON.stringify({
                type: 'fade',
                out: {
                    component: '#about-component'
                }
            })
        ));
        pushStateTransitions('about-component');
    }
}