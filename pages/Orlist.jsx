import styles from "../styles/OrList.module.css";
import Navbar from "../components/Navbar";

export default function Orlist() {
  return (
    <>
      <Navbar />
      <div className={styles.bg}>
        <div className={styles.orh}>
          <h1>Order History</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.table}>
            <div className={styles.tableheader}>
              <div className={styles.headeritem}>
                <a id="name" className={styles.filterlink} href="#">
                  Order
                </a>
              </div>
              <div className={styles.headeritem}>
                <a id="wins" className={styles.filterlink} href="#">
                  Date
                </a>
              </div>
              <div className={styles.headeritem}>
                <a id="wins" className={styles.filterlink} href="#">
                  Payment
                </a>
              </div>
              <div className={styles.headeritem}>
                <a id="wins" className={styles.filterlink} href="#">
                  Status
                </a>
              </div>
              <div className={styles.headeritem}>
                <a id="wins" className={styles.filterlink} href="#">
                  Total
                </a>
              </div>
            </div>
            <div className={styles.tablecontent}>
              <div className={styles.tablerow}>
                <div className={styles.tabledata}>QuestTar NXT</div>
                <div className={styles.tabledata}>27 Februari 2022</div>
                <div className={styles.tabledata}>Rp.2.000.000</div>
                <div className={styles.tabledata}>Berhasil</div>
                <div className={styles.tabledata}>Rp.2.000.000</div>
              </div>
            </div>
            <div className="styles.black">
              <br />{" "}
            </div>
            <div className={styles.tablecontent}>
              <div className={styles.tablerow}>
                <div className={styles.tabledata}>Air Jordan 1 Low</div>
                <div className={styles.tabledata}>28 Maret 2022</div>
                <div className={styles.tabledata}>Rp.3.800.000</div>
                <div className={styles.tabledata}>Berhasil</div>
                <div className={styles.tabledata}>Rp.3.800.000</div>
              </div>
            </div>
            <br />
            <div className={styles.tablecontent}>
              <div className={styles.tablerow}>
                <div className={styles.tabledata}>Menx Tazon 6</div>
                <div className={styles.tabledata}>15 April 2022</div>
                <div className={styles.tabledata}>Rp.2.500.000</div>
                <div className={styles.tabledata}>Berhasil</div>
                <div className={styles.tabledata}>Rp.2.500.000</div>
              </div>
            </div>
            <br />
            <div className={styles.tablecontent}>
              <div className={styles.tablerow}>
                <div className={styles.tabledata}>Goodiver prime </div>
                <div className={styles.tabledata}>19 Mei 2022</div>
                <div className={styles.tabledata}>Rp.5.000.000</div>
                <div className={styles.tabledata}>Berhasil</div>
                <div className={styles.tabledata}>Rp.5.000.000</div>
              </div>
            </div>
            <br />
            <div className={styles.tablecontent}>
              <div className={styles.tablerow}>
                <div className={styles.tabledata}>Jordan stay loyal</div>
                <div className={styles.tabledata}>29 Juni 2022</div>
                <div className={styles.tabledata}>Rp.4.000.000</div>
                <div className={styles.tabledata}>Berhasil</div>
                <div className={styles.tabledata}>Rp.4.000.000</div>
              </div>
            </div>
            <br />
            <div className={styles.tablecontent}>
              <div className={styles.tablerow}>
                <div className={styles.tabledata}>Trail Savage</div>
                <div className={styles.tabledata}>31 Juni 2022</div>
                <div className={styles.tabledata}>Rp.3.000.000</div>
                <div className={styles.tabledata}>Berhasil</div>
                <div className={styles.tabledata}>Rp.3.000.000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
