<template>
  <div class="banner">
    <v-container class="d-flex justify-start content">
      <div class="text-center black-sm-text subtitle">
        <div v-if="isSpanishLang">
          <div class="text-sm-h3 font-weight-bold">Retiramos tu enjambre</div>
          <div class="text-sm-h3 font-weight-bold">de abejas hoy mismo</div>  
        </div>
        <div v-else>
          <div class="text-sm-h3 font-weight-bold">Retirem el teu eixam</div>
          <div class="text-sm-h3 font-weight-bold">d'abelles avui mateix</div>  
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  props: ['lang'],
  computed: {
    isSpanishLang(){
      return this.lang === ''
    }
  }
};
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 300px;
  margin-top: 90px; 
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("/img/banner.png");
  background-size: auto 100%;
  background-position-x: center;
  background-color: rgb(34, 110, 188);
  margin-bottom:-6rem;
  position: relative;
  .content{
    position: absolute;
    height:60%;
    max-width: 940px;
    padding: 2rem 2.5rem;
    top:0px;
    bottom:0px;
    left: 0px;
    right: 0px;
    margin:auto;
    margin-top:auto;
    margin-bottom:auto;
    display: table-cell;
    vertical-align: middle;
    background-color:transparent;
    .subtitle{
      margin-top: 5rem;
    }
  }
}
@media (max-width: 900px) {
  .banner {
    height: 250px;
    margin-top: 70px; 
    .content{
      margin-left: -0.6rem;
      .subtitle{
        margin-top: 3rem;
      }
    }
  }
}
@media (max-width: 500px) {
  .banner {
    height: 100px;
    .content{
      margin-left: -0.9rem;
      .subtitle{
        margin-top: -1rem;
      }
    }
  }
}
</style>