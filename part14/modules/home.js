export function renderHome() {
    const app = document.getElementById('app');

    app.innerHTML = `
        <div id="home" class="contentDiv">
            <figure class="logoWrapper"><img class="noShadow" src="../edtech-hard-module07/assets/imgs/logo.png" alt=""></figure>
            <h1>Wendy's Candy</h1>
            <h3>World's best fictional candy store!</h3>
        </div>
    `

    return null;
}