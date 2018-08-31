export function homeTemplate(transition) { return `
<div id="home-component" class="jumbotron jumbotron-fluid fade-in">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">Welcome to Zeron Transitions.
                    <br>Essentially the Zeron seed with transitions between pages.</p>
                <hr class="my-4">
                <p>Find out more by clicking ze button below.</p>
                <p class="lead">
                    <zeron-t-a data-transition=${transition} class="btn btn-primary btn-lg" href="/about" role="button">Learn more</zeron-t-a>
                </p>
            </div>
        </div>
    </div>
</div>
`; }