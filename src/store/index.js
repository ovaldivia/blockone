import Vue from 'vue';
import Vuex from 'vuex';

import { blocks } from './blocks.module';
import { alert } from './alert.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        blocks,
        alert
    }
});
