import { memo } from "react";
import style from "./title.module.scss";

export const Title = memo(({ text }) => (
  <div className={style.title}>{text}</div>
));
