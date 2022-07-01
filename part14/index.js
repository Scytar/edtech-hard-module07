import { renderHome } from './modules/home.js';
import { renderChocolate } from './modules/chocolate.js';
import { renderCupcake } from './modules/cupcake.js';
import { renderCandy } from './modules/candy.js';
import { render404 } from './modules/404.js';

const homeAnchor = document.getElementById('homeAnchor');
const chocolateAnchor = document.getElementById('chocolateAnchor');
const cupcakeAnchor = document.getElementById('cupcakeAnchor');
const candyAnchor = document.getElementById('candyAnchor');

// Create custom events of type 'rout'
const routHome = new CustomEvent('rout', {
    detail: {
        id: homeAnchor.id
    }
});
const routChocolate = new CustomEvent('rout', {
    detail: {
        id: chocolateAnchor.id
    }
});
const routCupcake = new CustomEvent('rout', {
    detail: {
        id: cupcakeAnchor.id
    }
});
const routCandy = new CustomEvent('rout', {
    detail: {
        id: candyAnchor.id
    }
});

function selectAnchor(id) {
    // Remove selected class from all anchor items
    document.querySelectorAll('.anchor').forEach( (item)=>{
        item.classList.remove('selected');
    });
    // Add selected classe to specified id
    document.querySelector(`#${id}`).classList.add('selected');
    // console.log(id)
}

// Load content and page's title
function loadContent(id) {
    switch (id) {
        case 'homeAnchor':
            renderHome();
            document.title = `Wendy's Candy`
            break;
        case 'chocolateAnchor':
            renderChocolate();
            document.title = `Wendy's Brigadeiro`
            break;
        case 'cupcakeAnchor':
            renderCupcake();
            document.title = `Wendy's Cupcakes`
            break;
        case 'candyAnchor':
            renderCandy();
            document.title = `Wendy's Candies`
            break;
        default:
            render404();
            document.title = `Wendy's confused`;
            break;
    };
};

function pushModule(event) {
    // Get id of the clicked anchor class element
    let id = event.detail.id;

    // Give selected element the 'select' class
    selectAnchor(id);

    // Update page's title
    document.title = `Wendy's ${event.target.textContent}`;

    // Switch for browser's history
    switch (id) {
        case 'homeAnchor':
            window.history.pushState(`homeAnchor`, '', `/part14/`);
            break;
        case 'chocolateAnchor':
            window.history.pushState(`chocolateAnchor`, '', `/part14/#chocolate`);
            break;
        case 'cupcakeAnchor':
            window.history.pushState(`cupcakeAnchor`, '', `/part14/#cupcakes`);
            break;
        case 'candyAnchor':
            window.history.pushState(`candyAnchor`, '', `/part14/#candy`);
            break;
        default:
            window.history.pushState(`${id}`, '', `/part14/#${event.target.textContent}`);
            break;
    }
    // console.log(window.history)

    // Render JS module for id
    loadContent(id);
}

homeAnchor.addEventListener('click', (e)=>{window.dispatchEvent(routHome)});
chocolateAnchor.addEventListener('click', ()=>{window.dispatchEvent(routChocolate)});
cupcakeAnchor.addEventListener('click', (e)=>{window.dispatchEvent(routCupcake)});
candyAnchor.addEventListener('click', (e)=>{window.dispatchEvent(routCandy)});

// When using browser's Foward/Back
window.addEventListener('popstate', (e)=>{
    let stateId = e.state;
    // console.log(e)
    //Don't run if state is not a string
    if (typeof(stateId) === 'string') {
        selectAnchor(stateId);
        loadContent(stateId);
    }
})

//Listens for any 'rout' event
window.addEventListener('rout', (e)=>{pushModule(e)});

window.addEventListener('hashchange', (e)=>{
    let hash = location.hash.slice(1) + 'Anchor';
    // console.log(hash)
    // Don't run if hash is not a string / emptystring
    if (typeof(hash) === 'string' && hash != 'Anchor') {
        selectAnchor(hash);
        loadContent(hash);
    }
})

//Dispatch 'rout' @ end of JS                         UNCOMMENT ME!        UNCOMMENT ME!        UNCOMMENT ME!        UNCOMMENT ME!
window.dispatchEvent(routHome)

//Listens for URL change
    // let currentUrl = location.href;
    // setInterval(() => {
    //     console.log("URL Listener!")
    //     if (currentUrl != location.href) {
    //         currentUrl = location.href;
    //         console.log("URL Changed!")
    //     }
    // }, 500);