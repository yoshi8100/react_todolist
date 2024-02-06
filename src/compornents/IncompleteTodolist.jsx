const styleIncompleteArea = {
    border: "2px solid #aacfd0",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px",
  };
  
  const styleTitle = {
    textAlign: "center",
    marginTop: 0,
    fontWeight: "bold",
  };
  
  const styleListRow = {
    display: "flex",
    alignItems: "center",
  };
  
  const styleTodoItem = {
    margin: "6px",
  };
  
  export const IncompleteTodolist = (props) => {
    const { todos, onClickComplete, onClickDelete } = props;
    return (
      <div style={styleIncompleteArea}>
        <p style={styleTitle}>未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => (
            <li key={todo}>
              <div style={styleListRow}>
                <p style={styleTodoItem}>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  