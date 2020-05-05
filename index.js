const awaitWhile = async (method, jump, conditional, key) => {
    let finished = false;
    let loop = async () => {
        return new Promise(async (resolve, reject) => {
            let inner = async () => {
                if (!finished) {
                    await method(conditional, key, async (c, k) => {
                        if (c == k) {
                            finished = true;
                            return resolve();
                        } else {
                            conditional = await jump(conditional)
                            return inner();
                        }
                    });
                }
            }
            await inner();
        })
    }
    await loop();
}


exports.while = awaitWhile;