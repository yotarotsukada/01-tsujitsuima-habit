<script lang="ts">
	import HabitPlanCard from './components/HabitPlanCard.svelte';
	import ProgressCard from './components/ProgressCard.svelte';

	export let data;
</script>

<svelte:head>
	<title>Tsujitsuma Habit | Review</title>
</svelte:head>

<section>
	<div class="container">
		{#if data.habitPlan && data.habitRecord}
			<HabitPlanCard habitPlan={data.habitPlan} />
			<ProgressCard habitPlan={data.habitPlan} habitRecord={data.habitRecord} />
		{:else}
			<h2>Oops, plan not found!</h2>
		{/if}
	</div>
	<a href="/habit-plans">Go back to habit plans list</a>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		height: 80vh;
	}

	.container {
		flex: 1;
	}
</style>
