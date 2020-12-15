import './App.css';
import ListItem from './Components/ListItem';

let listItems = ["wake up", "shake up", "code code code", "what is life", "sleep"];

let listAllItems = listItems.map((listeItem, idx) => {
  return <ListItem doThis={listItem} key={idx}/>
})

function App() {
  return (
    <div className="App">
      <header>To-do List</header>
      <div>
        <ul>
          <>{listAllItems}</>
        </ul>
      </div>
    </div>
  );
}

export default App;

