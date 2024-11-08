# 目录 <!-- omit in toc -->

- [关于页面](#关于页面)
- [归档页面](#归档页面)
- [标签页面](#标签页面)
- [评论](#评论)
- [友情链接](#友情链接)
- [Google Analytics](#google-analytics)
- [本地搜索](#本地搜索)

> Hexo 的配置文件有两个：
> 
> - Hexo 配置文件，位于根目录正下方的 `_config.yml`
> - 主题配置文件，位于 `themes/ares` 目录内的 `_config.yml`

## 关于页面

在主题配置文件内，将 `关于` 的注释去掉：

```yaml
menu:
  博客: /
  关于: /about/
  归档: /archives/
  标签: /tags/
  GitHub: https://github.com/cytrogen
  RSS: /atom.xml
```

> 你可以修改这些键，来修改导航栏上的文字内容。例如将“博客”修改为“首页”。

> 记得将 `GitHub` 的值修改为自己的！或者将其删去。

接着在 `source` 目录下创建 `about` 目录，并在内创建 `index.md` 即可创建关于页面。

## 归档页面

你可以在 Hexo 配置文件中加入任何 [Hexo-Generator-Archive](https://github.com/hexojs/hexo-generator-archive) 配置选项来修改网站的 `/archives` 页面：

```
archive_generator:
  enabled: true
  per_page: 25
  yearly: true
  monthly: true
  daily: true
  order_by: -date
```

## 标签页面

你可以在 Hexo 配置文件中加入任何 [Hexo-Generator-Tag](https://github.com/hexojs/hexo-generator-tag) 配置选项来修改网站的 `/tags` 页面：

```
tag_generator:
  per_page: 15
  order_by: -asc
  enable_index_page: tag-index
```

在 `source` 目录下新建 `tags/index.md` 即可自动生成 `/tags` 页面。不带有 `tags` 属性的文章不会出现在 `/tags` 页面。

```md
---
title: 测试
date: 2024-04-01 00:00:00
tags:
  - 巴拉巴拉
---
```

## 评论

Hexo-Theme-Ares 支持 Disqus 评论插件。请在主题配置项中这样设置：

```yaml
disqus: 你的 Website Name
```

## 友情链接

在主题配置文件中这样添加友情链接：

```yaml
friend_links:
    - name: 测试
      url: https://example.com
      description: 巴拉巴拉巴拉
```

## Google Analytics

在主题配置文件中添加 `ga` 设置项来启动 Google Analytics：

```yaml
ga: G-xxxxxx
```

## 本地搜索

安装依赖项 Hexo-Generator-Search：

```bash
npm install --save hexo-generator-search
```

将 `search/search.xml` 移动至项目根目录（只需要移动 `search.xml`，不需要移动 `search` 目录）。

在 Hexo 配置文件中添加以下内容：

```yaml
search:
  path: search.xml
  field: post
  content: true
  template: ./search.xml
```

再在 `themes/ares/_config.yml` 中添加 `fas` 设置项，填入注册好的 FontAwesome Kit 名（使用免费版即可）：

```yaml
fas: xxxxxxxxxx
```
