import { BasketList } from "../../components/BasketList/BasketList";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { Modal } from "../../components";
import { modal } from "../../assets";
import Wrapper from "../../components/Wrapper/Wrapper";
import { ROUTE } from "../../router";
import { useNavigate } from "react-router";

export const BasketPage = () => {
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  
  const handleModalClose = () => {
    setOrderSubmitted(true);
  };
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
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
        {isMobile && (
          <div className={styles.mobile}>
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
              <>
                <div className={styles.total}>1 348,76 ₸</div>
                <button
                  className={styles.btn}
                  type="button"
                  onClick={handleModalClose}
                >
                  Оформить заказ
                </button>
              </>
            )}
          </div>
        )}
      </Wrapper>
    </div>
  );
};
