const News = () => {
  return (
    <div className="pb-5 px-5">
      <hr className="border border-slate-300/50 mb-2"/>
      <p className="text-2xl uppercase tracking-wide font-bold">News</p>
      <article>
        <p className="italic text-lg">{new Date(2023, 11, 10).toDateString()}</p>
        <p className="mt-1">Well it's been a long time coming and it's finally here. Don't know how many visitors there's been in the past, but the site should be a lot faster and more functional than ever before. It's also been a long time since any new playlists have been added, but since I've rebuilt the site, I can do a lot more with a lot less work, so be on the look out for that.</p>
        <hr className="border border-slate-300/50 my-2"/>
        <p className="text-2xl uppercase tracking-wide font-bold">Audio Submission</p>
        <p>If you're interested in contributing sounds, <a href="https://forms.gle/aSszBjpU5veCVufDA" target="_blank" className="font-bold underline">submit your audio</a>.</p>
      </article>
    </div>
  )
}

export default News