import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

interface Props {
  text: string
}

export default function Home(props:Props) {
  return (
    <div className={styles.container}>
      
    <p>{props.text}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const text = ctx.preview ? 'this is the preview page' : 'this is the published page'

  return {
    props: {
      text
    }
  }
}