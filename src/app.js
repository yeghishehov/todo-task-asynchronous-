import { useState, useCallback, useMemo, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { asyncAddItem } from "./store/modules/list";
import { Button, Input, Title, List } from "./components";
import style from "./app.module.scss";

export const App = memo(() => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  const [inputValue, setInputValue] = useState("");

  const inputHandler = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const addHandler = useCallback(
    (e) => {
      const item = {
        id: uuid(),
        completed: false,
        text: inputValue,
      };
      dispatch(asyncAddItem(item));
      setInputValue("");
    },
    [dispatch, inputValue]
  );

  const [activeList, completedList] = useMemo(
    () =>
      list.reduce(
        (acc, item) => {
          acc[Number(item.completed)].push(item);
          return acc;
        },
        [[], []]
      ),
    [list]
  );

  return (
    <div className={style.container}>
      <Title text="add item" />
      <Input value={inputValue} handler={inputHandler} />
      <Button name="add" handler={addHandler} />
      <Title text="todo" />
      <List values={activeList} />
      <Title text="completed" />
      <List values={completedList} />
    </div>
  );
});
