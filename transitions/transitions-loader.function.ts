import { transitions } from "../node_modules/zeron/functions/transitions.function";
import { fadeTransition } from "./fade.transition";
import { debug } from "../node_modules/zeron/functions/debug.function";

export function loadTransitions() {
    debug().log('loading fade transition');
    transitions().set('fade', fadeTransition);
}