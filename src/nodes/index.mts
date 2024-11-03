import { packResoniteNodeCategory, ResoniteNodeCategory } from "../type.mjs";
import { Actions } from "./actions/index.mjs";
import { Assets } from "./assets/index.mjs";
import { Audio } from "./audio/index.mjs";
import { Avatars } from "./avatars/index.mjs";
import { Colors } from "./colors/index.mjs";
import { Debug } from "./debug/index.mjs";
import { Devices } from "./devices/index.mjs";
import { Flow } from "./flow/index.mjs";
import { Interaction } from "./interaction/index.mjs";
import { Operators } from "./operators/index.mjs";
import { Slots } from "./slots/index.mjs";
import { Transforms } from "./transform/index.mjs";
import { Users } from "./users/index.mjs";
import { Variables } from "./variables/index.mjs";

export const Nodes: ResoniteNodeCategory = packResoniteNodeCategory({
  Actions,
  Assets,
  Audio,
  Avatars,
  Colors,
  Debug,
  Devices,
  Flow,
  Interaction,
  Operators,
  Slots,
  Transforms,
  Users,
  Variables,
});
