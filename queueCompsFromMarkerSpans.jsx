function queueCompsFromMarkerSpans() {
	var comp = app.project.activeItem;
	if (comp instanceof CompItem) {
		var compMarkers = comp.markerProperty;
		var item, output;
		for (var i = 1; i <= compMarkers.numKeys; i++) {
			item = app.project.renderQueue.items.add(comp);
			item.timeSpanStart = compMarkers.keyTime(i);
			item.timeSpanDuration = compMarkers.keyValue(i).duration;
			output = item.outputModules[1];
			output.file = File("~/Desktop/" + comp.name + "_" + compMarkers.keyValue(i).comment);
		}
	}
}

queueCompsFromMarkerSpans();