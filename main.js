/* 脚本语言，Daisy Liao同学负责的 */

var webTitle;

webTitle = document.createElement("h1");
webTitle.setAttribute("lang", "zh-Hans");
webTitle.innerHTML = "盖伦特人宣传中心";
websubTitle = document.createElement("h3");
websubTitle.setAttribute("lang", "en");
websubTitle.innerHTML = "Gallente Man Public-Center";

document.getElementById("siteTitle").appendChild(webTitle);
document.getElementById("siteTitle").appendChild(websubTitle);

/* 导航栏的链接 */
var Link1, Link2, Link3;

Link1 = document.createElement("a");
Link1.setAttribute("href", "index.html");
Link1.innerHTML = "首页<br />Main Page";
Link2 = document.createElement("a");
Link2.setAttribute("href", "ship.html");
Link2.innerHTML = "为何盖伦特的船那么强？<br />Why Gallente Ship is Strong?";
Link3 = document.createElement("a");
Link3.setAttribute("href", "about.html");
Link3.innerHTML = "关于我们<br />About We";

/* 导航栏的表格 */
var siteNavigator, tableRow, tableCell, tableLink;

siteNavigator = document.createElement("table");
tableRow = siteNavigator.insertRow(0);
tableCell = tableRow.insertCell(0);
tableCell.setAttribute("class", "cellItem");
tableLink = tableCell.appendChild(Link1);
tableCell = tableRow.insertCell(1);
tableCell.setAttribute("class", "cellItem");
tableLink = tableCell.appendChild(Link2);
tableCell = tableRow.insertCell(2);
tableCell.setAttribute("class", "cellItem");
tableLink = tableCell.appendChild(Link3);
siteNavigator.setAttribute("class", "siteMenu");

document.getElementById("siteNav").appendChild(siteNavigator);