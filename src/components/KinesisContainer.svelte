<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	let className: string = '';
	export { className as class };

	let containerWidth = writable(0);
	let containerHeight = writable(0);
	setContext('containerWidth', containerWidth);
	setContext('containerHeight', containerHeight);
</script>

<div class="{className}">
	<div
		class="relative h-full w-full"
		bind:clientWidth={$containerWidth}
		bind:clientHeight={$containerHeight}
	>
		<slot />
	</div>
</div>
