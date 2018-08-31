import { $ } from "../node_modules/zeron/functions/$.function";
import { timer } from 'rxjs';
import { route } from "../node_modules/zeron/functions/route.function";

export function fadeTransition(path, data) {
    $(data.out.component).classList.remove("fade-in");
    $(data.out.component).classList.add("fade-out");
    timer(1000).subscribe(e => {
        route().pushState(path);
    })
}