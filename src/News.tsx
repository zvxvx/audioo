const News = () => {
  return (
    <div className="bg-slate-950/50">
      <p className="text-2xl uppercase tracking-wide font-bold">News</p>
      <article className="border-t border-purple-300/50">
        <p className="italic text-lg">{new Date(2023, 11, 9).toDateString()}</p>
        <p>Well it's been a long time coming and it's finally here. Don't know how many visitors there's been in the past, but the site should be a lot faster and more functional than ever before. It's also been a long time since any new playlists have been added, but since I've rebuilt the site, I can do a lot more with a lot less work, so be on the look out for that.</p>
        <p>Also, if you're interested in contributing sounds, please feel free to do so through the google form. However, there's no guarantee they'll be added. -g</p>
      </article>
    </div>
  )
}

export default News