import { createTheme } from "@mui/material";
import { global } from "../../global.theme";

const explore = createTheme(global, {
  components: {
    ExplorePage: {
      card: {},
    },
  },
});

export { explore };
