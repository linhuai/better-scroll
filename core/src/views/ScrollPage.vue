<template>
  <div class="wrapper">
    <div class="container">
      <ul>
        <li v-for="(item, index) in list" :key="index">{{item}}</li>
      </ul>
      <div class="pullingUpLabel">加载更多</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Scroll from '@/lib/scroll.js'
export default {
  name: 'scroll',
  data () {
    return {
      scroll: '',
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    }
  },
  computed: {
    ...mapActions(['setLoading'])
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new Scroll('.wrapper', {
      })
      this.scroll.on('pullingUp', () => {
        console.log('handler pulling up')
        setTimeout(() => {
          this.list = this.list.concat(this.list)
          this.scroll.refresh()
        }, 3000)
      })
    })
  },
  methods: {

  }
}
</script>

<style scoped>
  ul, li, div {
    padding: 0;
    margin: 0;
  }
  ul {
    list-style: none;
    font-size: .36rem;
  }
  li {
    padding: .2rem;
    border-bottom: 1px solid #eee;
  }
  .wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .pullingUpLabel {
    height: .3rem;
    padding: .3rem;
    line-height: .3rem;
    text-align: center;
    border: 1px solid #eee;
    font-size: .32rem;
  }
</style>
