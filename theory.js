"use strict";

//Title 🟧 Module 8 - Events: Lesson 09. Event Bubbling

//* 🧠 Concept Explanation

//  💡 What is Event Bubbling?
//  • Event bubbling is how events move through the DOM.
//  👉 When you click an element, the event does not just stay there — it “bubbles up” to its parent elements.


//* 🧩 Simple Example

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```

```js
document.getElementById("child").addEventListener("click", () => {
    console.log("Button clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Div clicked");
});
```


//? 🔍 What happens when you click the button?
//  • Button clicked
//  • Div clicked
//  👉 The event starts at the button → then moves up to the parent.

//* 🧠 Mental Model
//  Child element
//     ↓
//  Parent
//     ↓
//  Document
//  👉 Events bubble upward through the DOM tree.

//! ⚠️ Common Beginner Confusion
//  👉 “Why is my parent event firing when I click a child?”

//  Because:
//  ➡️ Events bubble by default


//? 🛑 How to Stop Bubbling

```js
document.getElementById("child").addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Only button");
});
```
//  👉 Now the parent will not be triggered.


//? 🛠️ Guided Practice

//* 🎯 Task
//  Add this to your project:
output.addEventListener("click", function (e) {
    console.log(e.target);
});

//* ✅ You are done when:
//  • Clicking any part of a card logs the element
//  • You understand which element triggered the event

//* 🧠 Why This Matters
//  Later, you will use this to:
//  • Delete items
//  • Edit items
//  • Handle dynamic elements
//  👉 Without adding multiple event listeners

//# 🤔 Reflection Question

//  Why do you think event bubbling is useful, instead of being a problem?
//  Answer: Event bubbling is useful because it help let us to handle many child-element interactions with one parent-level listener, which keeps code simpler and usually more efficient.


//! ⁉️ Feedback

//TODO  🧠 What Your Output Means

//  You saw:
//  • Button clicked
//  • Div clicked

//  👉 This confirms:
//  • The button’s event fired first
//  • Then the event bubbled up to the parent <article> (or div)

//? 🔍 Why This Happens

//  When you click:
```html
<button id="child">
```

//  The browser does this internally:
//  1. Trigger button click
//  2. Move up to parent (div/article)
//  3. Trigger parent click
//  4. Continue up (body → document...)

//? 🧩 Visual Flow
//  <button>  ← click starts here
//      ↓
//  <div>     ← then bubbles here
//      ↓
//  <body>
//      ↓
//  document


//! ⚠️ Small Observation About Your HTML

//  You showed:
```html
<article class="card">
Button clicked 
Div clicked
<button id="child">
```
//  👉 That means your console logs are being rendered in the page, not just the console.

//  This likely means you used something like:
element.innerHTML += "Button clicked";

//  Instead of:
console.log("Button clicked");


//# 💡 Important Distinction

//  | Method          | Where output appears |
//  | --------------- | -------------------- |
//  | `console.log()` | Developer console    |
//  | `innerHTML`     | On the page          |
//  👉 Both are valid — just different purposes.

//! 🛑 If You Want ONLY the Button

//  You can stop bubbling:

document.getElementById("child").addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("Button clicked");
});

//? 🧠 Why This Lesson Matters (Big Insight)

//  Right now it may feel like:
//  • “Why is this happening?”
//  But soon you will use it to:
//  👉 Handle clicks on dynamic elements

//  Example in your project:
//  Instead of: ❌ Add event to every card

//  You will do:
// ✅ One event for everything
output.addEventListener("click", function (e) {
    console.log(e.target);
});

//  ✅ Result:
//  • Click delete → card disappears
//  • No extra event listeners needed

//# 🤔 Reflection Question

//  Why is it better to have one event listener on the parent instead of one on every button?
//  Answer: It is better because one parent listener is usually simpler, more scalable, and easier to maintain than wiring up separate listeners on every button.

//  Why is using one parent listener more scalable than adding listeners to every child element?
//  Answer: Using a single parent listener leverages event delegation, which is far more scalable for handling events on many child elements in JavaScript. Attaching individual listeners to every child consumes significant memory, as each listener creates overhead in the browser's event system. A single parent listener avoids this by capturing bubbled events from all children, drastically reducing the total number of listeners managed.


//TODO  🧠 Key Clarification

//  Lesson 08
//  👉 Focus: Forms, data, UI rendering

//  Lesson 09
//  👉 Focus: Understanding how events flow (bubbling)

//? 🔑 Important Rule
//  👉 Each lesson introduces a concept in isolation first
//  Only later do we combine them into real projects

//? 🧩 Your Current Setup (Correct)
<div id="parent">
    <button id="child">Click Me</button>
</div>
//  👉 This is perfect for learning bubbling

//? 🧠 What You Should Do NOW
//  Instead of adding delete buttons or cards:
//  👉 Focus on understanding event flow deeply

//* 🛠️ Let’s Improve THIS Lesson (Properly)

//  ✅ Updated JavaScript (Clean Version): is included in script.js

//? 🔍 What to Observe

//  👉 Click the button
//  • Button clicked
//  • Div clicked
//  • Target: <button></button>

//  👉 Click outside the button (inside parent)
//  • Div clicked
//  • Target: <div></div>

//! 🛑 Important: Don’t Mix Concepts Yet

//  You said:
//  • “I cannot add a delete button to each card”

//   Correct — because:
//  • You do not have dynamic cards in this lesson
//  • That belongs to your previous project

//# 🧭 When Do We Combine Them?

//  👉 Very soon — in:
//  • Event Delegation (next lesson)
//  • Shopping List Project (Module 9)

//  That’s where everything connects:
//  • DOM
//  • Events
//  • Dynamic elements

//* 🛠️ Mini Challenge (Stay Within This Lesson)

//  🎯 Task
//  Modify your code so that:

parent.addEventListener("click", function (e) {
    if (e.target.id === "child") {
        console.log("Clicked the button");
    } else {
        console.log("Clicked the parent");
    }
});

//  ✅ You are done when:
//  • Button click → “Clicked the button”
//  • Parent click → “Clicked the parent”

//# 🤔 Reflection Question

//  Why do you think we check:
e.target.id === "child"
//  instead of just relying on the parent click event?
//  Answer: Because a parent click handler will fire for clicks on the parent and anything inside it, 'e.target.id === "child"' let us tell whether the actual clicked element was the child. In event bubbling, 'e.target' is the deepest element that started the event, while the parent handler itself is just the place receiving the bubbled event.