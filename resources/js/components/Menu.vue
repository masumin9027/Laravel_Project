<template>
    <v-navigation-drawer
        v-model="drawerChild"
        fixed
        app>
        <v-list dense>
            <template v-for="item in items">
                <v-list-group
                    :prepend-icon="item.icon">
                    <v-list-tile slot="activator">
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ item.text }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>


<script lang="ts">

import Vue from 'vue'
import { UpdateStateInputType } from '@/lib/common/CommonTypes'
import { StateType } from  '@/lib/common/StateConstants'

export default Vue.extend({
    computed: {
        drawer: function() {
            return  this.$store.state.menuItemState.drawer;
        }
    },
    data: () => ({
        drawerChild: null,
        items: [
            { icon: 'library_books', text: 'BookView' }
        ]
    }),
    watch: {
        drawer(value) {
            this.drawerChild = value;
        },
        drawerChild(value) {
            if (value === this.$store.state.menuItemState.drawer) {
                return;
            }
            let updateInput: UpdateStateInputType = {
                stateType: StateType.MENU_STATE,
                updateValue: this.$store.state.menuItemState
            }
            updateInput.updateValue.drawer = !updateInput.updateValue.drawer;
            this.$store.dispatch('updateState', updateInput);
        }
    }
});

</script>
