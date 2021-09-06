function tvSeriesCalc(params) {

    let tvSeriesName = params[0];
    let seasonsCount = Number(params[1]);
    let episodesCount = Number(params[2]);
    let episodeDuration = Number(params[3]);

    let finalEpisodeExtraTime = 10;

    let time = seasonsCount * episodesCount * episodeDuration;
    time += time * 0.2;
    time += seasonsCount * finalEpisodeExtraTime;

    console.log(`Total time needed to watch the ${tvSeriesName} series is ${Math.floor(time)} minutes.`);

}

tvSeriesCalc(["Lucifer",
    "3",
    "18",
    "55"])

tvSeriesCalc(["Game of Thrones",
    "7",
    "10",
    "50"])

tvSeriesCalc(["Riverdale",
    "3",
    "21",
    "45"])
