// Our labels along the x-axis
var Years = [1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016];
// For drawing the lines
var Profit_Before_Tax = [648.1,-646.6,605.4,939.6,758.7,832.6,1301.6,1138.7,1912.1,1127,1764.6,2024,2336,2478,2428,2248,2306,2423];
var Visitors =[12.1,13.4,14.1,15.4,15.6,17.4,18.7,18.5,19.6,19.2,19.5,19.9,20.3,20.5,19.6,18.1,19.4,20.2];

var ctx1 = document.getElementById("Profit_Before_Tax_Chart");
var ProfitChart = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: Years,
    datasets: [
      {
        data: Profit_Before_Tax,
        label: "Profit Before Tax (Millions)",
        borderColor: "#3e95cd",
        fill: false
    }
    ]
  }
});

var ctx2 = document.getElementById("Visitors_Number_Chart");
var VisitorsChart = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: Years,
    datasets: [
    {
      data: Visitors,
      label: "Number of Visitors (Millions)",
      borderColor: "#FF0000",
      fill: false
  }
    ]
  }
});
