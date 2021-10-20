import React, { useState } from "react";

function Specs({ product }) {
  // console.log("table  ==>", product);

  let top = {};
  product?.map((ele, i) => {
    top["name"] = product[0]?.title;
    top["unit"] = "";
    top["col" + i] = ele.model;
  });
  // console.log("top row ====>", top);

  //static json conversion of Beta Object
  let specifications = [top];
  product[0].tableData.map((ele, i) => {
    let tempObj = {};
    tempObj["name"] = ele?.fieldName?.trim() || "";
    tempObj["unit"] = ele?.unit || "";
    tempObj["col0"] = ele?.data?.trim() || "";

    let betaCopy = product?.slice(1);
    betaCopy.map((item, index) => {
      let temp = item?.tableData?.filter((element) => {
        return (
          element.fieldName?.toLowerCase().trim() ===
          ele.fieldName?.toLowerCase().trim()
        );
      });
      tempObj["col" + (index + 1)] = temp[0]?.data?.trim();
    });
    specifications.push(tempObj);
  });
  // console.log("specifications", specifications);
  ///////////////////////////////////////////

  const allEqual = (arr) =>
    arr.every((val) => val === arr[0] || val === undefined);
  const [state, setState] = useState(specifications);

  return (
    <div className="table-wrap">
      <table className="table" cellPadding="0" cellSpacing="0">
        <thead>
          <tr key={"header"}>
            {Object.values(state[0]).map(
              (key, index) =>
                index === 0 && (
                  <th colSpan={2} key={index}>
                    {key}
                  </th>
                )
            )}
            {Object.values(state[0]).map(
              (key, index) =>
                index >= 2 && (
                  <th style={{ textAlign: "center" }} key={index}>
                    {key}
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {state.slice(1).map((item, index) => (
            <tr key={index}>
              {Object.values(item)
                .slice(0, 1)
                .map((val, i) =>
                  i === 0 && !item.unit ? (
                    i === 0 && (
                      <td key={val} colSpan={2} className="t-desc">
                        {val}
                      </td>
                    )
                  ) : (
                    <td key={val} className="t-desc">
                      {val}
                    </td>
                  )
                )}
              {Object.values(item)
                .slice(1, 2)
                .map(
                  (val, i) =>
                    item.unit && (
                      <td key={i}>
                        <span key={i} className="cm-bold">
                          {val}
                        </span>
                      </td>
                    )
                )}
              {allEqual(Object.values(item).slice(2))
                ? Object.values(item)
                    .slice(2, 3)
                    .map((val, i) => (
                      <td
                        key={i}
                        style={{ textAlign: "center" }}
                        colSpan={Object.values(item).slice(2).length}
                        className="t-desc"
                      >
                        {val}
                      </td>
                    ))
                : Object.values(item)
                    .slice(2)
                    .map((val, i) => (
                      <td
                        style={{ textAlign: "center" }}
                        key={i}
                        className="t-desc"
                      >
                        {val}
                      </td>
                    ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Specs;
