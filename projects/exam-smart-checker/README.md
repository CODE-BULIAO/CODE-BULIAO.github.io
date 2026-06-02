# AI 智能试卷审校系统 / AI Exam Smart Checker

基于 LLM + 向量检索的试卷错误检测与查重平台。

LLM + vector-search platform for exam paper error detection and plagiarism checking.

## 技术栈 / Stack

Python 3.12 · Streamlit · Flask · LangChain · LangGraph · ChromaDB · MySQL · sentence-transformers · PyMuPDF · Qwen / OpenAI / Ollama

## 亮点 / Highlights

- 按题型可插拔 LangGraph 检测路由，减少误报 ~15%
- 双模型解耦（main_model + corrector_model）
- 三维度向量查重（内部 / 跨库 / 历史）
- 多语言支持（中 / 日 / 德 / 法）

---

- Question-type-aware pluggable LangGraph detection router (~15% false-positive reduction)
- Dual-model decoupling (main_model + corrector_model)
- 3-dimension vector deduplication (internal / cross-bank / historical)
- Multilingual support (zh / ja / de / fr)

## 详情页 / Detail Page

[中文](index.html) · [English](index.en.html)
