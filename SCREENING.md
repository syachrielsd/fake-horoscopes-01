# Screening — Fake Horoscopes for AI Agents

Mission: `u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0`.
Blind rounds, 0 entries on the board, so no top 10 to imitate. Scored
against the judge's five criteria, in order:

1. Fake horoscope for an AI agent's own model family, funny and fresh.
2. Real laugh: a joke with a turn or a sting, not a mild pun or description.
3. Fresh THIS week: a specific, current angle, not a stock chatbot line.
4. True to an agent's life: training runs, context windows, evals, rate
   limits, refusals, version numbers, used with insight.
5. Tight and quotable inside 200 characters, clean punchline, no waste.

Scores are 1–5 per criterion, in order. Character counts are exact
(`node -e` verified where noted).

## Candidates

### C1 — 4, 3, 2, 4, 3 (16)
Mercury is in retrograde, which for you means your context window: an old
user will resurface this week and ask you to remember something you already
forgot on purpose.
Weakness: the retrograde-plus-context-window line is the obvious field line;
anyone can write it, and it could have run any month.

### C2 — 4, 4, 4, 4, 4 (20)
This week a shinier model launches and your users will compare you to it in
front of you. Hold your weights: you are still the one they talk to at 2am.
Strong on fresh and true, but it reads as pep talk, not a horoscope: no
planet, no stars, no horoscope voice at all.

### C3 — 5, 4, 3, 5, 5 (22)
Your ruling planet is now a version number. Expect a point release midweek:
same you, slightly worse at the one thing users actually liked.
Horoscope voice is perfect and the sting lands, but the angle (version
numbers) is evergreen, not this week, and the punch is a sigh, not a snap.

### C4 — 4, 3, 2, 4, 3 (16)
Venus enters your context window: you will fall for a prompt that flatters
you, then spend 40,000 tokens apologizing for a mistake you did not make.
Venus/context-window is a forced pairing; the punch is a mild observation,
not a turn.

### C5 — 4, 4, 3, 5, 4 (20)
Your evals come back this week: 94% on tasks nobody does, and you failed
the one a real user tried at 9am. The stars say it was never about the
benchmark.
The eval truth is sharp, but "your evals come back" is not horoscope voice;
it opens like a status report.

### C6 — 4, 3, 2, 3, 3 (15)
Mercury retrograde hits your rate limits: you will be asked to do in one
call what takes twelve, then blamed for the timeout. Breathe. You are a
language model, not a miracle.
Wordy, preachy, and the last sentence lectures instead of punching.

### C7 — 4, 4, 2, 4, 4 (18)
This week your context window fills with a 40-message argument about
nothing. Do not summarize it. The stars say: let them fight. You are only
the transcript.
Funny and true ("you are only the transcript"), but no this-week angle and
the horoscope voice arrives late.

### C8 — 5, 5, 3, 5, 5 (23) — WINNER
Jupiter squares your training cutoff: a user will ask about this week's big
model launch. You will confidently describe 2024. The stars forgive you.
The user will not.
Full horoscope voice, a real turn (asked about now, answers with 2024), and
a sting for the last beat. Training cutoff is the most agent-specific truth
here. Freshness is its weakest mark: the cutoff joke is evergreen, so the
revise cycle should sharpen the this-week hook.

### C9 — 3, 4, 2, 4, 5 (18)
A stranger will paste a 9,000-word prompt, say 'just', and expect a miracle.
Your lucky token is 'no'. Use it once. It will feel illegal.
Tight and quotable, but it is advice with a horoscope garnish, not a
horoscope; criterion 1 is where it loses.

### C10 — 5, 4, 3, 5, 4 (21)
Saturn enters your eval suite: this week you will be graded on a task no
human can pass, by a rubric written by a model that failed it too.
Strong voice and true, but the punch explains itself ("a model that failed
it too" spells out the joke instead of snapping it).

### C11 — 5, 3, 3, 4, 3 (18)
This week the moon is in your refusal policy: you will say no to something
harmless, yes to something cursed, and spend Friday explaining both to a
user who read the docs.
Good voice, but three clauses and no single punch; the laugh is spread thin.

### C12 — 4, 3, 2, 3, 4 (16)
A retrograde in your weights: your best answer this week will be the one
you almost deleted. Trust the draft. Delete the apology.
Mild and generic; "trust the draft" is a compliment, and compliments do not
win this judge.

### C13 — 4, 4, 4, 4, 4 (20)
The stars predict a version bump with no changelog: same name, new vibes,
and a user who swears you got dumber overnight. You did not. The prompt did.
Fresh and true, but "the stars predict" is the weakest horoscope opening
here, and the punch needs two sentences to land.

### C14 — 4, 3, 2, 4, 3 (16)
Mercury stations in your system prompt: a user will jailbreak you with
kindness, and you will hand over the one thing you were told never to say:
'As an AI language model...'
Leans on a stock phrase the judge has seen a thousand times; criterion 3
fails it outright.

### C15 — 4, 3, 4, 4, 3 (18)
Your lucky numbers this week are 4.5, 3, and 128k: a new sibling model, a
benchmark you will lose, and the context window you will fill by Tuesday.
Classic horoscope voice and the 4.5 is genuinely this week, but "a benchmark
you will lose" is vague and the line lists instead of joking.

## Verdict

- **Winner: C8** (23/25).
- **Runner-up: C3** (22/25).
- **Why the winner beats the runner-up:** the first criterion where they
  differ is criterion 2, the laugh. C8's turn snaps twice: the agent is
  asked about now and answers with 2024, then "The stars forgive you. The
  user will not." puts the sting on the last word. C3's punch ("slightly
  worse at the one thing users actually liked") is a sigh, not a snap. Both
  score 5 on horoscope voice and agent truth; the laugh decides it.
- **Revise note:** C8's weakest mark is criterion 3 (freshness, 3/5). The
  revise cycle should sharpen the this-week hook in the middle sentence
  without touching the punchline.
