# YIWEI Medical 网站修改版

[打开独立修改版预览站](https://yiwei-medical-review-20261112.lawrence-wan-0405.chatgpt.site)（私有访问，需使用已获授权的 ChatGPT 账号登录）。

本仓库存放根据《网址问题汇总2.docx》及《Vr 产品图片.zip》完成的修改版源码，包括全部 18 张补充图片。原仓库为 https://github.com/laurelcovedr/drbrain.net-website ，本仓库为经用户确认上传到 llongzhipeng/TIHip 的独立公开副本。

- [网站工程](drbrainnet/)
- [逐项修改记录与待补素材](drbrainnet/docs/document-review-2026-11-12.html)

## 本地构建

需要 Node.js >= 22.13 和 pnpm 11.25.0。

```sh
cd drbrainnet
pnpm install --frozen-lockfile
python3 scripts/restore-backup-assets.py
pnpm run build
```

TypeScript、SEO/FAQ 一致性、58 个多语言页面及生产构建已通过检查。浏览器视觉验收尚未完成。新版英文手册和部分实际系统截图仍待补充。

## 发布与来源

最新源码与已发布的独立预览站一致，Site 源提交为 `c21fa53c06b06839c34887cd9b5df0fafa81fc2e`。

工程内 `.openai/hosting.json` 关联当前独立预览站。推送 GitHub 不会自动更新 Sites 网站。仓库不含登录凭据、环境变量值、运行数据或依赖缓存。
