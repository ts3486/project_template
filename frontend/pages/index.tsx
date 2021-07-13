import Head from 'next/head'
import { Container } from "react-bootstrap";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Container className="container">
          Posts
        </Container>
      </body>
    </div>
  )
}
