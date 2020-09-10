<template>
  <Container :options="{ width: 1680, height: 1050 }">
    <test></test>
  </Container>
</template>

<script>
// import _ from 'lodash';
import { Container, test } from '@/components'

export default {
  name: 'index',
  props: ['options'],
  components: {
    Container,
    test
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
</style>
