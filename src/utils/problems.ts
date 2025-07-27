// src/utils/problems.ts

export type Problem = {
  oldCode: string;
  newCode: string;
};

export const problems: Record<string, Problem[]> = {
  '1': [
    {
      oldCode: `const a = 1;`,
      newCode: `const a = 2;`,
    },
    {
      oldCode: `console.log("Hello");`,
      newCode: `console.log("Hello, World!");`,
    },
  ],
  '2': [
    {
      oldCode: `function sum(a, b) { return a + b; }`,
      newCode: `const sum = (a, b) => a + b;`,
    },
    {
      oldCode: `for (let i = 0; i < 5; i++) { console.log(i); }`,
      newCode: `for (let i = 0; i <= 4; i++) { console.log(i); }`,
    },
  ],
  '3': [
    {
      oldCode: `const person = ["John", "Jane", "Doe"];
const welcomeMessage = "Hello, " + person[0];`,
      newCode: `const person = ["John", "Jane", "Doe"];
const welcomeMessage = \`Hello, \${person[0]}\`;`,
    },
    {
      oldCode: `if (value === 1) { return "One"; } else if (value === 2) { return "Two"; } else { return "Other"; }`,
      newCode: `switch (value) {
  case 1: return "One";
  case 2: return "Two";
  default: return "Other";
}`,
    },
  ],
  '4': [
    {
      oldCode: `const fetchData = () => {
  fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}`,
      newCode: `const fetchData = async () => {
  try {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}`,
    },
    {
      oldCode: `const Component = (props) => {
  return <div>{props.name}</div>;`,
      newCode: `const Component = ({ name }) => {
  return <div>{name}</div>;`,
    },
  ],
  '5': [
    {
      oldCode: `function calculate(a, b, operation) {
  if (operation === 'add') {
    return a + b;
  } else if (operation === 'subtract') {
    return a - b;
  }
}`,
      newCode: `const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

function calculate(a, b, operation) {
  return operations[operation]?.(a, b);
}`,
    },
    {
      oldCode: `const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}`,
      newCode: `import { useCallback, useState } from 'react';

const useDebounce = (initialValue, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(initialValue);
  const debounce = useCallback((fn) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  }, [delay]);
  return [debouncedValue, setDebouncedValue, debounce];
}`,
    },
  ],
};