export function navbarTemplate(route) { return `
<nav id="nav-bar-component" class="navbar navbar-expand navbar-light bg-light">
    <zeron-a id="navbar-brand" class="navbar-brand" href="/">Zeron</zeron-a>
    <ul class="navbar-nav">
            <li class="nav-item ${route === '' ? 'active' : ''}">
                <zeron-a class="nav-link" href="/">Home ${route === '' ?
                    '<span class="sr-only">(current)</span>' : '' }
                </zeron-a>
            </li>
            <li class="nav-item ${route === 'about' ? 'active' : ''}">
                <zeron-a class="nav-link" href="/about">About ${route === 'about' ?
                    '<span class="sr-only">(current)</span>' : ''}
                </zeron-a>
            </li>
        </ul>
    <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
    </div> -->
</nav>
`; }