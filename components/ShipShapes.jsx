import styles from "../styles/ShipShapes.module.css";

import Image from "next/image";

import aircraft from "../public/assets/Aircraft Shape.png";
import carrier from "../public/assets/Carrier Shape.png";
import missIcon from "../public/assets/Miss small.png";
import hitIcon from "../public/assets/Hit small.png";

export function ShipShapes(props) {
  return (
    <section className={styles.shipShapes}>
      <div className={styles.ship}>
        <div className={styles.shape}>
          <Image src={aircraft} layout="responsive" alt="ship-shape"></Image>
        </div>
        <div className={styles.status}>
          <Image src={missIcon} layout="intrinsic" alt="ship-shape"></Image>
          <Image src={missIcon} layout="intrinsic" alt="ship-shape"></Image>
          <Image src={hitIcon} layout="intrinsic" alt="ship-shape"></Image>
          <Image src={hitIcon} layout="intrinsic" alt="ship-shape"></Image>
        </div>
      </div>
      <div className={styles.ship}>
        <div className={styles.shape}>
          <Image src={carrier} layout="responsive" alt="ship-shape"></Image>
        </div>
        <div className={styles.status}>
          <Image src={missIcon} layout="intrinsic" alt="ship-shape"></Image>
          <Image src={hitIcon} layout="intrinsic" alt="ship-shape"></Image>
        </div>
      </div>
    </section>
  );
}
