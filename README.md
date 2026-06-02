# 个人项目作品集 / Personal Project Portfolio

AI 工程领域核心项目展示，涵盖 LLM 应用落地、NLP 工具链、全栈 Web 平台与数据集工程。

Showcase of core AI engineering projects: LLM applications, NLP toolchains, full-stack web platforms and dataset engineering.

## 项目列表 / Projects

| 项目 / Project | 技术栈 / Stack | 描述 / Description |
|---|---|---|
| [AI 智能试卷审校系统](projects/exam-smart-checker/) | Python · LangChain · ChromaDB | LLM + 向量查重的试卷审校平台 |
| [试卷审校批处理平台](projects/exam-checker-agent/) | React · FastAPI · Docker | 生产级批处理平台，5 步状态机 |
| [多模态数据集工厂](projects/mm-dataset-factory/) | FastAPI · React · TypeScript | 训练数据集构建 Web 工具 |
| [审校辅助工具集](projects/checker-tools/) | Python · Streamlit · Docker | 数据工程全链路 4 合 1 工具箱 |

## 本地预览 / Local Preview

```bash
cd personal-portfolio
python -m http.server 8000
# 访问 http://localhost:8000/
```

## 添加新项目 / Add a Project

1. 复制 `projects/checker-tools/` 作为模板
2. 填写 `index.html`（中文）和 `index.en.html`（英文）
3. 在 `assets/screenshots/<project>/` 放入截图
4. 在根目录 `index.html` 和 `index.en.html` 中添加卡片

## GitHub Pages 部署

Settings → Pages → Source: Deploy from a branch → Branch: `main` → `/` (root)

访问：`https://code-buliao.github.io/personal-portfolio/`
