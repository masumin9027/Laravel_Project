import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { StateType } from '@/lib/common/StateConstants'
import { CommonConstants } from '@/lib/common/CommonConstants'
import { UpdateStateInputType, RootState } from '@/lib/common/CommonTypes'

Vue.use(Vuex);

const ItemUpdateStateList = [StateType.MENU_STATE];

export default new Vuex.Store<RootState>({
    state: {
        menuItemState : { drawer: CommonConstants.TRUE }
    },
    mutations: {
        updateItemState(state: RootState, updateInput: UpdateStateInputType) {
            if (updateInput.stateType === StateType.MENU_STATE) {
                state.menuItemState = updateInput.updateValue;
            }
        }
    },
    actions: {
        updateState(context, updateInput: UpdateStateInputType) {
            if (ItemUpdateStateList.indexOf(updateInput.stateType) > -1) {
                context.commit('updateItemState', updateInput);
            }
        }
    }

} as StoreOptions<RootState>);
