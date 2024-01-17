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
