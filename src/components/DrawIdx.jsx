import { useContext } from "react";
import uuid from "react-uuid";
import { BattlefieldContext } from "./BattlefieldContext";

export default function DrawIdx({ type }) {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { lang } = useContext(BattlefieldContext);

  return (
    <div className={"battlefield-" + type}>
      {digits.map((item) => (
        <span
          className="idx"
          key={uuid()}
          style={type === "digits" ? { gridColumn: item } : { gridRow: item }}
        >
          {type === "digits"
            ? item
            : lang === "ru" 
            ? (item !== 10 ? String.fromCharCode(item + 1039) : "К")
            : String.fromCharCode(item + 64)}
        </span>
      ))}
    </div>
  );
}
