import { component } from "zeron/functions/component.function";
import { $ } from "zeron/functions/$.function";
import { leafTemplate } from "./leaf.template";
import { pushStateRoutes } from 'zeron/functions/push-state-routes.function';

export function leafComponent() {
    component($('body'), leafTemplate());
}