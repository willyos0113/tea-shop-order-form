import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, type ChangeEventHandler, type FC } from "react";
import { Tea } from "./models/Tea";

export const Form: FC = () => {
  // 1.1. tea 狀態：控制 select 當前選中的值(預設值會鎖住 value)
  const [tea, setTea] = useState<Tea>(Tea.BLACK_TEA);
  // 1.2. 處理 select 選項改變：當使用者選擇不同茶種時更新狀態
  const handleTeaChange: ChangeEventHandler<HTMLSelectElement> = (e) =>
    setTea(e.target.value as Tea);
  return (
    <>
      {/* 飲料表單 */}
      <div className="columns is-centered">
        <div className="column is-8">
          <div className="box p-5">
            {/* 茶品? */}
            <div className="field">
              <label className="label">茶品</label>
              <div className="control">
                <div className="select">
                  <select value={tea} onChange={handleTeaChange}>
                    {/* 1.3. 技巧：Object.entries(enum) + 解構 [k,v] + map() 動態生成 JSX */}
                    {Object.entries(Tea).map(([k, v]) => (
                      <option value={v} key={k}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 奶蓋? */}
            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" style={{ marginRight: "0.3rem" }} />
                  奶蓋
                </label>
              </div>
            </div>

            {/* 大小杯? */}
            <div className="field">
              <label className="label">容量</label>
              <div className="control">
                <label className="radio">
                  <input
                    type="radio"
                    name="size"
                    value="小"
                    defaultChecked
                    style={{ marginRight: "0.3rem" }}
                  />
                  小
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="size"
                    value="中"
                    style={{ marginRight: "0.3rem", marginLeft: "0.3rem" }}
                  />
                  中
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="size"
                    value="大"
                    style={{ marginRight: "0.3rem", marginLeft: "0.3rem" }}
                  />
                  大
                </label>
              </div>
            </div>

            {/* 甜度 */}
            <div className="field">
              <label className="label">甜度</label>
              <div className="control">
                <label className="radio">
                  <input
                    type="radio"
                    name="sweetness"
                    value="0"
                    defaultChecked
                    style={{ marginRight: "0.3rem" }}
                  />
                  0
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="sweetness"
                    value="1"
                    style={{ marginRight: "0.3rem", marginLeft: "0.3rem" }}
                  />
                  1
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="sweetness"
                    value="2"
                    style={{ marginRight: "0.3rem", marginLeft: "0.3rem" }}
                  />
                  2
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="sweetness"
                    value="3"
                    style={{ marginRight: "0.3rem", marginLeft: "0.3rem" }}
                  />
                  3
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="sweetness"
                    value="4"
                    style={{ marginRight: "0.3rem", marginLeft: "0.3rem" }}
                  />
                  4
                </label>
              </div>
            </div>

            {/* 冰塊? */}
            <div className="field">
              <label className="label">冰塊</label>
              <div className="control">
                <label className="radio">
                  <input
                    type="radio"
                    name="ice"
                    value="0"
                    defaultChecked
                    style={{ marginRight: "0.3rem" }}
                  />
                  0
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="ice"
                    value="1"
                    style={{ marginRight: "0.3rem", marginLeft: "0.3rem" }}
                  />
                  1
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="ice"
                    value="2"
                    style={{ marginRight: "0.3rem", marginLeft: "0.3rem" }}
                  />
                  2
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="ice"
                    value="3"
                    style={{ marginRight: "0.3rem", marginLeft: "0.3rem" }}
                  />
                  3
                </label>
              </div>
            </div>

            {/* 配料? */}
            <div className="field">
              <label className="label">配料</label>
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" style={{ marginRight: "0.3rem" }} />
                  仙草
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    style={{ marginRight: "0.3rem", marginLeft: "0.3rem" }}
                  />
                  布丁
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    style={{ marginRight: "0.3rem", marginLeft: "0.3rem" }}
                  />
                  黑糖
                </label>
              </div>
            </div>

            {/* 幾杯? */}
            <div className="field">
              <label className="label">數量</label>
              <div className="field has-addons">
                <div className="control">
                  <button className="button">
                    <span className="icon">
                      <FontAwesomeIcon icon={faMinus} />
                    </span>
                  </button>
                </div>
                <div className="control">
                  <input
                    className="input has-text-centered"
                    type="number"
                    defaultValue="1"
                    min="1"
                    style={{ width: "50px" }}
                  />
                </div>
                <div className="control">
                  <button className="button">
                    <span className="icon">
                      <FontAwesomeIcon icon={faPlus} />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* 提交或清除按鈕 */}
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">新增</button>
              </div>
              <div className="control">
                <button className="button is-light">清除</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
