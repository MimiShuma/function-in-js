let columnTexts = ["Column 11", "Column 22", "Column 33"];


function getTextNodeFromText(arrayOfTexts) {
    if (!Array.isArray(arrayOfTexts)) {
        return [];
    }

    let arrayOfTextNodes = [];
    let textNode = "";
    for (let i = 0; i < arrayOfTexts.length; i++) {
        textNode = document.createTextNode(arrayOfTexts[i]);
        arrayOfTextNodes.push(textNode); // preferred
        // columnTextNodes[i] = textNode; // same as lines 6
    }
    return arrayOfTextNodes;
}

let columnOfTextNodes = getTextNodeFromText(columnTexts);

console.log(columnOfTextNodes);

function getTdNodesFromTextNodes(arrayOfTextNodes2) {
    let arrayOfTdNodes = [];
    let td = "";
    for (let i = 0; i < arrayOfTextNodes2.length; i++) {
        td = document.createElement("td");
        // arrayOfTdNodes[i] = td.appendChild(arrayOfTextNodes2[i]);
        arrayOfTdNodes.push(td.appendChild(arrayOfTextNodes2[i]));
    }
    return arrayOfTdNodes;
}

let columnOfTdNodes = getTdNodesFromTextNodes(columnOfTextNodes);

console.log(columnOfTdNodes);

// get td node from text nodes

// function td(txtNode) {
//     let td = document.createElement("td");
//     td.appendChild(txtNode);
//     return td;
// }

// function tr(cells) {
//     let tr = document.createElement("tr");
//     for (let i = 0; i < cells.length; i++) {
//         tr.appendChild(cells[i]);
//     }
//     return tr;
// }



// let shuma = {
//     insertRow: function () {
//         let tbody2 = document.querySelector('#sampleTable2 tbody');
//         return tbody2.appendChild(tr(cells));
//     }
// }

// shuma.insertRow();