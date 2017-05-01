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

console.log(items);

items.add({
  id: count,
  itemsAlwaysDraggable: true,
  group: 1,
  start: start,
  end: end,
  content: "Mouse Create"
});

console.log(items);

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
  //var itemType = event.target.innerHTML.split('-')[1].trim();
  var item = {
    id: new Date(),
    type: "box",
    //content: event.target.innerHTML.split('-')[0].trim()
    content: event.target.innerHTML
  }

  /*
  var isFixedTimes = (event.target.innerHTML.split('-')[2] && event.target.innerHTML.split('-')[2].trim() == 'fixed times')
  if (isFixedTimes) {
    item.start = new Date();
    item.end = new Date(1000*60*10 + (new Date()).valueOf());
  }
  */

  event.dataTransfer.setData("text", JSON.stringify(item));
}

var dragItems = document.querySelectorAll('.items .item');

for (var i = items.length - 1; i >= 0; i--) {
  var item = dragItems[i];
  item.addEventListener('dragstart', handleDragStart.bind(this), false);
}

// End from Vis Example

function touchDrag(timeline, dragItems, text){
  console.log("Click on touch-drag");
  console.log("Text: " + text);
  var start = new Date(todayStart);
  var end = new Date(start);
  end.setHours(todayStart.getHours() + 2);

  items.add({
    id: count,
    itemsAlwaysDraggable: true,
    group: 0,
    start: start,
    end: end,
    content: text
  });
  count++;

  //newItems = items.add(touchDragItem)

  timeline.setItems(items);
  //timeline1.setData("text", JSON.stringify(touchDragItem));

}

console.log(items);

$( ".touch-drag" ).click(function() {
  touchDrag(timeline1, items, $( this ).html());
});
