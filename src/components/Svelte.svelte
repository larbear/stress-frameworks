<script>
	export let longList = true;
	let lots = [...Array(30000).keys()];

	const token = () => Math.random().toString(36).substring(2, 10);
	let count = 0;
	let endAt = null;

	const go = async () => {
		lots[5] = token();
		lots = lots;
		count++;

		if (Date.now() < endAt) {
			setTimeout(go);
		}
	};

	const start = () => {
		endAt = Date.now() + 10000;
		count = 0;
		setTimeout(go);
	}
</script>

<h1>
	Svelte ({count})
</h1>

<button style="display:block; margin-bottom: 1em" on:click={start}>
	Run!
</button>

{#each lots as i}
	<div key={i}>{i}</div>
{/each}