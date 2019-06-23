"use strict";
{
  function fetchJSON(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.responseType = "json";
      xhr.onload = () => {
        if (xhr.status < 400) {
          resolve(xhr.response);
        } else {
          reject(new Error(`Network error: ${xhr.status} - ${xhr.statusText}`));
        }
      };
      xhr.send();
    });
  }

  function createAndAppend(name, parent, options = {}) {
    const elem = document.createElement(name);
    parent.appendChild(elem);
    Object.keys(options).forEach(key => {
      const value = options[key];
      if (key === "text") {
        elem.innerText = value;
      } else {
        elem.setAttribute(key, value);
      }
    });
    return elem;
  }
  
        function main(url) {
          fetchJSON(url, (err, data) => {
            const root = document.getElementById('root');
            if (err) {
              createAndAppend('div', root, { text: err.message, class: 'alert-error' });
            } else {
              createAndAppend('header', root, { id: 'divHead', class: 'header' });
              createAndAppend('p', divHead, { text: 'HYF Repositories' });
      
              createAndAppend('select', divHead, {
                id: 'selectElem',
                class: 'selector',
              });
        createAndAppend("div", root, { id: "container" });
        createOptions(data);
        displayInformation(data[0]);
        contributorsList(data[0]);
        

        document.getElementById("selectElem").onchange = function() {
          let selectedItemIndex = this.options[this.selectedIndex].value;
          let infoDiv = document.getElementById("divLeft");
          infoDiv.parentNode.removeChild(infoDiv);
          let contributors = document.getElementById("divRight");
          contributors.parentNode.removeChild(contributors);

          displayInformation(data[selectedItemIndex]);
          contributorsList(data[selectedItemIndex]);
        }; 
      }
      });
  }

  const HYF_REPOS_URL =
    "https://api.github.com/orgs/HackYourFuture/repos?per_page=100";

  window.onload = () => main(HYF_REPOS_URL);

  function createOptions(wholeData) {
    for (let i = 0; i < wholeData.length; i++) {
      createAndAppend("option", selectElem, {
        value: i,
        text: wholeData[i].name,
        class: "optionsClass"
      });
    }
  }

  //Contributors list
  function contributorsList(element) {
    fetchJSON(element.contributors_url).then(data => {
      createAndAppend("div", container, {
        id: "divRight",
        class: "right-div whiteframe"
      });
      createAndAppend("p", divRight, {
        text: "Contributions",
        class: "contributor-header"
      });
      createAndAppend("ul", divRight, {
        id: "contList",
        class: "contributor-list"
      });
      let link;
      let listItem;
      let contDataDiv;
      for (let i = 0; i < data.length; i++) {
        link = createAndAppend("a", contList, {
          href: data[i].html_url,
          target: "_blank"
        });
        listItem = createAndAppend("li", link, {
          class: "contributor-item"
        });

        createAndAppend("img", listItem, {
          src: data[i].avatar_url,
          class: "contributor-avatar"
        });
        contDataDiv = createAndAppend("div", listItem, {
          class: "contributor-data"
        });
        createAndAppend("div", contDataDiv, { text: data[i].login });
        createAndAppend("div", contDataDiv, {
          text: data[i].contributions,
          class: "contributor-badge"
        });
      }
    });
  }


  
  //Info
  function displayInformation(element) {
    let infoDiv = createAndAppend("div", container, {
      id: "Left",
      class: "left-div whiteframe"
    });
    createAndAppend("table", infoDiv, { id: "table" });
    createAndAppend("tbody", table, { id: "tbody" });
    createRow("Repository: ", element.name);
    createRow("Description: ", element.description);
    createRow("Forks : ", element.forks);
    createRow("Updated: ", element.updated_at);
   
    function createRow(label, description) {
      let tRow = createAndAppend("tr", table);
      createAndAppend("td", tRow, { text: label, class: "label" });
      createAndAppend("td", tRow, { text: description });
    }
  }
}


  
/* const top =createAndAppend(div,root),{id:"top",text:"HYf Repo",class:}
const right = createAndAppend(div,root),{id:"right"});
let select = createAndAPPEND (div,root),{id:"top",text:"HYf Repo",class:}
createAndAppend(div,root),{id:"right",text:"hello world",class:}


createAndAppend(div,root),{id:"right",text:"hello world",class:}

let name = createAndAppend(div,root),{id:"right",text:"hello world",class:}


//Selection, right,id : selectlist same as line 1

// element and parent
//3 divs, top , right , and left
// select element and parent
//under the fetch Json  function

console.log(DataTransferItemList)
c//reate 4 
array 
loop over data

console.log(data)
let repo Name = [];
let repo desc = [];
let repoUpdate = [];
let repo repoFork = [];
for(let i=0, i<data.length;i++) {
    repoName.push(data[data[i].name]);
    //same for repoDes
    //
}
hard coded as p or h: and youloop over the data and try to fill it7 *
