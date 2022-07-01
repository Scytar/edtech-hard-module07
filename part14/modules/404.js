export function render404() {
    const app = document.getElementById('app');

    app.innerHTML = `
        <div id="notFound" class="contentDiv">
            <h1>Oops!</h1>
            <h2>We couldn't find the page</h2>
            <p>Please check the link</p>
        </div>
    `

    return null;
}