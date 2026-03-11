import { TRAINER } from "../../config/trainer";

export default function ContactPanel() {
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
