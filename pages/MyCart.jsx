import Image from "next/image";
import styles from "../styles/MyCart.module.css";

import CartImg from "../assets/cart.jpg";
import Cart2Img from "../assets/sepatu2.jpg";

export default function MyChart() {
  return (
    <div>
      {/* body start */}
      <div className={styles.emblem}>
        <p>My Cart</p>
        <div className={styles.imgCart}>
          <Image src={CartImg} alt="image" />
        </div>
      </div>
      <br />
      <div className={styles.bgbody}>
        <div className={styles.isiCart}>
          <div className={styles.imgshoes}>
            <Image src={Cart2Img} alt="image2" />
          </div>
          <p>Sepatu trail savage</p>
        </div>
        <div className={styles.vl}></div>

        <div className={styles.detail}>
          <p>Ukuran : 6.5</p>
          <br />
          <p>Warna : Abu</p>
          <br />
          <p>Tersedia</p>
          <details className={styles.dropdown}>
            <summary role="button">
              <a className={styles.button}>
                Jumlah <b></b>
              </a>
            </summary>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </details>
          <div className={styles.delete}>
            <a>delete</a>
          </div>
          <div className={styles.btn}>
            <button className={styles.four}>
              Checkout <b>⮞</b>
            </button>
          </div>

          <section>
            <div>
              <ul className={styles.checklist}>
                <li>Total Produk</li>
                <br />
                <li>Pengiriman</li>
                <br />
                <li>Total(Temasuk PPN)</li>
                <br />
              </ul>
            </div>
          </section>
        </div>
      </div>
      {/* body end */}

      {/* FOOTER */}
      <div className={styles.footer}>
        <div className={styles.truk}>
          <Image src="/truk.jpg" width={25} height={25} />
          <br />
          <a>
            bebas pilih jasa
            <br /> pengiriman
          </a>
        </div>
        <div className={styles.muter}>
          <Image src="/muter.jpg" width={25} height={25} />
          <br />

          <a>
            pengembalian
            <br /> barang mudah
          </a>
        </div>
        <div className={styles.ceklis}>
          <Image src="/ceklis.jpg" width={25} height={25} />
          <br />
          <a>
            product 100% <br />
            original
          </a>
        </div>
      </div>
      <div className={styles.h1}>
        <h1>HAPPY SHOPPING</h1>
      </div>
    </div>
  );
}
