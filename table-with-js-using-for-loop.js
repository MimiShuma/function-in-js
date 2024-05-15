

function td(txtNode) {
    let td = document.createElement("td");
    td.appendChild(txtNode);
    return td;
}

function tr(cells) {
    let tr = document.createElement("tr");
    for (let i = 0; i < cells.length; i++) {
        tr.appendChild(cells[i]);
    }
    return tr;
}

let columnTexts = ["Column 11", "Column 22", "Column 33"];
let cells = [];
for (let i = 0; i < columnTexts.length; i++) {
    let cellText = document.createTextNode(columnTexts[i]);
    cells.push(td(cellText));
}

let shuma = {
    insertRow: function () {
        let tbody2 = document.querySelector('#sampleTable2 tbody');
        return tbody2.appendChild(tr(cells));
    }
}

shuma.insertRow();
