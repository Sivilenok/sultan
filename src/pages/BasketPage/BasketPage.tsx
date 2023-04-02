import { BasketList } from "../../components/BasketList/BasketList";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Modal } from "../../components";
import { modal } from "../../assets";
import Wrapper from "../../components/Wrapper/Wrapper";
import { ROUTE } from "../../router";
import { useNavigate } from "react-router";

export const BasketPage = () => {
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const navigate = useNavigate();
  const handleModalClose = () => {
    setOrderSubmitted(true);
  };
  

  return (
    <div className={styles.basket}>
      <Wrapper>
        <div className={styles.title}>Корзина</div>
        <BasketList />
        <div className={styles.wrapper}>
        {orderSubmitted ? (
  <Modal
    onClose={() => navigate(ROUTE.MAKE_ORDER)}
    isOpen={true}
    children={
      <div className={styles.wrap}>
        <img src={modal} alt="modal" className={styles.picture} />
        <div className={styles.message}>Спасибо за заказ!</div>
        <div className={styles.descr}>
          Наш менеджер свяжется с вами в ближайшее время
        </div>
      </div>
    }
  />
) : (
  <button
    className={styles.btn}
    type="button"
    onClick={handleModalClose}
  >
    Оформить заказ
  </button>
)}

          <div className={styles.total}>1 348,76 ₸</div>
        </div>
      </Wrapper>
    </div>
  );
};
