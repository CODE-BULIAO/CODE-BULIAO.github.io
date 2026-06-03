# 多语言试卷审校 Agent / Exam Checker Agent

自动拆题 + 逐题路由检测 + 四段式图文一致性审校 + 三类查重 + 可量化评测的全栈批处理平台。

Full-stack batch platform: auto question splitting, per-question routed detection, a four-stage image-text consistency pipeline, three kinds of plagiarism checks, and a measurable evaluation loop.

## 📖 完整设计文档 / Full design docs

脱敏设计归档（含 Mermaid 流程图，GitHub 直接渲染；不含可运行源码与题目数据）：

- 文档仓库 / Docs repo: <https://github.com/CODE-BULIAO/exam-checker-agent>

## 技术栈 / Stack

Python 3.12 · React + Vite · FastAPI · Flask (WSGI in-process) · SQLite · OpenAI 兼容 LLM/VLM · Docker

## 亮点 / Highlights

- 四段式多模态图文审校 + 纯文本复审兜底召回，图文不一致召回率较弱实现显著提升（基线 recall≈0.264）
- 按题路由（LLM 判定跑哪些检测，缺键即 false）+ 双层去重（确定性优先级 + LLM 聚合）
- FastAPI ↔ Flask WSGI in-process 融合，零网络跳跃复用旧检测能力
- 任务级韧性：状态机重试 + 心跳僵尸回收 + execution-issue 单题重试
- 可量化评测：precision/recall/F1/F2/FPR + token 计量

---

- Four-stage multimodal image-text review + text-only re-review for recall; image-text inconsistency recall lifted markedly over the weak baseline (recall≈0.264)
- Per-question routing (LLM decides which checks to run; missing key = false) + two-layer dedup (deterministic priority + LLM aggregation)
- FastAPI ↔ Flask WSGI in-process fusion, zero network hop to reuse legacy detection
- Task-level resilience: state-machine retry + heartbeat zombie recovery + per-question retry
- Measurable evaluation: precision/recall/F1/F2/FPR + token accounting

## 详情页 / Detail Page

[中文](index.html) · [English](index.en.html)
