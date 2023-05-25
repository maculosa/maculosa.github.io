import React from "react";
import classnames from "classnames";
import NoxNavModule from "../components/NoxNavModule";
import navigateJSON from '../config/navigate.json'

export default (props) => {
  const { className } = props;


  return (
    <div
      className={classnames([
        className,
        "flex",
        "justify-start",
        "flex-wrap",
        "p-4",
        "gap-3",
      ])}
    >
      {navigateJSON.map((nox) => {
        if (nox.type && nox.type === "group") {
          return <NoxNavModule {...nox} />;
        }
        return null;
      })}
    </div>
  );
};
