function lyricget() {
	document.addEventListener("click",function(event) {
		var a=document.getElementById("lyric_shower")
		a.src="lyric/"+event.target.innerHTML+".txt"
	})
}
