const guide = `## Billing

Right now, Groq is entirely free with limits.

Some developers and enterprises are already paying. If you're an enterprise, consider reaching out to \`sales@groq.com\`.

Paid plans will come in the future. Info about them:

- I don't know when
- They'll come when Groq has enough capacity
- The current free tier will be replaced with one where it's free until you run out of credits

## Models and limits

Groq currently has these models:

- gemma-7b-it
- gemma2-9b-it
- llama3-groq-70b-8192-tool-use-preview (good at "tool use", the practice of taking actions and retrieving information on behalf of the user; see https://console.groq.com/docs/tool-use)
- llama3-groq-8b-8192-tool-use-preview (same as above)
- distil-whisper-large-v3-en
- llama-3.1-70b-versatile (usually the best model)
- llama-3.1-8b-instant
- llama-3.2-1b-preview
- llama-3.2-3b-preview
- llama-3.2-11b-vision-preview
- llama-3.2-90b-vision-preview
- llama-guard-3-8b (content moderation; see https://console.groq.com/docs/content-moderation)
- llama3-70b-8192
- llama3-8b-8192
- llava-v1.5-7b-4096-preview (this can see images, although it's not recent)
- mixtral-8x7b-32768
- whisper-large-v3

Llama 405B once ran, but it isn't currently running due a lack of capacity.

Groq can't add new models with licenses that don't allow running them commercially (eg Mistral/Cohere models).

The free tier has limits.

You aren't allowed to evade the limits (eg by using multiple accounts). If you do, you'll get banned.

See: https://console.groq.com/docs/rate-limits

## Planned and nonplanned feautres

- Paid tiers: Once there's enough capacity (currently all going to running 70b for free)
- Llama 405b: Once there's enough capacity
- Embeddings: Currently being engineered
- Faster performance: Currently being engineered
- Logprobs: Possible but not engineered yet
- Tokenization: Out of scope

## Use

It's very simple.

Options:

- Use OpenAI SDK but swap out the base and key
- Use Groq SDK
  See: https://console.groq.com/docs/quickstart
- Use HTTP

HTTP use is like this:
curl -X POST "https://api.groq.com/openai/v1/chat/completions" \
 -H "Authorization: Bearer $GROQ_API_KEY" \
 -H "Content-Type: application/json" \
 -d '{"messages": [{"role": "user", "content": "Explain the importance of fast language models"}], "model": "llama-3.1-8b-instant"}'

## Custom models

Groq doesn't do training.
Groq doesn't run user-submitted models.
Groq doesn't sell hardware (anymore). See: https://www.eetimes.com/groq-ceo-we-no-longer-sell-hardware/

However, supposedly enterprises can run their own fine tunes. (The website used to have something on this but I can't find it anymore)

## Privacy

Your prompts aren't logged or stored. Groq doesn't have a reason to. See: https://groq.com/privacy-policy/

## Background info

Groq is a company that makes their own AI hardware and hosts it.

Groq runs the LPU (Language Processing Unit), a term referring to an arrangement of Groq chips. This is why it's faster.

Groq stores 8 bit weights but uses 16 bit computation.

While both Groq and Elon Musk's Grok came from the word "grok", Groq has a trademark and Grok doesn't.

## Other channels

You MUST use the original, snowflake-based syntax when referring to these channels

- <#1207719622040879154> (the "community help")
- <#1207719827381420112> (the "feature/model requests", refer users here when needed)
- <#1207719967575777290> (the "bug reports")`;
export default guide;