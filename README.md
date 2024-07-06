# Hexo Theme Ares

## 开始使用

运行以下命令即可快速启动并运行这个 Hexo 主题：

> Windows 用户推荐使用 Git Bash。

```bash
# 初始化博客项目
hexo init blog
cd blog

# 安装 Ares 主题
git clone https://github.com/cytrogen/hexo-theme-ares.git themes/ares
sed -i.bak "s/theme: landscape/theme: ares/g" _config.yml && rm _config.landscape.yml
rm -r themes/landscape

# 安装依赖项
npm install --save hexo-renderer-pug

# 安装插件
npm install --save hexo-generator-feed hexo-generator-sitemap hexo-browsersync
npm uninstall --save hexo-renderer-marked && npm install --save hexo-renderer-markdown-it-plus

# 启动 Hexo server
hexo server
```

## 文档

您可以在 `docs/` 文件夹中找到相关文档。具体来说，您可能会对以下方面的文档感兴趣：

* [配置项](docs/configuration.md)

## 作者与鸣谢

本主题是从 [Hexo-Theme-Hermes](https://github.com/claymcleod/hexo-theme-hermes) fork 而来，并进行了适度修改。

[Hexo-Theme-Apollo](https://github.com/sun4cs/hexo-theme-apollo) 则是这一切的基础。他们为本主题打下了坚实的基础，对此我功不可没。
