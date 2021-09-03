function changeNureau(params) {

    let bitcoinsCount = Number(params[0]);
    let chineseYuanCount = Number(params[1]);
    let commission = Number(params[2]);

    let bitcoinToBGN = 1168;
    let chineseYuanToUSD = 0.15;
    let usdToBGN = 1.76;
    let eurToBGN = 1.95;

    let totalYuans = chineseYuanCount * chineseYuanToUSD * usdToBGN;

    let money = (bitcoinsCount * bitcoinToBGN + totalYuans) / eurToBGN;
    money -= money * (commission / 100)

    console.log(money.toFixed(2));
}

changeNureau(["1", "5", "5"])
changeNureau(["20", "5678", "2.4"])
changeNureau(["7", "50200.12", "3"])
