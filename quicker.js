function quick() {
  function getOneElementWithQuerySelector(param){
    return document.querySelector(param);
  }
  function getElementsWithQuerySelector(param) {
    return document.querySelectorAll(param);
  }
  function getElementsWithClass(param) {
    return document.getElementsByClassName(param);
  }
  function getTheIdOfAnElement(param) {
    return document.getElementById(param);
  }
  function makeFloatingRandom(min, max){
    return Math.random()*((max+1)-min)+min;
  }
  function makeIntegerRandom(min, max){
    return parseInt(Math.random()*((max+1)-min)+min);
  }
  function setWindowInterval(func, time){
    return window.setInterval(func, time);
  }
  function setWindowTimeout(func, time){ 
    return window.setTimeout(func, time); 
  }
  function createAnElement(elem){
    return document.createElement(elem);
  }
  function createElementWithNs(elem){
    let theElem = document.createElementNS('http://www.w3.org/2000/svg', elem);
    if(elem.toLowerCase() === 'svg'){ 
       theElem.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    }
    return theElem;
  }
  function setElementAttribute(elem, attr, value){
    return elem.setAttribute(attr, value);
  }
  function setAppendChild(parent, child){
    return parent.appendChild(child);
  }
  function setInnerHTML(elem, input, bool = true){
    if(bool){
      return elem.innerHTML += input;
    }else{
      return elem.innerHTML = input;
    }
  }
  function setInnerText(elem, input, bool = true){
    if(bool){
      return elem.innerText += input;
    }else{
      return elem.innerText = input;
    }
  }
  function setPropertyOnStyle(elem, prop, value){
    return elem.style.setProperty(prop, value);
  }
  function fetchJson(url, func){
    /*
      Example, in this case, this.jsn = json content
      function theFunc(){
        let content = this.jsn;
        console.log(content);
      }
    */
    fetch(url)
    .then(response => {
      return response.json();
    }).then(json => {
      // console.log(json);
      let obj = {
        myFunc: func,
        jsn: json
      }
      obj.myFunc();
    }).catch( () => {
      console.log('There is an ERROR!! related to the call');
    });
  } // in func, this.json -> response
  
  // Consult Erik's Code
  // At <<https://blog.dubbelboer.com/2012/12/21/getParameterByName-getCookieByName.html>>
  /* Get parameter by name function */
  function getParameterByName(name) {
      var res = new RegExp(
          // Parameter names always start after a ? or &.
          '[\?&]' +

          // Make sure any [ or ] are escaped in the name.
          name.replace(/\[/g, '\\\[').replace(/\]/g, '\\\]') +

          // Either match a =... or match an empty value.
          // Values can be terminated by an & a # or the end of the string ($).
          '(?:=([^&#]*))?(?:[&#]|$)'
      ).exec(window.location.search);

      return res ?
        (res[1] ? // res[1] will be undefined for a parameter without value.
          decodeURIComponent(res[1].replace(/\+/g, ' ')) : ''
        ) : null;
  }
  function getCookieByName(name) {
    // According to RFC 2109 cookies can either be separated by ';' or ','.
    var res = new RegExp(
      // Beginning of the string or just after the previous cookie.
      // Skip the whitespace.
      '(?:^|[,;])\\s*' +
  
      name +
  
      // Value ending in a ';', ',' or the end of the string.
      '=([^,;]*)(?:[,;]|$)').exec(document.cookie);
  
    return res ? res[1] : null;
  }
  
  // My sorting algorithms, the 'Cold Water Sorting'
  function sortFromHighestToLowest(unsortedArray) {
    let unsorted = [].concat(unsortedArray);
    let sorted = [];
    while(unsorted.length > 0) {
      let hn = unsorted[0]; // hn stands for highest number
      for(let i of unsorted) {
        if(i > hn) hn = i;
      }
      sorted.push(parseInt(unsorted.splice(unsorted.indexOf(hn), 1)));
    }
    return sorted;
  }
  function sortFromLowestToHighest(unsortedArray) {
    let unsorted = [].concat(unsortedArray);
    let sorted = [];
    while(unsorted.length > 0) {
      let ln = unsorted[0]; // ln stands for lowest number
      for(let i of unsorted) {
        if(i < ln) ln = i;
      }
      sorted.push(parseInt(unsorted.splice(unsorted.indexOf(ln), 1)));
    }
    return sorted;
  }
  function sortUniqueFromHighest(theArr) {
    let newArr = [theArr[0]];
    for(let v = 0; v < theArr.length; v++) {
      if(newArr.indexOf(theArr[v]) === -1) {
        newArr.push(theArr[v]);
      }
    }
    return newArr.sort(
      function(a, b){
        return b - a;
      }
    )
  }
  function sortUniqueFromLowest(theArr) {
    let newArr = [theArr[0]];
    for(let v = 0; v < theArr.length; v++) {
      if(newArr.indexOf(theArr[v]) === -1) {
        newArr.push(theArr[v]);
      }
    }
    return newArr.sort(
      function(a, b){
        return a - b;
      }
    )
  }
  function sortFromHighest(theArr) {
    let newArr = [].concat(theArr);
    return newArr.sort(
      function(a, b){
        return b - a;
      }
    )
  }
  function sortFromLowest(theArr) {
    let newArr = [].concat(theArr);
    return newArr.sort(
      function(a, b){
        return a - b;
      }
    )
  }
  return {
    suh: sortUniqueFromHighest,
    sul: sortUniqueFromLowest,
    s_h: sortFromHighest, 
    s_l: sortFromLowest,
    stl: sortFromLowestToHighest, // with own sorting algorithm
    sth: sortFromHighestToLowest, // the same
    gcn: getCookieByName,
    gpn: getParameterByName,
    fj: fetchJson,
    sp: setPropertyOnStyle,
    it: setInnerText,
    ih: setInnerHTML,
    ac: setAppendChild,
    sa: setElementAttribute,
    cens: createElementWithNs,
    ce: createAnElement,
    wt: setWindowTimeout, 
    wi: setWindowInterval,
    r: makeIntegerRandom,
    rf: makeFloatingRandom,
    gi: getTheIdOfAnElement,
    gc: getElementsWithClass,
    qsa: getElementsWithQuerySelector,
    qs: getOneElementWithQuerySelector
  }
}

function  aine(_parent = document.querySelector('body'), _array) { // aine stands for putArrayInElement
  for(let i of _array) {
    let currentElement = document.createElement(i.name);
    _parent.appendChild(currentElement);
    if(i.inner) currentElement.innerHTML += i.inner;
    if(i.attr) {
      for(let a in i.attr) {
        currentElement.setAttribute(a, i.attr[a]);
      }
    }
    if(i.children) {
      aine(currentElement, i.children)
    }
  }
}
