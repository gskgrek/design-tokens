import Image from "next/image"

import { Button } from '@/components/token-studio'

import style from './Card.module.css'

export const Card = () => {
  return (
    <div className={style.card}>
      <div>
        <Image src="/image.jpg" width="350" height="262" alt="" />
      </div>
      <div className={style.body}>
        <div className={style.textContainer}>
          <div className={style.headingText}>How to write content about your photographs</div>
          <div className={style.bodyText}>
            Aliquam ullamcorper sem vel erat scelerisque placerat. Curabitur maximus libero eget metus porttitor, nec venenatis leo aliquam. Praesent ultrices dolor ac maximus pulvinar. Mauris bibendum mauris eget ex imperdiet fringilla.
          </div>
        </div>
        <div className={style.footerActions}>
          <Button label="Read" />
          <Button label="Share" />
        </div>
      </div>
    </div>
  )
}