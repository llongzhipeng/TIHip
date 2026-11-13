# YIWEI Medical 网站修改版

[打开独立修改版预览站](https://yiwei-medical-review-20261112.lawrence-wan-0405.chatgpt.site)（私有访问，需使用已获授权的 ChatGPT 账号登录）。

本仓库存放根据《网址问题汇总2.docx》《网址问题汇总3.docx》及两批补充图片完成的修改版源码。最新一轮更新 QuickMind 系统截图、六大训练模块、国际案例照片、华山医院标志及眼动追踪技术图。原仓库为 https://github.com/laurelcovedr/drbrain.net-website ，本仓库为经用户确认上传到 llongzhipeng/TIHip 的独立公开副本。

- [网站工程](drbrainnet/)
- [第三轮修改记录](drbrainnet/docs/document-review-2026-11-13.html)
- [上一轮修改记录与待补素材](drbrainnet/docs/document-review-2026-11-12.html)

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

最新源码与已发布的独立预览站一致，Site 源提交为 `2b3173b69f10180213a954adca1c6c27226d670e`。

工程内 `.openai/hosting.json` 关联当前独立预览站。推送 GitHub 不会自动更新 Sites 网站。仓库不含登录凭据、环境变量值、运行数据或依赖缓存。
