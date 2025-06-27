'use client'
import styles from "./home.module.css";
import  AvatarWrapper from "./components/AvatarWrapper"

export default function Home() {

  
  return (
      <main className={styles.main}>
        <section className={styles.sectionPrimera}>
          <h1>HOLA</h1> 
          <div className={styles.avatarAndButton}>
            <div className={styles.canvasContainer}>
              <AvatarWrapper />
            </div>
            <button className={styles.button} onClick={()=> console.log("HOLA")}>
              CLICA AQUI HOMBREE
            </button>
          </div>
          
        </section>
        <section className={styles.sectionSegunda}>
          <h1>HOLA 2</h1> 
        </section><section className={styles.sectionTercera}>
          <h1>HOLA 3</h1> 
        </section>
      </main>
  );
}
