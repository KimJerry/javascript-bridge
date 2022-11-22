const MissionUtils = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class App {
    async play() {
        MissionUtils.Console.print('다리 건너기 게임을 시작합니다.\n');
        const bridgeLength = await InputView.readBridgeSize();

        const bridge = BridgeMaker.makeBridge(
            bridgeLength,
            BridgeRandomNumberGenerator.generate
        );

        const bridgeGame = new BridgeGame(bridge);
        for (let i = 0; i < bridgeLength; i++) {
            MissionUtils.Console.print(bridge);
            const choosen = await InputView.readMoving();

            const crossSuccess = bridgeGame.move(choosen);
            if (!crossSuccess) {
                const retryOrQuit = await InputView.readGameCommand();
                if (retryOrQuit === 'Q') {
                    break;
                }
                bridgeGame.retry();
                i = -1;
            }
        }

        MissionUtils.Console.close();
    }
}

const app = new App();
app.play();

module.exports = App;
