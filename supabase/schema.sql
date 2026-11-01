-- 1. Enable the pgvector extension to work with embedding vectors
create extension if not exists vector;

-- 2. Create the portfolio_documents table to store bio chunks and embeddings
create table if not exists portfolio_documents (
  id bigint primary key generated always as identity,
  content text not null,
  embedding vector(1536) not null
);

-- 3. Create HNSW index for high-performance cosine similarity vector search
create index if not exists portfolio_documents_embedding_hnsw_idx
  on portfolio_documents
  using hnsw (embedding vector_cosine_ops);

-- 4. Create the match_documents function for vector similarity queries
create or replace function match_documents (
  query_embedding vector(1536),
  match_threshold float default 0.3,
  match_count int default 5
)
returns table (
  id bigint,
  content text,
  similarity float
)
language plpgsql
as $$
begin
  return query
  select
    portfolio_documents.id,
    portfolio_documents.content,
    1 - (portfolio_documents.embedding <=> query_embedding) as similarity
  from portfolio_documents
  where 1 - (portfolio_documents.embedding <=> query_embedding) > match_threshold
  order by portfolio_documents.embedding <=> query_embedding
  limit match_count;
end;
$$;

-- 5. Enable Row Level Security (RLS)
alter table portfolio_documents enable row level security;

-- Allow read access for authenticated and anonymous roles (needed for vector matching RPC)
create policy "Allow read access to portfolio_documents"
  on portfolio_documents
  for select
  to anon, authenticated
  using (true);
  