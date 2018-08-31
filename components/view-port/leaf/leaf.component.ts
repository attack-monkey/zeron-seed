import { component } from "zeron/functions/component.function";
import { $ } from "zeron/functions/$.function";
import { leafTemplate } from "./leaf.template";
import { pushStateRoutes } from 'zeron/functions/push-state-routes.function';
import { getState, state } from "../../../node_modules/zeron/functions/store.function";
import { iu } from "../../../node_modules/zeron/functions/iu.functions";

export function leafComponent() {
    // Only load background if it hasn't already been loaded - otherwise ie will flicker on route changes
    if (getState('leafComponentLoaded') !== true) {
        component($('body'), leafTemplate());
        state().set(iu(getState(), 'leafComponentLoaded', true));
    }
}