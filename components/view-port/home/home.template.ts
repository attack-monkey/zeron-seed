export function homeTemplate() { return `
<div class="jumbotron jumbotron-fluid">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">Welcome to Zeron3.
                    <br>Zeron is a functional application framework.</p>
                <hr class="my-4">
                <p>Find out more by clicking ze button below.</p>
                <p class="lead">
                    <zeron-a class="btn btn-primary btn-lg" href="/about" role="button">Learn more</zeron-a>
                </p>
            </div>
        </div>
    </div>
</div>
`; }