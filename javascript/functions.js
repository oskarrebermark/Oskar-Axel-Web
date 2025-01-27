function openProject(projectName) {
    // 
    var i;
    var x = document.getElementsByClassName("project");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(projectName).style.display = "block";
    
    // Remove 'active' class from all tabs
    var tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("activeP");
    }

    // Add 'active' class to the clicked tab
    var clickedTab = document.querySelector(`[onclick="openProject('${projectName}')"]`);
    if (clickedTab) {
        clickedTab.classList.add("activeP");
    }
}