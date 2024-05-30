import { ConfigProvider } from 'antd'

import { Card } from "@/components/design-system"

export default function FigmaVariables() {
  return (
    <ConfigProvider
      theme={{
        token: {},
        components: {},
      }}
    >
      <Card />
    </ConfigProvider>
  );
}
