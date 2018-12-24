<template>
    <v-app>
        <menu-comp></menu-comp>
        <toolbar-comp></toolbar-comp>
        <v-content>
            <v-container fuluid>
                <contents-comp></contents-comp>
            </v-container>
        </v-content>
        <v-footer app>
            <footer-comp></footer-comp>
        </v-footer>
    </v-app>
</template>

<script lang="ts">

import Vue from 'vue'
import Contents from '@/components/Contents'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import Toolbar from '@/components/Toolbar'


export default Vue.extend({
    components: {
        'contents-comp': Contents,
        'footer-comp': Footer,
        'menu-comp': Menu,
        'toolbar-comp': Toolbar,
    }
});

</script>
