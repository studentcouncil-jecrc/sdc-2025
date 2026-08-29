const doodles = {
  about: <><path d="M20 130h42l18-24h42l20-36h62"/><path d="M20 142h42l18-24h42l20-36h62" strokeDasharray="4 7"/><circle cx="20" cy="130" r="5" fill="currentColor"/><circle cx="80" cy="106" r="5" fill="currentColor"/><circle cx="122" cy="106" r="5" fill="currentColor"/><path d="M42 38h62v42H42zM54 38V24M70 38V24M86 38V24M102 38V24M54 54h38M54 67h25"/><path d="M132 34h74M132 27v14M144 30v8M156 30v8M168 30v8M180 30v8M192 27v14"/><path d="M205 52l18 18-18 18-18-18 18-18Z"/><circle cx="205" cy="70" r="5" fill="currentColor"/></>,
  clubs: <><circle cx="72" cy="82" r="38"/><circle cx="72" cy="82" r="20"/><path d="M72 31v-15M72 148v-15M21 82H6M138 82h-15M36 46L25 35M108 118l11 11M108 46l11-11M36 118l-11 11"/><path d="M72 58l9 24-9 17-9-17 9-24Z"/><path d="M148 30h70v48h-70zM158 30V18M174 30V18M190 30V18M206 30V18M158 46h36M158 60h23"/><circle cx="148" cy="30" r="4" fill="currentColor"/></>,
  events: <><path d="M25 120h50V70h35V35h42v40h48"/><path d="M25 132h50M25 126v12M37 128v8M49 128v8M61 128v8"/><path d="M95 35h42M101 26h30l6 9h-42Z"/><circle cx="110" cy="83" r="19"/><circle cx="110" cy="83" r="7"/><path d="M154 74h40M154 86h28M154 98h19"/><path d="M205 55l14 14-14 14-14-14 14-14Z"/><circle cx="205" cy="69" r="4" fill="currentColor"/></>,
  mentors: <><path d="M18 122c25-54 53-60 76-27 19 27 33 33 49 6 15-26 31-30 61-8"/><circle cx="18" cy="122" r="5" fill="currentColor"/><circle cx="94" cy="95" r="5" fill="currentColor"/><circle cx="143" cy="101" r="5" fill="currentColor"/><circle cx="204" cy="93" r="5" fill="currentColor"/><path d="M43 46h34l11 11h30M77 46V27M88 57v25M118 57h28V40h27"/><path d="M154 112h47M154 106v12M166 109v6M178 109v6M190 109v6"/><circle cx="43" cy="46" r="3"/><circle cx="173" cy="40" r="3"/></>,
  footer: <><path d="M25 112c18-48 62-72 104-57 30 11 48 35 37 56-10 20-42 21-52 2-10-19 12-38 35-28"/><path d="M161 55l22 3-8 20"/><path d="M31 27h44M31 21v12M42 24v6M53 24v6M64 24v6M75 27l15 15h27v22H90"/><circle cx="117" cy="64" r="4" fill="currentColor"/><path d="M154 93h44M154 87v12M165 90v6M176 90v6M187 90v6"/></>,
};

const extra = {
  about: <><path d="M22 45h36l8 8h28v28H58L50 73H22z"/><path d="M34 45V29M48 45V29M62 53V38M78 81V96"/><circle cx="22" cy="45" r="4" fill="currentColor"/></>,
  clubs: <><path d="M26 36h38v38H26z"/><path d="M36 36V24M50 36V24M64 36V24M36 50h18M36 62h28"/><path d="M92 30l12 12-12 12-12-12 12-12Z"/><circle cx="92" cy="42" r="4" fill="currentColor"/></>,
  events: <><path d="M28 28h42v30H28z"/><path d="M39 28v-9M59 28v-9M38 43h22M49 43v10"/><path d="M94 101l20-30 20 30z"/><path d="M104 101v-12M124 101v-12"/></>,
  mentors: <><circle cx="47" cy="43" r="15"/><path d="M25 91c4-21 40-21 44 0"/><path d="M83 28h52M83 42h38M83 56h46"/><circle cx="83" cy="28" r="3" fill="currentColor"/></>,
  footer: <><path d="M25 35h48v38H25z"/><path d="M37 35V22M53 35V22M69 35V22M37 50h25M37 62h17"/><path d="M94 91h42M94 85v12M105 88v6M116 88v6M127 88v6"/></>,
};

export default function EngineeringDoodle({ variant = "about" }) {
  const [base, pos = "primary"] = variant.split("-");
  const shape = doodles[base] || doodles.about;
  return (
    <div className={`engineering-doodle engineering-doodle-${base} engineering-doodle-${pos}`} aria-hidden="true">
      <svg viewBox="0 0 240 160" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {shape}
      </svg>
      {pos === "secondary" && <svg className="engineering-doodle-mini" viewBox="0 0 150 110" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{extra[base]}</svg>}
    </div>
  );
}
