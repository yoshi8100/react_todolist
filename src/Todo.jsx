import { useState } from "react";
import "./styles.css";

//　未完了のTODO一覧
export const Todo = () => {
  const [todoText, setTodoText] = useState("タスク");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "TODOです1",
    "TODOです2",
  ]);

  //　完了のTODO一覧
  const [completeTodos, setCompleteTodos] = useState([
    "TODOでした1",
    "TODOでした2",
  ]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // タスク入力
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p>完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
