<template>
    <v-toolbar
        color="blue darken-3"
        dark
        app
        fixed
        >
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
            <v-toolbar-side-icon @click.stop="changeStateDrawer"></v-toolbar-side-icon>
            <span class="hidden-sm-and-down">BookVue</span>
        </v-toolbar-title>
    </v-toolbar>
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
    methods: {
        changeStateDrawer() {
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
