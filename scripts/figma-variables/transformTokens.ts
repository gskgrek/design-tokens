import StyleDictionary from 'style-dictionary'

const runTransform = () => {
  process.stdout.write('\nTransforming Figma Variables...')

  const sd = StyleDictionary.extend({
    source: ['scripts/figma-variables/source/light.json'],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'src/configs/tokens/figma-variables/',
        files: [
          {
            destination: 'tokens.css',
            format: 'css/variables'
          }
        ],
      }
    }
  })

  sd.cleanAllPlatforms()
  sd.buildAllPlatforms()

  process.stdout.write('\x1b[93m Completed \x1b[0m\n')
}

runTransform()
