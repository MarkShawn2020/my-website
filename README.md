# Website

- powered by [Docusaurus 2](https://docusaurus.io/), a modern static website generator, with my notes on it at: [docs/Software/Docusaurus/docusaurus-track.md](library/docs/Software/Docusaurus/docusaurus-track.md).
- statically hosted at: https://keeps-learning.vercel.app

## Private

- [vercel control](https://vercel.com/markshawn2020/docusaurus)
- [google analytics overview](https://analytics.google.com/analytics/web/#/p324822374/reports/reportinghub?params=_u.dateOption%3DthisWeekSatToToday)

## TODO

- [ ] 优化部署编译速度
- [ ] 实现 live-edit，参考：https://docusaurus.io/feature-requests/p/make-content-editing-easier

## History

- 2022-07-30, Sat, Sunny.
  - :rocket: **BREAKING** implemented the server-side `CharMap` for grouping Chinese tags into alphabets
  - :rocket: successfully deployed with new project structure (based on the `main`)
- 2022-07-29, Fri, Sunny.
  - archived all the docs into `library`
  - sorted out the difference between `git reset`, `git checkout` and `git reset --hard`
- 2022-07-28, Thu, Rainy.
  - added 'gallery' chapter
  - :rocket: deployed to Vercel, url: https://keeps-learning.vercel.app
- 2022-07-27, Wed, Rainy.
  - configured google analytics
    - see: [preset](./config/presets/index.js)
    - ref: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-analytics
  - replaced babel with esbuild
    - see: [webpack](./docusaurus.config.js)
    - ref:
      - [using `esbuild`(adopted)](https://github.com/facebook/docusaurus/issues/4765#issuecomment-841135926)
      - [using `cache`(not adopted)](https://stackoverflow.com/a/71599521/9422455)
- 2022-07-26, Tue，configured version，but failed to find the best solution to live-edit :(
- 2022-07-26, Tue，split `docusaurus.config.js` by modules，making project clearer
