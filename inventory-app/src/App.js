
import './App.css';
import ItemList from './components/item-list/item-list.component';
import addItem from './pages/add-item/add-item.component';
import { Switch, Route,  } from 'react-router-dom';
import updateItem from './pages/update-item/update-item.component';
import AboutPage from './pages/about/about.component'


function App() {
  return (
    <div className="App">
      

      <Switch>
        <Route exact path='/additem' component={addItem} />
        <Route exact path='/' component={ItemList} />
        <Route exact path='/updateitem' component={updateItem} />
        <Route exact path='/about' component={AboutPage} />
      </Switch>

    </div>
  );
}

export default App;
