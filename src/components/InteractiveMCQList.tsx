"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

interface Option {
  letter: string;
  text: string;
}

interface MCQItem {
  questionText: string;
  options: Option[];
  answerText: string;
  explanationText: string;
}

function parseInline(text: string): React.ReactNode[] {
  if (!text) return [];
  const parts: React.ReactNode[] = [];
  const rx = /\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let ki = 0;
  while ((m = rx.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1] !== undefined) parts.push(<strong key={ki++} className="font-black text-slate-900">{m[1]}</strong>);
    else if (m[2] !== undefined) parts.push(<em key={ki++} className="italic text-slate-600">{m[2]}</em>);
    else if (m[3] !== undefined) parts.push(<code key={ki++} className="bg-slate-100 text-indigo-700 px-1 rounded text-xs font-mono">{m[3]}</code>);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export function SingleMCQCard({
  idx,
  questionText,
  options,
  answerText,
  explanationText
}: {
  idx: number;
  questionText: string;
  options: Option[];
  answerText: string;
  explanationText: string;
}) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const correctLetterMatch = answerText.match(/\b([A-D])\b/i) || answerText.match(/[\(\[]?([A-D])[\)\]\.]/i);
  const correctLetter = correctLetterMatch ? correctLetterMatch[1].toUpperCase() : null;

  const handleSelectOption = (letter: string) => {
    setSelectedOption(letter);
    setShowAnswer(true);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
      {/* Question Header - Clickable to expand/collapse */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-slate-50 px-5 py-4 border-b border-slate-100 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/80 transition-colors"
      >
        <div className="flex gap-3 items-start">
          <span className="bg-indigo-600 text-white text-xs font-black px-2.5 py-1 rounded-lg flex-shrink-0">
            Q{idx + 1}
          </span>
          <p className="font-bold text-slate-800 text-sm md:text-[15px] leading-relaxed">
            {parseInline(questionText)}
          </p>
        </div>
        <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
      </div>

      {isExpanded && (
        <>
          {/* Options List */}
          {options.length > 0 ? (
            <div className="px-6 py-4 bg-white grid grid-cols-1 gap-2.5">
              {options.map((opt, oi) => {
                const isSelected = selectedOption === opt.letter;
                const isCorrect = correctLetter && opt.letter === correctLetter;
                
                let btnStyle = "bg-slate-50 hover:bg-indigo-50/50 border-slate-200 text-slate-700 hover:border-indigo-300";
                let badgeStyle = "bg-slate-200 text-slate-700";

                if (showAnswer) {
                  if (isCorrect) {
                    btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold ring-2 ring-emerald-200";
                    badgeStyle = "bg-emerald-600 text-white font-bold";
                  } else if (isSelected && !isCorrect) {
                    btnStyle = "bg-rose-50 border-rose-400 text-rose-900 ring-2 ring-rose-200";
                    badgeStyle = "bg-rose-600 text-white font-bold";
                  }
                } else if (isSelected) {
                  btnStyle = "bg-indigo-50 border-indigo-400 text-indigo-900 ring-2 ring-indigo-200";
                  badgeStyle = "bg-indigo-600 text-white";
                }

                return (
                  <button
                    key={oi}
                    type="button"
                    onClick={() => handleSelectOption(opt.letter)}
                    className={`w-full text-left flex gap-3 items-start border rounded-xl px-4 py-3 transition-all duration-150 cursor-pointer ${btnStyle}`}
                  >
                    <span className={`text-xs font-black w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${badgeStyle}`}>
                      {opt.letter}
                    </span>
                    <span className="text-sm md:text-[14.5px] leading-relaxed font-medium pt-0.5">
                      {parseInline(opt.text)}
                    </span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="px-6 py-3 bg-slate-50/50 text-slate-500 italic text-xs border-b border-slate-100">
              Select or click below to reveal answer key & explanation.
            </div>
          )}

          {/* Show Answer Toggle / Answer & Explanation Box */}
          {(answerText || explanationText) && (
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
              {!showAnswer ? (
                <button
                  type="button"
                  onClick={() => setShowAnswer(true)}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <HelpCircle className="w-3.5 h-3.5" /> Reveal Correct Answer & Explanation
                </button>
              ) : (
                <div className="space-y-3">
                  {answerText && (
                    <div className="flex items-center gap-2 font-bold text-sm bg-emerald-50 border border-emerald-200 px-4 py-2.5 rounded-xl text-emerald-900 shadow-xs">
                      <span className="bg-emerald-600 text-white text-[10px] uppercase font-black px-1.5 py-0.5 rounded">
                        Correct Answer
                      </span>
                      <span>{parseInline(answerText)}</span>
                    </div>
                  )}
                  {explanationText && (
                    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                      <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">Explanation</p>
                      <p className="text-slate-600 text-sm leading-relaxed italic">
                        {parseInline(explanationText)}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function InteractiveMCQList({ rawInput }: { rawInput: any }) {
  if (!rawInput) return <p className="text-slate-400 italic">No questions generated.</p>;

  let parsedQuestions: MCQItem[] = [];

  let dataObj = rawInput;
  if (typeof rawInput === "string") {
    try {
      const trimmed = rawInput.trim();
      if (trimmed.startsWith("[") || trimmed.startsWith("{")) {
        dataObj = JSON.parse(trimmed);
      }
    } catch (e) {
      // Not JSON, continue with text parsing
    }
  }

  // Handle array of objects
  if (Array.isArray(dataObj)) {
    parsedQuestions = dataObj.map((item: any, idx: number) => {
      const qText = item.question || item.title || item.q || `Question ${idx + 1}`;
      const opts: Option[] = [];
      if (item.options && typeof item.options === "object") {
        if (Array.isArray(item.options)) {
          item.options.forEach((optStr: any, oi: number) => {
            const letter = String.fromCharCode(65 + oi);
            opts.push({ letter, text: String(optStr) });
          });
        } else {
          Object.entries(item.options).forEach(([k, v]) => {
            opts.push({ letter: k.toUpperCase(), text: String(v) });
          });
        }
      }
      const ans = item.answer || item.correct_answer || item.key || "";
      const exp = item.explanation || item.exp || "";
      return { questionText: qText, options: opts, answerText: String(ans), explanationText: String(exp) };
    });
  } else if (typeof dataObj === "object" && dataObj.questions && Array.isArray(dataObj.questions)) {
    parsedQuestions = dataObj.questions.map((item: any, idx: number) => {
      const qText = item.question || item.title || item.q || `Question ${idx + 1}`;
      const opts: Option[] = [];
      if (item.options && typeof item.options === "object") {
        if (Array.isArray(item.options)) {
          item.options.forEach((optStr: any, oi: number) => {
            const letter = String.fromCharCode(65 + oi);
            opts.push({ letter, text: String(optStr) });
          });
        } else {
          Object.entries(item.options).forEach(([k, v]) => {
            opts.push({ letter: k.toUpperCase(), text: String(v) });
          });
        }
      }
      const ans = item.answer || item.correct_answer || item.key || "";
      const exp = item.explanation || item.exp || "";
      return { questionText: qText, options: opts, answerText: String(ans), explanationText: String(exp) };
    });
  }

  // Structured parse success!
  if (parsedQuestions.length > 0) {
    return (
      <div className="space-y-6">
        {parsedQuestions.map((q, idx) => (
          <SingleMCQCard
            key={idx}
            idx={idx}
            questionText={q.questionText}
            options={q.options}
            answerText={q.answerText}
            explanationText={q.explanationText}
          />
        ))}
      </div>
    );
  }

  // Smart Text Parser fallback
  const text = typeof rawInput === "string" ? rawInput : JSON.stringify(rawInput);
  const lines = text.replace(/\r\n/g, '\n').split('\n');

  const blocks: string[] = [];
  let currentBlockLines: string[] = [];
  let inOptionsOrAns = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isExplicitQStart = /^\s*(?:Q(?:uestion)?[\s.]?\d+[.:)]|Question\s+\d+[:.])/i.test(line);
    const isAnswerOrExp = /^\s*(?:Answer|Correct|Key|Explanation)\s*[:\-]/i.test(line);
    const isNumberStart = /^\s*\d{1,2}[.:)]\s+/.test(line);

    if ((isExplicitQStart || (inOptionsOrAns && isNumberStart)) && currentBlockLines.length > 0) {
      blocks.push(currentBlockLines.join('\n').trim());
      currentBlockLines = [line];
      inOptionsOrAns = false;
    } else {
      currentBlockLines.push(line);
      if (isAnswerOrExp || /(?:\([a-dA-D]\)|[a-dA-D][\).]\s|^\s*[a-dA-D]\.\s)/i.test(line)) {
        inOptionsOrAns = true;
      }
    }
  }
  if (currentBlockLines.length > 0) {
    blocks.push(currentBlockLines.join('\n').trim());
  }

  const validBlocks = blocks.filter(b => b.length > 10);

  if (validBlocks.length === 0) {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-slate-700 text-sm whitespace-pre-line">
        {text}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {validBlocks.map((block, idx) => {
        const answerSplitter = /(?=\b(?:Answer|Correct(?:\s+(?:Answer|Option))?|Key)\s*[:\-]\s*)/i;
        const [beforeAns, afterAns] = block.split(answerSplitter);

        let answerText = "";
        let explanationText = "";

        if (afterAns) {
          const explanationSplitter = /(?=\b(?:Explanation)\s*[:\-]\s*)/i;
          const [ansPart, expPart] = afterAns.split(explanationSplitter);
          answerText = ansPart ? ansPart.replace(/^(?:Answer|Correct(?:\s+(?:Answer|Option))?|Key)\s*[:\-]\s*/i, '').trim() : "";
          explanationText = expPart ? expPart.replace(/^(?:Explanation)\s*[:\-]\s*/i, '').trim() : "";
        }

        const optionSplitter = /(?=(?:\([a-dA-D]\)|[a-dA-D][\).]\s|^\s*[a-dA-D]\.\s))/gm;
        const optionParts = beforeAns.split(optionSplitter).map(s => s.trim()).filter(Boolean);

        let questionText = block;
        const options: Option[] = [];

        if (optionParts.length > 0) {
          questionText = optionParts[0].replace(/^(?:Q(?:uestion)?[\s.]?\d+[.:)]|\d{1,2}[.):]\s*)/i, '').trim();
          optionParts.slice(1).forEach((optStr) => {
            const cleanOptStr = optStr.trim();
            if (!cleanOptStr) return;
            const match = cleanOptStr.match(/^(?:\*\*|\*|`)*[\(\[]?([a-dA-D])[\)\]\.\s:]+(?:\*\*|\*|`)*(.*)$/i);
            if (match) {
              const textContent = match[2].trim().replace(/^[\:\-]/, '').trim();
              if (textContent) {
                options.push({
                  letter: match[1].toUpperCase(),
                  text: textContent
                });
              }
            }
          });
        }

        return (
          <SingleMCQCard
            key={idx}
            idx={idx}
            questionText={questionText}
            options={options}
            answerText={answerText}
            explanationText={explanationText}
          />
        );
      })}
    </div>
  );
}
