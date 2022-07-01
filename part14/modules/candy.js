export function renderCandy() {
    const app = document.getElementById('app');

    app.innerHTML = `
    <div id="candy" class="contentDiv">
        <figure><img src="../assets/imgs/candies.jpg" alt=""></figure>
        <h1>A Lot of Candies</h1>
        <h3>Dive into a olympic pool of sweetness!</h3>
        <p>Come discover a whole new world of flavours</p>
    </div>
    `

    return null;
}