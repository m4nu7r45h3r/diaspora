app.views.NewStream = app.views.InfScroll.extend({
  initialize: function(){
    this.stream = this.model
    this.collection = this.stream.items
    this.postClass = app.views.Post.StreamFrame
    this.setupInfiniteScroll()
  }
});

app.pages.Stream = app.views.Base.extend({
  templateName : "stream",

  subviews : {
    "#stream-content" : "streamView",
    "#stream-interactions" : "interactionsView"
  },

  initialize : function(){
    this.stream = this.model = new app.models.Stream()
    this.stream.preloadOrFetch();

    this.streamView = new app.views.NewStream({ model : this.stream })
    var interactions = this.interactionsView = new app.views.StreamInteractions()

    this.stream.on("frame:interacted", function(post){
      interactions.setInteractions(post)
    })
  }
});
