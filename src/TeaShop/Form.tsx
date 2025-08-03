import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useState,
  type ChangeEventHandler,
  type FC,
  type FocusEventHandler,
  type MouseEventHandler,
} from "react";
import { Tea } from "./models/Tea";
import { Topping } from "./models/Topping";
import { Size } from "./models/Size";
import { ICE_LEVELS, SUGAR_LEVELS } from "./models/Item";
import { Drink } from "./Drink";

export const Form: FC = () => {
  // customer 狀態處理
  const [customer, setCustomer] = useState<string>("");
  const handleCustomerChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCustomer(e.target.value);
  };

  // 1.1. tea 狀態：控制 select 當前選中的值(預設值會鎖住 value)
  const [tea, setTea] = useState<Tea>(Tea.BLACK_TEA);
  // 1.2. 處理 select 選項改變：當使用者選擇不同茶種時更新狀態
  const handleTeaChange: ChangeEventHandler<HTMLSelectElement> = (e) =>
    setTea(e.target.value as Tea);

  // withFoam 狀態處理
  const [withFoam, setWithFoam] = useState<boolean>(false);
  const handleWithFoamChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setWithFoam(e.target.checked);
  };

  // size 狀態處理
  const [size, setSize] = useState<Size>(Size.LARGE as Size);
  const handleSizeChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setSize(e.target.value as Size);

  // sugar 狀態處理
  const sugarArr = Array.from({ length: SUGAR_LEVELS }, (_, i) => i);
  const [sugar, setSugar] = useState<number>(SUGAR_LEVELS - 1); // 預設無糖(0)
  const handleSugarChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSugar(Number(e.target.value));
  };

  // ice 狀態處理
  const iceArr = Array.from({ length: ICE_LEVELS }, (_, i) => i);
  const [ice, setIce] = useState<number>(ICE_LEVELS - 1); // 預設正常(2)
  const handleIceChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setIce(Number(e.target.value));
  };

  // 2.1. toppings 狀態：控制 checkbox 當前選中的 value (預設為 [])
  const [toppings, setToppings] = useState<Topping[]>([]);
  // 2.2. 處理 checkbox 選項改變：當使用者選擇不同茶種時更新狀態
  const handleToppingsChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      setToppings([...toppings, e.target.value as Topping]); // 配料打勾
    } else {
      setToppings(toppings.filter((t) => t !== (e.target.value as Topping))); // 配料取消打勾
    }
  };

  // 3.1. quantity 狀態：控制 input 當前的 value (預設為 1)
  const [quantity, setQuantity] = useState<number>(1);
  // 3.2. 處理加號按鈕按下： quantity + 1 並更新狀態
  const handleQuantityIncre: MouseEventHandler<HTMLButtonElement> = () =>
    setQuantity(quantity + 1);
  // 3.3. 處理減號按鈕按下： quantity - 1 並更新狀態(但不得小於1)
  const handleQuantityDecre: MouseEventHandler<HTMLButtonElement> = () =>
    setQuantity(quantity === 1 ? 1 : quantity - 1);
  // 3.4. 處理 input 框改變： 用 e.target.value 更新狀態
  const handleQuantityInputChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setQuantity(Number(e.target.value));
  // 3.5. 防止使用者手動輸入 0： 監聽 blur 事件，如 quantity 小於1，則強制設定為1
  const handleQuantityInputBlur: FocusEventHandler<HTMLInputElement> = () =>
    setQuantity(quantity < 1 ? 1 : quantity);

  // 初始化所有狀態
  const resetAll = (): void => {
    setCustomer("");
    setTea(Tea.BLACK_TEA);
    setWithFoam(false);
    setSize(Size.LARGE as Size);
    setSugar(SUGAR_LEVELS - 1);
    setIce(ICE_LEVELS - 1);
    setToppings([]);
    setQuantity(1);
  };

  // 清除按鈕事件處理
  const handleCleanClick: MouseEventHandler<HTMLButtonElement> = () =>
    resetAll();

  // 新增(Order)按鈕事件處理
  const handleAddOrderClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e.target);
  };

  return (
    <section className="form">
      <div className="columns is-centered">
        <div className="column is-8">
          {/* 視覺化杯子 */}
          <Drink
            item={{ tea, withFoam, size, sugar, ice, toppings, quantity }}
          />
        </div>
        <div className="column is-8 mb-5">
          {/* 飲料表單 */}
          <div className="box p-5">
            {/* 訂購人 */}
            <div className="field">
              <label className="label">訂購人</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="訂購人姓名"
                  value={customer}
                  onChange={handleCustomerChange}
                />
              </div>
            </div>

            {/* 茶品 */}
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

            {/* 奶蓋 */}
            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={withFoam}
                    onChange={handleWithFoamChange}
                    style={{ marginRight: "0.3rem" }}
                  />
                  奶蓋
                </label>
              </div>
            </div>

            {/* 大小杯 */}
            <div className="field">
              <label className="label">容量</label>
              <div className="control">
                {Object.entries(Size).map(([k, v]) => (
                  <label className="radio mr-2" key={k}>
                    <input
                      type="radio"
                      name="size"
                      value={v}
                      checked={size === v}
                      onChange={handleSizeChange}
                      style={{ marginRight: "0.3rem" }}
                    />
                    {v}
                  </label>
                ))}
              </div>
            </div>

            {/* 甜度 */}
            <div className="field">
              <label className="label">甜度</label>
              <div className="control">
                {sugarArr.map((s) => (
                  <label className="radio mr-2" key={s}>
                    <input
                      type="radio"
                      name="sweetness"
                      value={s}
                      checked={sugar === s}
                      onChange={handleSugarChange}
                      style={{ marginRight: "0.3rem" }}
                    />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            {/* 冰塊 */}
            <div className="field">
              <label className="label">冰塊</label>
              <div className="control">
                {iceArr.map((i) => (
                  <label className="radio mr-2" key={i}>
                    <input
                      type="radio"
                      name="ice"
                      value={i}
                      checked={ice === i}
                      onChange={handleIceChange}
                      style={{ marginRight: "0.3rem" }}
                    />
                    {i}
                  </label>
                ))}
              </div>
            </div>

            {/* 配料 */}
            <div className="field">
              <label className="label">配料</label>
              <div className="control">
                {/* 2.3. 技巧：Object.entries(enum) + 解構 [k,v] + map() 動態生成 JSX */}
                {Object.entries(Topping).map(([k, v]) => (
                  <label className="checkbox mr-2" key={k}>
                    <input
                      type="checkbox"
                      value={v}
                      checked={toppings.includes(v)}
                      onChange={handleToppingsChange}
                      style={{ marginRight: "0.3rem" }}
                    />
                    {v}
                  </label>
                ))}
              </div>
            </div>

            {/* 幾杯 */}
            <div className="field">
              <label className="label">數量</label>
              <div className="field has-addons">
                <div className="control">
                  <button className="button" onClick={handleQuantityDecre}>
                    <span className="icon">
                      <FontAwesomeIcon icon={faMinus} />
                    </span>
                  </button>
                </div>
                <div className="control">
                  <input
                    className="input has-text-centered"
                    type="number"
                    value={quantity}
                    min={1}
                    onChange={handleQuantityInputChange}
                    onBlur={handleQuantityInputBlur}
                    style={{ width: "50px" }}
                  />
                </div>
                <div className="control">
                  <button className="button" onClick={handleQuantityIncre}>
                    <span className="icon">
                      <FontAwesomeIcon icon={faPlus} />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* 提交/清除按鈕 */}
            <div className="field is-grouped">
              <div className="control">
                <button
                  className="button is-link"
                  onClick={handleAddOrderClick}
                >
                  新增
                </button>
              </div>
              <div className="control">
                <button className="button is-light" onClick={handleCleanClick}>
                  清除
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
