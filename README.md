# Google Play Badges

This repository contains all 77 localizations of the Google Play badge updated with the new logo (July 2022).

- [EPS format (original)](https://github.com/pioug/google-play-badges/tree/main/eps)
- [SVG format](https://github.com/pioug/google-play-badges/tree/main/svg)
- [Figma source](https://github.com/pioug/google-play-badges/tree/main/figma)

## Download

| Locale | SVG                       | Locale | SVG               | Locale | SVG                     |
| ------ | ------------------------- | ------ | ----------------- | ------ | ----------------------- |
| af     | ![af](svg/af.svg)         | hr     | ![hr](svg/hr.svg) | pa     | ![pa](svg/pa.svg)       |
| am     | ![am](svg/am.svg)         | hu     | ![hu](svg/hu.svg) | pl     | ![pl](svg/pl.svg)       |
| ar     | ![ar](svg/ar.svg)         | hy     | ![hy](svg/hy.svg) | pt     | ![pt](svg/pt.svg)       |
| az     | ![az](svg/az.svg)         | id     | ![id](svg/id.svg) | pt-br  | ![pt-br](svg/pt-br.svg) |
| be     | ![be](svg/be.svg)         | is     | ![is](svg/is.svg) | ro     | ![ro](svg/ro.svg)       |
| bg     | ![bg](svg/bg.svg)         | it     | ![it](svg/it.svg) | ru     | ![ru](svg/ru.svg)       |
| bn     | ![bn](svg/bn.svg)         | iw     | ![iw](svg/iw.svg) | si     | ![si](svg/si.svg)       |
| bs     | ![bs](svg/bs.svg)         | ja     | ![ja](svg/ja.svg) | sk     | ![sk](svg/sk.svg)       |
| ca     | ![ca](svg/ca.svg)         | ka     | ![ka](svg/ka.svg) | sl     | ![sl](svg/sl.svg)       |
| cs     | ![cs](svg/cs.svg)         | kk     | ![kk](svg/kk.svg) | sq     | ![sq](svg/sq.svg)       |
| da     | ![da](svg/da.svg)         | km     | ![km](svg/km.svg) | sr     | ![sr](svg/sr.svg)       |
| de     | ![de](svg/de.svg)         | kn     | ![kn](svg/kn.svg) | sv     | ![sv](svg/sv.svg)       |
| el     | ![el](svg/el.svg)         | ko     | ![ko](svg/ko.svg) | sw     | ![sw](svg/sw.svg)       |
| en     | ![en](svg/en.svg)         | ky     | ![ky](svg/ky.svg) | ta     | ![ta](svg/ta.svg)       |
| es     | ![es](svg/es.svg)         | lo     | ![lo](svg/lo.svg) | te     | ![te](svg/te.svg)       |
| es-419 | ![es-419](svg/es-419.svg) | lt     | ![lt](svg/lt.svg) | th     | ![th](svg/th.svg)       |
| et     | ![et](svg/et.svg)         | lv     | ![lv](svg/lv.svg) | tr     | ![tr](svg/tr.svg)       |
| eu     | ![eu](svg/eu.svg)         | mk     | ![mk](svg/mk.svg) | ua     | ![ua](svg/ua.svg)       |
| fa     | ![fa](svg/fa.svg)         | ml     | ![ml](svg/ml.svg) | ur     | ![ur](svg/ur.svg)       |
| fi     | ![fi](svg/fi.svg)         | mn     | ![mn](svg/mn.svg) | uz     | ![uz](svg/uz.svg)       |
| fil    | ![fil](svg/fil.svg)       | mr     | ![mr](svg/mr.svg) | vi     | ![vi](svg/vi.svg)       |
| fr     | ![fr](svg/fr.svg)         | ms     | ![ms](svg/ms.svg) | zh-cn  | ![zh-cn](svg/zh-cn.svg) |
| fr-ca  | ![fr-ca](svg/fr-ca.svg)   | my     | ![my](svg/my.svg) | zh-hk  | ![zh-hk](svg/zh-hk.svg) |
| gl     | ![gl](svg/gl.svg)         | ne     | ![ne](svg/ne.svg) | zh-tw  | ![zh-tw](svg/zh-tw.svg) |
| gu     | ![gu](svg/gu.svg)         | nl     | ![nl](svg/nl.svg) | zu     | ![zu](svg/zu.svg)       |
| hi     | ![hi](svg/hi.svg)         | no     | ![no](svg/no.svg) |

## Why I made them?

- As of September 2022, only the English badge has been updated with the new logo on https://play.google.com/intl/en_us/badges/ 🙈
- The formats are limited to EPS and PNG 🙈
- The images are not trimmed 🙈

## How I made them?

1. Ran Node script to download the EPS version from https://play.google.com/intl/en_us/badges/ for all localization:

```sh
node main.js
```

2. Converted EPS to SVG using Inkscape command line:

```sh
/Applications/Inkscape.app/Contents/MacOS/inkscape --export-type='svg' eps/*.eps
```

3. Cleaned up vectors and updated logo in Figma

```sh
./figma/badges.fig
```

4. Compressed SVG

```sh
svgo -f svg
```
