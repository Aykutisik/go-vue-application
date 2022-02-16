<template>
  <div class="list-background" style="border: inset  #ee7752, #e73c7e, #23a6d5, #23d5ab ; height: 1000px">
  <ListElement/>
   <ListElement/>
    <ListElement/>
     <ListElement/>
      <ListElement/>

  </div>
</template>

<script>

import ListElement from './ListElement.vue'
export default {
  name: 'Mainpage',
  components: {
      ListElement
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-background{
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    
}

</style>
