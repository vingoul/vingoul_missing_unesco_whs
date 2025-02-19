var json = [
    {
        "type": "Afghanistan",
        "values": ["AF-01 Minaret and Archaeological Remains of Jam (2002)", "AF-02 Cultural Landscape and Archaeological Remains of the Bamiyan Valley (2003)"]
    },
    {
        "type": "MOTW",
        "values": ["Austria", "Costa Rica", "Canada", "UK", "Hong Kong", "Italy", "Finland", "Norway", "Spain", "Malaysia", "Japan", "Germany", "Czech Republic", "Taiwan", "China", "England", "Croatia", "Thailand", "UAE", "Sovereign Military Order Of Malta", "Poland", "Ukraine", "Armenia", "Portgual", "Latvia", "Turkey (Arranged)", "St Pierre and Miquelon", "Singapore", "Malta", "India (Arranged)", "Nepal", "Maldives", "Philippines", "Switzerland", "Slovenia", "Peru", "Belarus", "Bahamas", "Greece", "Hungary", "Ireland", "Cyprus", "Indonesia", "Pitcairn Islands", "San Marino", "Greenland", "Estonia", "Honduras", "Mozambique", "Denmark", "New Zealand ", "Israel", "USA (Arranged)", "France (Arranged)", "Nauru (Arranged)", "Mexico", "Egypt", "Macau"]

    },
    {
        "type": "Heritage Prints Indian States",
        "values": ["Karnataka", "Punjab"]
    },
    {
        "type": "Loupaper",
        "values": ["Alaska", "California", "Colorado", "Connecticut", "Florida", "Georgia", "Kentucky", "Louisiana", "Maine", "Maryland", "Michigan", "Minnesota", "New Jersey", "New Mexico", "New York", "Ohio", "Pennsylvania", "South Carolina", "Tennessee", "Texas", "Washington"]
    },
     {
        "type": "wc",
        "values": ["blr", "California", "Colorado", "Connecticut", "Florida", "Georgia", "Kentucky", "Louisiana", "Maine", "Maryland", "Michigan", "Minnesota", "New Jersey", "New Mexico", "New York", "Ohio", "Pennsylvania", "South Carolina", "Tennessee", "Texas", "Washington"]
    }
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
