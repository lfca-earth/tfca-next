const withAntdLess = require('next-plugin-antd-less')
const withBundleAnalyzer = require('@next/bundle-analyzer')
const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')

const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    localeDetection: false,
    // IMPORTANT: This must! match all possible isoCodes in the `languagesCollection` in contentful!!!
    // TODO: fetch contentful languages dynamically
    locales: ['de', 'en', 'en-US'],
  },
  images: {
    domains: [
      'localhost',
      'images.ctfassets.net',
      'www.bundestag.de',
      'www.europarl.europa.eu',
      'backend.wirklich-gruen.de',
      'res.cloudinary.com',
      'tfca.earth',
      'www.tfca.earth',
    ],
  },
  async redirects() {
    /**
     * TODO:
     * - change permanent redirect from `false` to `true`
     */
    return [
      {
        destination: '/int',
        permanent: false,
        source: '/',
      },
      {
        destination: '/int/supporter/:companySlug',
        permanent: false,
        source: '/supporter/:companySlug',
      },
      {
        destination: '/int/invite/:shareToken',
        permanent: false,
        source: '/invite/:shareToken',
      },
    ]
  },
}

module.exports = withPlugins(
  [
    [
      withAntdLess,
      {
        lessVarsFilePath: './styles/variables.less',
        webpack: (config) => {
          config.module.rules.push({
            issuer: /\.[jt]sx?$/,
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
          })

          return config
        },
      },
    ],
    [
      withBundleAnalyzer,
      {
        enabled: process.env.ANALYZE === 'true',
      },
    ],
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
        },
      },
    ],
  ],
  nextConfig
)
