<script lang="ts">
	import { formatDate } from '../../../utils/formatDate';

	const today = formatDate(new Date());
</script>

<div class="habit-plan-form">
	<h2>Create a new habit plan</h2>
	<form method="post">
		<div class="form-group">
			<label for="activity">I'm going to</label>
			<input type="text" id="activity" name="activity" placeholder="do push-ups" />
		</div>
		<div class="form-group">
			<label for="times">for</label>
			<span>
				<input type="number" id="times" name="times" placeholder="80" />
				times
			</span>
		</div>
		<div class="form-group">
			<label for="period">in</label>
			<select id="period" name="period">
				<option>1 week</option>
				<option>2 weeks</option>
				<option>1 month</option>
				<option>2 month</option>
				<option>3 month</option>
			</select>
		</div>
		<div class="form-group">
			<label for="start-from">starting from</label>
			<input type="date" id="start-from" name="start-from" value={today} />
		</div>
		<button type="submit">OK</button>
	</form>
</div>

<style>
	.habit-plan-form {
		display: flex;
		flex-direction: column;
		margin: auto;
		padding: 20px;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	label {
		font-weight: bold;
	}

	input,
	select {
		padding: 8px;
		font-size: 16px;
	}
</style>
