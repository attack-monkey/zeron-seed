export function aboutTemplate(transition) { return `
<div id="about-component" class="jumbotron jumbotron-fluid fade-in">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="display-4">About Zeron Transitions</h1>
                <p class="lead">Zeron seed is a basic set up that implements:
                    <ul>
                        <li>A background image using font-awesome</li>
                        <li>A navbar</li>
                        <li>And home &amp; about routes</li>
                    </ul>
                    Zeron uses bootstrap and fontawesome straight from the CDN.
                    <br>
                    Apart from that it's pretty basic.
                </p>
                <hr class="my-4">
                <p>Head back home...</p>
                <p class="lead">
                    <zeron-t-a data-transition=${transition} class="btn btn-primary btn-lg" href="/" role="button"><i class="fas fa-chevron-left"></i> Back home</zeron-t-a>
                </p>
            </div>
        </div>
    </div>
</div>
`; }