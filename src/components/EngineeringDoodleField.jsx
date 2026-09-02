const motifs = {
  circuit: <><path d="M8 48h38l12-12h34l14 14h40"/><path d="M8 64h22l10 10h28l14-14h54"/><circle cx="8" cy="48" r="3" fill="currentColor"/><circle cx="146" cy="50" r="3" fill="currentColor"/><circle cx="8" cy="64" r="3" fill="currentColor"/><path d="M72 18v18M64 18h16M68 14h8"/></>,
  gear: <><circle cx="48" cy="55" r="22"/><circle cx="48" cy="55" r="8"/><path d="M48 25v-9M48 94v-9M18 55H9M87 55h-9M27 34l-7-7M69 76l7 7M69 34l7-7M27 76l-7 7"/><path d="M48 33l5 14-5 14-5-14 5-14Z"/></>,
  blueprint: <><rect x="10" y="16" width="88" height="64" rx="2"/><path d="M22 68V28h30l16 14v26M22 44h28M52 28v18h16M36 28v40"/><path d="M108 25h48M108 38h35M108 51h43M108 64h28"/><circle cx="108" cy="25" r="3" fill="currentColor"/></>,
  robot: <><rect x="20" y="30" width="62" height="45" rx="8"/><path d="M51 30V18M43 18h16M34 46h10M58 46h10M42 61h18"/><circle cx="40" cy="46" r="4"/><circle cx="62" cy="46" r="4"/><path d="M20 52H9M82 52h11M29 75l-8 12M73 75l8 12"/></>,
  atom: <><ellipse cx="54" cy="54" rx="42" ry="17"/><ellipse cx="54" cy="54" rx="42" ry="17" transform="rotate(60 54 54)"/><ellipse cx="54" cy="54" rx="42" ry="17" transform="rotate(-60 54 54)"/><circle cx="54" cy="54" r="6" fill="currentColor"/></>,
  ruler: <><path d="M12 78L92 18l15 20-80 60Z"/><path d="M27 76l-9-12M39 67l-8-11M51 58l-8-11M63 49l-8-11M75 40l-8-11"/><path d="M116 28h42M116 42h30M116 56h42M116 70h25"/></>,
  cube: <><path d="M48 14l32 18v38L48 88 16 70V32l32-18Z"/><path d="M16 32l32 18 32-18M48 50v38"/><path d="M106 42h42M106 55h31M106 68h37"/></>,
};

export default function EngineeringDoodleField({ theme = "light" }) {
  const items = [
    ["circuit", "field-a"], ["gear", "field-b"], ["blueprint", "field-c"],
    ["robot", "field-d"], ["atom", "field-e"], ["ruler", "field-f"], ["cube", "field-g"]
  ];
  return <div className={`doodle-field doodle-field-${theme}`} aria-hidden="true">
    {items.map(([name, cls]) => <svg key={name} className={`field-motif ${cls}`} viewBox="0 0 170 110" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{motifs[name]}</svg>)}
  </div>;
}
