import { component, $, urlSegments, debug, pushStateTransitions } from "zeron";
import { homeTemplate } from "./home.template";

export function homeComponent() {
    
    if (urlSegments()[1] === '') {
        debug().log('Route: / => homeComponent() Loaded...')
        component($('#main-router-socket'), homeTemplate(
            JSON.stringify({
                type: 'fade',
                out: {
                    component: '#home-component'
                }
            })
        ));
        pushStateTransitions('home-component');
    }
}