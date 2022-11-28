var siteNavigator, tableRow, tableCell;

siteNavigator = document.createElement("table");
tableRow = siteNavigator.insertRow(0);
tableCell = tableRow.insertCell(0);
tableCell.innerHTML = "<a>首页<br />Main Page</a>";
tableCell.setAttribute("class","cellItem");
tableCell = tableRow.insertCell(1);
tableCell.innerHTML = "<a>为何盖伦特的船那么强？<br />Why Gallente Ship is Strong?</a>";
tableCell.setAttribute("class","cellItem");
tableCell = tableRow.insertCell(2);
tableCell.innerHTML = "<a>关于我们<br />About We</a>";
tableCell.setAttribute("class","cellItem");
siteNavigator.setAttribute("class","siteMenu");

document.getElementById("siteNav").appendChild(siteNavigator);