import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.title} >
        <h1>SEJA BEM VINDO A SUA LISTA PARA A MOCHILA DE EMERGENCIA</h1>
      </header>
      <div>
        <a href='https://wol.jw.org/pt/wol/d/r5/lp-t/102017165#h=45' >
        Máteria: Despertai 2017 Nº5 pp.3-7
        </a>
      </div>
      <main className={styles.body} >
        <ul>
          <li className={styles.card} >
            <input type='checkbox' />
            <label htmlFor='' >
              Cobertores, roupas e calçasdos resistentes
            </label>
          </li>
          <li className={styles.card} >
            <input type='checkbox' />
            <label htmlFor='' >

              Lanterna
            </label>
          </li>
          <li className={styles.card} >
            <input type='checkbox' />
            <label htmlFor='' >

              Kit de primeros socorros e um apito para pedir ajuda
            </label>
          </li>
          <li className={styles.card} >
            <input type='checkbox' />
            <label htmlFor='' >

              Talheres, abridor de late, fósforo à prova d´água e um pequeno kit de ferramentas
            </label>
          </li>
          <li className={styles.card} >
            <input type='checkbox' />
            <label htmlFor='' >

              Máscaras contra poeira, fita à prova d´água e lonas de plástico para você se abrigar
            </label>
          </li>
          <li className={styles.card} >
            <input type='checkbox' />
            <label htmlFor='' >

              Escova de dente, sabonete, toalhas e papel higiênico
            </label>
          </li>
          <li className={styles.card} >
            <input type='checkbox' />
            <label htmlFor='' >
              Itens para cuidar de crianças, idosos ou deficientes
            </label>
          </li>
          <li className={styles.card} >
            <input type='checkbox' />
            <label htmlFor='' >

              Um recipiente à prova d´água para guardar remédios, cópias de receitas médicas e outros documentos importantes
            </label>
          </li>
          <li className={styles.card} >
            <input type='checkbox' />
            <label htmlFor='' >

              Lista de contatos de emergência e um mapa da região
            </label>
          </li>
          <li className={styles.card} >
            <input type='checkbox' />
            <label htmlFor='' >

              Cartões de crédito e dinheiro
            </label>
          </li>
          <li className={styles.card} >
            <input type='checkbox' />
            <label htmlFor='' >

              Papel, lápis, livros e brinquedos para as crianças
            </label>
          </li>
          <li className={styles.card} >
            <input type='checkbox' />
            <label htmlFor='' >
              Bíblia
            </label>
          </li>
        </ul>
      </main>
    </main>
  )
}
