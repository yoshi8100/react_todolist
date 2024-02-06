const styleCompleteArea = {
    border: "2px solid #aacfd0",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px",
    backgroundColor: "#c9dede",
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
  
  export const CompleteTodolist = (props) => {
    const { todos, onClickBack } = props;
    return (
      <div style={styleCompleteArea}>
        <p style={styleTitle}>完了のTODO</p>
        <ul>
          {todos.map((todo, index) => (
            <li key={todo}>
              <div style={styleListRow}>
                <p style={styleTodoItem}>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  