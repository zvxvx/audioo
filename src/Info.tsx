const News = () => {
  return (
    <div className="pb-5 px-5">
      <article>
        <hr className="border border-slate-300/30 mb-2" />
        <p className="text-2xl uppercase tracking-wide font-bold">About</p>
        Audioo is a simple interactive web app that allows users to mix up to six sounds per playlist. Each playlist is curated to promote focus, relaxation, and sleep. If you like what you hear and wish to contribute to future playlists, please consider contributing by using the <a href="https://forms.gle/aSszBjpU5veCVufDA" target="_blank" className="font-bold underline">audio submission form</a>.
      </article>
      <hr className="border border-slate-300/30 my-2" />
      <p className="text-2xl uppercase tracking-wide font-bold">Updates</p>
      <article>
        <div><span className="italic text-lg">{new Date(2023, 11, 10).toDateString()}</span> | <span className="font-bold text-lg">The Refactor</span></div>
        <p className="mt-1">It's been a long time coming, but the redesign is finally here. The site should be a lot faster and more functional than ever before. It's also been a long time since any new playlists have been added, but now I can do just that with a lot less overhead involved. Once again, thank you for your patience. Enjoy.</p>
      </article>
    </div>
  )
}

export default News