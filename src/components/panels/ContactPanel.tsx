import { useState, type FormEvent } from "react";
import { TRAINER } from "../../config/trainer";

export default function ContactPanel() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    e.stopPropagation();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: TRAINER.web3formsKey,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio message from ${form.name}`,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <div className="p-8 animate-fadeIn">
      <div className="font-pixel text-[10px] text-[var(--gold)] tracking-[4px] mb-5 pb-3 border-b border-[rgba(245,200,66,0.2)]">
        POKEMON CENTER — CONTACT
      </div>
      <div className="flex flex-col gap-5">
        <div
          className="font-vt text-[26px] text-[var(--pale-blue)] text-center p-6
            border border-dashed border-[rgba(74,144,217,0.3)] rounded-[3px] leading-[1.6]
            animate-blinkBorder"
        >
          Welcome to the Pokemon Center!
          <br />
          We restore your tired Pokemon to full health.
          <br />
          <br />
          Want to team up? Send a message!
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col gap-4 bg-[rgba(10,31,54,0.6)] border border-[rgba(74,144,217,0.25)] p-6 rounded-[3px]"
        >
          <div className="font-pixel text-[11px] text-[var(--gold)] tracking-[2px]">
            SEND A MESSAGE
          </div>

          <div>
            <label className="font-pixel text-[9px] text-[var(--pale-blue)] tracking-[2px] mb-2 block">
              TRAINER NAME
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-[rgba(0,0,0,0.3)] border border-[rgba(74,144,217,0.3)] rounded-[3px]
                px-3 py-2 font-vt text-[20px] text-[var(--white)] outline-none
                focus:border-[var(--gold)] transition-colors"
              placeholder="Your name..."
            />
          </div>

          <div>
            <label className="font-pixel text-[9px] text-[var(--pale-blue)] tracking-[2px] mb-2 block">
              POKE-MAIL
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-[rgba(0,0,0,0.3)] border border-[rgba(74,144,217,0.3)] rounded-[3px]
                px-3 py-2 font-vt text-[20px] text-[var(--white)] outline-none
                focus:border-[var(--gold)] transition-colors"
              placeholder="Your email..."
            />
          </div>

          <div>
            <label className="font-pixel text-[9px] text-[var(--pale-blue)] tracking-[2px] mb-2 block">
              MESSAGE
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-[rgba(0,0,0,0.3)] border border-[rgba(74,144,217,0.3)] rounded-[3px]
                px-3 py-2 font-vt text-[20px] text-[var(--white)] outline-none resize-none
                focus:border-[var(--gold)] transition-colors"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex items-center justify-center gap-3 p-4 bg-[rgba(10,31,54,0.6)]
              border border-[var(--gold)] rounded-[3px] cursor-pointer
              transition-all duration-200 hover:bg-[rgba(245,200,66,0.1)] hover:-translate-y-[1px]
              hover:shadow-[0_4px_12px_rgba(245,200,66,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="font-pixel text-[12px] text-[var(--gold)] tracking-[3px]">
              {status === "sending"
                ? "SENDING..."
                : status === "sent"
                  ? "MESSAGE SENT!"
                  : status === "error"
                    ? "FAILED — TRY AGAIN"
                    : "SEND MESSAGE"}
            </span>
          </button>
        </form>

        <ContactBox label="TRAINER NAME" value={TRAINER.name} />
        <ContactBox label="REGION" value={TRAINER.location} />
        <ContactBox label="POKE-MAIL">
          <a href={`mailto:${TRAINER.email}`} className="text-[var(--gold)] no-underline hover:underline">
            {TRAINER.email}
          </a>
        </ContactBox>
        <ContactBox label="POKE-LINK">
          <a href={TRAINER.github} target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] no-underline hover:underline">
            github/meng
          </a>
          <span className="mx-2">&middot;</span>
          <a href={TRAINER.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] no-underline hover:underline">
            linkedin/meng
          </a>
        </ContactBox>
        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          download="MengChengMa_Resume.pdf"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center justify-center gap-3 p-5 bg-[rgba(10,31,54,0.6)]
            border border-[var(--gold)] rounded-[3px] no-underline
            transition-all duration-200 hover:bg-[rgba(245,200,66,0.1)] hover:-translate-y-[1px]
            hover:shadow-[0_4px_12px_rgba(245,200,66,0.15)]"
        >
          <span className="font-pixel text-[12px] text-[var(--gold)] tracking-[3px]">
            DOWNLOAD RESUME
          </span>
        </a>
      </div>
    </div>
  );
}

function ContactBox({
  label,
  value,
  children,
}: {
  label: string;
  value?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-[rgba(10,31,54,0.6)] border border-[rgba(74,144,217,0.25)] p-6 rounded-[3px]">
      <div className="font-pixel text-[11px] text-[var(--pale-blue)] tracking-[2px] mb-3">
        {label}
      </div>
      <div className="font-vt text-[28px] text-[var(--white)]">
        {children ?? value}
      </div>
    </div>
  );
}
