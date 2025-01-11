# Google Play Badges

This repository contains all localizations of the Google Play badge available on  (January 2025).

- [SVG format](https://github.com/pioug/google-play-badges/tree/main/svg)
- [Figma source](https://github.com/pioug/google-play-badges/tree/main/figma)

## Caveats

SVG has been made for the AI versions but I notice few problems in Google's assets :

- The AI version of `Amharic` is not available
- The AI version of `Spanish` does not match the PNG version

## Download

| Language          | Preview                                         | Language            | Preview                                             | Language            | Preview                                             |
| ----------------- | ----------------------------------------------- | ------------------- | --------------------------------------------------- | ------------------- | --------------------------------------------------- |
| Afrikaans         | ![Afrikaans](svg/Afrikaans.svg)                 | Albanian            | ![Albanian](svg/Albanian.svg)                       | Arabic-Saudi-Arabia | ![Arabic-Saudi-Arabia](svg/Arabic-Saudi-Arabia.svg) |
| Armenian          | ![Armenian](svg/Armenian.svg)                   | Azerbaijani         | ![Azerbaijani](svg/Azerbaijani.svg)                 | Bangla              | ![Bangla](svg/Bangla.svg)                           |
| Basque            | ![Basque](svg/Basque.svg)                       | Belarusian          | ![Belarusian](svg/Belarusian.svg)                   | Bosnian             | ![Bosnian](svg/Bosnian.svg)                         |
| Bulgarian         | ![Bulgarian](svg/Bulgarian.svg)                 | Burmese             | ![Burmese](svg/Burmese.svg)                         | Catalan             | ![Catalan](svg/Catalan.svg)                         |
| Chinese-China     | ![Chinese-China](svg/Chinese-China.svg)         | Chinese-Hong-Kong   | ![Chinese-Hong-Kong](svg/Chinese-Hong-Kong.svg)     | Chinese-Taiwan      | ![Chinese-Taiwan](svg/Chinese-Taiwan.svg)           |
| Croatian          | ![Croatian](svg/Croatian.svg)                   | Czech               | ![Czech](svg/Czech.svg)                             | Danish              | ![Danish](svg/Danish.svg)                           |
| Dutch             | ![Dutch](svg/Dutch.svg)                         | English             | ![English](svg/English.svg)                         | Estonian            | ![Estonian](svg/Estonian.svg)                       |
| Filipino          | ![Filipino](svg/Filipino.svg)                   | Finnish             | ![Finnish](svg/Finnish.svg)                         | French              | ![French](svg/French.svg)                           |
| French-CA         | ![French-CA](svg/French-CA.svg)                 | Galician            | ![Galician](svg/Galician.svg)                       | Georgian            | ![Georgian](svg/Georgian.svg)                       |
| German            | ![German](svg/German.svg)                       | Greek               | ![Greek](svg/Greek.svg)                             | Gujarati            | ![Gujarati](svg/Gujarati.svg)                       |
| Hebrew            | ![Hebrew](svg/Hebrew.svg)                       | Hindi               | ![Hindi](svg/Hindi.svg)                             | Hungarian           | ![Hungarian](svg/Hungarian.svg)                     |
| Icelandic         | ![Icelandic](svg/Icelandic.svg)                 | Indonesian          | ![Indonesian](svg/Indonesian.svg)                   | Italian             | ![Italian](svg/Italian.svg)                         |
| Japanese          | ![Japanese](svg/Japanese.svg)                   | Kannada             | ![Kannada](svg/Kannada.svg)                         | Kazakh              | ![Kazakh](svg/Kazakh.svg)                           |
| Khmer             | ![Khmer](svg/Khmer.svg)                         | Korean              | ![Korean](svg/Korean.svg)                           | Kyrgyz              | ![Kyrgyz](svg/Kyrgyz.svg)                           |
| Lao               | ![Lao](svg/Lao.svg)                             | Latvian             | ![Latvian](svg/Latvian.svg)                         | Lithuanian          | ![Lithuanian](svg/Lithuanian.svg)                   |
| Macedonian        | ![Macedonian](svg/Macedonian.svg)               | Malayalam           | ![Malayalam](svg/Malayalam.svg)                     | Malaysian           | ![Malaysian](svg/Malaysian.svg)                     |
| Marathi           | ![Marathi](svg/Marathi.svg)                     | Mongolian           | ![Mongolian](svg/Mongolian.svg)                     | Nepali              | ![Nepali](svg/Nepali.svg)                           |
| Norwegian         | ![Norwegian](svg/Norwegian.svg)                 | Persian             | ![Persian](svg/Persian.svg)                         | Polish              | ![Polish](svg/Polish.svg)                           |
| Portuguese-Brazil | ![Portuguese-Brazil](svg/Portuguese-Brazil.svg) | Portuguese-Portugal | ![Portuguese-Portugal](svg/Portuguese-Portugal.svg) | Punjabi             | ![Punjabi](svg/Punjabi.svg)                         |
| Romanian          | ![Romanian](svg/Romanian.svg)                   | Russian             | ![Russian](svg/Russian.svg)                         | Serbian             | ![Serbian](svg/Serbian.svg)                         |
| Sinhalese         | ![Sinhalese](svg/Sinhalese.svg)                 | Slovak              | ![Slovak](svg/Slovak.svg)                           | Slovenian           | ![Slovenian](svg/Slovenian.svg)                     |
| Spanish           | ![Spanish](svg/Spanish.svg)                     | Spanish-LATAM       | ![Spanish-LATAM](svg/Spanish-LATAM.svg)             | Swahili             | ![Swahili](svg/Swahili.svg)                         |
| Swedish           | ![Swedish](svg/Swedish.svg)                     | Tamil               | ![Tamil](svg/Tamil.svg)                             | Telugu              | ![Telugu](svg/Telugu.svg)                           |
| Thai              | ![Thai](svg/Thai.svg)                           | Turkish             | ![Turkish](svg/Turkish.svg)                         | Ukranian            | ![Ukranian](svg/Ukranian.svg)                       |
| Urdu              | ![Urdu](svg/Urdu.svg)                           | Uzbek               | ![Uzbek](svg/Uzbek.svg)                             | Vietnamese          | ![Vietnamese](svg/Vietnamese.svg)                   |
| Zulu              | ![Zulu](svg/Zulu.svg)                           |                     |                                                     |                     |                                                     |

## Why I made them?

- The SVG format is not available 🙈
- The images are not trimmed 🙈

## How I made them?

1. Download the AI version from https://play.google.com/intl/en_us/badges/ for all localization

2. Converted AI to SVG using Inkscape command line:

```sh
/Applications/Inkscape.app/Contents/MacOS/inkscape --export-text-to-path --pdf-font-strategy=draw-all --export-type='svg' *.ai
```

3. Cleaned up vectors and updated logo in Figma

```sh
./figma/badges.fig
```

4. Compressed SVG

```sh
svgo -f svg
```
