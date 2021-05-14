import './App.css';
import { Provider } from 'react-redux'
// import CakeStore from './Redux/Cakes/CakeStore'; // For single store with single Reducer
import store from './Redux/store'; // For Global Store with multiple Reducers

import CakeContainer from './Components/CakeIceCream/CakeContainer';
import CakeContainerHooks from './Components/CakeIceCream/CakeContainerHooks';

import IceCreamContainer from './Components/CakeIceCream/IceCreamContainer';
import IceCreamContainerHooks from './Components/CakeIceCream/IceCreamContainerHooks';
import CakeContainerPayload from './Components/CakeIceCream/CakeContainerPayload';
import ItemContainer from './Components/CakeIceCream/ItemContainer';
import UserListContianer from './Components/UserListContianer';


function App() {
  return (
    <Provider store={ store } >
      <div className="App">
        {/* <table>
          <tr>
            <td>
              <h3>Basic Redux Cake Container</h3>
              <CakeContainer />
            </td>

            <td>
              <h3>Hooks Redux Cake Continaer</h3>
              <CakeContainerHooks />
            </td>
          </tr>
        </table>
        <hr />
        <h3>Basic Redux Cake Container with payload</h3>
        <CakeContainerPayload />

        <hr />
        <table>
          <tr>
            <td>
              <h3>Basic Redux Ice Cream Container</h3>
              <IceCreamContainer />
            </td>

            <td>
              <h3>Hooks Redux Ice Cream Continaer</h3>
              <IceCreamContainerHooks />
            </td>
          </tr>
        </table>

        <hr />
        <h3> Passing Own Property and managing the state</h3>
        <table>
          <tr>
            <td>
              <ItemContainer cake />
            </td>
            <td>
              <ItemContainer />
            </td>
          </tr>
        </table> */}
        
        <UserListContianer />
      </div>
      
    </Provider>
  );
}


export default App;
