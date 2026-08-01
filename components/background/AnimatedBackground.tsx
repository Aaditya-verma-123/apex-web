import Aurora from "./Aurora";
import Grid from "./Grid";
import Noise from "./Noise";
import MouseGlow from "./MouseGlow";
import Vignette from "./Vignette";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-slate-950">

      <Aurora />

      <Grid />

      <Noise />

      <MouseGlow />

      <Vignette />

    </div>
  );
}