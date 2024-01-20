<script lang="ts">
	import type { HabitPlan } from '../../../types/habitPlan';

	export let habitPlans: HabitPlan[];
</script>

<div>
	<h2>Tracking habit plans</h2>
	<ul>
		{#each habitPlans as habitPlan}
			<li>
				<a href={`/habit-plans/${habitPlan.id}`}>
					{habitPlan.activity}
					{habitPlan.times} times per {habitPlan.period.count}
					{habitPlan.period.unit}
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	div {
		padding: 20px;
		background-color: var(--background-color);
		color: var(--text-color);
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		border-bottom: 1px solid var(--border-color);
		padding: 15px 0;
	}

	a {
		text-transform: capitalize;
	}
</style>
