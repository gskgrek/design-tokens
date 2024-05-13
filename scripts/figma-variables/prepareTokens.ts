import fs from 'fs'

import tokens from './source/export.json'

const removePropsPrefix = (object: Record<string, unknown>) => {
  Object.keys(object).forEach((key: string) => {
    if (typeof object[key] === 'object') object[key] = removePropsPrefix(object[key] as Record<string, unknown>)
    if (key.includes('$')) {
      object[key.replace('$', '')] = object[key]
      delete object[key]
    }
  })
  return object
}

const prepareTokens = () => {
  const { Default: { modes: { Light } } } = tokens[0]

  const newLight = removePropsPrefix(Light)

  fs.writeFileSync('scripts/figma-variables/source/light.json', JSON.stringify(newLight, null, 2), 'utf-8')
}

prepareTokens()