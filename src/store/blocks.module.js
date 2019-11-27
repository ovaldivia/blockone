import {EosjsService} from '../includes';


const state = {
    all: {}
};


const getBlockHelper = ({ dispatch, commit },service, blockId, index, size)=>{

    if (index >= size){
        commit('getListSuccess');

    }else{
        service.getBlockById(blockId).then(
            data => {
                commit('getListAddRequest', {index, data});
                index++;

                blockId = data.previous;

                getBlockHelper({ dispatch, commit },service, blockId, index, size);
            },
            error => {
                commit('getListFailure', error);
                dispatch('alert/error', error, { root: true });
            }
        );
    }
}

const actions = {
    getList({ dispatch, commit }) {
        const service = new EosjsService();

        const size = 10;

        if (size < 1) {
            const error = 'List size must be greater or equal to 1';
            commit('getListFailure', error);
            dispatch('alert/error', error, { root: true });
        }

        service.getInfo()
            .then(
                head => {

                    let index = 0;

                    let blockId = head.head_block_id;

                    console.log('head',blockId);

                    commit('getListRequest', size);

                    getBlockHelper({ dispatch, commit },service, blockId, index, size);

                },
                error => {
                    commit('getListFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },

};

const mutations = {
    getListRequest(state, size) {
        const list = new Array(size);
        state.all = { loading: true, list };
    },
    getListSuccess(state) {
        state.all = { ...state.all };
        state.all.loading = false;
    },
    getListAddRequest(state, {index, data}) {
        state.all = { ...state.all };
        state.all.list[index] = data;

        console.log('list:',state.all.list);
    },
    getListFailure(state, error) {
        state.all = { error };
    },
};

export const blocks = {
    namespaced: true,
    state,
    actions,
    mutations
};

