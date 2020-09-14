<template>
  <Container :options="{ width: 1680, height: 1050 }">
    <div class="disvoard">
       <sideBar class="side"></sideBar>
        <router-view/>
    </div>

  </Container>
</template>

<script>
// import _ from 'lodash';
import { Container, test, sideBar } from '@/components'

export default {
  name: 'index',
  props: ['options'],
  components: {
    Container,
    test,
    sideBar
  },
  data() {
    return {}
  },

  mounted() {},
  methods: {}
}
</script>

<style>
#screen-container {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transform-origin: left top;
  z-index: 999;
}
.side{
   position:fixed;
  left:20px;
  top:20px;
}
.disvoard{
  display:flex;
}
</style>
