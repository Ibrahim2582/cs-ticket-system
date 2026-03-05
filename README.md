# Customer Support Zone

Customer Support Zone is a React-based web application that allows users to view customer tickets, track their progress, and mark them as resolved.

---

## Features

### Navbar

* Website name/logo on the left.
* Menu items and **New Ticket** button on the right.

### Banner

* Linear gradient background.
* Displays ticket statistics:

  * **In Progress Count**
  * **Resolved Count** (default = 0)

### Ticket Data

The project contains **10–15 tickets** with the following properties:

* id
* title
* description
* customer
* priority
* status
* createdAt

### Ticket Cards

* Tickets are displayed in **card layout**.
* Cards are arranged in a **2-column grid**.

### Task Status Section

* Clicking a ticket card:

  * Adds it to the **Task Status Section**
  * Shows a **toast notification**
  * Increases the **In Progress count**

### Task Completion

Clicking the **Complete Button**:

* Removes the ticket from the Task Status section
* Adds it to the **Resolved list**
* Decreases the **In Progress count**
* Increases the **Resolved count**
* Removes it from the ticket list
* Shows a toast notification

### Footer

* Footer designed according to the Figma layout.

### Responsiveness

* Fully responsive for mobile, tablet, and desktop devices.

### Notifications

* **React-Toastify** is used for toast notifications instead of alert.

---

# React Questions & Answers

### 1. What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript used in React that allows writing HTML-like code inside JavaScript.

Example:

```jsx
const element = <h1>Hello World</h1>;
```

JSX makes the UI code easier to understand and helps React efficiently update the DOM using the Virtual DOM.

---

### 2. What is the difference between State and Props?

| State                      | Props                                |
| -------------------------- | ------------------------------------ |
| Managed inside a component | Passed from parent component         |
| Mutable (can change)       | Immutable (cannot change)            |
| Used for dynamic data      | Used to pass data between components |

---

### 3. What is the useState hook, and how does it work?

`useState` is a React hook used to manage state in functional components.

Example:

```javascript
const [count, setCount] = useState(0);
```

* `count` → current state value
* `setCount` → function to update the state

When the state updates, React re-renders the component.

---

### 4. How can you share state between components in React?

State can be shared by **lifting state up** to the nearest common parent component and passing it to child components through props.

Another method is using the **React Context API** for sharing global state across multiple components.

---

### 5. How is event handling done in React?

Event handling in React is done using **camelCase event names** and functions.

Example:

```jsx
<button onClick={handleClick}>Click</button>
```

```javascript
function handleClick() {
  console.log("Button clicked");
}
```

Common events include `onClick`, `onChange`, and `onSubmit`.
