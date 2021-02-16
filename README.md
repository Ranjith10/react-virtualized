# react-virtualized

## What is windowing?

<li>Windowing or List virtualization is a concept of only rendering or write the visible portion in the current “ window ” to the DOM.
<li>The number of items that rendered at first time are smaller than the original one.
<li>The remaining items are rendered when you scroll down to it. The DOM nodes of items that exit the window are replaced by the new ones. 

## Why windowing is needed?

<li>Without windowing, the entire list is written to the DOM including items that are not in the current window. 
<li>It means, you would have to wait until the entire list is written to see the first item.
<li>This improves the performance of rendering a large list.

## How to run the application?
npm install <br>
npm start

## Libraries Used
<li> react-virtualized
<li> react-window
<li> react-virtualized-select
<li> react-select