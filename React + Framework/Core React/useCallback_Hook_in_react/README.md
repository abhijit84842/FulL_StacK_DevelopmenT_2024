<div>
<h1>useCallback Hooks in React</h1>
<div>
    <p>The useCallback hook in React is used to optimize performance by memoizing functions. It prevents unnecessary re-creations of functions during re-renders, especially when passing functions as props to child components. This is particularly helpful in scenarios where components re-render frequently.</p>
</div>
<div>
    <p>memo(NavBar) => when new props come, only that time NavBar component will be render.</p>
    <p>But if we pass a function as a props to child component , that time memo will not work because "In javascript when a component render(here parent(app) component) that time function change itself automatically. to avoid this situation we have to use useCallback() hooks , so that we can freeze the function </p>
</div>
</div>
