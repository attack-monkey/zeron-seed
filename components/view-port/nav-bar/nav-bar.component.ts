import { component } from "zeron/functions/component.function";
import { $ } from "zeron/functions/$.function";
import { urlSegments } from "zeron/functions/url-segments.function";
import { navbarTemplate } from "./nav-bar.template";
import { pushStateTransitions } from "../../../node_modules/zeron/functions/push-state-transitions.function";

export function navbarComponent() {
    component($('#nav-bar-socket'),
        navbarTemplate(
            urlSegments()[1], JSON.stringify({
                type: 'fade',
                out: {
                    component: '#main-router-socket'
                }
            })
        )
    );
    pushStateTransitions('nav-bar-component');
}