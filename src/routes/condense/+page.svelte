<script lang="ts">
	import CrossIcon from '../../assets/CrossIcon.svelte';
	import Kinesis from '../../components/Kinesis.svelte';
	import KinesisRoot from '../../components/KinesisRoot.svelte';
	import { tweened } from 'svelte/motion';
	import { fly } from 'svelte/transition';

	let isSubmit = false;

	function makeid(length: number) {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charactersLength = characters.length;
		let counter = 0;
		while (counter < length) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
			counter += 1;
		}
		return result;
	}

	// F'ed up way of getting date change it
	let timer = tweened(
		(new Date('2023-06-23').getTime() +
			new Date('2023-06-23').getTimezoneOffset() * 60000 -
			Date.now()) /
			1000
	);
	setInterval(() => {
		if ($timer > 0) $timer--;
	}, 1000);

	$: hours = Math.floor($timer / 60 / 60);
	$: minutes = Math.floor(($timer / 60) % 60);
	$: seconds = Math.floor($timer % 60);
</script>

<KinesisRoot
	class="bg-black w-full h-screen flex flex-col items-center justify-center overflow-hidden relative"
>
	<Kinesis
		class="absolute top-0 right-0 h-full w-full"
		translate={0.005}
		transform={0}
		perspective={1000}
	>
		<img src="/images/earth.png" alt="" class="h-full" />
	</Kinesis>

	<Kinesis class="w-full" translate={0.075}>
		<p class="font-noto text-white select-none">함께하세요 | 느껴보세요</p>
	</Kinesis>

	<Kinesis class="w-full" translate={0.125}>
		<p class="text-white flex items-center justify-center text-8xl select-none font-noto">디디</p>
		<div class="flex items-center">
			<p class="text-white flex items-center justify-center text-8xl select-none font-noto">콘</p>
			<button
				on:click={() => (isSubmit = true)}
				class="font-noto bg-white/10 rounded-lg text-amber-500 h-20 mt-4 w-20"
			>
				신청하기
			</button>
		</div>
	</Kinesis>

	<Kinesis class="w-full mt-3" translate={0.075} transform={10}>
		<!-- <button
			on:click={() => (isSubmit = true)}
			class="font-noto bg-white/10 rounded-lg text-amber-500 p-1 px-8 tracking-wider m-1"
		>
			신청하세요
		</button> -->
        <p class=" text-white select-none font-light">T - {hours}:{minutes}:{seconds}</p>
	</Kinesis>

	<!-- <Kinesis class="absolute bottom-8 w-full left-0 font-lato" translate={0.025} transform={10}>
		<p class=" text-white select-none font-light">T - {hours}:{minutes}:{seconds}</p>
	</Kinesis> -->

	{#if isSubmit}
		<Kinesis class="w-full mt-3 absolute" translate={0} transform={2.5}>
			<div
				transition:fly={{ y: 200, duration: 1000 }}
				class="w-[640px] h-[480px] bg-white/10 rounded-xl backdrop-blur-xl p-8 flex flex-col justify-between"
			>
				<div class="flex flex-col gap-4">
					<div class="flex justify-between">
						<p class="text-white font-noto font-bold text-6xl flex items-center">탑승권</p>

						<div class="flex flex-col gap-1 items-end">
							<button
								on:click={() => (isSubmit = false)}
								class="bg-black/50 text-white/25 rounded-full font-noto p-1 h-10 w-10 items-center justify-center flex"
							>
								<CrossIcon />
							</button>
							<p class="text-white font-noto text-3xl">
								{makeid(3).toUpperCase()}-{makeid(3).toUpperCase()}
							</p>
						</div>
					</div>

					<div class="w-full bg-zinc-500 h-px" />

					<div class="flex items-center gap-4 w-full">
						<p class="text-white font-noto font-bold text-4xl">KNOX ID</p>
						<input
							type="text"
							class="bg-black/50 w-full rounded-md h-16 flex-1 text-4xl font-noto focus:outline-none py-2 px-4 text-white font-bold"
						/>
					</div>

					<div class="w-full flex tracking-wider gap-8 py-4 items-center">
						<div>
							<p class="text-white font-noto text-3xl flex items-center">출발지</p>
							<p class="text-white font-noto font-bold text-6xl flex items-center">인천</p>
						</div>

						<div class="flex-1 h-px bg-white" />
						<div>
							<p class="text-white font-noto text-3xl flex items-center">목적지</p>
							<p class="text-white font-noto font-bold text-6xl flex items-center">화성</p>
						</div>
					</div>
				</div>

				<button class="bg-black/50 text-amber-500 rounded-full font-noto text-xl p-1 h-11"
					>탑승권 신청하기</button
				>
			</div>
		</Kinesis>
	{/if}
</KinesisRoot>
