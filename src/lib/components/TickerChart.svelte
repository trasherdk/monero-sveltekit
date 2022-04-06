<script context="module">
</script>

<script>
	/* Calculate the inner width of the drawing area */
	const chartEL = document.getElementById('chart');
	const chartWidth = chartEL.clientWidth;
	const borderWidth = parseInt(chartEL.style.borderWidth.valueOf()) * 2;
	const paddingWidth =
		parseInt(window.getComputedStyle(chartEL, null).getPropertyValue('padding-left')) * 2;
	const svgWidth = chartWidth - (borderWidth + paddingWidth);
</script>
