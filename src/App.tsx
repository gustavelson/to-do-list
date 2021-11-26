import * as C from './app.styles';
import { useState } from 'react';
import { Item } from './types/item';
import { ListItem } from './components/listItem';
import { AddArea } from './components/AddArea'


const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão', done: false},
    { id: 2, name: 'Lavar banheiro', done: true},
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    }
    )
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask}/>


      {list.map((item, index) => (
        <ListItem key={index} item={item}/>

      ))}

      </C.Area>
    </C.Container> 
  );
}

export default App;
