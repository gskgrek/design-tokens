import Image from "next/image"

import { Button, Col, Row } from "antd"
import AntdCard from "antd/es/card/Card"
import Meta from "antd/es/card/Meta"

import style from './Card.module.css'

export const Card = () => {
  return (
    <AntdCard
      className={style.card}
      hoverable
      cover={ <Image src="/image.jpg" width="350" height="262" alt="" />}
    >
      <Meta
        title="How to write content about your photographs"
        description="Aliquam ullamcorper sem vel erat scelerisque placerat. Curabitur maximus libero eget metus porttitor, nec venenatis leo aliquam. Praesent ultrices dolor ac maximus pulvinar. Mauris bibendum mauris eget ex imperdiet fringilla."
      />
      <Row gutter={16} className={style.footerActions}>
        <Col>
          <Button type="primary">Read</Button>
        </Col>
        <Col>
          <Button type="primary">Share</Button>
        </Col>
      </Row>
    </AntdCard>
  )
}