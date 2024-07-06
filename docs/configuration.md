# 目录 <!-- omit in toc -->

- [元描述](#元描述)
- [标题](#标题)
- [显示帖子预览](#显示帖子预览)
- [评论](#评论)
- [警告块](#警告块)
- [归档](#归档)
- [标签](#标签)
- [网站图标](#网站图标)
- [友情链接](#友情链接)
- [Google Analytics](#google-analytics)
- [本地搜索](#本地搜索)

## 元描述

如果要设置元描述信息，请为每篇文章设置 `desc` 属性和值。更好的方法是在脚手架文件中设置默认的 `desc` 属性，就像这样：

```md
---
title: 测试
date: 2024-04-01 00:00:00
desc: 巴拉巴拉巴拉。
---

巴拉巴拉巴拉巴拉巴拉巴拉。
```

生成结果：

```html
<meta name="description" content="巴拉巴拉巴拉。">
```

如果没有 `desc` 属性或值，Hexo-Theme-Ares 将使用 `page.title` 和 `page.author` 代替。

## 标题

Hexo-Theme-Ares 支持三种标题：

- `h1` 为大标题
- `h2` 和 `h3` 为中标题
- `h4` 到 `h6` 都是小标题

这样做的目的是保持博文结构的简洁性和可读性，而不是嵌套多个层次，分散对内容的注意力。

## 显示帖子预览

如果希望在博客索引中包含一些文章预览文本，可以包含 `<!-- more -->` 语句。在 `<!-- more -->` 语句之前的所有内容都将被解析并显示在索引中。

如果您想向访客显示摘录（文章的核心内容），请在其他内容之前添加 HTML 注释标记 `<!-- more -->`，最后该标记将被 Hexo 解析为代表文章摘录的变量：

## 评论

Hexo-Theme-Ares 支持 Disqus 评论插件。请在 `themes/ares/_config.yml` 中这样设置：

```yaml
disqus: 你的 Website Name
```

## 警告块

使用带有特殊类属性的 HTML 标签来呈现块：

```html
<div class="danger">

这是一个例子！		
		
</div>
```

## 归档

你可以在根目录下的 `_config.yml` 文件中加入任何 [Hexo-Generator-Archive](https://github.com/hexojs/hexo-generator-archive) 选项来修改网站的 `/archives` 页面。

```
archive_generator:
  enabled: true
  per_page: 25
  yearly: true
  monthly: true
  daily: true
  order_by: -date
```

## 标签

你可以在根目录下的 `_config.yml` 文件中加入任何 [Hexo-Generator-Tag](https://github.com/hexojs/hexo-generator-tag) 选项来修改网站的 `/tags` 页面。

```
tag_generator:
  per_page: 15
  order_by: -asc
  enable_index_page: tag-index
```

在 `themes/source` 目录下新建 `tags/index.md` 即可自动生成 `/tags` 页面。不带有 `tags` 属性的文章不会出现在 `/tags` 页面。

```md
---
title: 测试
date: 2024-04-01 00:00:00
tags:
  - 巴拉巴拉
---
```

## 网站图标

在 `themes/source` 目录中找到 `favicon.png`，将你想要使用的图片重命名为 `favicon.png` 并顶替掉原有的图片。图片必须是 `256 * 256` 的。

## 友情链接

在 `themes/ares/_config.yml` 中这样添加友情链接：

```yaml
friend_links:
    - name: 测试
      url: https://example.com
      description: 巴拉巴拉巴拉
```

## Google Analytics

在 `themes/ares/_config.yml` 中添加 `ga` 设置项来启动 Google Analytics：

```yaml
ga: G-xxxxxx
```

## 本地搜索

安装依赖项 Hexo-Generator-Search：

```bash
npm install --save hexo-generator-search
```

将 `search/search.xml` 移动至项目根目录（只需要移动 `search.xml`，不需要移动 `search` 目录）。

添加 `fas` 设置项，填入注册好的 FontAwesome Kit 名（使用免费版即可）：

```yaml
fas: xxxxxxxxxx
```
