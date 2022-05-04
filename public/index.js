const app = {
    data() {
      return {
        form: {
          tweetText: "",
        },
        maxTweetCharacter:140,
        tweets: [],
      };
    },
    computed: {
      remainingTweetCharacter(){
        return this.maxTweetCharacter - this.form.tweetText.length;
      },
      reversedTweets() {
        return this.tweets.slice().reverse();
      },
    },
    methods: {
      tweet(e){
        //shift+enterで改行しないようにイベントキャンセル
        e.preventDefault();

        if (this.form.tweetText.length == 0) return;

        this.tweets.push({
          authorName: "高田 仁",
          authorId: "@takada.jin",
          tweetedAt: this.now(),
          tweetText: this.form.tweetText,
        });
        this.form.tweetText = "";
      },
      now() {
        const now = new Date();

        const year = now.getFullYear();
        const month = now.getMonth()+1;
        const date = now.getDate();
        const hour = now.getHours();
        const min = now.getMinutes();
        const sec = now.getSeconds();
  
        return `${year}/${month}/${date} ${hour}:${min}:${sec}`;
      }
    }
  }
  
  Vue.createApp(app).mount('#app')