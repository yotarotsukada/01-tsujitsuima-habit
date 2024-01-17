import type { HabitPlanPeriod } from '../types/habitPlan';
import type { HabitRecord } from '../types/habitRecord';
import { getHabitPlanById } from './habitPlan';

const habitRecords = Array.from<HabitRecord>([]);

export const getOrCreateHabitRecordByPlanId = (planId: string) => {
	const latestHabitRecord = habitRecords
		.filter((r) => r.planId === planId)
		.toSorted((a, b) => b.from.getTime() - a.from.getTime())
		.at(0);

	const addRecord = (planId: string) => {
		const habitPlan = getHabitPlanById(planId);
		if (!habitPlan) {
			throw new Error(`'id == ${planId}' のハビットプランは存在しません`);
		}
		const id = Math.random().toString();
		const from = new Date();
		const to = addPeriod(new Date(from), habitPlan.period);
		const newRecord: HabitRecord = {
			id,
			planId,
			from,
			to,
			times: 0
		};
		habitRecords.push(newRecord);
		return newRecord;
	};

	const today = new Date();
	return !!latestHabitRecord && latestHabitRecord.from <= today && today < latestHabitRecord.to
		? latestHabitRecord
		: addRecord(planId);
};

export const getHabitRecordById = (id: string) => {
	return habitRecords.find((r) => r.id === id);
};

export const addToHabitRecord = (id: string) => {
	const recordIndex = habitRecords.findIndex((r) => r.id === id);
	habitRecords.at(recordIndex)!.times++;
	return habitRecords.at(recordIndex)!;
};

const addPeriod = (_date: Date, period: HabitPlanPeriod) => {
	const date = new Date(_date);
	switch (period.unit) {
		case 'Month':
			date.setMonth(date.getMonth() + period.count);
			break;
		case 'Week':
			date.setDate(date.getDate() + period.count * 7);
			break;
		default:
			break;
	}
	return date;
};
