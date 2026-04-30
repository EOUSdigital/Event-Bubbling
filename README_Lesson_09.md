# 🟧 Module 08 – Lesson 09: Event Bubbling & Event Delegation

## 📌 Overview
This lesson introduces how events behave in the DOM, focusing on **event bubbling** and how it enables **event delegation** — a powerful technique for handling events efficiently.

---

## 🧠 Concepts Covered

### 1. Event Bubbling
- Events start at the target element
- Then "bubble up" through parent elements
- Example flow:
```
button → parent div → body → document
```

---

### 2. Event Target
- `e.target` refers to the element that triggered the event
- Helps identify which child element was clicked

---

### 3. Stopping Propagation
- `e.stopPropagation()` prevents the event from bubbling up

---

### 4. Event Delegation
- Instead of adding listeners to many elements, attach one listener to a parent
- Use `e.target` to determine which child was interacted with

---

## 💻 Example: Event Bubbling

```js
const parent = document.getElementById("parent");
const child = document.getElementById("child");

child.addEventListener("click", () => {
  console.log("Button clicked");
});

parent.addEventListener("click", () => {
  console.log("Div clicked");
});
```

### Result:
```
Button clicked
Div clicked
```

---

## 💻 Example: Event Delegation

```js
const parent = document.getElementById("parent");

parent.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    console.log("Button clicked:", e.target.textContent);
  }
});
```

---

## 🔑 Key Takeaways

- Events bubble from child to parent
- `e.target` tells you where the event started
- Event delegation allows efficient handling of many elements
- Works even for dynamically added elements
- Reduces number of event listeners

---

## ⚠️ Common Mistakes

- Forgetting to check `e.target`
- Using multiple listeners instead of one parent listener
- Confusing `e.target` with `e.currentTarget`

---

## 🛠️ Practice Tasks

### Task 1:
Create a parent div with multiple buttons and log which button is clicked using one event listener.

### Task 2:
Log different messages when clicking the parent vs the child using `e.target`.

---

## 🚀 Real-World Use Cases

- Handling delete/edit buttons in lists
- Managing dynamic UI components
- Improving performance in large applications

---

## 🤔 Reflection Questions

- 1️⃣ Why does event bubbling exist?
- Answer: It exists so events can travel from the element was clicked up through its parent elements. That lets the browser handle one click and still let outer elements respond too.
- 2️⃣ Why is event delegation more efficient?
- Answer: Because we can put one event listener on a parent instead of many listeners on every child. That uses less memory and is easier to manage, especially when you have lots of items or elements added later.
- 3️⃣ How does `e.target` help identify interactions?
- Answer: The `e.target` tells us the exact element that was actually clicked or interacted with, not just the element that received the event handler. That helps to tell whether the user clicked the child, the parent, or some other nested element.

---

## 💡 Final Thought

Understanding event flow is essential for building scalable, efficient front-end applications.

Keep experimenting and observing how events behave 🚀
