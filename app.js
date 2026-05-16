const researchedAt = '2026-05-16T07:56:00Z';

const frameworks = [
  {
    rank: 1,
    name: 'Microsoft Agent Framework',
    org: 'Microsoft',
    repo: 'microsoft/agent-framework',
    docs: 'https://learn.microsoft.com/agent-framework/',
    github: 'https://github.com/microsoft/agent-framework',
    tag: 'Enterprise agent orchestration for Python + .NET',
    verdict: 'The new Microsoft center of gravity for building, orchestrating, and deploying agents and multi-agent workflows across Python and .NET.',
    edge: 'Enterprise control plane',
    fit: 'Azure/.NET estates, governed workflows, enterprise-grade multi-agent systems',
    baseline: { stars: 10471, forks: 1719, issues: 890, pushed: '2026-05-15T22:35:10Z' }
  },
  {
    rank: 2,
    name: 'CrewAI',
    org: 'CrewAI Inc.',
    repo: 'crewAIInc/crewAI',
    docs: 'https://docs.crewai.com/',
    github: 'https://github.com/crewAIInc/crewAI',
    tag: 'Role-based autonomous crews',
    verdict: 'Still one of the fastest ways to turn business processes into collaborative agents with roles, tasks, tools, memory, and repeatable flows.',
    edge: 'Crew assembly speed',
    fit: 'Ops automation, research agents, sales workflows, internal copilots',
    baseline: { stars: 51499, forks: 7121, issues: 316, pushed: '2026-05-15T20:05:46Z' }
  },
  {
    rank: 3,
    name: 'LlamaIndex',
    org: 'RunLlama',
    repo: 'run-llama/llama_index',
    docs: 'https://docs.llamaindex.ai/',
    github: 'https://github.com/run-llama/llama_index',
    tag: 'Document agents + RAG infrastructure',
    verdict: 'The strongest pick when an agent has to reason over private data, documents, retrieval pipelines, indexes, and knowledge workflows.',
    edge: 'Knowledge-native agents',
    fit: 'Enterprise search, document intelligence, data assistants, retrieval-heavy apps',
    baseline: { stars: 49442, forks: 7418, issues: 374, pushed: '2026-05-15T19:35:23Z' }
  },
  {
    rank: 4,
    name: 'Agno',
    org: 'Agno',
    repo: 'agno-agi/agno',
    docs: 'https://docs.agno.com/',
    github: 'https://github.com/agno-agi/agno',
    tag: 'Full-stack agent platform',
    verdict: 'A high-momentum framework for building agent platforms with tools, memory, knowledge, teams, evaluation, and production ergonomics.',
    edge: 'Full-stack velocity',
    fit: 'Modern agent products, internal AI platforms, startup-grade launch speed',
    baseline: { stars: 40146, forks: 5382, issues: 898, pushed: '2026-05-16T02:06:57Z' }
  },
  {
    rank: 5,
    name: 'LangGraph',
    org: 'LangChain',
    repo: 'langchain-ai/langgraph',
    docs: 'https://langchain-ai.github.io/langgraph/',
    github: 'https://github.com/langchain-ai/langgraph',
    tag: 'Stateful graph orchestration',
    verdict: 'The enterprise-grade choice for durable, controllable, stateful agent workflows where explicit graph execution matters.',
    edge: 'Durable state machines',
    fit: 'Mission-critical workflows, human approvals, complex state and recovery paths',
    baseline: { stars: 32146, forks: 5453, issues: 556, pushed: '2026-05-16T00:00:30Z' }
  },
  {
    rank: 6,
    name: 'OpenAI Agents SDK',
    org: 'OpenAI',
    repo: 'openai/openai-agents-python',
    docs: 'https://openai.github.io/openai-agents-python/',
    github: 'https://github.com/openai/openai-agents-python',
    tag: 'Provider-native multi-agent workflows',
    verdict: 'A direct path for OpenAI-first teams that want handoffs, tracing, guardrails, tool execution, and model-native ergonomics.',
    edge: 'Native model leverage',
    fit: 'OpenAI-first products, customer support agents, model-native automations',
    baseline: { stars: 26341, forks: 4038, issues: 92, pushed: '2026-05-16T02:37:31Z' }
  },
  {
    rank: 7,
    name: 'Google ADK',
    org: 'Google',
    repo: 'google/adk-python',
    docs: 'https://google.github.io/adk-docs/',
    github: 'https://github.com/google/adk-python',
    tag: 'Code-first Agent Development Kit',
    verdict: 'A fast-moving toolkit for building, evaluating, and deploying sophisticated agents with strong Gemini and Google Cloud alignment.',
    edge: 'Google ecosystem gravity',
    fit: 'Gemini apps, Google Cloud teams, eval-driven agent development',
    baseline: { stars: 19657, forks: 3394, issues: 822, pushed: '2026-05-16T01:35:26Z' }
  },
  {
    rank: 8,
    name: 'Mastra',
    org: 'Mastra',
    repo: 'mastra-ai/mastra',
    docs: 'https://mastra.ai/docs',
    github: 'https://github.com/mastra-ai/mastra',
    tag: 'TypeScript agents + workflows',
    verdict: 'A standout TypeScript-native framework for agentic products with workflows, tools, memory, evals, and modern web-app ergonomics.',
    edge: 'TypeScript-native stack',
    fit: 'Product teams, web-native AI apps, JS/TS engineering orgs',
    baseline: { stars: 23928, forks: 2077, issues: 406, pushed: '2026-05-16T06:59:45Z' }
  },
  {
    rank: 9,
    name: 'smolagents',
    org: 'Hugging Face',
    repo: 'huggingface/smolagents',
    docs: 'https://huggingface.co/docs/smolagents/',
    github: 'https://github.com/huggingface/smolagents',
    tag: 'Minimal code agents',
    verdict: 'Lean, readable, and practical — excellent when you want powerful code-agent behavior without a sprawling framework surface.',
    edge: 'Small surface, sharp teeth',
    fit: 'Prototypes, OSS model workflows, compact automations, code-first agents',
    baseline: { stars: 27327, forks: 2588, issues: 535, pushed: '2026-05-14T13:10:29Z' }
  },
  {
    rank: 10,
    name: 'Haystack',
    org: 'deepset',
    repo: 'deepset-ai/haystack',
    docs: 'https://docs.haystack.deepset.ai/',
    github: 'https://github.com/deepset-ai/haystack',
    tag: 'Production RAG + agent pipelines',
    verdict: 'A mature, pipeline-first framework with serious RAG credibility and production search/NLP heritage.',
    edge: 'Pipeline discipline',
    fit: 'Search, document intelligence, NLP-heavy enterprise apps, governed retrieval',
    baseline: { stars: 25244, forks: 2783, issues: 113, pushed: '2026-05-15T15:24:00Z' }
  }
];

const cards = document.querySelector('#cards');
const sync = document.querySelector('#lastSync');
const fmt = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 });
const dateFmt = new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' });

function renderMetric(box, key, value) {
  const node = box.querySelector(`[data-k="${key}"]`);
  if (node) node.textContent = value;
}

function card(item) {
  const el = document.createElement('article');
  el.className = 'card';
  el.innerHTML = `
    <div class="card-top">
      <span class="rank">#${item.rank}</span>
      <span class="org">${item.org}</span>
    </div>
    <h3>${item.name}</h3>
    <p class="tag">${item.tag}</p>
    <p>${item.verdict}</p>
    <div class="metrics" data-repo="${item.repo}">
      <span><b data-k="stars">${fmt.format(item.baseline.stars)}</b> stars</span>
      <span><b data-k="forks">${fmt.format(item.baseline.forks)}</b> forks</span>
      <span><b data-k="issues">${fmt.format(item.baseline.issues)}</b> open issues</span>
      <span><b data-k="push">${dateFmt.format(new Date(item.baseline.pushed))}</b> last push</span>
    </div>
    <div class="fit"><strong>${item.edge}</strong><span>${item.fit}</span></div>
    <div class="links">
      <a href="${item.docs}" target="_blank" rel="noreferrer">Docs</a>
      <a href="${item.github}" target="_blank" rel="noreferrer">GitHub</a>
    </div>`;
  return el;
}

cards.append(...frameworks.map(card));

const staticRefresh = document.querySelector('#staticRefresh');
if (staticRefresh) {
  staticRefresh.dateTime = researchedAt;
  staticRefresh.textContent = new Date(researchedAt).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' });
}

async function hydrateStats() {
  sync.textContent = 'Syncing live repository telemetry…';
  const jobs = frameworks.map(async item => {
    const res = await fetch(`https://api.github.com/repos/${item.repo}`, { headers: { Accept: 'application/vnd.github+json' } });
    if (!res.ok) throw new Error(`${item.repo}: ${res.status}`);
    const data = await res.json();
    const box = document.querySelector(`[data-repo="${item.repo}"]`);
    renderMetric(box, 'stars', fmt.format(data.stargazers_count));
    renderMetric(box, 'forks', fmt.format(data.forks_count));
    renderMetric(box, 'issues', fmt.format(data.open_issues_count));
    renderMetric(box, 'push', dateFmt.format(new Date(data.pushed_at)));
  });
  const results = await Promise.allSettled(jobs);
  const ok = results.filter(r => r.status === 'fulfilled').length;
  sync.textContent = `${ok}/${frameworks.length} repos refreshed · ${new Date().toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}`;
}

hydrateStats().catch(() => {
  sync.textContent = 'Using latest bundled snapshot; live GitHub sync may be rate-limited.';
});
