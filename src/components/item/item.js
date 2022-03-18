import { useState, useCallback, memo } from "react";
import { useDispatch } from "react-redux";
import { editItem, deleteItem } from "../../store/modules/list";
import { Typography, Input, Button } from "../";
import style from "./item.module.scss";

export const Item = memo(({ id, text, completed }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  const editHandler = useCallback(() => {
    if (isEdit) {
      const item = {
        id,
        completed,
        text: inputValue,
      };
      dispatch(editItem(item));
    }
    setIsEdit(!isEdit);
  }, [completed, dispatch, id, inputValue, isEdit]);

  const deleteHandler = useCallback(() => {
    dispatch(deleteItem(id));
  }, [dispatch, id]);

  const completeHandler = useCallback(() => {
    const item = {
      id,
      text,
      completed: !completed,
    };
    dispatch(editItem(item));
  }, [completed, dispatch, id, text]);

  const inputHandler = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  return (
    <div className={style.item}>
      <input
        className={style.checkbox}
        type="checkbox"
        checked={completed}
        onChange={completeHandler}
      />
      {isEdit ? (
        <Input value={inputValue} handler={inputHandler} />
      ) : (
        <Typography text={text} isCompleted={completed} />
      )}
      <div>
        <Button name="edit" handler={editHandler} />
        <Button name="delete" handler={deleteHandler} />
      </div>
    </div>
  );
});
