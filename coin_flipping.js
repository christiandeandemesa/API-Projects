function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
            attempts++;
            let result = tossCoin();
            if (result === "heads") {
                headsCount++;
            }
            else {
                headsCount = 0;
            }
            if (headsCount === 5) {
                resolve(`It took ${attempts} tries to flip five "heads"!`);
            }
            if (attempts > 100) {
                reject('You did not flip five "heads" in 100 attempts...')
            }
        }
    });
}

fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
