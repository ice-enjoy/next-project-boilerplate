'use client';
import { StyleProvider, px2remTransformer } from '@ant-design/cssinjs';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';

const px2rem = px2remTransformer({
  rootValue: 16,
});

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        token: {},
        components: {},
      }}
    >
      <StyleProvider transformers={[px2rem]}>
        <AntdRegistry>{children}</AntdRegistry>
      </StyleProvider>
    </ConfigProvider>
  );
}

