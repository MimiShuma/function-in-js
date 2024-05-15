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

// get td node from text nodes

function getTdNodesFromTextNodes(arrayOfTextNodes2) {
    // APPLY IS ARRAY CHECKING

    let arrayOfTdNodes = [];
    let td = null;
    for (let i = 0; i < arrayOfTextNodes2.length; i++) {
        td = document.createElement("TD");
        if (arrayOfTextNodes2[i].nodeType == 3) {
            td.appendChild(arrayOfTextNodes2[i]);
        }
        // arrayOfTdNodes[i] = td.appendChild(arrayOfTextNodes2[i]);
        arrayOfTdNodes.push(td);
    }
    return arrayOfTdNodes;
}

let columnOfTdNodes = getTdNodesFromTextNodes(columnOfTextNodes);

console.log(columnOfTdNodes);

function getTrNodeFromTdNodes(arrayOfTdNodes) {
    let trNode = document.createElement("TR");
    for (let i = 0; i < arrayOfTdNodes.length; i++) {
        trNode.appendChild(arrayOfTdNodes[i]);
    }
    return trNode;
}

let getTr = getTrNodeFromTdNodes(columnOfTdNodes);

console.log(getTr);



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
