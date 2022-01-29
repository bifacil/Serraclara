<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12">
        <div class="d-block mb-4" v-for="Discussion in Discussions" :key="Discussion.id">
          <v-card elevation="0">
            <div class="text-h5 mb-4 font-weight-bold">
              {{Discussion.title}}
            </div>
            <div v-html="Discussion.bodyHTML" class="px-1"></div>
          </v-card>
          <v-divider />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name:"Gallery",
    data () {
      return {
        Hash: null
      }
    },
    watch: {
     '$route.hash': {
        handler: function(hash){
           this.Hash = hash
        },
        deep: true,
        immediate: true
      }
    },
    computed: {
      ...mapGetters(['GET_DISCUSSIONS']),
      Discussions() {
        const discussions = this.GET_DISCUSSIONS
        const hash = this.Hash.replaceAll('#apicultura-', '')
        return this.Hash ? discussions.filter(d => d.number === Number(hash)) : discussions
      },
      Lang(){
        return this.$lang === 'es-ES' ? 'es' : 'cat'
      }
    },
    methods: {
      ...mapActions(['API_DISCUSSIONS'])
    },
    async mounted() {
      await this.API_DISCUSSIONS()
    }
  }
</script>
