# ai-agent-radar

Top AI Agent Framework radar — an enterprise-meets-edgy static site tracking the leading AI agent frameworks right now.

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
