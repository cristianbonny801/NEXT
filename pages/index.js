import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { isAbsoluteUrl } from 'next/dist/shared/lib/utils'

export default function Home() {
  const router= useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
    
    <h1>hola que hacen hay que mondaaa</h1>
    <Link href='about'>aqui llegas a about</Link>
    
    </div>
  )
}