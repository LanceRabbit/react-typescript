import React from "react";
// import { Counter } from "./components/Counter";
// import { Hello } from "./components/Hello";
import Todo from "./components/Todo";
// props
// hooks
// render props

const App: React.FC = () => {
  return (
    <>
      <Todo/>
    </>
  )
};

// const App: React.FC = () => {
//   return (
//     <div>
//       <Counter>
//         {({ count, setCount }) => (
//           <div>
//             {count}
//             <button onClick={() => setCount(count + 1)}>+</button>
//           </div>
//         )}
//       </Counter>
//     </div>
//   );
// };

export default App;