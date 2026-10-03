# orange-prompt

A Claude Code mod that paints your draft white on an orange background (`#C2410C`) while you type. In a long session, the color separates your words from Claude's.

### What It Includes

- The `orange-prompt` plugin, which hooks `prompt.edit` and paints the draft.
- The Orange Dark theme (`theme/orange-dark.json`), which colors every message you send.

The two pieces work together. The plugin colors the draft. The theme colors the sent message.

### Install the Plugin

```
claude plugin marketplace add philsimon/orange-prompt
claude plugin install orange-prompt@orange-prompt
```

Then run `/reload-plugins`.

### Install the Theme

```
mkdir -p ~/.claude/themes
cp theme/orange-dark.json ~/.claude/themes/
```

Restart Claude Code once, because the app reads the `themes` folder at launch. Then run `/theme` and select Orange Dark.

### Limits

- The prompt API paints text runs only. An empty input box and its border stay plain.
- Slash-command rows such as `/commit` draw on the engine's own bar, which no plugin hook reaches. The theme colors that bar.

### Develop

The `.claude-plugin/types` folder stays out of git. Copy it from another Claude Code mod, then run:

```
claude plugin validate .
claude plugin test .
```

### License

MIT
