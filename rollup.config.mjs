import json from '@rollup/plugin-json'; // 它允许 Rollup 从 JSON 文件中导入数据
import terser from '@rollup/plugin-terser'; // 对此输出进行压缩
import { defineConfig } from 'rollup'  // 定义配置
import { nodeResolve } from '@rollup/plugin-node-resolve' //     它允许 Rollup 查找和打包外部依赖项
import commonjs from '@rollup/plugin-commonjs' // 它允许 Rollup 处理 CommonJS 模块
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript'// 它允许 Rollup 处理 TypeScript 文件
// import del from 'rollup-plugin-delete' // 删除文件
/**
 *  @type {import('rollup').InputOptions['plugins']}
 */
const devPlugins = [
 
    typescript({
      tsconfig: './tsconfig.json', // 指定 tsconfig.json 文件的路径
    }),
    nodeResolve(),
    commonjs({
        ignoreGlobal: true  // 忽略全局变量检查
    }),
    replace({
        preventAssignment: true,
    }),
    json(), 
    terser(),
  ]
export default defineConfig({
	input: {
        index:'src/utils/logTest/logger.ts',
    },
	output: [
        {
            format: 'es', // 输出 esm 模块 esm 是指 ECMAScript 模块 commonjs 是指 CommonJS 模块
            dir: 'dist', // 指定目录
            entryFileNames: '[name].esm.js',// 表示输出文件名将是入口文件名加上 .esm.js 后缀。name 是指入口文件名。
            sourcemap: true, // 会为每个输出文件生成对应的源映射文件（.map 文件）。
        },
        
    ],
    plugins: devPlugins
})