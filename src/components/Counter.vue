<template>
  <div class="counter">
    <section class="text-3xl flex justify-content-center flex-column mx-auto text-center">
      Countdown to new products
    </section>
      <section class="flex text-6xl justify-content-center">
        <div class="days mr-2 position-relative">
          {{displayDays}}
        <div class="label text-sm position-absolute bottom-zero">days</div>
        </div>
        <span>:</span>
        <div class="hours mx-2 position-relative">
          {{displayHours}}
          <div class="label text-sm position-absolute border-bottom-0">hours</div>
        </div>
        <span>:</span>
        <div class="minutes mx-2 position-relative">
          {{displayMinutes}}
          <div class="label text-sm position-absolute border-bottom-0">minutes</div>
        </div>
        <span>:</span>
        <div class="seconds ml-2 position-relative">
          <div>{{displaySeconds}}</div>
          <div class="label text-sm position-absolute border-bottom-0">seconds</div>
        </div>
      </section>
  </div>
</template>

<script>
export default {
  name: "counter",
  props: {
    msg: String
  },

  data() {
    return {

      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0

    }
  },
  computed: {
    _seconds() {
       return 1000
    },
    _minutes() {
      return this._seconds * 60
    },
    _hours() {
      return this._minutes * 60
    },
    _days() {
      return this._hours * 24
    }
  },
  mounted() {
    this.showRemaining();
  },
  methods: {
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2020, 11,24, 10,10,10,10);
        const distance = end.getTime() - now.getTime();
        if(distance < 0) {
          clearInterval(timer);
          return
        }
        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);
        this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
        this.displayHours = hours < 10 ? "0" + hours : hours;
        this.displayDays = days < 10 ? "0" + days : days;

      }, 1000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.seconds {
  max-width: 60px;
}
</style>
