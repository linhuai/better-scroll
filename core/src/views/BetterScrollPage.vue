<template>
  <div class="wrapper" ref="wrapper">
    <ul class="topic-list">
      <li class="topic-item" v-for="(topic, index) in topics" :key="index">
        {{topic.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { fetchTopics } from '@/api'
export default {
  name: 'swiper-page',
  data () {
    return {
      swiperOption: {},
      topics: [],
      scroller: '',
      page: 1
    }
  },
  created () {
    this.fetchTopics()
  },
  mounted () {
  },
  methods: {
    fetchTopics () {
      const params = {
        page: this.page || 1,
        limit: 15
      }
      fetchTopics(params)
        .then(res => {
          this.topics = this.topics.concat(res.data)
          if (!this.scroller) {
            this.$nextTick(() => {
              this.scroller = new BScroll('.wrapper', {
                pullUpLoad: {
                  threshold: 50
                },
                pullDownRefresh: {
                  threshold: 50,
                  top: 30
                }
              })
              this.scroller.on('pullingDown', () => {
                console.log('pullingDown')
                this.page = 1
                this.topics = []
                this.fetchTopics()
              })
              this.scroller.on('pullingUp', () => {
                console.log('pullingUp')
                this.page++
                this.fetchTopics()
              })
            })
          } else {
            this.scroller.refresh()
            console.log(this.page)
            if (this.page === 1) {
              this.scroller.finishPullDown()
            } else {
              this.scroller.finishPullUp()
            }
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  .wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .topic-list {

  }
  .topic-item {
    padding: .4rem 0;
    margin: .4rem 0;
  }
</style>
