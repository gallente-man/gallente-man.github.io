var siteNavigator, tableRow, tableCell;

siteNavigator = document.createElement("table");
tableRow = siteNavigator.insertRow(0);
tableCell = tableRow.insertCell(0);
tableCell.innerHTML = "<a>首页</a>";
tableCell.setAttribute("class","cellItem");
tableCell = tableRow.insertCell(1);
tableCell.innerHTML = "<a>为何盖伦特的船那么强？</a>";
tableCell.setAttribute("class","cellItem");
tableCell = tableRow.insertCell(2);
tableCell.innerHTML = "<a>关于</a>";
tableCell.setAttribute("class","cellItem");
siteNavigator.setAttribute("class","siteMenu");

document.getElementById("siteNav").appendChild(siteNavigator);