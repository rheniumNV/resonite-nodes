import { packResoniteNodeCategory, ResoniteNodeCategory } from "../type";
import { Actions } from "./actions";
import { Assets } from "./assets";
import { Audio } from "./audio";
import { Avatars } from "./avatars";
import { Colors } from "./colors";
import { Debug } from "./debug";
import { Devices } from "./devices";

export const Nodes: ResoniteNodeCategory = packResoniteNodeCategory({
  Actions,
  Assets,
  Audio,
  Avatars,
  Colors,
  Debug,
  Devices,
});
