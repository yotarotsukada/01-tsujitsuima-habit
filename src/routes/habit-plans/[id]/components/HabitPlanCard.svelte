<script lang="ts">
	import type { HabitPlan } from '../../../../types/habitPlan';

	export let habitPlan: HabitPlan;
</script>

<div>
	<h2>
		{habitPlan.activity}
		{habitPlan.times} times in {habitPlan.period.count}
		{habitPlan.period.unit}
	</h2>
</div>

<style>
	h2 {
		text-transform: capitalize;
	}
</style>
