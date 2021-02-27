
import './App.css';
import ItemList from './components/item-list/item-list.component'
import addItem from './pages/add-item/add-item.component'
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      

      <Switch>
        <Route exact path='/additem' component={addItem} />
        <Route exact path='/' component={ItemList} />
      </Switch>

    </div>
  );
}

export default App;
