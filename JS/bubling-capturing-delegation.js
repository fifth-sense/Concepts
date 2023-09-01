/**
 * Event Bubbling/capturing are two ways event propogate in DOM tree
 * In bubbling event propogate from child to parent to grandparent and so on...
 * In Capturing event propogate from first div to inner div - grandparent to child
 * in browser both things performs first capturing performs theb bubbling 
 * we can make our own choice to choose bubbling or capturing while declaring event 
 * we nned to pass useCapture = false == bubbling
 * useCapture = true == capturing
 * we can stop the propogation of event at any point of time using e.stopPropogation()
 */

document.querySelector("#grandParent").addEventListener('click', ()=>{
    console.log("GrandParent Clicked")
});

document.querySelector("#parent").addEventListener('click', ()=>{
    console.log("Parent Clicked")
});

document.querySelector("#child").addEventListener('click', ()=>{
    console.log("Child Clicked")
});
/**
 * event delegation is way of handling bubbling in JS apart from adding eventListner  in every item we will add event listner at top or parent of the element
 */

