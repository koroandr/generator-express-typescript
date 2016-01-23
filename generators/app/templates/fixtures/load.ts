let fixtures = require('pow-mongodb-fixtures').connect('test');

import {data} from "./data";

export function loadData(cb: any) {
    fixtures.clearAndLoad({
        test: data
    }, cb);
}
