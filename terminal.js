const lines = [
  { text: '$ whoami',                         cls: 't-prompt' },
  { text: 'zubair',                            cls: ''         },
  { text: '',                                  cls: ''         },
  { text: '$ cat interests.txt',              cls: 't-prompt' },
  { text: 'systems programming',               cls: 't-val'    },
  { text: 'compiler engineering',              cls: 't-val'    },
  { text: 'os internals',                      cls: 't-val'    },
  { text: '',                                  cls: ''         },
  { text: '$ echo $TARGET',                   cls: 't-prompt' },
  { text: 'Apple Core OS · ARM · Canonical',  cls: 't-hi'     },
  { text: '',                                  cls: ''         },
  { text: '$ ls ~/projects/',                 cls: 't-prompt' },
  { text: 'ZVM/  Zerminal/  ZMP/',            cls: 't-dim'    },
  { text: '',                                  cls: ''         },
  { text: '$ _',                               cls: 't-prompt' },
];

const body = document.getElementById('termBody');
if (body) {
  let lineIdx = 0;
  let charIdx = 0;

  function tick() {
    if (lineIdx >= lines.length) return;

    const { text, cls } = lines[lineIdx];

    if (charIdx === 0) {
      const el = document.createElement('span');
      el.className = 't-line' + (cls ? ' ' + cls : '');
      el.id = 'tl-' + lineIdx;
      body.appendChild(el);
    }

    const span = document.getElementById('tl-' + lineIdx);

    if (charIdx < text.length) {
      span.textContent += text[charIdx];
      charIdx++;
      setTimeout(tick, lineIdx === lines.length - 1 ? 600 : 28);
    } else {
      charIdx = 0;
      lineIdx++;
      setTimeout(tick, text === '' ? 60 : 80);
    }
  }

  setTimeout(tick, 400);
}
