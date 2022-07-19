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

    result.innerHTML = '<h1 style="width: 100%">Carregando...</h1>'

    //Create Custom Promise
    return new Promise((resolve, reject) => {

        //Fetch from IBGE's Weather Prediction API
        fetch(`https://apiprevmet3.inmet.gov.br/previsao/${id}`)
        .then(res => {

            //Return fetched JSON if status is OK
            if (res.status === 200) {
                return res.json();
            };
            //Return error if status is not OK
            return reject('Failed to fetch data')
        })
        .then(data =>{

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

            //Select data to be forwarded
            const newData = [
                [//First day
                    {//Morning
                        weekday: data[id][day1DMY]['manha']['dia_semana'],
                        icon: data[id][day1DMY]['manha']['icone'],
                        summary: data[id][day1DMY]['manha']['resumo'],
                        tMax: data[id][day1DMY]['manha']['temp_max'],
                        tMin: data[id][day1DMY]['manha']['temp_min'],
                        date: day1DMY
                    },
                    {//Afternoon
                        weekday: data[id][day1DMY]['manha']['dia_semana'],
                        icon: data[id][day1DMY]['manha']['icone'],
                        summary: data[id][day1DMY]['manha']['resumo'],
                        tMax: data[id][day1DMY]['manha']['temp_max'],
                        tMin: data[id][day1DMY]['manha']['temp_min']
                    },
                    {//Night
                        weekday: data[id][day1DMY]['manha']['dia_semana'],
                        icon: data[id][day1DMY]['manha']['icone'],
                        summary: data[id][day1DMY]['manha']['resumo'],
                        tMax: data[id][day1DMY]['manha']['temp_max'],
                        tMin: data[id][day1DMY]['manha']['temp_min']
                    }
                ],
                [//Second day
                    {//Morning
                        weekday: data[id][day2DMY]['manha']['dia_semana'],
                        icon: data[id][day2DMY]['manha']['icone'],
                        summary: data[id][day2DMY]['manha']['resumo'],
                        tMax: data[id][day2DMY]['manha']['temp_max'],
                        tMin: data[id][day2DMY]['manha']['temp_min'],
                        date: day2DMY
                    },
                    {//Afternoon
                        weekday: data[id][day2DMY]['manha']['dia_semana'],
                        icon: data[id][day2DMY]['manha']['icone'],
                        summary: data[id][day2DMY]['manha']['resumo'],
                        tMax: data[id][day2DMY]['manha']['temp_max'],
                        tMin: data[id][day2DMY]['manha']['temp_min']
                    },
                    {//Night
                        weekday: data[id][day2DMY]['manha']['dia_semana'],
                        icon: data[id][day2DMY]['manha']['icone'],
                        summary: data[id][day2DMY]['manha']['resumo'],
                        tMax: data[id][day2DMY]['manha']['temp_max'],
                        tMin: data[id][day2DMY]['manha']['temp_min']
                    }
                ],
                {//Third day
                    weekday: data[id][day3DMY]['dia_semana'],
                    icon: data[id][day3DMY]['icone'],
                    summary: data[id][day3DMY]['resumo'],
                    tMax: data[id][day3DMY]['temp_max'],
                    tMin: data[id][day3DMY]['temp_min'],
                    date: day3DMY
                },
                {//Fourth day
                    weekday: data[id][day4DMY]['dia_semana'],
                    icon: data[id][day4DMY]['icone'],
                    summary: data[id][day4DMY]['resumo'],
                    tMax: data[id][day4DMY]['temp_max'],
                    tMin: data[id][day4DMY]['temp_min'],
                    date: day4DMY
                }
            ]
            resolve((newData))
        })
        .catch(error => {reject(error)})
    })
}

async function renderPrediction(id) {

    data = await weatherFetch(id)
    //Reset result display and render
    result.innerHTML = `
        <div class="dataWrapper">
            <div class="showData dateLabel">
                <span>${data[0][0]['weekday']}</span>
                <span>${data[0][0]['date']}</span>
            </div>
            <div class="showData">
                <img src=${data[0][0]['icon']}></img>
                <span><em>Manhã</em> - ${data[0][0]['tMin']}°C ~ ${data[0][0]['tMax']}°C</span>
                <span>${data[0][0]['summary']}</span>
            </div>
            <div class="showData">
                <img src=${data[0][1]['icon']}></img>
                <span><em>Manhã</em> - ${data[0][1]['tMin']}°C ~ ${data[0][1]['tMax']}°C</span>
                <span>${data[0][1]['summary']}</span>
            </div>
            <div class="showData">
                <img src=${data[0][2]['icon']}></img>
                <span><em>Manhã</em> - ${data[0][2]['tMin']}°C ~ ${data[0][2]['tMax']}°C</span>
                <span>${data[0][2]['summary']}</span>
            </div>
        </div>
        
        <div class="dataWrapper">
            <div class="showData dateLabel">
                <span>${data[1][0]['weekday']}</span>
                <span>${data[1][0]['date']}</span>
            </div>
            <div class="showData">
                <img src=${data[1][0]['icon']}></img>
                <span><em>Manhã</em> - ${data[1][0]['tMin']}°C ~ ${data[1][0]['tMax']}°C</span>
                <span>${data[1][0]['summary']}</span>
            </div>
            <div class="showData">
                <img src=${data[1][1]['icon']}></img>
                <span><em>Manhã</em> - ${data[1][1]['tMin']}°C ~ ${data[1][1]['tMax']}°C</span>
                <span>${data[1][1]['summary']}</span>
            </div>
            <div class="showData">
                <img src=${data[1][2]['icon']}></img>
                <span><em>Manhã</em> - ${data[1][2]['tMin']}°C ~ ${data[1][2]['tMax']}°C</span>
                <span>${data[1][2]['summary']}</span>
            </div>
        </div>
        
        <div class="dataWrapper">
            <div class="showData dateLabel">
                <span>${data[2]['weekday']}</span>
                <span>${data[2]['date']}</span>
            </div>
            <div class="showData">
                <img src=${data[2]['icon']}></img>
                <span>${data[2]['tMin']}°C ~ ${data[2]['tMax']}°C</span>
                <span>${data[2]['summary']}</span>
            </div>
        </div>
        
        <div class="dataWrapper">
            <div class="showData dateLabel">
                <span>${data[3]['weekday']}</span>
                <span>${data[3]['date']}</span>
            </div>
            <div class="showData">
                <img src=${data[3]['icon']}></img>
                <span>${data[3]['tMin']}°C ~ ${data[3]['tMax']}°C</span>
                <span>${data[3]['summary']}</span>
            </div>
        </div>
        </div>

    `;
}

selectUF.addEventListener('change', (e) => {locationFetch(e.target.value)});
selectCity.addEventListener('change', (e) => {renderPrediction(e.target.value)});

districtsFetch()