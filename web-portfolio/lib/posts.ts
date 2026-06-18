// Blog posts — structured content (zero runtime dependencies).
// Each post renders at /blog/[slug] with BlogPosting schema and is added to the sitemap.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; code: string; caption?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "cta"; text: string }

export type Post = {
  slug: string
  title: string
  description: string
  date: string // ISO date (YYYY-MM-DD)
  readingTime: string
  tags: string[]
  body: Block[]
}

export const posts: Post[] = [
  {
    slug: "what-is-rag-retrieval-augmented-generation",
    title: "What is RAG? Retrieval-Augmented Generation Explained, with a Code Example",
    description:
      "A plain-English guide to RAG (Retrieval-Augmented Generation) — what it is, why it beats fine-tuning for most use cases, how the retrieve-then-generate pipeline works, and a Python example with LangChain. Includes a Bahasa Indonesia summary.",
    date: "2026-06-18",
    readingTime: "8 min read",
    tags: ["RAG", "Retrieval-Augmented Generation", "LLM", "Generative AI", "LangChain", "Python"],
    body: [
      {
        type: "p",
        text: "Large language models are confident, fluent, and frequently wrong about anything outside their training data. Ask one about your company's internal handbook, a document published last week, or a private knowledge base, and it will either say it doesn't know — or worse, make something up. RAG is the technique that fixes this by giving the model the right information at the moment it answers.",
      },
      { type: "h2", text: "What is RAG?" },
      {
        type: "p",
        text: "RAG stands for Retrieval-Augmented Generation. Instead of relying only on what an LLM memorized during training, a RAG system first retrieves relevant documents from a knowledge source, then hands those documents to the model as context so it can generate a grounded answer. In one sentence: RAG turns a closed-book exam into an open-book exam. The model no longer has to recall everything — it gets to read the relevant pages before answering.",
      },
      {
        type: "p",
        text: "This solves the two biggest weaknesses of plain LLMs. First, knowledge cutoffs: a model can't know about anything published after its training date, but a retriever can pull in today's documents. Second, hallucination: when the model answers from supplied source text rather than fuzzy memory, its answers are far more accurate — and you can cite exactly where each fact came from.",
      },
      { type: "h2", text: "Why use RAG instead of fine-tuning?" },
      {
        type: "p",
        text: "A common question is why not just fine-tune the model on your data. For most teams, RAG is the better first choice:",
      },
      {
        type: "ul",
        items: [
          "Always current — update your knowledge by adding or editing documents, with no retraining. Fine-tuning bakes knowledge in and goes stale.",
          "Cheaper and faster — indexing documents costs a fraction of a fine-tuning run, and you can ship in hours, not days.",
          "Grounded and citable — because answers come from retrieved text, you can show sources and dramatically reduce hallucination.",
          "Easy to control — to remove or correct information, you just change the underlying documents; nothing is locked inside model weights.",
        ],
      },
      {
        type: "p",
        text: "Fine-tuning still has its place — for teaching a model a specific style, format, or skill. But for the most common need, getting an LLM to answer accurately about your own data, RAG is usually the right tool.",
      },
      { type: "h2", text: "How RAG works: the two phases" },
      {
        type: "p",
        text: "Every RAG system has two phases. The first happens once (or whenever your data changes); the second happens on every question.",
      },
      {
        type: "image",
        src: "/blog/rag-flow.svg",
        alt: "RAG pipeline: in Phase 1 (indexing), documents are split into chunks, embedded into vectors, and stored in a vector store. In Phase 2 (per question), the question is embedded and used for a similarity search that retrieves the top-k relevant chunks, which are passed with the question to the LLM to generate a grounded answer.",
        caption: "The two phases of RAG. Indexing (top) runs once to build a searchable vector store; retrieval + generation (bottom) runs on every question, pulling the most relevant chunks into the LLM's context.",
      },
      { type: "h3", text: "Phase 1 — Indexing (done ahead of time)" },
      {
        type: "ul",
        items: [
          "Load your documents — PDFs, web pages, wikis, databases — into a standard text form.",
          "Split them into smaller chunks, because whole documents are too large to feed the model at once.",
          "Embed each chunk — convert it into a vector (a list of numbers) that captures its meaning.",
          "Store those vectors in a vector database so they can be searched by similarity.",
        ],
      },
      { type: "h3", text: "Phase 2 — Retrieval & generation (on every query)" },
      {
        type: "ul",
        items: [
          "Embed the user's question into a vector using the same model.",
          "Search the vector database for the chunks whose vectors are most similar to the question — these are the most relevant passages.",
          "Stuff those chunks into the prompt as context, alongside the original question.",
          "Generate an answer with the LLM, now grounded in the retrieved text.",
        ],
      },
      {
        type: "p",
        text: "The key idea is similarity search. Embeddings place text with similar meaning close together in vector space, so retrieving the nearest vectors to the question reliably surfaces the passages most likely to contain the answer — even when the wording is different.",
      },
      { type: "h2", text: "How to build RAG: a minimal example" },
      {
        type: "p",
        text: "Here is a compact RAG pipeline in Python using LangChain. It loads a PDF, splits and embeds it, stores the vectors, then answers a question using only the retrieved context. (If the building blocks below — loaders, connectors, LCEL — look unfamiliar, see my companion post on what LangChain is.)",
      },
      {
        type: "code",
        caption: "A minimal RAG pipeline: index a PDF, then answer from retrieved context.",
        code: `from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from langchain_community.vectorstores import FAISS
from langchain_core.prompts import ChatPromptTemplate

# --- Phase 1: Indexing (run once) ---
docs = PyPDFLoader("handbook.pdf").load()

splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=150)
chunks = splitter.split_documents(docs)

embeddings = GoogleGenerativeAIEmbeddings(model="models/text-embedding-004")
vectorstore = FAISS.from_documents(chunks, embeddings)
retriever = vectorstore.as_retriever(search_kwargs={"k": 4})

# --- Phase 2: Retrieve + generate (per question) ---
llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0)

prompt = ChatPromptTemplate.from_template(
    "Answer the question using ONLY the context below. "
    "If the answer isn't in the context, say you don't know.\\n\\n"
    "Context:\\n{context}\\n\\nQuestion: {question}"
)

def format_docs(docs):
    return "\\n\\n".join(d.page_content for d in docs)

question = "What is the company's remote-work policy?"
retrieved = retriever.invoke(question)            # similarity search
context = format_docs(retrieved)

answer = (prompt | llm).invoke({"context": context, "question": question})
print(answer.content)`,
      },
      {
        type: "p",
        text: "Read it as the two phases. Indexing loads the PDF, splits it into overlapping chunks, embeds them, and stores them in a FAISS vector store. Then for each question, the retriever finds the four most relevant chunks, we paste them into the prompt as context, and the model answers from that context only — note the instruction telling it to say \"I don't know\" rather than guess. That single instruction, combined with real retrieved context, is what makes RAG answers trustworthy.",
      },
      { type: "h2", text: "From basic RAG to agentic RAG" },
      {
        type: "p",
        text: "The pipeline above is linear: retrieve once, then answer. That works well, but it can't recover when the first retrieval is weak. Agentic RAG adds a feedback loop — the system grades whether the retrieved context is good enough and, if not, re-queries or rephrases before answering. That cyclical control flow is exactly what LangGraph is built for, and it's the subject of my LangGraph post. Basic RAG is the foundation; agentic RAG is the upgrade once accuracy really matters.",
      },
      { type: "h2", text: "When should you use RAG?" },
      {
        type: "p",
        text: "Reach for RAG whenever you need an LLM to answer accurately about specific, private, or frequently-changing information: internal documentation, customer-support knowledge bases, product manuals, legal or policy documents, or research libraries. If your task is pure reasoning or general writing with no external facts involved, you may not need retrieval at all. But the moment correct, sourced answers about your own data matter, RAG is the default architecture.",
      },
      {
        type: "cta",
        text: "Want to build production RAG and agentic-RAG systems — chunking strategies, vector databases, evaluation, and deployment — hands-on? That's exactly what I teach in my AI/ML bootcamps and corporate workshops.",
      },
      { type: "h2", text: "Apa itu RAG? (Ringkasan Bahasa Indonesia)" },
      {
        type: "p",
        text: "RAG (Retrieval-Augmented Generation) adalah teknik yang membuat LLM menjawab berdasarkan dokumen Anda sendiri. Alih-alih hanya mengandalkan ingatan dari masa pelatihan, sistem RAG terlebih dahulu mengambil (retrieve) dokumen yang relevan, lalu memberikannya ke model sebagai konteks agar jawabannya akurat dan dapat dirujuk sumbernya. Singkatnya: RAG mengubah ujian tutup buku menjadi ujian buka buku.",
      },
      { type: "h3", text: "Mengapa pakai RAG daripada fine-tuning?" },
      {
        type: "ul",
        items: [
          "Selalu terbarui — cukup tambah atau ubah dokumen, tanpa melatih ulang model.",
          "Lebih murah dan cepat — indexing dokumen jauh lebih hemat daripada proses fine-tuning.",
          "Terverifikasi — jawaban berasal dari teks yang diambil, sehingga sumbernya bisa ditampilkan dan halusinasi berkurang.",
          "Mudah dikontrol — untuk mengoreksi informasi, Anda cukup mengubah dokumennya.",
        ],
      },
      {
        type: "p",
        text: "RAG bekerja dalam dua fase: indexing (memuat, memecah, meng-embed, dan menyimpan dokumen sebagai vektor) yang dilakukan sekali, lalu retrieval & generation (mencari potongan paling relevan untuk setiap pertanyaan dan menjawab berdasarkan konteks tersebut) yang berjalan setiap kali ada pertanyaan. Gunakan RAG ketika Anda butuh LLM menjawab akurat tentang data spesifik atau privat milik Anda.",
      },
      {
        type: "cta",
        text: "Ingin belajar membangun sistem RAG dan agentic AI nyata secara hands-on? Itulah yang saya ajarkan di bootcamp dan corporate workshop AI/ML saya.",
      },
    ],
  },
  {
    slug: "what-is-langgraph-and-why-it-matters",
    title: "What is LangGraph? Why Use It, How It Works, and a Code Example",
    description:
      "A clear explainer of LangGraph — what it is, why use it, how to use it (with a Python code example), and when it makes sense. Includes a Bahasa Indonesia summary.",
    date: "2026-06-17",
    readingTime: "7 min read",
    tags: ["LangGraph", "Agentic AI", "LLM", "Generative AI", "Python"],
    body: [
      {
        type: "p",
        text: "If you've built a chatbot with an LLM, you've probably hit a wall: simple prompt-in, answer-out works great for demos, but real applications need memory, branching logic, tool use, and the ability to loop until a task is actually done. That gap is exactly what LangGraph fills.",
      },
      { type: "h2", text: "What is LangGraph?" },
      {
        type: "p",
        text: "LangGraph is an open-source framework from the LangChain team for building stateful, multi-step AI applications as graphs. Instead of a single linear prompt, you model your application as a set of nodes (steps) connected by edges (transitions), with a shared state that flows between them. Think of it as a flowchart your LLM can actually execute — complete with branches, loops, and decision points.",
      },
      {
        type: "image",
        src: "/blog/langgraph-flow.svg",
        alt: "A LangGraph stateful graph: START to retrieve to grade; grade loops back to retrieve when more information is needed, or proceeds to generate and END.",
        caption: "LangGraph models your app as a graph of nodes (steps) and edges — including conditional loops. A shared state flows through every node.",
      },
      { type: "h2", text: "Why use LangGraph?" },
      {
        type: "p",
        text: "Most real-world AI systems aren't one-shot. An agent might need to search the web, read the results, decide whether it has enough information, and loop back if it doesn't. A RAG pipeline might retrieve documents, grade their relevance, and re-query if they're weak. These are control-flow problems, and plain prompt chains handle them poorly. LangGraph is built for exactly this:",
      },
      {
        type: "ul",
        items: [
          "Stateful by design — every step shares and updates a common state, so your app remembers context across the whole workflow.",
          "Cyclical, not just linear — it supports loops, so an agent can retry, refine, or iterate until a condition is met (something simple chains can't do).",
          "Controllable — you decide exactly how the flow branches, instead of hoping the LLM behaves.",
          "Production-ready — built-in persistence, human-in-the-loop checkpoints, and streaming make it suitable for real deployments, not just notebooks.",
        ],
      },
      { type: "h2", text: "How to use LangGraph: a minimal example" },
      {
        type: "p",
        text: "Here is a minimal but complete LangGraph graph in Python. It defines a shared state, a single node, wires the node between the special START and END markers, compiles the graph, and runs it:",
      },
      {
        type: "code",
        caption: "A minimal LangGraph graph: state → node → run.",
        code: `from typing import TypedDict
from langgraph.graph import StateGraph, START, END

# 1. Define the shared state that flows through the graph
class State(TypedDict):
    question: str
    answer: str

# 2. Define a node: a function that reads state and returns an update
def respond(state: State) -> dict:
    # In a real app you'd call an LLM here
    return {"answer": f"You asked: {state['question']}"}

# 3. Build the graph
builder = StateGraph(State)
builder.add_node("respond", respond)
builder.add_edge(START, "respond")
builder.add_edge("respond", END)
graph = builder.compile()

# 4. Run it
result = graph.invoke({"question": "What is LangGraph?"})
print(result["answer"])   # -> You asked: What is LangGraph?`,
      },
      {
        type: "p",
        text: "Three ideas cover most of what's happening here. The State is a shared object that holds everything the workflow needs (here, a question and an answer). A node is just a function that reads the state and returns the fields it wants to update. Edges connect nodes — START tells the graph where to begin and END tells it where to stop. You compile the graph once, then call invoke() with your initial state.",
      },
      { type: "h3", text: "Adding branches and loops (the real power)" },
      {
        type: "p",
        text: "The example above is linear, but LangGraph's superpower is conditional edges — letting the graph decide what runs next based on the current state. That's how you build agents that loop until they're confident, or RAG pipelines that re-retrieve when the context is weak:",
      },
      {
        type: "code",
        caption: "A conditional edge: after 'grade', either loop back to 'retrieve' or move on to 'generate'.",
        code: `# Inside a larger graph with retrieve / grade / generate nodes:
def route(state: State) -> str:
    # Pick the next step based on the current state
    if state["has_enough_context"]:
        return "generate"
    return "retrieve"          # loop back to gather more

builder.add_conditional_edges(
    "grade",                   # after the 'grade' node runs...
    route,                     # ...this function decides where to go next
    {"retrieve": "retrieve", "generate": "generate"},
)`,
      },
      {
        type: "p",
        text: "With that one pattern, your application can cycle — retrieve, grade, and loop back for more context until it's ready to generate an answer. That cyclical control flow is what separates LangGraph from a plain prompt chain, and it's the foundation of most agentic and agentic-RAG systems.",
      },
      { type: "h2", text: "When should you use LangGraph?" },
      {
        type: "p",
        text: "Reach for LangGraph when your application needs more than a single prompt: multi-agent systems, agentic RAG, workflows with tool calls and retries, or anything with branching logic and human-approval steps. For a one-shot summarizer or a simple Q&A bot, a plain LangChain chain is often enough — LangGraph shines when control flow and state get complex.",
      },
      {
        type: "cta",
        text: "Want to actually build agentic systems with LangGraph — multi-agent workflows, agentic RAG, and production deployment — hands-on? That's exactly what I teach in my AI/ML bootcamps and corporate workshops.",
      },
      { type: "h2", text: "Apa itu LangGraph? (Ringkasan Bahasa Indonesia)" },
      {
        type: "p",
        text: "LangGraph adalah framework open-source dari tim LangChain untuk membangun aplikasi AI yang stateful dan multi-langkah dalam bentuk graph. Alih-alih satu prompt linear, Anda memodelkan aplikasi sebagai kumpulan node (langkah) yang terhubung oleh edge (transisi), dengan state bersama yang mengalir di antaranya — seperti flowchart yang bisa dieksekusi oleh LLM Anda.",
      },
      { type: "h3", text: "Mengapa pakai LangGraph?" },
      {
        type: "ul",
        items: [
          "Stateful — setiap langkah berbagi dan memperbarui state bersama, sehingga aplikasi mengingat konteks sepanjang alur.",
          "Mendukung loop — agent bisa mencoba ulang, menyempurnakan, atau beriterasi sampai suatu kondisi terpenuhi.",
          "Terkendali — Anda menentukan persis bagaimana alur bercabang, bukan sekadar berharap LLM berperilaku benar.",
          "Siap produksi — tersedia persistence, human-in-the-loop, dan streaming bawaan.",
        ],
      },
      {
        type: "p",
        text: "Gunakan LangGraph ketika aplikasi Anda butuh lebih dari satu prompt: sistem multi-agent, agentic RAG, atau workflow dengan tool dan retry. Untuk Q&A sederhana, chain biasa sudah cukup. Kemampuan loop dan percabangan inilah yang membedakan LangGraph dari prompt chain biasa.",
      },
      {
        type: "cta",
        text: "Ingin belajar membangun sistem agentic dengan LangGraph secara hands-on? Itulah yang saya ajarkan di bootcamp dan corporate workshop AI/ML saya.",
      },
    ],
  },
  {
    slug: "what-is-langchain-and-why-it-matters",
    title: "What is LangChain? Why It Matters, Loaders, LLM Connectors & a Tutorial",
    description:
      "A plain-English guide to LangChain — what it is, why it matters, how to connect to LLMs like Google Gemini and Anthropic Claude, and how to load your own data with document loaders. Includes Python examples and a Bahasa Indonesia summary.",
    date: "2026-06-17",
    readingTime: "8 min read",
    tags: ["LangChain", "LLM", "Generative AI", "RAG", "Python"],
    body: [
      {
        type: "p",
        text: "Building with large language models quickly gets repetitive: you write the same glue code to call a model, swap providers, load documents, format prompts, and parse outputs. LangChain is the framework that standardizes all of that — so you can focus on your application instead of the plumbing.",
      },
      { type: "h2", text: "What is LangChain?" },
      {
        type: "p",
        text: "LangChain is an open-source framework for building applications powered by large language models. It gives you a consistent set of building blocks — model connectors, prompt templates, document loaders, text splitters, vector stores, and chains — that snap together. The biggest idea: a single, unified interface across LLM providers, so the same code can run on Google Gemini, Anthropic Claude, OpenAI, or a local model with a one-line change.",
      },
      { type: "h2", text: "Why use LangChain?" },
      {
        type: "p",
        text: "You can call an LLM's API directly, and for a single prompt that's fine. LangChain earns its place once your app needs more than one moving part:",
      },
      {
        type: "ul",
        items: [
          "Provider-agnostic — swap between Gemini, Claude, and others without rewriting your app, so you avoid vendor lock-in.",
          "Batteries included — ready-made document loaders, text splitters, embeddings, and vector-store integrations for building RAG.",
          "Composable — its LangChain Expression Language (LCEL) lets you pipe components together with a simple | operator.",
          "A huge ecosystem — hundreds of integrations (databases, APIs, tools) plus LangGraph for agents and LangSmith for observability.",
        ],
      },
      { type: "h2", text: "Connecting to an LLM" },
      {
        type: "p",
        text: "Each provider has its own LangChain package. Install the core library plus the connectors you need:",
      },
      {
        type: "code",
        caption: "Install LangChain and the provider connectors.",
        code: `pip install langchain langchain-core langchain-community
pip install langchain-google-genai langchain-anthropic
pip install pypdf   # used later, for loading PDFs

# Set your API keys as environment variables
export GOOGLE_API_KEY="your-google-api-key"
export ANTHROPIC_API_KEY="your-anthropic-api-key"`,
      },
      { type: "h3", text: "Google Gemini — ChatGoogleGenerativeAI" },
      {
        type: "p",
        text: "The connector for Gemini lives in langchain-google-genai. Create the model, then call .invoke() with your prompt:",
      },
      {
        type: "code",
        caption: "Connecting to Google Gemini.",
        code: `from langchain_google_genai import ChatGoogleGenerativeAI

llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0)

response = llm.invoke("Explain what LangChain is in one sentence.")
print(response.content)`,
      },
      { type: "h3", text: "Anthropic Claude — ChatAnthropic" },
      {
        type: "p",
        text: "The connector for Claude lives in langchain-anthropic. Note that the latest Claude Opus models manage their own sampling, so we don't pass a temperature — we just set the model and a max_tokens limit:",
      },
      {
        type: "code",
        caption: "Connecting to Anthropic Claude.",
        code: `from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-opus-4-8", max_tokens=1024)

response = llm.invoke("Explain what LangChain is in one sentence.")
print(response.content)`,
      },
      {
        type: "p",
        text: "Here's the key payoff: both objects expose the exact same .invoke() interface. To switch your whole application from Gemini to Claude, you change one line — the line that creates llm. Everything downstream (prompts, chains, parsers) stays identical. That's the provider-agnostic promise in action.",
      },
      { type: "h2", text: "Loading your data: document loaders" },
      {
        type: "p",
        text: "Most real applications need your own data — PDFs, spreadsheets, web pages. LangChain's document loaders turn files into a standard Document object (text plus metadata) that the rest of the pipeline understands. Loading a PDF takes three lines:",
      },
      {
        type: "code",
        caption: "Loading a PDF with PyPDFLoader.",
        code: `from langchain_community.document_loaders import PyPDFLoader

loader = PyPDFLoader("report.pdf")
docs = loader.load()                  # one Document per page

print(f"Loaded {len(docs)} pages")
print(docs[0].page_content[:200])     # preview the first page`,
      },
      {
        type: "p",
        text: "There are loaders for almost any source — and they all return the same Document shape, so the code after them never changes:",
      },
      {
        type: "ul",
        items: [
          "PyPDFLoader — PDF files (one Document per page)",
          "TextLoader — plain .txt files",
          "CSVLoader — each CSV row becomes a Document",
          "Docx2txtLoader — Microsoft Word .docx files",
          "WebBaseLoader — fetch and parse a web page by URL",
          "DirectoryLoader — load every matching file in a folder at once",
        ],
      },
      { type: "h2", text: "Putting it together: a tiny chain" },
      {
        type: "p",
        text: "Now combine a prompt template, your model, and your loaded data into one chain using LCEL — the | operator pipes the output of each step into the next:",
      },
      {
        type: "code",
        caption: "A minimal prompt to model chain with LCEL.",
        code: `from langchain_core.prompts import ChatPromptTemplate

prompt = ChatPromptTemplate.from_template(
    "Summarize the following text in 3 bullet points:\\n\\n{text}"
)

chain = prompt | llm            # pipe the prompt into the model (LCEL)

result = chain.invoke({"text": docs[0].page_content})
print(result.content)`,
      },
      {
        type: "p",
        text: "The prompt fills in {text}, passes the formatted message to the model, and returns the response. Because llm is just a variable, this exact chain runs on Gemini or Claude depending only on which connector you assigned earlier — no other change needed.",
      },
      { type: "h2", text: "When should you use LangChain?" },
      {
        type: "p",
        text: "Reach for LangChain when you want provider flexibility, need to load and process your own documents (RAG), or are composing multiple steps — prompt, model, retrieval, parsing. For a single one-off API call with no data and no provider-switching, the raw provider SDK is simpler. LangChain shines as soon as your application has more than one moving part.",
      },
      {
        type: "cta",
        text: "Want to go from these basics to building real RAG and agentic AI systems with LangChain and LangGraph — hands-on? That's exactly what I teach in my AI/ML bootcamps and corporate workshops.",
      },
      { type: "h2", text: "Apa itu LangChain? (Ringkasan Bahasa Indonesia)" },
      {
        type: "p",
        text: "LangChain adalah framework open-source untuk membangun aplikasi berbasis large language model (LLM). Ia menyediakan komponen siap pakai — konektor model, template prompt, document loader, text splitter, dan vector store — yang bisa dirangkai. Ide utamanya: satu antarmuka yang seragam untuk berbagai provider, sehingga kode yang sama bisa berjalan di Google Gemini, Anthropic Claude, atau model lain hanya dengan mengubah satu baris.",
      },
      { type: "h3", text: "Mengapa pakai LangChain?" },
      {
        type: "ul",
        items: [
          "Tidak terikat satu provider — berpindah antara Gemini, Claude, dan lainnya tanpa menulis ulang aplikasi.",
          "Lengkap — document loader, text splitter, embeddings, dan integrasi vector store untuk membangun RAG.",
          "Mudah dirangkai — LangChain Expression Language (LCEL) menyambung komponen dengan operator | .",
          "Ekosistem besar — ratusan integrasi, plus LangGraph untuk agent dan LangSmith untuk observability.",
        ],
      },
      {
        type: "p",
        text: "Gunakan LangChain ketika Anda butuh fleksibilitas provider, perlu memuat dan memproses dokumen sendiri (RAG), atau merangkai beberapa langkah sekaligus. Untuk satu panggilan API sederhana, SDK provider langsung sudah cukup.",
      },
      {
        type: "cta",
        text: "Ingin belajar membangun sistem RAG dan agentic AI nyata dengan LangChain dan LangGraph secara hands-on? Itulah yang saya ajarkan di bootcamp dan corporate workshop AI/ML saya.",
      },
    ],
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))
}
