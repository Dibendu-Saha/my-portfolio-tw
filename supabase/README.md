# Supabase Setup Guide

This guide covers setting up your vector database in Supabase and running the ingestion script.

---

## 1. Database Setup (SQL Editor)

1. Open your Supabase project dashboard at [supabase.com](https://supabase.com).
2. Go to the **SQL Editor** tab from the left sidebar.
3. Open [`supabase/schema.sql`](./schema.sql), copy its contents, paste them into the query editor, and click **Run**.
4. This will:
   - Enable the `pgvector` extension.
   - Create the `portfolio_documents` table with 1536-dimensional embeddings.
   - Create the `match_documents` cosine-similarity search function.
   - Configure Row Level Security (RLS) policies.

---

## 2. Ingest Your Knowledge Base

1. Create a `.env` file in the root of the project (copy from `.env.example`):
   ```env
   OPENAI_API_KEY=sk-proj-your-openai-key
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
   ```
2. Update [`data/bio.md`](../data/bio.md) with any information you want.
3. Preview chunking without API calls (dry-run):
   ```bash
   npm run ingest -- --dry-run
   ```
4. Run the live ingestion to embed and store in Supabase:
   ```bash
   npm run ingest
   ```
