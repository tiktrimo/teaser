<script lang="ts">
	import KinesisContainer from '../components/KinesisContainer.svelte';
	import KinesisContent from '../components/KinesisContent.svelte';

	let className: string = '';
	export { className as class };

	export let translate = 0.1;
	export let transform = 25;
	export let perspective = 500;
</script>

<KinesisContainer class={className}>
	<KinesisContent {translate} {transform} {perspective}>
		<slot />
	</KinesisContent>
</KinesisContainer>
