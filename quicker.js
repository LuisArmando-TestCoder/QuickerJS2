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
  
  function getUrlVariableValueByName(variableKey = new RegExp('\\??&?(\\w{0,})=(\\w{0,})', 'g').exec(window.location.href)[1]) {
    return new RegExp(`\\??&?(${variableKey})=(\\w{0,})`, 'g').exec(window.location.href)[2];
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
  
  function canvasQuickMethods(
    insideFunction, 
    wannaClearBool = true,
    cnv = document.querySelector('canvas')) {
    let ctx = cnv.getContext('2d');
    function animate() {
      if(wannaClearBool) ctx.clearRect(0, 0, cnv.width, cnv.height);
      if(typeof insideFunction === 'function') insideFunction();
      window.requestAnimationFrame(animate);
    }

    function manageCanvasSize( 
      width = window.innerWidth,
      height = window.innerHeight,
      wrapper = window) {
      cnv.width = width;
      cnv.height = height;
      wrapper.addEventListener('resize', ()=> {
        cnv.width = width;
        cnv.height = height;
      });
    }

    return {
      macs: manageCanvasSize,
      anim: animate,
    };
  }
  function linearRegression(obj) {
    /*
      Example
      let xyObj = {
        x: [1,6,4,11,16,18,2,2,5,7], // x
        y: [27,66,55,90,100,97,24,34,60,70] // y
        // xy
        // x*x
      }
      let studentsGrade = linearRegression(xyObj);
      console.log(studentsGrade.slr(10.2)); 
      // give the x var to the <y = mx + b> equation
      studentsGrade.dxy(18, 3.75); // draw in canvas
    */
    function simpleLinearRegression(x){
      obj['xy'] = [];
      obj['xx'] = [];
      // summation
      obj['_x'] = 0;
      obj['_y'] = 0;
      obj['_xy'] = 0;
      obj['_xx'] = 0;
      for (let i = 0; i < obj.x.length; i++) {
        obj.xy.push(obj.x[i] * obj.y[i]);
        obj.xx.push(obj.x[i] * obj.x[i]);
      }
      for (let i = 0; i < obj.x.length; i++) {
        obj._x += obj.x[i];
        obj._y += obj.y[i];
        obj._xy += obj.xy[i];
        obj._xx += obj.xx[i];
      }
      let m, b, y;
      const n = obj.x.length;
      m = (n * obj._xy - obj._x * obj._y) / (n * obj._xx - Math.pow(obj._x, 2));
      b = (obj._y * obj._xx - obj._x * obj._xy) / (n * obj._xx - Math.pow(obj._x, 2));

      y = m * x + b;
      return y;
    }
    function drawGraphicXY(scaleX = 1,scaleY = 1, bool = true, cWidth = 400, cHeight = 400) {
      const c = document.querySelector('canvas');
      const ctx = c.getContext('2d');
      const manageCanvasSize = (function() {
        c.width = cWidth;
        c.height = cHeight;
        window.addEventListener('resize', ()=> {
          c.width = cWidth;
          c.height = cHeight;
        });
      })();
      let lineToDraw = [];
      for(let i = 0; i < c.width / scaleX; i++) {
        let yResult = simpleLinearRegression(i);
        lineToDraw.push({
          y: yResult * scaleY,
          x: i * scaleX, // use to draw in canvas
          realX: i,
          realY: yResult
        });
        // console.log(i, '-', yResult);
      }
      // console.log(lineToDraw);
      function drawLine() {
        ctx.beginPath();
        ctx.fillStyle = '#FF0000';
        for(let i of lineToDraw) {
          ctx.fillRect(i.x,c.height - i.y,5,5);
        }
      }
      function drawXYDots() {
        ctx.fillStyle = '#210CE8';
        ctx.beginPath();
        for (let i = 0; i < obj.x.length; i++) {
          //ctx.fillRect(obj.x[i] * scaleX - scaleDotX / 2, 
          //             c.height - obj.y[i] * scaleY - scaleDotY / 2, 
          //             scaleDotX, scaleDotY);
          ctx.fillText(`${i+1}°(${obj.x[i]},${obj.y[i]})`, obj.x[i] * scaleX, 
                       c.height - obj.y[i] * scaleY);
          ctx.font = '12px sans-serif';
        }
      }
      function animate() {
        ctx.clearRect(0, 0, c.width, c.height);
        drawXYDots(obj, ctx);
        if(bool) drawLine();
        window.requestAnimationFrame(animate);
      };
      animate();
    }
    // simpleLinearRegression(obj, 10);
    return {
      slr: simpleLinearRegression,
      dxy: drawGraphicXY
    }

  }
  function navigationScroll(obj) {
    const scrollTop = (function() {
      let height = 0;
      let heights = [height];
      let setHeightsInfo;
      let setNavScroll;
      (setHeightsInfo = function(){
        height = 0;
        heights = [height];
        let nContainer = 0;
        for (let i of obj.containers) {
          i.setAttribute('data-n-container', nContainer);
          nContainer++;
          height += i.offsetHeight;
          heights.push(height);
        }
        console.log(heights);
      })();
      window.addEventListener('resize', ()=> {
        setHeightsInfo();
      });
      (setNavScroll = function(){
        let n = 0;
        for (let i = 0; i < obj.navButtons.length; i++) {
          obj.navButtons[i].addEventListener('click', ()=> {
            n = i;
            function animateScroll() {
              if(n === i) {
                if (obj.wrapper.scrollTop < heights[i]) {
                  if(obj.wrapper.scrollTop < heights[i] - heights[i] / 20) {
                    obj.wrapper.scrollTop+=heights[1] / 35;
                  }else {
                    obj.wrapper.scrollTop+=1;
                  }
                  window.requestAnimationFrame(animateScroll);
                } else if (obj.wrapper.scrollTop > heights[i]) {
                  if(obj.wrapper.scrollTop > heights[i] + heights[i] / 20) {
                    obj.wrapper.scrollTop-=heights[1] / 35;
                  } else {
                    obj.wrapper.scrollTop-=1;
                  }
                  window.requestAnimationFrame(animateScroll);
                } 
              }

            }
            animateScroll();
          });
        }
      })();

    })();
  }
  return {
    nst: navigationScroll,
    lr: linearRegression,
    cvm: canvasQuickMethods,
    suh: sortUniqueFromHighest,
    sul: sortUniqueFromLowest,
    s_h: sortFromHighest, 
    s_l: sortFromLowest,
    stl: sortFromLowestToHighest, // with own sorting algorithm
    sth: sortFromHighestToLowest, // the same
    gpn: getUrlVariableValueByName,
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
