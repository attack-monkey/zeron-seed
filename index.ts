// index.ts
import { state, store, getState } from "zeron/functions/store.function";
import { debug } from "zeron/functions/debug.function";
import { onRouteChange } from "zeron/functions/on-route-change.function";
import { viewPort } from "./components/view-port/view-port.component";
import { loadTransitions } from "./transitions/transitions-loader.function";

// For development - turn debugging on.
debug().on();

// Set the number of states that are stored. Increase the number in development to trace changes to state over time.
store().maxLength(2);

// Load page transition functions
loadTransitions(); 

// Set the initial state of the application.
state().set({
  greeting: 'hello world'
});

// Load the viewport component on app start, and any route changes.
onRouteChange(viewPort);
