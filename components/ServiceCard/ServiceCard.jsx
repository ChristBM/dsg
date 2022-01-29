import Image from 'next/image'
import styles from './servicecard.module.css'

import estimate from '@public/personal_finance_tqcd.svg'
import pppEidl from '@public/at_work_re_qotl.svg'
import credit from '@public/credit_card_payment_re_o911.svg'
import bussines from '@public/business_shop_qw-5-t.svg'

export default function ServiceCard({ img, title, price, time}) {
  return (
    <div className={styles.container}>
      <div className={styles.img_cont}>
        {img === 'estimate' ? <Image src={estimate} alt='Dollar Symphony Group Service Image'/> : null}
        {img === 'pppEidl' ? <Image src={pppEidl} alt='Dollar Symphony Group Service Image'/> : null}
        {img === 'credit' ? <Image src={credit} alt='Dollar Symphony Group Service Image'/> : null}
        {img === 'bussines' ? <Image src={bussines} alt='Dollar Symphony Group Service Image'/> : null}
      </div>
      <div className={styles.texts_cont}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.texts_cont_btt}>
          <p className={styles.time}>{time}</p>
          <p className={styles.price}><i>{price === 0 ? 'FREE' : `$${price}`}</i></p>
        </div>
      </div>
    </div>
  )
}
