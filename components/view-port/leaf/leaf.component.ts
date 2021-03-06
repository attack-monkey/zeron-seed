import { component, $, getState, state, iu, updateState } from "zeron";
import { leafTemplate } from "./leaf.template";

export function leafComponent() {
    // Only load background if it hasn't already been loaded - otherwise ie will flicker on route changes

    component('leaf-component', leafTemplate());
    updateState('leafComponentLoaded', true);
}