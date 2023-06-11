<script lang="ts">
    import {rootWidth, rootHeight, x, y} from "./KinesisStore"
	
    let className : string = "";
    export {className as class}

	let clientWidth: number, clientHeight: number;

	$: {
		rootWidth.update(() => clientWidth);
		rootHeight.update(() => clientHeight);
	}
</script>

<div
	class="{className} relative"
	bind:clientWidth
	bind:clientHeight
	on:mousemove={(e) => {
        x.update(() => e.clientX - clientWidth / 2)
        y.update(() => e.clientY - clientHeight / 2)
	}}
>
	<slot />
</div>
