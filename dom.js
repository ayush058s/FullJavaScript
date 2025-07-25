// DOM Manipulation

//Properties

// tagName : returns tag for element nodes
// innerText : returns the text content of the element and all its children
// innerHTML : returns the plain text or HTML contents in the element
// textContent : returns textual content even for hidden elements
// outerHTML : returns the element and all its children as a string
// classList : returns a DOMTokenList containing the classes of the element



// Methods

// getElementById("id") : returns the element with the given id
// getElementsByClassName("class") : returns a live HTMLCollection of elements with the given class
// getElementsByTagName("tag") : returns a live HTMLCollection of elements with the given tag
// querySelector("selector") : returns the first element matching the selector
// querySelectorAll("selector") : returns a static NodeList of all elements matching the selector



// Manipulating Elements

// element.setAttribute("attr", "value") : sets an attribute
// element.getAttribute("attr") : gets an attribute value
// element.removeAttribute("attr") : removes an attribute
// element.classList.add("class") : adds a class
// element.classList.remove("class") : removes a class
// element.classList.toggle("class") : toggles a class



// Creating and Removing Elements

// document.createElement("tag") : creates a new element
// parent.appendChild(child) : adds a child element at the end
// parent.insertBefore(newNode, referenceNode) : inserts before a reference node
// element.remove() : removes the element from the DOM



// Event Handling

// element.addEventListener("event", callback) : attaches an event handler
// element.removeEventListener("event", callback) : removes an event handler



// Traversing the DOM

// element.parentElement : gets the parent element
// element.children : gets the child elements
// element.nextElementSibling : gets the next sibling element
// element.previousElementSibling : gets the previous sibling element