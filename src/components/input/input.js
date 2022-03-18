import { memo } from "react"
import style from "./input.module.scss"

export const Input = memo(({ value, handler }) => (
  <input
    className={style.input}
    type="text"
    value={value}
    onChange={handler}
  />
))
