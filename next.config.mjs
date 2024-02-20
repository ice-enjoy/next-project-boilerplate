/** @type {import('next').NextConfig} */
import withNextIntl from 'next-intl/plugin';

const withNextIntlConfig = withNextIntl('./src/libs/i18n.ts');

const nextConfig = {};

export default withNextIntlConfig(nextConfig);

