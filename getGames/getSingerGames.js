const getFourRandomNumbers = length => {
  const selectedNum = [];
  while (selectedNum.length < 4) {
    const randomNum = Math.floor(Math.random() * (length - 1));
    if (!selectedNum.includes(randomNum)) selectedNum.push(randomNum);
  }
  return selectedNum;
};

const getAnswerNum = () => Math.floor(Math.random() * (4 - 1));

export default async ({ api, singer }) => {
  const games = await Promise.all(
    [0, 1, 2, 3, 4].map(async id => {
      // Get tracks by singer name
      const limit = 50;
      const offest = id * 50;
      const response = await api.searchFetcher
        .setSearchCriteria(singer, "track")
        .fetchSearchResult(limit, offest);

      const tracks = response.data.tracks.data;
      const total = response.data.summary.total;

      const randomNums = getFourRandomNumbers(tracks.length);

      const randomTracks = randomNums.map(num => ({
        id: tracks[num].id,
        name: tracks[num].name
      }));
      const answerNum = getAnswerNum();

      return {
        title: `What is this song?`,
        type: "WHAT_IS_THIS_SONG",
        options: randomTracks,
        answer: randomTracks[answerNum].id
      };
    })
  );
  console.log("===>", games);
  return games;
};
