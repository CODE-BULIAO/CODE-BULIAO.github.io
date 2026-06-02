# 审校辅助工具集 / Checker Auxiliary Toolkit

覆盖数据摄取→坏例生成→模型评测→训练集导出全链路的 4 合 1 Streamlit 工具箱。

4-in-1 Streamlit toolbox: data ingestion → bad-case generation → model evaluation → training export.

## 技术栈 / Stack

Python · Streamlit · Docker Compose · pandas · PyMuPDF

## 4 个子工具 / 4 Sub-tools

| 工具 / Tool | 端口 / Port | 功能 / Function |
|---|---|---|
| pdf2text | 8302 | PDF 题目提取 / PDF question extraction |
| process_badcase | 8303 | 坏例生成 / Bad-case generation |
| evaluation | 8304 | 模型评测 / Model evaluation |
| excel_merger | 8305 | Excel → JSONL 导出 / Export |

## 详情页 / Detail Page

[中文](index.html) · [English](index.en.html)
