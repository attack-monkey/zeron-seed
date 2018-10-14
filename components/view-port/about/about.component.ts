import { component } from "zeron/functions/component.function";
import { debug } from "zeron/functions/debug.function";
import { aboutTemplate } from "./about.template";

export function aboutComponent() {
    debug().log('Route: /about => aboutComponent() Loaded...')
    component('main-router-component', aboutTemplate());

}