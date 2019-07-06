<template>
  <div>
    <Headeritem/>
    <router-view/>
    <br/>
    <Footeritem/>
  </div>
</template>

<script>
import Headeritem from './components/general/Headeritem'
import Footeritem from './components/general/Footeritem'

export default{
  components: {
    Headeritem,
    Footeritem
  }
}

</script>
