// Demystifying Data

"use strict";

var todayNow = new Date();
var count = 0;

// From Vis Example:

// create groups
var numberOfGroups = 2;
var groups = new vis.DataSet()
var groupNames = ["Phone", "Laptop"]
for (var i = 0; i < numberOfGroups; i++) {
  groups.add({
    id: i,
    content: groupNames[i]
  })
}

// create items
var numberOfItems = 1;
var items = new vis.DataSet();

var start = new Date(todayNow);

todayNow.setHours(todayNow.getHours() + 2);
var end = new Date(todayNow);

items.add({
  id: count,
  group: 1,
  start: start,
  end: end,
  content: "Mouse Create"
});

count++;

// specify options
var todayStart = new Date();
todayStart.setHours(6);
var todayEnd = new Date();
todayEnd.setHours(23);
var options = {
  format: {
    minorLabels: {
      hour:       'h A'
    }
  },
  stack: true,
  start: todayStart,
  end: todayEnd,
  editable: true,
  orientation: 'top',
  zoomable: false
};

// create a Timeline
var container = document.getElementById('mytimeline');
var timeline1 = new vis.Timeline(container, items, groups, options);

function handleDragStart(event) {
  var dragSrcEl = event.target;

  event.dataTransfer.effectAllowed = 'move';
  var itemType = "box";
  //var itemType = event.target.innerHTML.split('-')[1].trim();
  var item = {
    id: new Date(),
    type: itemType,
    content: event.target.innerHTML.split('-')[0].trim()
  };

  var isFixedTimes = (event.target.innerHTML.split('-')[2] && event.target.innerHTML.split('-')[2].trim() == 'fixed times')
  if (isFixedTimes) {
    item.start = new Date();
    item.end = new Date(1000*60*10 + (new Date()).valueOf());
  }

  event.dataTransfer.setData("text", JSON.stringify(item));
}

var items = document.querySelectorAll('.items .item');

for (var i = items.length - 1; i >= 0; i--) {
  var item = items[i];
  item.addEventListener('dragstart', handleDragStart.bind(this), false);
}

// End from Vis Example
