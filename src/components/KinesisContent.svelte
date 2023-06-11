<script lang="ts">
	import { getContext } from 'svelte';
	import {rootWidth, rootHeight, x, y } from './KinesisStore';
	import type { Writable } from 'svelte/store';

	export let translate = 0.1;
	export let transform = 25;
	export let perspective = 500;

	let containerWdith: Writable<number> = getContext('containerWidth');
	let containerHeight: Writable<number> = getContext('containerHeight');

	let planeWidth: number, planeHeight: number;
</script>

<div class="relative" style="height: {planeHeight}px;">
	<div
		class="absolute"
		style="top: {($containerHeight - planeHeight) / 2 + $y * translate}px; 
                left: {($containerWdith - planeWidth) / 2 + $x * translate}px;
				transform: perspective({perspective}px) rotateY({(transform * $x) / ($rootWidth / 2)}deg) rotateX({-(transform * $y) / ($rootHeight / 2)}deg)"
		bind:clientWidth={planeWidth}
		bind:clientHeight={planeHeight}
	>
		<slot />
	</div>
</div>
