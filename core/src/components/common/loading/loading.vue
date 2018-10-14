<template>
  <div class="loading-wrap">
    <div class="loading-layer"></div>
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style scoped>
  .loading-wrap {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
  }
  .loading-layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2.4rem;
    height: 2.4rem;
    border-radius: .2rem;
    background: rgba(0, 0, 0, .6);
  }
  .loading > span {
    position: absolute;
    display: block;
    width: .36rem;
    height: .36rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, .7);
    opacity: .2;
    animation: load-animate 1.04s ease infinite;
  }
  .loading > span:nth-child(1) {
    left: .2rem;
    top: 50%;
    transform: translateY(-50%);
    animation-delay: .13s;
  }
  .loading > span:nth-child(2) {
    left: .48rem;
    top: .48rem;
    animation-delay: .26s;
  }
  .loading > span:nth-child(3) {
    top: .2rem;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: .39s
  }
  .loading > span:nth-child(4) {
    top: .48rem;
    right: .48rem;
    animation-delay: .52s;
  }
  .loading > span:nth-child(5) {
    right: .2rem;
    top: 50%;
    transform: translateY(-50%);
    animation-delay: .65rem;
  }
  .loading > span:nth-child(6) {
    right: .48rem;
    bottom: .48rem;
    animation-delay: .78s;
  }
  .loading > span:nth-child(7) {
    bottom: .2rem;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: .91s;
  }
  .loading > span:nth-child(8) {
    bottom: .48rem;
    left: .48rem;
    animation-delay: 1.04s;
  }
  @keyframes load-animate {
    from {
      opacity: .2;
    }
    to {
      opacity: 1;
    }
  }
</style>
