<script lang="ts">
	import { formatDate } from '../../../utils/formatDate';

	const today = formatDate(new Date());
</script>

<div>
	<h2>Create a new habit plan</h2>
	<form method="post">
		<div>
			I'm going to
			<input type="text" name="activity" placeholder="do push-ups" />
			<input type="number" name="times" placeholder="80" /> times in
			<select name="period">
				<option>1 week</option>
				<option>2 weeks</option>
				<option>1 month</option>
				<option>2 month</option>
				<option>3 month</option>
			</select>
			starting from
			<input type="date" name="start-from" value={today} />
		</div>
		<button type="submit">OK</button>
	</form>
</div>

<style>
</style>
