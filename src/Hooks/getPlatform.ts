import usePlatforms from "../Hooks/usePlatform";
import { FetchResponse } from "../Services/api-client";
import { Platform } from "../Hooks/usePlatform";
import { GameQuery } from "../App";

const getPlatform = (gameQuery: GameQuery) => {
  const { data: dataPl } = usePlatforms();
  const dataPlatform = dataPl as FetchResponse<Platform>;
  const platform = dataPlatform.results.find(
    (g) => g.id === gameQuery.platform
  );
  return platform;
};

export default getPlatform;
