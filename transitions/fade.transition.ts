import { timer } from 'rxjs';
import { route } from "../node_modules/zeron/functions/route.function";
import  { $ } from 'zeron';
import { clearComponent } from "zeron";

export function fadeTransition(path, data) {
    clearComponent(data.socketTarget); // Run the traget component...
    $(`#${data.classTarget}`).classList.remove('fade-in');
    $(`#${data.classTarget}`).classList.add('fade-out');
    timer(1000).subscribe(e => {
        route().pushState(path); // Wait for one second, then redirect
    })
}