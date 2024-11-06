import { defineConfig } from 'vite'

export default () => {

  return defineConfig({
    build: {
      outDir: './docs',
      lib: {
        entry: 'src/f-toggle.ts',
        formats: ['es'],
      },
    }
  })
}
