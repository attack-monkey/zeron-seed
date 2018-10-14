import { component, $, debug, urlSegments, getState } from 'zeron';
import { aboutComponent } from './about/about.component';
import { navbarComponent } from './nav-bar/nav-bar.component';
import { leafComponent } from './leaf/leaf.component';
import { homeComponent } from './home/home.component';

export function viewPort() {

    // load background

    /*
     * The leaf component loads the background image into <div id="#leaf-component></div>
     */

    leafComponent();

    // load foreground sockets

    /*
     * The following template is loaded into <div id="#entry-component></div>
     */

    component(
        'entry-component', `
            <div id="nav-bar-component"></div>
            <div id="main-router-component" class="fade-in"></div>
        `, 
        {
            // After the template has loaded, then load child components...
            next: () => { loadChildComponents(); 
        }
    });
}

function loadChildComponents() {
    // load child components

    // navbar
    navbarComponent();

    // router
    const route = urlSegments();
    switch(route[1]) {
        case '' : 
            homeComponent();
            break;
        case 'about': 
            aboutComponent();
            break;
    } 
}