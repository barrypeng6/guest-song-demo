import getSingerGameData from './getSingerGameData';
import { Api } from "@kkbox/kkbox-js-sdk";

export default async ({ access_token, singer, feature, level }) => {
  const api = new Api(access_token);

  if (singer) // 歌手題型
    return getSingerGameData({ api, singer, level });
  // 主題題型
  // return getFeatureGameData(api, feature);
}