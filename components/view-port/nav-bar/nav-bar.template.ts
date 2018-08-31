export function navbarTemplate(route, transition) { return `
<nav id="nav-bar-component" class="navbar navbar-expand navbar-light bg-light">
    <zeron-t-a id="navbar-brand" data-transition=${transition} class="navbar-brand" href="/">Zeron</zeron-t-a>
    <ul class="navbar-nav">
        <li class="nav-item ${route === '' ? 'active' : ''}">
            <zeron-t-a data-transition=${transition} class="nav-link" href="/">Home ${route === '' ?
                '<span class="sr-only">(current)</span>' : '' }
            </zeron-t-a>
        </li>
        <li class="nav-item ${route === 'about' ? 'active' : ''}">
            <zeron-t-a data-transition=${transition} class="nav-link" href="/about">About ${route === 'about' ?
                '<span class="sr-only">(current)</span>' : ''}
            </zeron-t-a>
        </li>
    </ul>
</nav>
`; }