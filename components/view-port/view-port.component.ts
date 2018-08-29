import { component } from 'zeron/functions/component.function';
import { $ } from 'zeron/functions/$.function';
import { homeComponent } from './home/home.component';
import { debug } from 'zeron/functions/debug.function';
import { aboutComponent } from './about/about.component';
import { navbarComponent } from './nav-bar/nav-bar.component';
import { leafComponent } from './leaf/leaf.component';

export function viewPort() {

    // load background

    /*
     * The leaf component loads the background image + also loads an entry socket for the application
     */

        leafComponent();

    // load foreground sockets

    /*
     * The navbar and router are then loaded into the entry-socket
     */

        component($('#entry-socket'), `
            <div id="nav-bar-socket"></div>
            <div id="main-router-socket"></div>
        `);

    // load child components

        // navbar
        navbarComponent();

        // routes

        /*
         * Note the use of debug logging to notify the developer of routes
         */

        debug().log('Main Router - Loading Routes...');
        debug().log('- homeComponent()');
        homeComponent();
        debug().log('- aboutComponent()');
        aboutComponent();
}