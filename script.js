// import { func } from "prop-types";

function mousePressed() {

    var st = document.getElementById("start");
    var en = document.getElementById("end");
    var wa = document.getElementById("wall");
  
  
    mx = Math.floor(mouseX / w)
    my = Math.floor(mouseY / h)
  
    if (st.checked && !grid[mx][my].wall) {
      if (start === grid[mx][my]) {
        return;
      }
      else {
        start = grid[mx][my];
        openSet[0] = start;
      }
    }
  
    if (en.checked && !grid[mx][my].wall) {
      if (end === grid[mx][my]) {
        return
      }
      else {
        end = grid[mx][my]
      }
    }
  
    if (wa.checked) {
      if (!run && mx >= 0 && my >= 0 && mx < rows && my < cols) {
        grid[mx][my].wall = !grid[mx][my].wall;
      }
    }
    // mx = Math.floor(mouseX / w)
    // my = Math.floor(mouseY / h)
    // if (!run && mx >= 0 && my >= 0 && mx < rows && my < cols) {
    //   grid[mx][my].wall = !grid[mx][my].wall;
    // }
    print([mx, my])
  
    console.log(st.checked, en.checked, wa.checked);
  }
  
  function mouseDragged() {
    mousePressed();
  }
  
  function touchStarted() {
    mousePressed();
  }
  
  

function running() {
    run = true;
    document.getElementById('inputs').style.visibility = "hidden";
    
  }
  
  function done(){
    document.querySelector(".btn").style.display = "none";
    document.querySelector(".btnReload").style.display = "block"; 
  }

function introDone() {
    document.querySelector(".intro").style.display = 'none';
  }

  function resetCanvas(){
    var s = document.querySelector("#cnvSize").value;
    rows = cols = s
    setup();
  }