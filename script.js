// Demystifying Data

"use strict";

var todayNow = new Date();
var count = 0;

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
