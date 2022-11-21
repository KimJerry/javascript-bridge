const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const MissionUtils = require('@woowacourse/mission-utils');

class App {
    async play() {
        MissionUtils.Console.print('다리 건너기 게임을 시작합니다.\n');
        const result = await InputView.readBridgeSize();
        MissionUtils.Console.print(result);
        MissionUtils.Console.close();
    }
}

const app = new App();
app.play();

module.exports = App;
