var json = [
    {
        "type": "Afghanistan",
        "values": ["AF-01 Minaret and Archaeological Remains of Jam (2002)", "AF-02 Cultural Landscape and Archaeological Remains of the Bamiyan Valley (2003)"]
    },
    {
        "type": "Albania",
        "values": ["AL-01 Natural and Cultural Heritage of the Ohrid region (1979)", 
                   "AL-02 Butrint (1992)", "AL-03 Historic Centres of Berat and Gjirokastra (2005)", 
                   "AL-04 Ancient and Primeval Beech Forests of the Carpathians and Other Regions of Europe (2007)"]
    },
    {
        "type": "Algeria",
        "values": ["DZ-01 Al Qal'a of Beni Hammad (1980)", 
                   "DZ-02 Djémila (1982)", 
                   "DZ-03 M'Zab Valley (1982)", 
                   "DZ-04 Tassili n'Ajjer (1982)", 
                   "DZ-05 Timgad (1982)", 
                   "DZ-06 Tipasa (1982)", 
                   "DZ-07 Kasbah of Algiers (1993)"]

    },
    {
        "type": "Andorra",
        "values": ["AD-01 Madriu-Perafita-Claror Valley (2004)"]

    },
    {
        "type": "Angola",
        "values": ["AO-01 Mbanza Kongo, Vestiges of the Capital of the former Kingdom of Kongo (2017)"]

    },
    {
        "type": "Antigua and Barbuda",
        "values": ["AG-01 Antigua Naval Dockyard and Related Archaeological Sites (2016)"]

    },
    {
        "type": "Argentina",
        "values": ["AR-01 Los Glaciares National Park (1981)", 
                   "AR-02 Jesuit Missions of the Guaranis: San Ignacio Mini, Santa Ana, Nuestra Señora de Loreto and Santa Maria Mayor (Argentina), Ruins of Sao Miguel das Missoes (Brazil) (1983)", 
                   "AR-03 Iguazu National Park (1984)", 
                   "AR-04 Cueva de las Manos, Río Pinturas (1999)", 
                   "AR-05 Península Valdés (1999)", 
                   "AR-06 Ischigualasto / Talampaya Natural Parks (2000)", 
                   "AR-07 Jesuit Block and Estancias of Córdoba (2000)", 
                   "AR-08 Quebrada de Humahuaca (2003)", 
                   "AR-09 Qhapaq Ñan, Andean Road System (2014)", 
                   "AR-10 The Architectural Work of Le Corbusier, an Outstanding Contribution to the Modern Movement (2016)", 
                   "AR-11 Los Alerces National Park (2017)", "AR-12 ESMA Museum and Site of Memory – Former Clandestine Center of Detention, Torture and Extermination (2023)"]

    },
    {
        "type": "Armenia",
        "values": ["AM-01 Monasteries of Haghpat and Sanahin (1996)", 
                   "AM-02 Cathedral and Churches of Echmiatsin and the Archaeological Site of Zvartnots (2000)", 
                   "AM-03 Monastery of Geghard and the Upper Azat Valley (2000)"]
    },        
    {
        "type": "Australia",
        "values": ["AU-01 Great Barrier Reef (1981)", 
                   "AU-02 Kakadu National Park (1981)", 
                   "AU-03 Willandra Lakes Region (1981)", 
                   "AU-04 Lord Howe Island Group (1982)", 
                   "AU-05 Tasmanian Wilderness (1982)", 
                   "AU-06 Gondwana Rainforests of Australia (1986)", "AU-07 Uluru-Kata Tjuta National Park (1987)", 
                   "AU-08 Wet Tropics of Queensland (1988)", 
                   "AU-09 Shark Bay, Western Australia (1991)", 
                   "AU-10 K’gari (Fraser Island) (1992)", 
                   "AU-11 Australian Fossil Mammal Sites (Riversleigh / Naracoorte) (1994)", 
                   "AU-12 Heard and McDonald Islands (1997)", 
                   "AU-13 Macquarie Island (1997)", 
                   "AU-14 Greater Blue Mountains Area (2000)", 
                   "AU-15 Purnululu National Park (2003)", 
                   "AU-16 Royal Exhibition Building and Carlton Gardens (2004)", 
                   "AU-17 Sydney Opera House (2007)", 
                   "AU-18 Australian Convict Sites (2010)", 
                   "AU-19 Ningaloo Coast (2011)", 
                   "AU-20 Budj Bim Cultural Landscape (2019)"]
    },
    {
        "type": "Austria",
        "values": ["AT-01 Historic Centre of the City of Salzburg (1996)", 
                   "AT-02 Palace and Gardens of Schönbrunn (1996)", 
                   "AT-03 Hallstatt-Dachstein / Salzkammergut Cultural Landscape (1997)", 
                   "AT-04 Semmering Railway (1998)", 
                   "AT-05 City of Graz – Historic Centre and Schloss Eggenberg (1999)", 
                   "AT-06 Wachau Cultural Landscape (2000)", 
                   "AT-07 Historic Centre of Vienna (2001)", 
                   "AT-08 Fertö / Neusiedlersee Cultural Landscape (2001)", 
                   "AT-09 Ancient and Primeval Beech Forests of the Carpathians and Other Regions of Europe (2007)", 
                   "AT-10 Prehistoric Pile dwellings around the Alps (2011)", 
                   "AT-11 Frontiers of the Roman Empire – The Danube Limes (Western Segment) (2021)", 
                   "AT-12 The Great Spa Towns of Europe (2021)"]
    },
     {
        "type": "Azerbaijan",
        "values": ["AZ-01 Walled City of Baku with the Shirvanshah's Palace and Maiden Tower (2000)", 
                   "AZ-02 Gobustan Rock Art Cultural Landscape (2007)", 
                   "AZ-03 Historic Centre of Sheki with the Khan’s Palace (2019)", 
                   "AZ-04 Hyrcanian Forests (2023)", 
                   "AZ-05 Cultural Landscape of Khinalig People and “Köç Yolu” Transhumance Route (2023)"]
    },
    {
        "type": "Heritage",
        "values": ["Karnataka"]
    },
    {
        "type": "Heritage",
        "values": ["Karnataka"]
    },
    {
        "type": "Heritage",
        "values": ["Karnataka"]
    },
]


document.getElementById("searchInput").onkeyup = function () { search() }
search()

function search() {
    var input;
    input = document.getElementById("searchInput").value;
    var searchList = document.getElementById("searchResult");
    searchList.innerHTML = "";
    var fragList = document.createDocumentFragment();

    json.forEach(function (item) {
        var values = item.values
        var filteredRes = values.filter(
            item => item.toLowerCase().includes(input.toLowerCase())
        );
        var arrangedPlaces = filteredRes.filter(
            place => place.toLowerCase().includes("Arranged".toLowerCase())
        );
        var obtainedPlaces = filteredRes.filter(filteredPlaces => !arrangedPlaces.includes(filteredPlaces));
        if (filteredRes.length !== 0) {
            var topDiv = document.createElement('div');
            topDiv.className = "card";
            topDiv.style.textAlign = "center"
            var headerDiv = document.createElement('div');
            headerDiv.className = "card-header";
            headerDiv.textContent = item.type;
            headerDiv.style.fontSize = '18px';
            headerDiv.style.textAlign = "center";
            topDiv.appendChild(headerDiv);
            var badgeSpan = document.createElement('span');
            badgeSpan.className = "badge badge-pill badge-primary";
            badgeSpan.textContent = obtainedPlaces.length.toString()
            badgeSpan.style.marginLeft = '8px';
            badgeSpan.style.marginBottom = '8px';
            headerDiv.appendChild(badgeSpan)
            var obtainedPlaceList = obtainedPlaces.sort().join(", ");
            var arrangedPlaceList = arrangedPlaces.sort().join(", ");
            var obtainedDiv = document.createElement("p");
            var arrangedDiv = document.createElement("p");
            obtainedDiv.textContent = obtainedPlaceList;
            obtainedDiv.className = "list-group-item lead";
            arrangedDiv.textContent = arrangedPlaceList;
            arrangedDiv.className = "list-group-item lead";
            headerDiv.appendChild(obtainedDiv);
            if (arrangedPlaceList.length != 0) {
                headerDiv.appendChild(arrangedDiv);
            }
            fragList.appendChild(topDiv);
            searchList.appendChild(fragList);
        }
    });
}
