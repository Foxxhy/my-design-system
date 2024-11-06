import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }: { mode: any}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    base: process.env.VITE_ENVIRONNEMENT === 'prod' ? '/my-design-system' : '',
    plugins: [react()],
    build: {
      outDir: '../../docs'
    }
  })
}
