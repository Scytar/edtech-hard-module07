export function renderCupcake() {
    const app = document.getElementById('app');

    app.innerHTML = `
    <div id="cupcake" class="contentDiv">
        <figure><img src="../edtech-hard-module07/assets/imgs/cupcakes.webp" alt=""></figure>
        <h1>Cupcakes</h1>
        <h3>If Heaven has a flavor, this has it!</h3>
        <p>There's nothing like a slow bite in our juicy cupcakes</p>
    </div>
    `

    return null;
}