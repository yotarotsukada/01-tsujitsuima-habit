<script lang="ts">
	import type { HabitPlan } from '../../../../types/habitPlan';
	import type { HabitRecord } from '../../../../types/habitRecord';
	import { formatDate } from '../../../../utils/formatDate';

	export let habitPlan: HabitPlan;
	export let habitRecord: HabitRecord;
</script>

<div>
	<span>{formatDate(habitRecord.from)} ~ {formatDate(habitRecord.to)}</span>
	<h3>{habitRecord.times} / {habitPlan.times}</h3>
	<form method="post">
		<button type="submit">I did!</button>
		<input type="hidden" value={habitRecord.id} />
	</form>
</div>
