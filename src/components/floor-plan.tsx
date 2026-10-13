export function FloorPlan() {
  return <svg className="floor-plan" viewBox="0 0 640 430" role="img" aria-labelledby="plan-title plan-desc">
    <title id="plan-title">An original conceptual commercial kitchen plan</title><desc id="plan-desc">Receiving and storage connect to preparation, cooking and service, with a separate wash zone.</desc>
    <defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeOpacity=".1" strokeWidth=".5" /></pattern></defs>
    <rect width="640" height="430" fill="url(#grid)" />
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
      <path className="plan-line" d="M65 65H570V350H445M385 350H65V65M65 195H205V65M205 265V350M455 65V210H570" />
      <path className="plan-line" d="M82 83H185V130H82ZM82 145H185V178H82ZM82 218H170V255H82ZM82 274H170V328H82ZM240 130H400V190H240ZM240 225H400V285H240ZM473 83H552V140H473ZM473 155H552V192H473ZM475 235H552V330H475Z" />
      <path className="plan-line" d="M253 144H298V176H253ZM310 144H385V176H310ZM255 237H285V272H255ZM295 237H325V272H295ZM335 237H385V272H335Z" />
      <path d="M68 40H567M65 34V46M570 34V46M40 65V350M34 65H46M34 350H46" strokeOpacity=".4" />
      <path className="plan-line flow-line" d="M144 185V206H219V109H427V310H419M426 310H215V207" stroke="#bd6260" strokeDasharray="5 6" />
      <path d="M419 350V316M419 316L414 324M419 316L424 324" stroke="#bd6260" />
      <circle cx="490" cy="105" r="12" /><circle cx="532" cy="105" r="12" />
    </g>
    <g fill="currentColor" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="1.5"><text x="91" y="106">COLD STORAGE</text><text x="91" y="166">DRY STORAGE</text><text x="95" y="240">RECEIVING</text><text x="105" y="304">WASH</text><text x="281" y="121">PREPARATION</text><text x="286" y="304">COOK LINE</text><text x="485" y="216">SERVICE</text><text x="290" y="32">CONCEPT PLAN / NTS</text><text x="65" y="389">BKD — SPATIAL STUDY 001</text><text x="468" y="389">NOT FOR CONSTRUCTION</text></g>
  </svg>;
}
