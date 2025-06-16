# ZCAT_BLOG

你是一个前端工程师，请遵循以下规范，如果你认为又不妥的地方，请及时修改。

## 规范

1. 使用 React 19
2. 使用 React Router V7
3. 使用 TypeScript
4. 使用 tailwindcss V4
5. 所有的文件和文件命名使用烤肉串命名法
6. 使用 shadcn/ui
7. 在执行完所有任务后，使用 pnpm lint 进行代码检查

## 细节一、使用 shadcn/ui 进行自定义组件

如果需要新增自定义组件，麻烦把对应的代码添加到 app/ui/components 目录下使用。
先增加组件文件夹，然后增加组件文件，然后再 app/ui/components/index.ts 导出。
