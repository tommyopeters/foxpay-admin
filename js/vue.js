let App = new Vue({
  el: "#wrapper",
  data: {},
  computed: {},
  // methods: {
  //   prevPage: function () {
  //     this.page--
  //   },
  //   nextPage: function () {
  //     this.page++
  //   },
  //   genderFormat: function (gender) {
  //     if (gender.toLowerCase() == "male") {
  //       return "M"
  //     } else if (gender.toLowerCase() == "female") {
  //       return "F"
  //     }
  //     return "-"
  //   },
  // },
  created() {
    // axios.get("https://api.enye.tech/v1/challenge/records").then((res) => {
    //   console.log(res.data.records.profiles[0])
    //   let group = []
    //   this.profiles = res.data.records.profiles
    //   this.profiles.forEach((profile, index) => {
    //     group.push(profile)
    //     if (!((index + 1) % 20) || this.profiles.length == index + 1) {
    //       console.log(index)
    //       this.profileGroups.push(group)
    //       group = []
    //     }
    //   })
    // })
  },
})
