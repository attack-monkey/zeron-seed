import { component } from "zeron/functions/component.function";
import { urlSegments } from "zeron/functions/url-segments.function";
import { navbarTemplate } from "./nav-bar.template";

export function navbarComponent() {
    const transition = JSON.stringify({
        type: 'fade',
        classTarget: 'main-router-component',
        socketTarget: 'entry-component'
    });
    component('nav-bar-component',
        navbarTemplate(
            urlSegments()[1], transition
        )
    );
}