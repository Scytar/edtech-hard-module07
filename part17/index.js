const selectUF = document.querySelector('#selectUF');
const selectCity = document.querySelector('#selectCity');
const result = document.querySelector('#result');

function districtsFetch() {
    //Fetch UFs from IBGE's Brazilian States API
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
    .then(res => {
        res.json().then(data =>{

            //Set initial message as placeholder
            selectUF.innerHTML = '<option hidden>Selecione a UF</option>';
            
            //Iterate through fetched array and add options HTML elements inside the select tag
            data.forEach(element => {
                selectUF.innerHTML += `<option value=${element.sigla}>${element.sigla} - ${element.nome}</option>`;
            });

            //Able to use the select HTML tag
            selectUF.removeAttribute('disabled');
        })
    })
    .catch((error)=>{result.innerHTML = error});
};

function locationFetch(UF) {

    //Restrict user interaction during fetch response
    selectCity.setAttribute('disabled', true);

    //Fetch cities geocode from IBGE's location API
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`)
    .then(res => {
        res.json().then(data => {
            //Set placeholder for City Select tag
            selectCity.innerHTML = '<option hidden>Selecione a Cidade</option>';
            
            //Iterate through fetched array and render options HTML elements inside the select tag
            data.forEach(e => {
                selectCity.innerHTML += `<option value=${e.id}>${e.nome}</option>`;
            })

            //Able to use the select HTML tag
            selectCity.removeAttribute('disabled')
        })
    })
    .catch((error) => {result.innerHTML = error});
};

function weatherFetch(id) {
    
    //Fetch from IBGE's Weather Prediction API
    fetch(`https://apiprevmet3.inmet.gov.br/previsao/${id}`)
    .then(res => {
        res.json().then(data =>{
            
            //Today + next 3 days
            const day1 = new Date();
            const day2 = new Date(Date.parse(day1) + 86400000);
            const day3 = new Date(Date.parse(day2) + 86400000);
            const day4 = new Date(Date.parse(day3) + 86400000);

            //Day in DD/MM/YYYY format
            const day1DMY = `${(day1.getDate()).toString().padStart(2,'0')}/${(day1.getMonth()+1).toString().padStart(2,'0')}/${day1.getFullYear()}`;
            const day2DMY = `${(day2.getDate()).toString().padStart(2,'0')}/${(day2.getMonth()+1).toString().padStart(2,'0')}/${day2.getFullYear()}`;
            const day3DMY = `${(day3.getDate()).toString().padStart(2,'0')}/${(day3.getMonth()+1).toString().padStart(2,'0')}/${day3.getFullYear()}`;
            const day4DMY = `${(day4.getDate()).toString().padStart(2,'0')}/${(day4.getMonth()+1).toString().padStart(2,'0')}/${day4.getFullYear()}`;

            const weekday = ["Doming","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];

            // console.log(day1);
            // console.log(day2);
            // console.log(day3);
            // console.log(data[id]);
            // console.log(data[id][`${(day1.getDate()).toString().padStart(2,'0')}/${(day1.getMonth()+1).toString().padStart(2,'0')}/${day1.getFullYear()}`])

            //Reset result display
            result.innerHTML = `
                <div class="dataWrapper">
                    <div class="showData dateLabel">
                        <span>${weekday[day1.getDay()]}</span>
                        <span>${day1DMY}</span>
                    </div>
                    <div class="showData">
                        <img src=${data[id][day1DMY]['manha']['icone']}></img>
                        <span><em>Manhã</em> - ${data[id][day1DMY]['manha']['temp_min']}°C ~ ${data[id][day1DMY]['manha']['temp_max']}°C</span>
                        <span>${data[id][day1DMY]['manha']['resumo']}</span>
                    </div>
                    <div class="showData">
                        <img src=${data[id][day1DMY]['tarde']['icone']}></img>
                        <span><em>Tarde</em> - ${data[id][day1DMY]['tarde']['temp_min']}°C ~ ${data[id][day1DMY]['tarde']['temp_max']}°C</span>
                        <span>${data[id][day1DMY]['tarde']['resumo']}</span>
                    </div>
                    <div class="showData">
                        <img src=${data[id][day1DMY]['noite']['icone']}></img>
                        <span><em>Noite</em> - ${data[id][day1DMY]['noite']['temp_min']}°C ~ ${data[id][day1DMY]['noite']['temp_max']}°C</span>
                        <span>${data[id][day1DMY]['noite']['resumo']}</span>
                    </div>
                </div>
                
                <div class="dataWrapper">
                    <div class="showData dateLabel">
                    <span>${weekday[day2.getDay()]}</span>
                    <span>${day2DMY}</span>
                    </div>
                    <div class="showData">
                        <img src=${data[id][day2DMY]['manha']['icone']}></img>
                        <span><em>Manhã</em> - ${data[id][day2DMY]['manha']['temp_min']}°C ~ ${data[id][day2DMY]['manha']['temp_max']}°C</span>
                        <span>${data[id][day2DMY]['manha']['resumo']}</span>
                    </div>
                    <div class="showData">
                        <img src=${data[id][day2DMY]['tarde']['icone']}></img>
                        <span><em>Tarde</em> - ${data[id][day2DMY]['tarde']['temp_min']}°C ~ ${data[id][day2DMY]['tarde']['temp_max']}°C</span>
                        <span>${data[id][day2DMY]['tarde']['resumo']}</span>
                    </div>
                    <div class="showData">
                        <img src=${data[id][day2DMY]['noite']['icone']}></img>
                        <span><em>Noite</em> - ${data[id][day2DMY]['noite']['temp_min']}°C ~ ${data[id][day2DMY]['noite']['temp_max']}°C</span>
                        <span>${data[id][day2DMY]['noite']['resumo']}</span>
                    </div>
                </div>
                
                <div class="dataWrapper">
                    <div class="showData dateLabel">
                    <span>${weekday[day3.getDay()]}</span>
                    <span>${day3DMY}</span>
                    </div>
                    <div class="showData">
                        <img src=${data[id][day3DMY]['icone']}></img>
                        <span>${data[id][day3DMY]['temp_min']}°C ~ ${data[id][day3DMY]['temp_max']}°C</span>
                        <span>${data[id][day3DMY]['resumo']}</span>
                    </div>
                </div>
                
                <div class="dataWrapper">
                    <div class="showData dateLabel">
                    <span>${weekday[day4.getDay()]}</span>
                    <span>${day4DMY}</span>
                    </div>
                    <div class="showData">
                        <img src=${data[id][day4DMY]['icone']}></img>
                        <span>${data[id][day4DMY]['temp_min']}°C ~ ${data[id][day4DMY]['temp_max']}°C</span>
                        <span>${data[id][day4DMY]['resumo']}</span>
                    </div>
                </div>

            `;

        })
    })
}

selectUF.addEventListener('change', (e) => {locationFetch(e.target.value)});
selectCity.addEventListener('change', (e) => {weatherFetch(e.target.value)});

districtsFetch()