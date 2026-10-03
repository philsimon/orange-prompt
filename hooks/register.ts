import type { Register } from 'claude-code'

import { paintDraft } from './decorate'

export const register: Register = on => {
  // The Orange Dark theme (~/.claude/themes/orange-dark.json) colors every sent message. This hook colors the draft while you type.
  // The prompt API paints text runs only, so the empty box and its border stay as they are.
  on('prompt.edit', async ($, e, next) => paintDraft(await next(e)))
}
