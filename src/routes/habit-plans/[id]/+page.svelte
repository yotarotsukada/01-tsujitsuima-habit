<script lang="ts">
	import HabitPlanCard from './components/HabitPlanCard.svelte';
	import ProgressCard from './components/ProgressCard.svelte';

	export let data;
</script>

<svelte:head>
	<title>Tsujitsuma Habit | Review</title>
</svelte:head>

<main>
	{#if data.habitPlan && data.habitRecord}
		<HabitPlanCard habitPlan={data.habitPlan} />
		<ProgressCard habitPlan={data.habitPlan} habitRecord={data.habitRecord} />
	{:else}
		<h2>Oops, plan not found!</h2>
	{/if}
	<a href="/habit-plans">Go back to habit plans list</a>
</main>
