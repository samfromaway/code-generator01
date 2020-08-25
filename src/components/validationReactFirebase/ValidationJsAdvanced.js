import React, { useState, useEffect } from "react";
import Paper02 from "./../Paper02";
import CodeBlock from "./../CodeBlock";
import { capitalize } from "./../../functions/textTransform";

const ValidationJsAdvanced = (props) => {
  const [items, setItems] = useState("");
  const capitalizedVariable = capitalize(props.variable);
  const variable = props.variable ? props.variable : "NO_VARIABLE_SELECTED";
  const setContent = () => {
    setItems("");
    props.items.forEach((e) => {
      setItems((prev) => prev + generateContent(e));
    });
  };
  const setContent2 = () => {
    const items = [];
    props.items.forEach((e) => {
      items.push(generateContent(e));
    });
    return items;
  };

  useEffect(() => {
    setContent();
    if (setContent2()[0]) {
      console.log(setContent2()[0]);
    }

    // eslint-disable-next-line
  }, [props.items, props.variable]);

  const type = (input) => {
    return `typeof ${variable}.${input.myKey} !== "${input.type}"`;
  };

  const rangeType = (input) => {
    if (input.rangeType) {
      const inputRange =
        input.type === "string" ? `"${input.range}"` : input.range;
      // Keep in mind symbols and symbol names are purposely reversed
      const rangeSymbol = () => {
        switch (input.rangeType) {
          case "equal":
            return "!==";
          case "notEqual":
            return "===";
          case "lessThan":
            return ">=";
          case "lessThanOrEqualTo":
            return ">";
          case "greaterThan":
            return "<=";
          case "greaterThanOrEqualTo":
            return "<";
          case "between":
            return "<";
          default:
            return "";
        }
      };
      return `${variable}.${input.myKey} ${rangeSymbol()} ${inputRange}`;
    } else return "";
  };

  const range2 = (input) => {
    if (input.range2) {
      const inputRange =
        input.type === "string" ? `"${input.range2}"` : input.range2;
      return `${variable}.${input.myKey} > ${inputRange}`;
    } else return "";
  };

  const isRequired = (input) => {
    if (input.isRequired) {
      return `${variable}.${input.myKey} === ""`;
    }
  };

  const generateContent = (item) => {
    const brk = " ||\n";
    const space = "    ";
    const ifCheckOutro = `\n  ) {\n${space}return "error in ${variable}.${item.myKey}"`;
    const elseIf = "\n  } else if (";
    const comment = item.myKey ? `\n${space}// ${variable}.${item.myKey}` : "";
    const curType = item.type ? "\n" + space + type(item) : "";
    const curRangeType = item.rangeType ? brk + space + rangeType(item) : "";
    const curRange2 = item.range2 ? brk + space + range2(item) : "";
    const curRequired = item.isRequired ? brk + space + isRequired(item) : "";
    const allContent =
      elseIf +
      comment +
      curType +
      curRangeType +
      curRange2 +
      curRequired +
      ifCheckOutro;

    return allContent;
  };

  // slice is to eliminate the first else... from content
  const content = `function isNotValid${capitalizedVariable}(${variable}) {
    ${items.slice(10)}
  } else return false
}`;

  return (
    <Paper02 title="JS Validation (Advanced)">
      <CodeBlock content={content} />
    </Paper02>
  );
};

export default ValidationJsAdvanced;
