<script lang="ts">
	import HabitPlanForm from './components/HabitPlanForm.svelte';
	import HabitPlanList from './components/HabitPlanList.svelte';

	export let data;
</script>

<svelte:head>
	<title>Tsujitsuma Habit | Plans List</title>
</svelte:head>

<main>
	<HabitPlanForm />
	<HabitPlanList habitPlans={data.habitPlans} />
</main>

<style></style>
