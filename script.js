



fetch('https://api.npoint.io/7bbd3a59c401f616bb89')
    .then((res) => res.json())
    .then(data => {

        console.log(data);

        const tableBody = document.getElementById('table_body')
        tableBody.innerHTML = '';

        data.places.forEach(city => {
            const row = document.createElement('tr')
            row.innerHTML = `

            <td>${city.info}</td>
            <td>${city.name}</td>
            <td><img src="${city.image}"</td >
        `
            tableBody.appendChild(row)
        });

    })
    .catch(e => console.log("error is ", e))