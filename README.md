# Agent Stack Radar

A stunning enterprise-meets-edgy static site tracking the top AI agent frameworks right now.

Live site: https://ai-agent-radar-three.vercel.app

## What updates continuously

- The ranking/content is curated and versioned in `app.js`.
- Each page load fetches live GitHub repository telemetry:
  - stars
  - forks
  - open issues
  - latest push date
- If GitHub API rate limits a visitor, the page falls back to the bundled research snapshot.

## Current radar

1. Microsoft Agent Framework
2. CrewAI
3. LlamaIndex
4. Agno
5. LangGraph
6. OpenAI Agents SDK
7. Google ADK
8. Mastra
9. smolagents
10. Haystack

## Local build

```bash
npm run build
```

The build copies the static site into `public/` for Vercel.
