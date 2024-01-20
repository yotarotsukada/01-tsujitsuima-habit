<script lang="ts">
	import type { HabitPlan } from '../../../../types/habitPlan';
	import type { HabitRecord } from '../../../../types/habitRecord';
	import { formatDate } from '../../../../utils/formatDate';

	export let habitPlan: HabitPlan;
	export let habitRecord: HabitRecord;
</script>

<div class="container">
	<span>{formatDate(habitRecord.from)} ~ {formatDate(habitRecord.to)}</span>
	<div class="record-group">
		<h3>{habitRecord.times} / {habitPlan.times}</h3>
		<form method="post">
			<button type="submit">I did the habit!</button>
			<input type="hidden" name="id" value={habitRecord.id} />
		</form>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.record-group {
		display: flex;
		align-items: center;
		gap: 20px;
	}
</style>
