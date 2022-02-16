const { generateTemplateFiles } = require('generate-template-files');

const config = require('package.json');

generateTemplateFiles([
  {
    option: 'Create Component alone',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/app/components/',
    },
    stringReplacers: ['__store__', { question: 'Insert model name', slot: '__model__' }],
    output: {
      path: './src/stores/__store__(lowerCase)',
      pathAndFileNameDefaultCase: '(kebabCase)',
      overwrite: true,
    },
  },
  {
    option: 'Create Component alone',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/app/components/',
    },
    stringReplacers: ['__store__', '__model__'],
    dynamicReplacers: [
      { slot: '__version__', slotValue: config.version },
      { slot: '__description__', slotValue: config.description },
    ],
    output: {
      path: './src/stores/__store__/__store__(lowerCase)/__store__(pascalCase)Action.ts',
      pathAndFileNameDefaultCase: '(kebabCase)',
    },
    onComplete: (results) => {
      console.log(`results`, results);
    },
  },
]);