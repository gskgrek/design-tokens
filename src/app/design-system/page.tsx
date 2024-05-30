import { ConfigProvider } from 'antd'

import { Card } from "@/components/design-system"

import theme from '@/configs/tokens/design-system/tokens.json'

export default function FigmaVariables() {
  return (
    <ConfigProvider
      theme={theme}
    >
      <Card />
    </ConfigProvider>
  );
}
