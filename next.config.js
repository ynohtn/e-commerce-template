module.exports = {
  sassOptions: {
    includePaths: ['src/styles']
  },
  images: {
    domains: ['localhost', 'images.prismic.io']
  },
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr'
  },
  webpack(config) {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: { ref: true }
          },
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/images/',
              outputPath: 'static/images/'
            }
          }
        ]
      }
    ];
    return config;
  }
};
