import { blurMap, failIcon, locationIcon, map, mapMob } from "../../assets";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.scss";

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <Wrapper>
        <img src={map} alt="map"  className={styles.pic}/>
        <img src={mapMob} alt="mapMob"  className={styles.picMob}/>
        <img src={blurMap} alt="blurMap" className={styles.picture} />
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Контакты</h2>
          <h4 className={styles.subtitle}>Оптовый поставщик «Султан»</h4>
          <div className={styles.wrap}>
            <div className={styles.list}>
              <span className={styles.text}>Адрес:</span>
              <div className={styles.item}>
                <img
                  src={locationIcon}
                  alt="location"
                  className={styles.location}
                />
                <p className={styles.descr}>
                  г. Кокчетав, ул. Ж. Ташенова 129Б <br /> (Рынок Восточный)
                </p>
              </div>
              <div className={styles.separator}></div>
            </div>
            <div className={styles.list}>
              <span className={styles.text}>Отдел продаж:</span>
              <p className={styles.descr}>
                +7 (777) 490-00-91 <br /> opt.sultan@mail.ru
              </p>
              <div className={styles.separator}></div>
            </div>
            <div className={styles.list}>
              <span className={styles.text}>Данные налогоплательщика:</span>
              <div className={styles.item}>
                <img
                  src={failIcon}
                  alt="fail"
                  className={styles.failIcon}>
                </img>
                <p className={styles.descr}>
                  ИП Катран Д.С. <br /> ИИН: 860113450858
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
