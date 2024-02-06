import { useState } from "react";
import { InputTodolist } from "./compornents/InputTodolist";
import { IncompleteTodolist } from "./compornents/IncompleteTodolist";
import { CompleteTodolist } from "./compornents/CompleteTodolist";
import "./styles.css";

//　TODO一覧
export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  //　未完了のTODO一覧
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  //　完了のTODO一覧
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // タスク入力
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 削除ボタンの処理
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  //　完了ボタンの処理
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // 戻すボタンの処理
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const isMaxLimitedIncompleteTodos = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodolist
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isMaxLimitedIncompleteTodos}
      />
      {isMaxLimitedIncompleteTodos && (
        <p style={{ color: "red" }}>
          登録できるTODOは5個まで！！！消化して！！！
        </p>
      )}
      <IncompleteTodolist
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodolist todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
