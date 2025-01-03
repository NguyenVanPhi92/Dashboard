import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // bật "devSourcemap" css file để biết css đó thuộc file nào, mặc định là false
    css: {
        devSourcemap: true
    },
    // cấu hình cho terminal hiểu path
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})
