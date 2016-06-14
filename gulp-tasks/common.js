const input = 'src/'
const output = 'public/'

export const paths = {
  input,
  output,
  styles: {
    input: input + 'scss/',
    inputFiles: [input + '**/*.scss'],
    inputMain: 'app.scss',
    output: output + 'css/',
    outputFile: 'app.css',
  },
  javascript: {
    input: input + 'js/',
    inputMain: 'app.jsx',
    output: output + 'js/',
    outputMain: 'app.js'
  },
  staticFiles: {
    input: [input + '**/*.{html,svg,jpg,png,woff}'],
    output,
  },

}

export const env = [
  'development',
  'staging',
  'production',
].indexOf(process.env.APP_ENV) !== -1 ? process.env.APP_ENV : 'development'
