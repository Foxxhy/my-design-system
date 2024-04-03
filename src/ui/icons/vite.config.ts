import { defineConfig } from 'vite'

export default () => {

  return defineConfig({
    build: {
      outDir: './docs',
      lib: {
        entry: 'src/f-icon.ts',
        formats: ['es'],
      },
    }
  })
}
