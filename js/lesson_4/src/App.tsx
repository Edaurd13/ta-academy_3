import React from 'react';
import './App.css';
import {arraySum, arrayFilter, getUserNames} from './utils';
import { personNamesTwo} from './task';


function App() 
    {
        const viewPersonNamesTwo = () => {
          return (
              personNamesTwo.map((name) => <li key={name.toString()}>
                {name}</li>)
          );
        };

        // <span> key = Ключи помогают React определять, какие элементы были изменены, добавлены или удалены.
        //      Их необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени:</span>

        
            //     <div className="App">
            //         <div className="wrapper">
            //             <p>{sum}</p>
            //             <p>{filter.toString()}</p>
            //             <p>{userNamesArray.toString()}</p>
            //         </div>
            //     </div>
            //   );
            
   
//     const array = [1, 2, 3, 4, 5];
//     const usersArray = [
//         {
//             name: "Peter",
//             surname: 'Jackson',
//             age: 20,
//         },
//         {
//             name: "Mary",
//             age: "30",
//         }
//     ]
//     const sum = arraySum(array);
//     const filter = arrayFilter(array, item => item % 2 === 0);
//     const userNamesArray = getUserNames(usersArray);

//     return (
//     <div className="App">
//         <div className="wrapper">
//             <p>{sum}</p>
//             <p>{filter.toString()}</p>
//             <p>{userNamesArray.toString()}</p>
//         </div>
//     </div>
//   );

return (
    <div className="App">
        <p className='persons'>
            {viewPersonNamesTwo()}</p>
      </div>
  );
}




export default App;







