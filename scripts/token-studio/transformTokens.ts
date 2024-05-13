import StyleDictionary from 'style-dictionary'
import { registerTransforms } from '@tokens-studio/sd-transforms'

import metadata from './source/$metadata.json'

const runTransform = () => {
  process.stdout.write('\nTransforming Token Studio...')

  registerTransforms(StyleDictionary)

  const sd = StyleDictionary.extend({
    source: metadata.tokenSetOrder.map(set => `scripts/token-studio/source/${set}.json`),
    platforms: {
      css: {
        transformGroup: 'tokens-studio',
        buildPath: 'src/configs/tokens/token-studio/',
        files: [
          {
            destination: 'tokens.css',
            format: 'css/variables'
          }
        ],
        options: {
          outputReferences: true,
        }
      }
    }
  })

  sd.cleanAllPlatforms()
  sd.buildAllPlatforms()

  process.stdout.write('\x1b[93m Completed \x1b[0m\n')
}

runTransform()
