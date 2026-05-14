# STEM Achievements Dataset

Real biographies of women, trans, non-binary, queer, Black, Indigenous, and people of colour scientists, engineers, and mathematicians — packaged as test data for use in demos, fixtures, and test suites.

## Quickstart

```bash
npm install stem-achievements-data @mosaic-code/test-data-factory
```

```typescript
import DataFactory from '@mosaic-code/test-data-factory';
import stemAchievementsData from 'stem-achievements-data';

const factory = new DataFactory(stemAchievementsData);

// Three random people for your test
const users = factory.getPeople(3);

// A specific person by id
const ada = factory.getPerson('ada-lovelace');

// People tagged Mathematics
const mathematicians = factory.getPeopleByTag('Mathematics');
```

For deterministic output across test runs, call `factory.setSeed(<number>)` first.

See the [framework README](https://github.com/mosaic-code-coop/test-data-api#readme) for the full DataFactory API.

## Purpose

This dataset recognizes and celebrates the achievements of Women, non-binary, queer, black, indigenous and people of colour in Science, Technology, Engineering, and Mathematics (STEM).

## Scope and Coverage

### Geographic Distribution

The data set aims to be geographically diverse in representation

### Representation Categories

- **Women in STEM**: Historical and contemporary achievements
- **Non-binary and queer scientists**: Contributions across all STEM fields
- **Black scientists and engineers**: African and African diaspora achievements
- **Indigenous scientists**: Traditional knowledge and modern research
- **People of colour**: Asian, Latinx, Middle Eastern, and other diverse backgrounds

## Historical Accuracy

All entries in this dataset are based on real people and strive for accurate representation.
If an entry is inaccurate, please let us know, or, ideally, open a pull request to correct it.

### Unicode Character Support

This dataset includes proper Unicode characters to help test applications' handling of international text:

- **Chinese Names**: Include traditional characters and tone-marked Pinyin
  - Example: `Wú Jiànxióng (吳健雄) / Chien-Shiung Wu`
- **Devanagari Script**: Sanskrit and Hindi names in native scripts
  - Example: `श्रीनिवास रामानुजन / Srīnivāsa Rāmānujan`
- **Cyrillic Script**: Russian names in Cyrillic alphabet
  - Example: `Софья Васильевна Ковалевская / Sofia Vasilyevna Kovalevskaya`
- **Extended Latin**: Accented characters and diacritical marks
  - Example: Various European names with proper accent marks

## Testing and Validation

## Contributing

When adding new entries, please:

- Follow the BIO_WRITING_SPEC.md guidelines
- Ensure accuracy with proper citations in the reference attribute
- Pictures should be URLs of public domain photo of the person or other suitable image
- Emails, phone numbers and other personal contact information must be clearly fake (email domains must end with .test, phone numbers include 555)
- Maintain geographic diversity requirements
- Use respectful and inclusive language
- Ensure tests pass

## License

MIT License - See LICENSE file for details.

## Releasing

Use conventional commits for changes (prefix with `feat:`, `fix:`, `docs:`,
etc.):

```bash
# Preview changelog before release
npm run release:dry

# Release (updates changelog, bumps version, pushes, publishes)
npm run release:patch   # 0.1.0 → 0.1.1
npm run release:minor   # 0.1.0 → 0.2.0
npm run release:major   # 0.1.0 → 1.0.0
```

## Acknowledgments

This dataset builds upon the work of historians, scientists, and researchers who have documented the contributions of marginalized groups in STEM. Special thanks to the communities and individuals whose stories are represented here.
