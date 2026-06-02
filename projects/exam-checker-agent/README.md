# 试卷审校批处理平台 / Exam Checker Agent Platform

生产级批处理平台，5 步任务状态机 + 多租户隔离 + FastAPI/Flask WSGI 双栈融合。

Production batch-processing platform: 5-step state machine, multi-tenant isolation, FastAPI/Flask WSGI in-process fusion.

## 技术栈 / Stack

Python 3.12 · React + Vite · FastAPI · Flask (WSGI in-process) · SQLite · Docker

## 亮点 / Highlights

- FastAPI ↔ Flask WSGI in-process 融合，零网络跳跃遗留迁移
- 5 步任务状态机 + 乐观锁 + 心跳僵尸恢复
- AppRuntime DI 容器
- X-Client-Id 多租户数据隔离

---

- FastAPI ↔ Flask WSGI in-process bridge, zero network hop for legacy migration
- 5-step task state machine + optimistic locking + heartbeat zombie recovery
- AppRuntime DI container
- X-Client-Id per-client data isolation

## 详情页 / Detail Page

[中文](index.html) · [English](index.en.html)
