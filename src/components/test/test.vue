<template>
  <div class="hello">
    <img :src="item.url"  v-for="(item,index) in imagearr" :key="index" alt="">
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      imagearr:[
        {
          url:require('@/assets/img/1.jpg')
        },
         {
          url:require('@/assets/img/2.jpg')
        },
         {
          url:require('@/assets/img/3.jpg')
        },
         {
          url:require('@/assets/img/4.jpg')
        },
         {
          url:require('@/assets/img/5.jpg')
        },
         {
          url:require('@/assets/img/6.jpg')
        },
        {
          url:require('@/assets/img/41.jpg')
        },
         {
          url:require('@/assets/img/40.jpg')
        },
         {
          url:require('@/assets/img/39.jpg')
        },
         {
          url:require('@/assets/img/38.jpg')
        },
         {
          url:require('@/assets/img/37.jpg')
        },
         {
          url:require('@/assets/img/36.jpg')
        }
      ]
    };
  },
  mounted(){
  },
  methods:{
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.hello{
  width:100%;
  /* height:100%; */
  background: #1e4974;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
  img{
     width:16%;
     height:200px;
     margin-top:15px;
   }
}

</style>
